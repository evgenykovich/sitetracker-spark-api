import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHash } from 'crypto';

interface CacheEntry<T> {
  data: T;
  expiresAt: number;
  lastAccessed: number;
}

interface CacheStats {
  hits: number;
  misses: number;
  size: number;
}

@Injectable()
export class CacheService implements OnModuleInit {
  private readonly logger = new Logger(CacheService.name);
  private readonly store = new Map<string, CacheEntry<any>>();
  private readonly CLEANUP_INTERVAL = 5 * 60 * 1000; // 5 minutes
  private readonly DEFAULT_TTL = 24 * 60 * 60 * 1000; // 24 hours
  private readonly stats: CacheStats = {
    hits: 0,
    misses: 0,
    size: 0,
  };

  constructor(private configService: ConfigService) {}

  onModuleInit() {
    // Start cleanup interval
    setInterval(() => this.cleanup(), this.CLEANUP_INTERVAL);
    this.logger.log('Cache service initialized');
  }

  async set<T>(key: string, data: T, ttlMs?: number): Promise<void> {
    const expiresAt = Date.now() + (ttlMs ?? this.DEFAULT_TTL);
    this.store.set(key, {
      data,
      expiresAt,
      lastAccessed: Date.now(),
    });
    this.stats.size = this.store.size;
  }

  async get<T>(key: string): Promise<T | null> {
    const entry = this.store.get(key);

    if (!entry) {
      this.stats.misses++;
      return null;
    }

    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      this.stats.misses++;
      this.stats.size = this.store.size;
      return null;
    }

    // Update last accessed time
    entry.lastAccessed = Date.now();
    this.stats.hits++;
    return entry.data as T;
  }

  async getOrSet<T>(
    key: string,
    fetchFn: () => Promise<T>,
    ttlMs?: number,
  ): Promise<T> {
    const cached = await this.get<T>(key);
    if (cached !== null) {
      return cached;
    }

    const data = await fetchFn();
    await this.set(key, data, ttlMs);
    return data;
  }

  generateKey(...args: any[]): string {
    // Create a deterministic key from the input arguments
    const stringified = JSON.stringify(args, (_, value) =>
      typeof value === 'object' && value !== null
        ? Object.fromEntries(
            Object.entries(value).sort(([a], [b]) => a.localeCompare(b)),
          )
        : value,
    );
    return createHash('sha256').update(stringified).digest('hex');
  }

  private cleanup() {
    const now = Date.now();
    let cleaned = 0;

    for (const [key, entry] of this.store.entries()) {
      if (now > entry.expiresAt) {
        this.store.delete(key);
        cleaned++;
      }
    }

    if (cleaned > 0) {
      this.logger.debug(`Cleaned up ${cleaned} expired cache entries`);
      this.stats.size = this.store.size;
    }
  }

  // Monitoring and management methods
  getStats(): CacheStats {
    return { ...this.stats };
  }

  getStoreSize(): number {
    return this.store.size;
  }

  clear(): void {
    this.store.clear();
    this.stats.size = 0;
    this.logger.log('Cache cleared');
  }

  delete(key: string): boolean {
    const deleted = this.store.delete(key);
    if (deleted) {
      this.stats.size = this.store.size;
    }
    return deleted;
  }
}
