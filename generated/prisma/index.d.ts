
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SalesforceConfig
 * 
 */
export type SalesforceConfig = $Result.DefaultSelection<Prisma.$SalesforceConfigPayload>
/**
 * Model Form
 * 
 */
export type Form = $Result.DefaultSelection<Prisma.$FormPayload>
/**
 * Model FormItem
 * 
 */
export type FormItem = $Result.DefaultSelection<Prisma.$FormItemPayload>
/**
 * Model FormResponse
 * 
 */
export type FormResponse = $Result.DefaultSelection<Prisma.$FormResponsePayload>
/**
 * Model FormItemResponse
 * 
 */
export type FormItemResponse = $Result.DefaultSelection<Prisma.$FormItemResponsePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  CONTRACTOR: 'CONTRACTOR'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const FormStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type FormStatus = (typeof FormStatus)[keyof typeof FormStatus]


export const FormItemType: {
  TEXT: 'TEXT',
  TEXTAREA: 'TEXTAREA',
  NUMBER: 'NUMBER',
  DATE: 'DATE',
  SELECT: 'SELECT',
  MULTISELECT: 'MULTISELECT',
  RADIO: 'RADIO',
  CHECKBOX: 'CHECKBOX',
  FILE: 'FILE'
};

export type FormItemType = (typeof FormItemType)[keyof typeof FormItemType]


export const ResponseStatus: {
  PENDING: 'PENDING',
  SUBMITTED: 'SUBMITTED',
  SYNCED: 'SYNCED',
  ERROR: 'ERROR'
};

export type ResponseStatus = (typeof ResponseStatus)[keyof typeof ResponseStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type FormStatus = $Enums.FormStatus

export const FormStatus: typeof $Enums.FormStatus

export type FormItemType = $Enums.FormItemType

export const FormItemType: typeof $Enums.FormItemType

export type ResponseStatus = $Enums.ResponseStatus

export const ResponseStatus: typeof $Enums.ResponseStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.salesforceConfig`: Exposes CRUD operations for the **SalesforceConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalesforceConfigs
    * const salesforceConfigs = await prisma.salesforceConfig.findMany()
    * ```
    */
  get salesforceConfig(): Prisma.SalesforceConfigDelegate<ExtArgs>;

  /**
   * `prisma.form`: Exposes CRUD operations for the **Form** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.form.findMany()
    * ```
    */
  get form(): Prisma.FormDelegate<ExtArgs>;

  /**
   * `prisma.formItem`: Exposes CRUD operations for the **FormItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormItems
    * const formItems = await prisma.formItem.findMany()
    * ```
    */
  get formItem(): Prisma.FormItemDelegate<ExtArgs>;

  /**
   * `prisma.formResponse`: Exposes CRUD operations for the **FormResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormResponses
    * const formResponses = await prisma.formResponse.findMany()
    * ```
    */
  get formResponse(): Prisma.FormResponseDelegate<ExtArgs>;

  /**
   * `prisma.formItemResponse`: Exposes CRUD operations for the **FormItemResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormItemResponses
    * const formItemResponses = await prisma.formItemResponse.findMany()
    * ```
    */
  get formItemResponse(): Prisma.FormItemResponseDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    SalesforceConfig: 'SalesforceConfig',
    Form: 'Form',
    FormItem: 'FormItem',
    FormResponse: 'FormResponse',
    FormItemResponse: 'FormItemResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "salesforceConfig" | "form" | "formItem" | "formResponse" | "formItemResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SalesforceConfig: {
        payload: Prisma.$SalesforceConfigPayload<ExtArgs>
        fields: Prisma.SalesforceConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalesforceConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesforceConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalesforceConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesforceConfigPayload>
          }
          findFirst: {
            args: Prisma.SalesforceConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesforceConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalesforceConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesforceConfigPayload>
          }
          findMany: {
            args: Prisma.SalesforceConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesforceConfigPayload>[]
          }
          create: {
            args: Prisma.SalesforceConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesforceConfigPayload>
          }
          createMany: {
            args: Prisma.SalesforceConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalesforceConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesforceConfigPayload>[]
          }
          delete: {
            args: Prisma.SalesforceConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesforceConfigPayload>
          }
          update: {
            args: Prisma.SalesforceConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesforceConfigPayload>
          }
          deleteMany: {
            args: Prisma.SalesforceConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalesforceConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalesforceConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalesforceConfigPayload>
          }
          aggregate: {
            args: Prisma.SalesforceConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalesforceConfig>
          }
          groupBy: {
            args: Prisma.SalesforceConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalesforceConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalesforceConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SalesforceConfigCountAggregateOutputType> | number
          }
        }
      }
      Form: {
        payload: Prisma.$FormPayload<ExtArgs>
        fields: Prisma.FormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findFirst: {
            args: Prisma.FormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          findMany: {
            args: Prisma.FormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          create: {
            args: Prisma.FormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          createMany: {
            args: Prisma.FormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>[]
          }
          delete: {
            args: Prisma.FormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          update: {
            args: Prisma.FormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          deleteMany: {
            args: Prisma.FormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormPayload>
          }
          aggregate: {
            args: Prisma.FormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForm>
          }
          groupBy: {
            args: Prisma.FormGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormCountArgs<ExtArgs>
            result: $Utils.Optional<FormCountAggregateOutputType> | number
          }
        }
      }
      FormItem: {
        payload: Prisma.$FormItemPayload<ExtArgs>
        fields: Prisma.FormItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemPayload>
          }
          findFirst: {
            args: Prisma.FormItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemPayload>
          }
          findMany: {
            args: Prisma.FormItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemPayload>[]
          }
          create: {
            args: Prisma.FormItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemPayload>
          }
          createMany: {
            args: Prisma.FormItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemPayload>[]
          }
          delete: {
            args: Prisma.FormItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemPayload>
          }
          update: {
            args: Prisma.FormItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemPayload>
          }
          deleteMany: {
            args: Prisma.FormItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FormItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemPayload>
          }
          aggregate: {
            args: Prisma.FormItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormItem>
          }
          groupBy: {
            args: Prisma.FormItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormItemCountArgs<ExtArgs>
            result: $Utils.Optional<FormItemCountAggregateOutputType> | number
          }
        }
      }
      FormResponse: {
        payload: Prisma.$FormResponsePayload<ExtArgs>
        fields: Prisma.FormResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          findFirst: {
            args: Prisma.FormResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          findMany: {
            args: Prisma.FormResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>[]
          }
          create: {
            args: Prisma.FormResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          createMany: {
            args: Prisma.FormResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>[]
          }
          delete: {
            args: Prisma.FormResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          update: {
            args: Prisma.FormResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          deleteMany: {
            args: Prisma.FormResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FormResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          aggregate: {
            args: Prisma.FormResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormResponse>
          }
          groupBy: {
            args: Prisma.FormResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormResponseCountArgs<ExtArgs>
            result: $Utils.Optional<FormResponseCountAggregateOutputType> | number
          }
        }
      }
      FormItemResponse: {
        payload: Prisma.$FormItemResponsePayload<ExtArgs>
        fields: Prisma.FormItemResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormItemResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormItemResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemResponsePayload>
          }
          findFirst: {
            args: Prisma.FormItemResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormItemResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemResponsePayload>
          }
          findMany: {
            args: Prisma.FormItemResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemResponsePayload>[]
          }
          create: {
            args: Prisma.FormItemResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemResponsePayload>
          }
          createMany: {
            args: Prisma.FormItemResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormItemResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemResponsePayload>[]
          }
          delete: {
            args: Prisma.FormItemResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemResponsePayload>
          }
          update: {
            args: Prisma.FormItemResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemResponsePayload>
          }
          deleteMany: {
            args: Prisma.FormItemResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormItemResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FormItemResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormItemResponsePayload>
          }
          aggregate: {
            args: Prisma.FormItemResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormItemResponse>
          }
          groupBy: {
            args: Prisma.FormItemResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormItemResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormItemResponseCountArgs<ExtArgs>
            result: $Utils.Optional<FormItemResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    salesforceConfigs: number
    forms: number
    formResponses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salesforceConfigs?: boolean | UserCountOutputTypeCountSalesforceConfigsArgs
    forms?: boolean | UserCountOutputTypeCountFormsArgs
    formResponses?: boolean | UserCountOutputTypeCountFormResponsesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalesforceConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesforceConfigWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFormResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormResponseWhereInput
  }


  /**
   * Count Type FormCountOutputType
   */

  export type FormCountOutputType = {
    formItems: number
    formResponses: number
  }

  export type FormCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formItems?: boolean | FormCountOutputTypeCountFormItemsArgs
    formResponses?: boolean | FormCountOutputTypeCountFormResponsesArgs
  }

  // Custom InputTypes
  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormCountOutputType
     */
    select?: FormCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountFormItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormItemWhereInput
  }

  /**
   * FormCountOutputType without action
   */
  export type FormCountOutputTypeCountFormResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormResponseWhereInput
  }


  /**
   * Count Type FormItemCountOutputType
   */

  export type FormItemCountOutputType = {
    responses: number
  }

  export type FormItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | FormItemCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * FormItemCountOutputType without action
   */
  export type FormItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemCountOutputType
     */
    select?: FormItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormItemCountOutputType without action
   */
  export type FormItemCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormItemResponseWhereInput
  }


  /**
   * Count Type FormResponseCountOutputType
   */

  export type FormResponseCountOutputType = {
    items: number
  }

  export type FormResponseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | FormResponseCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * FormResponseCountOutputType without action
   */
  export type FormResponseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponseCountOutputType
     */
    select?: FormResponseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormResponseCountOutputType without action
   */
  export type FormResponseCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormItemResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    salesforceConfigs?: boolean | User$salesforceConfigsArgs<ExtArgs>
    forms?: boolean | User$formsArgs<ExtArgs>
    formResponses?: boolean | User$formResponsesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salesforceConfigs?: boolean | User$salesforceConfigsArgs<ExtArgs>
    forms?: boolean | User$formsArgs<ExtArgs>
    formResponses?: boolean | User$formResponsesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      salesforceConfigs: Prisma.$SalesforceConfigPayload<ExtArgs>[]
      forms: Prisma.$FormPayload<ExtArgs>[]
      formResponses: Prisma.$FormResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salesforceConfigs<T extends User$salesforceConfigsArgs<ExtArgs> = {}>(args?: Subset<T, User$salesforceConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "findMany"> | Null>
    forms<T extends User$formsArgs<ExtArgs> = {}>(args?: Subset<T, User$formsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany"> | Null>
    formResponses<T extends User$formResponsesArgs<ExtArgs> = {}>(args?: Subset<T, User$formResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.salesforceConfigs
   */
  export type User$salesforceConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
    where?: SalesforceConfigWhereInput
    orderBy?: SalesforceConfigOrderByWithRelationInput | SalesforceConfigOrderByWithRelationInput[]
    cursor?: SalesforceConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalesforceConfigScalarFieldEnum | SalesforceConfigScalarFieldEnum[]
  }

  /**
   * User.forms
   */
  export type User$formsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    where?: FormWhereInput
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    cursor?: FormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * User.formResponses
   */
  export type User$formResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    where?: FormResponseWhereInput
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    cursor?: FormResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SalesforceConfig
   */

  export type AggregateSalesforceConfig = {
    _count: SalesforceConfigCountAggregateOutputType | null
    _min: SalesforceConfigMinAggregateOutputType | null
    _max: SalesforceConfigMaxAggregateOutputType | null
  }

  export type SalesforceConfigMinAggregateOutputType = {
    id: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    instanceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesforceConfigMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    instanceUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SalesforceConfigCountAggregateOutputType = {
    id: number
    userId: number
    accessToken: number
    refreshToken: number
    instanceUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SalesforceConfigMinAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    instanceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesforceConfigMaxAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    instanceUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SalesforceConfigCountAggregateInputType = {
    id?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    instanceUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SalesforceConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesforceConfig to aggregate.
     */
    where?: SalesforceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesforceConfigs to fetch.
     */
    orderBy?: SalesforceConfigOrderByWithRelationInput | SalesforceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalesforceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesforceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesforceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalesforceConfigs
    **/
    _count?: true | SalesforceConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalesforceConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalesforceConfigMaxAggregateInputType
  }

  export type GetSalesforceConfigAggregateType<T extends SalesforceConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSalesforceConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalesforceConfig[P]>
      : GetScalarType<T[P], AggregateSalesforceConfig[P]>
  }




  export type SalesforceConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalesforceConfigWhereInput
    orderBy?: SalesforceConfigOrderByWithAggregationInput | SalesforceConfigOrderByWithAggregationInput[]
    by: SalesforceConfigScalarFieldEnum[] | SalesforceConfigScalarFieldEnum
    having?: SalesforceConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalesforceConfigCountAggregateInputType | true
    _min?: SalesforceConfigMinAggregateInputType
    _max?: SalesforceConfigMaxAggregateInputType
  }

  export type SalesforceConfigGroupByOutputType = {
    id: string
    userId: string
    accessToken: string
    refreshToken: string
    instanceUrl: string
    createdAt: Date
    updatedAt: Date
    _count: SalesforceConfigCountAggregateOutputType | null
    _min: SalesforceConfigMinAggregateOutputType | null
    _max: SalesforceConfigMaxAggregateOutputType | null
  }

  type GetSalesforceConfigGroupByPayload<T extends SalesforceConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalesforceConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalesforceConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalesforceConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SalesforceConfigGroupByOutputType[P]>
        }
      >
    >


  export type SalesforceConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    instanceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesforceConfig"]>

  export type SalesforceConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    instanceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salesforceConfig"]>

  export type SalesforceConfigSelectScalar = {
    id?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    instanceUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SalesforceConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SalesforceConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SalesforceConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalesforceConfig"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      accessToken: string
      refreshToken: string
      instanceUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["salesforceConfig"]>
    composites: {}
  }

  type SalesforceConfigGetPayload<S extends boolean | null | undefined | SalesforceConfigDefaultArgs> = $Result.GetResult<Prisma.$SalesforceConfigPayload, S>

  type SalesforceConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SalesforceConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SalesforceConfigCountAggregateInputType | true
    }

  export interface SalesforceConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalesforceConfig'], meta: { name: 'SalesforceConfig' } }
    /**
     * Find zero or one SalesforceConfig that matches the filter.
     * @param {SalesforceConfigFindUniqueArgs} args - Arguments to find a SalesforceConfig
     * @example
     * // Get one SalesforceConfig
     * const salesforceConfig = await prisma.salesforceConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalesforceConfigFindUniqueArgs>(args: SelectSubset<T, SalesforceConfigFindUniqueArgs<ExtArgs>>): Prisma__SalesforceConfigClient<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SalesforceConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SalesforceConfigFindUniqueOrThrowArgs} args - Arguments to find a SalesforceConfig
     * @example
     * // Get one SalesforceConfig
     * const salesforceConfig = await prisma.salesforceConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalesforceConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SalesforceConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalesforceConfigClient<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SalesforceConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesforceConfigFindFirstArgs} args - Arguments to find a SalesforceConfig
     * @example
     * // Get one SalesforceConfig
     * const salesforceConfig = await prisma.salesforceConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalesforceConfigFindFirstArgs>(args?: SelectSubset<T, SalesforceConfigFindFirstArgs<ExtArgs>>): Prisma__SalesforceConfigClient<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SalesforceConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesforceConfigFindFirstOrThrowArgs} args - Arguments to find a SalesforceConfig
     * @example
     * // Get one SalesforceConfig
     * const salesforceConfig = await prisma.salesforceConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalesforceConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SalesforceConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalesforceConfigClient<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SalesforceConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesforceConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalesforceConfigs
     * const salesforceConfigs = await prisma.salesforceConfig.findMany()
     * 
     * // Get first 10 SalesforceConfigs
     * const salesforceConfigs = await prisma.salesforceConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salesforceConfigWithIdOnly = await prisma.salesforceConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalesforceConfigFindManyArgs>(args?: SelectSubset<T, SalesforceConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SalesforceConfig.
     * @param {SalesforceConfigCreateArgs} args - Arguments to create a SalesforceConfig.
     * @example
     * // Create one SalesforceConfig
     * const SalesforceConfig = await prisma.salesforceConfig.create({
     *   data: {
     *     // ... data to create a SalesforceConfig
     *   }
     * })
     * 
     */
    create<T extends SalesforceConfigCreateArgs>(args: SelectSubset<T, SalesforceConfigCreateArgs<ExtArgs>>): Prisma__SalesforceConfigClient<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SalesforceConfigs.
     * @param {SalesforceConfigCreateManyArgs} args - Arguments to create many SalesforceConfigs.
     * @example
     * // Create many SalesforceConfigs
     * const salesforceConfig = await prisma.salesforceConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalesforceConfigCreateManyArgs>(args?: SelectSubset<T, SalesforceConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalesforceConfigs and returns the data saved in the database.
     * @param {SalesforceConfigCreateManyAndReturnArgs} args - Arguments to create many SalesforceConfigs.
     * @example
     * // Create many SalesforceConfigs
     * const salesforceConfig = await prisma.salesforceConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalesforceConfigs and only return the `id`
     * const salesforceConfigWithIdOnly = await prisma.salesforceConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalesforceConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SalesforceConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SalesforceConfig.
     * @param {SalesforceConfigDeleteArgs} args - Arguments to delete one SalesforceConfig.
     * @example
     * // Delete one SalesforceConfig
     * const SalesforceConfig = await prisma.salesforceConfig.delete({
     *   where: {
     *     // ... filter to delete one SalesforceConfig
     *   }
     * })
     * 
     */
    delete<T extends SalesforceConfigDeleteArgs>(args: SelectSubset<T, SalesforceConfigDeleteArgs<ExtArgs>>): Prisma__SalesforceConfigClient<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SalesforceConfig.
     * @param {SalesforceConfigUpdateArgs} args - Arguments to update one SalesforceConfig.
     * @example
     * // Update one SalesforceConfig
     * const salesforceConfig = await prisma.salesforceConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalesforceConfigUpdateArgs>(args: SelectSubset<T, SalesforceConfigUpdateArgs<ExtArgs>>): Prisma__SalesforceConfigClient<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SalesforceConfigs.
     * @param {SalesforceConfigDeleteManyArgs} args - Arguments to filter SalesforceConfigs to delete.
     * @example
     * // Delete a few SalesforceConfigs
     * const { count } = await prisma.salesforceConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalesforceConfigDeleteManyArgs>(args?: SelectSubset<T, SalesforceConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalesforceConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesforceConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalesforceConfigs
     * const salesforceConfig = await prisma.salesforceConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalesforceConfigUpdateManyArgs>(args: SelectSubset<T, SalesforceConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalesforceConfig.
     * @param {SalesforceConfigUpsertArgs} args - Arguments to update or create a SalesforceConfig.
     * @example
     * // Update or create a SalesforceConfig
     * const salesforceConfig = await prisma.salesforceConfig.upsert({
     *   create: {
     *     // ... data to create a SalesforceConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalesforceConfig we want to update
     *   }
     * })
     */
    upsert<T extends SalesforceConfigUpsertArgs>(args: SelectSubset<T, SalesforceConfigUpsertArgs<ExtArgs>>): Prisma__SalesforceConfigClient<$Result.GetResult<Prisma.$SalesforceConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SalesforceConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesforceConfigCountArgs} args - Arguments to filter SalesforceConfigs to count.
     * @example
     * // Count the number of SalesforceConfigs
     * const count = await prisma.salesforceConfig.count({
     *   where: {
     *     // ... the filter for the SalesforceConfigs we want to count
     *   }
     * })
    **/
    count<T extends SalesforceConfigCountArgs>(
      args?: Subset<T, SalesforceConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalesforceConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalesforceConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesforceConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalesforceConfigAggregateArgs>(args: Subset<T, SalesforceConfigAggregateArgs>): Prisma.PrismaPromise<GetSalesforceConfigAggregateType<T>>

    /**
     * Group by SalesforceConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalesforceConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalesforceConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalesforceConfigGroupByArgs['orderBy'] }
        : { orderBy?: SalesforceConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalesforceConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalesforceConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalesforceConfig model
   */
  readonly fields: SalesforceConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalesforceConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalesforceConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SalesforceConfig model
   */ 
  interface SalesforceConfigFieldRefs {
    readonly id: FieldRef<"SalesforceConfig", 'String'>
    readonly userId: FieldRef<"SalesforceConfig", 'String'>
    readonly accessToken: FieldRef<"SalesforceConfig", 'String'>
    readonly refreshToken: FieldRef<"SalesforceConfig", 'String'>
    readonly instanceUrl: FieldRef<"SalesforceConfig", 'String'>
    readonly createdAt: FieldRef<"SalesforceConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SalesforceConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalesforceConfig findUnique
   */
  export type SalesforceConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
    /**
     * Filter, which SalesforceConfig to fetch.
     */
    where: SalesforceConfigWhereUniqueInput
  }

  /**
   * SalesforceConfig findUniqueOrThrow
   */
  export type SalesforceConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
    /**
     * Filter, which SalesforceConfig to fetch.
     */
    where: SalesforceConfigWhereUniqueInput
  }

  /**
   * SalesforceConfig findFirst
   */
  export type SalesforceConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
    /**
     * Filter, which SalesforceConfig to fetch.
     */
    where?: SalesforceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesforceConfigs to fetch.
     */
    orderBy?: SalesforceConfigOrderByWithRelationInput | SalesforceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesforceConfigs.
     */
    cursor?: SalesforceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesforceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesforceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesforceConfigs.
     */
    distinct?: SalesforceConfigScalarFieldEnum | SalesforceConfigScalarFieldEnum[]
  }

  /**
   * SalesforceConfig findFirstOrThrow
   */
  export type SalesforceConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
    /**
     * Filter, which SalesforceConfig to fetch.
     */
    where?: SalesforceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesforceConfigs to fetch.
     */
    orderBy?: SalesforceConfigOrderByWithRelationInput | SalesforceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalesforceConfigs.
     */
    cursor?: SalesforceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesforceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesforceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalesforceConfigs.
     */
    distinct?: SalesforceConfigScalarFieldEnum | SalesforceConfigScalarFieldEnum[]
  }

  /**
   * SalesforceConfig findMany
   */
  export type SalesforceConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
    /**
     * Filter, which SalesforceConfigs to fetch.
     */
    where?: SalesforceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalesforceConfigs to fetch.
     */
    orderBy?: SalesforceConfigOrderByWithRelationInput | SalesforceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalesforceConfigs.
     */
    cursor?: SalesforceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalesforceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalesforceConfigs.
     */
    skip?: number
    distinct?: SalesforceConfigScalarFieldEnum | SalesforceConfigScalarFieldEnum[]
  }

  /**
   * SalesforceConfig create
   */
  export type SalesforceConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a SalesforceConfig.
     */
    data: XOR<SalesforceConfigCreateInput, SalesforceConfigUncheckedCreateInput>
  }

  /**
   * SalesforceConfig createMany
   */
  export type SalesforceConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalesforceConfigs.
     */
    data: SalesforceConfigCreateManyInput | SalesforceConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalesforceConfig createManyAndReturn
   */
  export type SalesforceConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SalesforceConfigs.
     */
    data: SalesforceConfigCreateManyInput | SalesforceConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SalesforceConfig update
   */
  export type SalesforceConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a SalesforceConfig.
     */
    data: XOR<SalesforceConfigUpdateInput, SalesforceConfigUncheckedUpdateInput>
    /**
     * Choose, which SalesforceConfig to update.
     */
    where: SalesforceConfigWhereUniqueInput
  }

  /**
   * SalesforceConfig updateMany
   */
  export type SalesforceConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalesforceConfigs.
     */
    data: XOR<SalesforceConfigUpdateManyMutationInput, SalesforceConfigUncheckedUpdateManyInput>
    /**
     * Filter which SalesforceConfigs to update
     */
    where?: SalesforceConfigWhereInput
  }

  /**
   * SalesforceConfig upsert
   */
  export type SalesforceConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the SalesforceConfig to update in case it exists.
     */
    where: SalesforceConfigWhereUniqueInput
    /**
     * In case the SalesforceConfig found by the `where` argument doesn't exist, create a new SalesforceConfig with this data.
     */
    create: XOR<SalesforceConfigCreateInput, SalesforceConfigUncheckedCreateInput>
    /**
     * In case the SalesforceConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalesforceConfigUpdateInput, SalesforceConfigUncheckedUpdateInput>
  }

  /**
   * SalesforceConfig delete
   */
  export type SalesforceConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
    /**
     * Filter which SalesforceConfig to delete.
     */
    where: SalesforceConfigWhereUniqueInput
  }

  /**
   * SalesforceConfig deleteMany
   */
  export type SalesforceConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalesforceConfigs to delete
     */
    where?: SalesforceConfigWhereInput
  }

  /**
   * SalesforceConfig without action
   */
  export type SalesforceConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalesforceConfig
     */
    select?: SalesforceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalesforceConfigInclude<ExtArgs> | null
  }


  /**
   * Model Form
   */

  export type AggregateForm = {
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  export type FormMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    salesforceId: string | null
    createdById: string | null
    status: $Enums.FormStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    salesforceId: string | null
    createdById: string | null
    status: $Enums.FormStatus | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormCountAggregateOutputType = {
    id: number
    title: number
    description: number
    salesforceId: number
    createdById: number
    status: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    salesforceId?: true
    createdById?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    salesforceId?: true
    createdById?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    salesforceId?: true
    createdById?: true
    status?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Form to aggregate.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormMaxAggregateInputType
  }

  export type GetFormAggregateType<T extends FormAggregateArgs> = {
        [P in keyof T & keyof AggregateForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForm[P]>
      : GetScalarType<T[P], AggregateForm[P]>
  }




  export type FormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormWhereInput
    orderBy?: FormOrderByWithAggregationInput | FormOrderByWithAggregationInput[]
    by: FormScalarFieldEnum[] | FormScalarFieldEnum
    having?: FormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormCountAggregateInputType | true
    _min?: FormMinAggregateInputType
    _max?: FormMaxAggregateInputType
  }

  export type FormGroupByOutputType = {
    id: string
    title: string
    description: string | null
    salesforceId: string | null
    createdById: string
    status: $Enums.FormStatus
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: FormCountAggregateOutputType | null
    _min: FormMinAggregateOutputType | null
    _max: FormMaxAggregateOutputType | null
  }

  type GetFormGroupByPayload<T extends FormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormGroupByOutputType[P]>
            : GetScalarType<T[P], FormGroupByOutputType[P]>
        }
      >
    >


  export type FormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    salesforceId?: boolean
    createdById?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    formItems?: boolean | Form$formItemsArgs<ExtArgs>
    formResponses?: boolean | Form$formResponsesArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    salesforceId?: boolean
    createdById?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["form"]>

  export type FormSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    salesforceId?: boolean
    createdById?: boolean
    status?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    formItems?: boolean | Form$formItemsArgs<ExtArgs>
    formResponses?: boolean | Form$formResponsesArgs<ExtArgs>
    _count?: boolean | FormCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Form"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      formItems: Prisma.$FormItemPayload<ExtArgs>[]
      formResponses: Prisma.$FormResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      salesforceId: string | null
      createdById: string
      status: $Enums.FormStatus
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["form"]>
    composites: {}
  }

  type FormGetPayload<S extends boolean | null | undefined | FormDefaultArgs> = $Result.GetResult<Prisma.$FormPayload, S>

  type FormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FormFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormCountAggregateInputType | true
    }

  export interface FormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Form'], meta: { name: 'Form' } }
    /**
     * Find zero or one Form that matches the filter.
     * @param {FormFindUniqueArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFindUniqueArgs>(args: SelectSubset<T, FormFindUniqueArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Form that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FormFindUniqueOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Form that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFindFirstArgs>(args?: SelectSubset<T, FormFindFirstArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Form that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindFirstOrThrowArgs} args - Arguments to find a Form
     * @example
     * // Get one Form
     * const form = await prisma.form.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.form.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.form.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formWithIdOnly = await prisma.form.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFindManyArgs>(args?: SelectSubset<T, FormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Form.
     * @param {FormCreateArgs} args - Arguments to create a Form.
     * @example
     * // Create one Form
     * const Form = await prisma.form.create({
     *   data: {
     *     // ... data to create a Form
     *   }
     * })
     * 
     */
    create<T extends FormCreateArgs>(args: SelectSubset<T, FormCreateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Forms.
     * @param {FormCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormCreateManyArgs>(args?: SelectSubset<T, FormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {FormCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const form = await prisma.form.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formWithIdOnly = await prisma.form.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormCreateManyAndReturnArgs>(args?: SelectSubset<T, FormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Form.
     * @param {FormDeleteArgs} args - Arguments to delete one Form.
     * @example
     * // Delete one Form
     * const Form = await prisma.form.delete({
     *   where: {
     *     // ... filter to delete one Form
     *   }
     * })
     * 
     */
    delete<T extends FormDeleteArgs>(args: SelectSubset<T, FormDeleteArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Form.
     * @param {FormUpdateArgs} args - Arguments to update one Form.
     * @example
     * // Update one Form
     * const form = await prisma.form.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormUpdateArgs>(args: SelectSubset<T, FormUpdateArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Forms.
     * @param {FormDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.form.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormDeleteManyArgs>(args?: SelectSubset<T, FormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const form = await prisma.form.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormUpdateManyArgs>(args: SelectSubset<T, FormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Form.
     * @param {FormUpsertArgs} args - Arguments to update or create a Form.
     * @example
     * // Update or create a Form
     * const form = await prisma.form.upsert({
     *   create: {
     *     // ... data to create a Form
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Form we want to update
     *   }
     * })
     */
    upsert<T extends FormUpsertArgs>(args: SelectSubset<T, FormUpsertArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.form.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormCountArgs>(
      args?: Subset<T, FormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormAggregateArgs>(args: Subset<T, FormAggregateArgs>): Prisma.PrismaPromise<GetFormAggregateType<T>>

    /**
     * Group by Form.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormGroupByArgs['orderBy'] }
        : { orderBy?: FormGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Form model
   */
  readonly fields: FormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Form.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    formItems<T extends Form$formItemsArgs<ExtArgs> = {}>(args?: Subset<T, Form$formItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "findMany"> | Null>
    formResponses<T extends Form$formResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Form$formResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Form model
   */ 
  interface FormFieldRefs {
    readonly id: FieldRef<"Form", 'String'>
    readonly title: FieldRef<"Form", 'String'>
    readonly description: FieldRef<"Form", 'String'>
    readonly salesforceId: FieldRef<"Form", 'String'>
    readonly createdById: FieldRef<"Form", 'String'>
    readonly status: FieldRef<"Form", 'FormStatus'>
    readonly expiresAt: FieldRef<"Form", 'DateTime'>
    readonly createdAt: FieldRef<"Form", 'DateTime'>
    readonly updatedAt: FieldRef<"Form", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Form findUnique
   */
  export type FormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findUniqueOrThrow
   */
  export type FormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form findFirst
   */
  export type FormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findFirstOrThrow
   */
  export type FormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Form to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form findMany
   */
  export type FormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormOrderByWithRelationInput | FormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormScalarFieldEnum | FormScalarFieldEnum[]
  }

  /**
   * Form create
   */
  export type FormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to create a Form.
     */
    data: XOR<FormCreateInput, FormUncheckedCreateInput>
  }

  /**
   * Form createMany
   */
  export type FormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Form createManyAndReturn
   */
  export type FormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Forms.
     */
    data: FormCreateManyInput | FormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Form update
   */
  export type FormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The data needed to update a Form.
     */
    data: XOR<FormUpdateInput, FormUncheckedUpdateInput>
    /**
     * Choose, which Form to update.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form updateMany
   */
  export type FormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormWhereInput
  }

  /**
   * Form upsert
   */
  export type FormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * The filter to search for the Form to update in case it exists.
     */
    where: FormWhereUniqueInput
    /**
     * In case the Form found by the `where` argument doesn't exist, create a new Form with this data.
     */
    create: XOR<FormCreateInput, FormUncheckedCreateInput>
    /**
     * In case the Form was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormUpdateInput, FormUncheckedUpdateInput>
  }

  /**
   * Form delete
   */
  export type FormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
    /**
     * Filter which Form to delete.
     */
    where: FormWhereUniqueInput
  }

  /**
   * Form deleteMany
   */
  export type FormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormWhereInput
  }

  /**
   * Form.formItems
   */
  export type Form$formItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
    where?: FormItemWhereInput
    orderBy?: FormItemOrderByWithRelationInput | FormItemOrderByWithRelationInput[]
    cursor?: FormItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormItemScalarFieldEnum | FormItemScalarFieldEnum[]
  }

  /**
   * Form.formResponses
   */
  export type Form$formResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    where?: FormResponseWhereInput
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    cursor?: FormResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * Form without action
   */
  export type FormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Form
     */
    select?: FormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormInclude<ExtArgs> | null
  }


  /**
   * Model FormItem
   */

  export type AggregateFormItem = {
    _count: FormItemCountAggregateOutputType | null
    _avg: FormItemAvgAggregateOutputType | null
    _sum: FormItemSumAggregateOutputType | null
    _min: FormItemMinAggregateOutputType | null
    _max: FormItemMaxAggregateOutputType | null
  }

  export type FormItemAvgAggregateOutputType = {
    order: number | null
  }

  export type FormItemSumAggregateOutputType = {
    order: number | null
  }

  export type FormItemMinAggregateOutputType = {
    id: string | null
    formId: string | null
    label: string | null
    type: $Enums.FormItemType | null
    required: boolean | null
    order: number | null
    salesforceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormItemMaxAggregateOutputType = {
    id: string | null
    formId: string | null
    label: string | null
    type: $Enums.FormItemType | null
    required: boolean | null
    order: number | null
    salesforceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormItemCountAggregateOutputType = {
    id: number
    formId: number
    label: number
    type: number
    required: number
    order: number
    options: number
    validation: number
    salesforceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormItemAvgAggregateInputType = {
    order?: true
  }

  export type FormItemSumAggregateInputType = {
    order?: true
  }

  export type FormItemMinAggregateInputType = {
    id?: true
    formId?: true
    label?: true
    type?: true
    required?: true
    order?: true
    salesforceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormItemMaxAggregateInputType = {
    id?: true
    formId?: true
    label?: true
    type?: true
    required?: true
    order?: true
    salesforceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormItemCountAggregateInputType = {
    id?: true
    formId?: true
    label?: true
    type?: true
    required?: true
    order?: true
    options?: true
    validation?: true
    salesforceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormItem to aggregate.
     */
    where?: FormItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormItems to fetch.
     */
    orderBy?: FormItemOrderByWithRelationInput | FormItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormItems
    **/
    _count?: true | FormItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormItemMaxAggregateInputType
  }

  export type GetFormItemAggregateType<T extends FormItemAggregateArgs> = {
        [P in keyof T & keyof AggregateFormItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormItem[P]>
      : GetScalarType<T[P], AggregateFormItem[P]>
  }




  export type FormItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormItemWhereInput
    orderBy?: FormItemOrderByWithAggregationInput | FormItemOrderByWithAggregationInput[]
    by: FormItemScalarFieldEnum[] | FormItemScalarFieldEnum
    having?: FormItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormItemCountAggregateInputType | true
    _avg?: FormItemAvgAggregateInputType
    _sum?: FormItemSumAggregateInputType
    _min?: FormItemMinAggregateInputType
    _max?: FormItemMaxAggregateInputType
  }

  export type FormItemGroupByOutputType = {
    id: string
    formId: string
    label: string
    type: $Enums.FormItemType
    required: boolean
    order: number
    options: JsonValue | null
    validation: JsonValue | null
    salesforceId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FormItemCountAggregateOutputType | null
    _avg: FormItemAvgAggregateOutputType | null
    _sum: FormItemSumAggregateOutputType | null
    _min: FormItemMinAggregateOutputType | null
    _max: FormItemMaxAggregateOutputType | null
  }

  type GetFormItemGroupByPayload<T extends FormItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormItemGroupByOutputType[P]>
            : GetScalarType<T[P], FormItemGroupByOutputType[P]>
        }
      >
    >


  export type FormItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    options?: boolean
    validation?: boolean
    salesforceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    responses?: boolean | FormItem$responsesArgs<ExtArgs>
    _count?: boolean | FormItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formItem"]>

  export type FormItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    options?: boolean
    validation?: boolean
    salesforceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formItem"]>

  export type FormItemSelectScalar = {
    id?: boolean
    formId?: boolean
    label?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    options?: boolean
    validation?: boolean
    salesforceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    responses?: boolean | FormItem$responsesArgs<ExtArgs>
    _count?: boolean | FormItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
  }

  export type $FormItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormItem"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>
      responses: Prisma.$FormItemResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
      label: string
      type: $Enums.FormItemType
      required: boolean
      order: number
      options: Prisma.JsonValue | null
      validation: Prisma.JsonValue | null
      salesforceId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formItem"]>
    composites: {}
  }

  type FormItemGetPayload<S extends boolean | null | undefined | FormItemDefaultArgs> = $Result.GetResult<Prisma.$FormItemPayload, S>

  type FormItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FormItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormItemCountAggregateInputType | true
    }

  export interface FormItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormItem'], meta: { name: 'FormItem' } }
    /**
     * Find zero or one FormItem that matches the filter.
     * @param {FormItemFindUniqueArgs} args - Arguments to find a FormItem
     * @example
     * // Get one FormItem
     * const formItem = await prisma.formItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormItemFindUniqueArgs>(args: SelectSubset<T, FormItemFindUniqueArgs<ExtArgs>>): Prisma__FormItemClient<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FormItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FormItemFindUniqueOrThrowArgs} args - Arguments to find a FormItem
     * @example
     * // Get one FormItem
     * const formItem = await prisma.formItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormItemFindUniqueOrThrowArgs>(args: SelectSubset<T, FormItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormItemClient<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FormItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemFindFirstArgs} args - Arguments to find a FormItem
     * @example
     * // Get one FormItem
     * const formItem = await prisma.formItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormItemFindFirstArgs>(args?: SelectSubset<T, FormItemFindFirstArgs<ExtArgs>>): Prisma__FormItemClient<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FormItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemFindFirstOrThrowArgs} args - Arguments to find a FormItem
     * @example
     * // Get one FormItem
     * const formItem = await prisma.formItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormItemFindFirstOrThrowArgs>(args?: SelectSubset<T, FormItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormItemClient<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FormItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormItems
     * const formItems = await prisma.formItem.findMany()
     * 
     * // Get first 10 FormItems
     * const formItems = await prisma.formItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formItemWithIdOnly = await prisma.formItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormItemFindManyArgs>(args?: SelectSubset<T, FormItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FormItem.
     * @param {FormItemCreateArgs} args - Arguments to create a FormItem.
     * @example
     * // Create one FormItem
     * const FormItem = await prisma.formItem.create({
     *   data: {
     *     // ... data to create a FormItem
     *   }
     * })
     * 
     */
    create<T extends FormItemCreateArgs>(args: SelectSubset<T, FormItemCreateArgs<ExtArgs>>): Prisma__FormItemClient<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FormItems.
     * @param {FormItemCreateManyArgs} args - Arguments to create many FormItems.
     * @example
     * // Create many FormItems
     * const formItem = await prisma.formItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormItemCreateManyArgs>(args?: SelectSubset<T, FormItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormItems and returns the data saved in the database.
     * @param {FormItemCreateManyAndReturnArgs} args - Arguments to create many FormItems.
     * @example
     * // Create many FormItems
     * const formItem = await prisma.formItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormItems and only return the `id`
     * const formItemWithIdOnly = await prisma.formItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormItemCreateManyAndReturnArgs>(args?: SelectSubset<T, FormItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FormItem.
     * @param {FormItemDeleteArgs} args - Arguments to delete one FormItem.
     * @example
     * // Delete one FormItem
     * const FormItem = await prisma.formItem.delete({
     *   where: {
     *     // ... filter to delete one FormItem
     *   }
     * })
     * 
     */
    delete<T extends FormItemDeleteArgs>(args: SelectSubset<T, FormItemDeleteArgs<ExtArgs>>): Prisma__FormItemClient<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FormItem.
     * @param {FormItemUpdateArgs} args - Arguments to update one FormItem.
     * @example
     * // Update one FormItem
     * const formItem = await prisma.formItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormItemUpdateArgs>(args: SelectSubset<T, FormItemUpdateArgs<ExtArgs>>): Prisma__FormItemClient<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FormItems.
     * @param {FormItemDeleteManyArgs} args - Arguments to filter FormItems to delete.
     * @example
     * // Delete a few FormItems
     * const { count } = await prisma.formItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormItemDeleteManyArgs>(args?: SelectSubset<T, FormItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormItems
     * const formItem = await prisma.formItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormItemUpdateManyArgs>(args: SelectSubset<T, FormItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FormItem.
     * @param {FormItemUpsertArgs} args - Arguments to update or create a FormItem.
     * @example
     * // Update or create a FormItem
     * const formItem = await prisma.formItem.upsert({
     *   create: {
     *     // ... data to create a FormItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormItem we want to update
     *   }
     * })
     */
    upsert<T extends FormItemUpsertArgs>(args: SelectSubset<T, FormItemUpsertArgs<ExtArgs>>): Prisma__FormItemClient<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FormItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemCountArgs} args - Arguments to filter FormItems to count.
     * @example
     * // Count the number of FormItems
     * const count = await prisma.formItem.count({
     *   where: {
     *     // ... the filter for the FormItems we want to count
     *   }
     * })
    **/
    count<T extends FormItemCountArgs>(
      args?: Subset<T, FormItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormItemAggregateArgs>(args: Subset<T, FormItemAggregateArgs>): Prisma.PrismaPromise<GetFormItemAggregateType<T>>

    /**
     * Group by FormItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormItemGroupByArgs['orderBy'] }
        : { orderBy?: FormItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormItem model
   */
  readonly fields: FormItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    responses<T extends FormItem$responsesArgs<ExtArgs> = {}>(args?: Subset<T, FormItem$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormItem model
   */ 
  interface FormItemFieldRefs {
    readonly id: FieldRef<"FormItem", 'String'>
    readonly formId: FieldRef<"FormItem", 'String'>
    readonly label: FieldRef<"FormItem", 'String'>
    readonly type: FieldRef<"FormItem", 'FormItemType'>
    readonly required: FieldRef<"FormItem", 'Boolean'>
    readonly order: FieldRef<"FormItem", 'Int'>
    readonly options: FieldRef<"FormItem", 'Json'>
    readonly validation: FieldRef<"FormItem", 'Json'>
    readonly salesforceId: FieldRef<"FormItem", 'String'>
    readonly createdAt: FieldRef<"FormItem", 'DateTime'>
    readonly updatedAt: FieldRef<"FormItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormItem findUnique
   */
  export type FormItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
    /**
     * Filter, which FormItem to fetch.
     */
    where: FormItemWhereUniqueInput
  }

  /**
   * FormItem findUniqueOrThrow
   */
  export type FormItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
    /**
     * Filter, which FormItem to fetch.
     */
    where: FormItemWhereUniqueInput
  }

  /**
   * FormItem findFirst
   */
  export type FormItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
    /**
     * Filter, which FormItem to fetch.
     */
    where?: FormItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormItems to fetch.
     */
    orderBy?: FormItemOrderByWithRelationInput | FormItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormItems.
     */
    cursor?: FormItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormItems.
     */
    distinct?: FormItemScalarFieldEnum | FormItemScalarFieldEnum[]
  }

  /**
   * FormItem findFirstOrThrow
   */
  export type FormItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
    /**
     * Filter, which FormItem to fetch.
     */
    where?: FormItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormItems to fetch.
     */
    orderBy?: FormItemOrderByWithRelationInput | FormItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormItems.
     */
    cursor?: FormItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormItems.
     */
    distinct?: FormItemScalarFieldEnum | FormItemScalarFieldEnum[]
  }

  /**
   * FormItem findMany
   */
  export type FormItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
    /**
     * Filter, which FormItems to fetch.
     */
    where?: FormItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormItems to fetch.
     */
    orderBy?: FormItemOrderByWithRelationInput | FormItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormItems.
     */
    cursor?: FormItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormItems.
     */
    skip?: number
    distinct?: FormItemScalarFieldEnum | FormItemScalarFieldEnum[]
  }

  /**
   * FormItem create
   */
  export type FormItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
    /**
     * The data needed to create a FormItem.
     */
    data: XOR<FormItemCreateInput, FormItemUncheckedCreateInput>
  }

  /**
   * FormItem createMany
   */
  export type FormItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormItems.
     */
    data: FormItemCreateManyInput | FormItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormItem createManyAndReturn
   */
  export type FormItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FormItems.
     */
    data: FormItemCreateManyInput | FormItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormItem update
   */
  export type FormItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
    /**
     * The data needed to update a FormItem.
     */
    data: XOR<FormItemUpdateInput, FormItemUncheckedUpdateInput>
    /**
     * Choose, which FormItem to update.
     */
    where: FormItemWhereUniqueInput
  }

  /**
   * FormItem updateMany
   */
  export type FormItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormItems.
     */
    data: XOR<FormItemUpdateManyMutationInput, FormItemUncheckedUpdateManyInput>
    /**
     * Filter which FormItems to update
     */
    where?: FormItemWhereInput
  }

  /**
   * FormItem upsert
   */
  export type FormItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
    /**
     * The filter to search for the FormItem to update in case it exists.
     */
    where: FormItemWhereUniqueInput
    /**
     * In case the FormItem found by the `where` argument doesn't exist, create a new FormItem with this data.
     */
    create: XOR<FormItemCreateInput, FormItemUncheckedCreateInput>
    /**
     * In case the FormItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormItemUpdateInput, FormItemUncheckedUpdateInput>
  }

  /**
   * FormItem delete
   */
  export type FormItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
    /**
     * Filter which FormItem to delete.
     */
    where: FormItemWhereUniqueInput
  }

  /**
   * FormItem deleteMany
   */
  export type FormItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormItems to delete
     */
    where?: FormItemWhereInput
  }

  /**
   * FormItem.responses
   */
  export type FormItem$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    where?: FormItemResponseWhereInput
    orderBy?: FormItemResponseOrderByWithRelationInput | FormItemResponseOrderByWithRelationInput[]
    cursor?: FormItemResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormItemResponseScalarFieldEnum | FormItemResponseScalarFieldEnum[]
  }

  /**
   * FormItem without action
   */
  export type FormItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItem
     */
    select?: FormItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemInclude<ExtArgs> | null
  }


  /**
   * Model FormResponse
   */

  export type AggregateFormResponse = {
    _count: FormResponseCountAggregateOutputType | null
    _min: FormResponseMinAggregateOutputType | null
    _max: FormResponseMaxAggregateOutputType | null
  }

  export type FormResponseMinAggregateOutputType = {
    id: string | null
    formId: string | null
    submittedById: string | null
    status: $Enums.ResponseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormResponseMaxAggregateOutputType = {
    id: string | null
    formId: string | null
    submittedById: string | null
    status: $Enums.ResponseStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormResponseCountAggregateOutputType = {
    id: number
    formId: number
    submittedById: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormResponseMinAggregateInputType = {
    id?: true
    formId?: true
    submittedById?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormResponseMaxAggregateInputType = {
    id?: true
    formId?: true
    submittedById?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormResponseCountAggregateInputType = {
    id?: true
    formId?: true
    submittedById?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormResponse to aggregate.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormResponses
    **/
    _count?: true | FormResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormResponseMaxAggregateInputType
  }

  export type GetFormResponseAggregateType<T extends FormResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateFormResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormResponse[P]>
      : GetScalarType<T[P], AggregateFormResponse[P]>
  }




  export type FormResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormResponseWhereInput
    orderBy?: FormResponseOrderByWithAggregationInput | FormResponseOrderByWithAggregationInput[]
    by: FormResponseScalarFieldEnum[] | FormResponseScalarFieldEnum
    having?: FormResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormResponseCountAggregateInputType | true
    _min?: FormResponseMinAggregateInputType
    _max?: FormResponseMaxAggregateInputType
  }

  export type FormResponseGroupByOutputType = {
    id: string
    formId: string
    submittedById: string | null
    status: $Enums.ResponseStatus
    createdAt: Date
    updatedAt: Date
    _count: FormResponseCountAggregateOutputType | null
    _min: FormResponseMinAggregateOutputType | null
    _max: FormResponseMaxAggregateOutputType | null
  }

  type GetFormResponseGroupByPayload<T extends FormResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormResponseGroupByOutputType[P]>
            : GetScalarType<T[P], FormResponseGroupByOutputType[P]>
        }
      >
    >


  export type FormResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    submittedById?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    submittedBy?: boolean | FormResponse$submittedByArgs<ExtArgs>
    items?: boolean | FormResponse$itemsArgs<ExtArgs>
    _count?: boolean | FormResponseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formResponse"]>

  export type FormResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formId?: boolean
    submittedById?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    form?: boolean | FormDefaultArgs<ExtArgs>
    submittedBy?: boolean | FormResponse$submittedByArgs<ExtArgs>
  }, ExtArgs["result"]["formResponse"]>

  export type FormResponseSelectScalar = {
    id?: boolean
    formId?: boolean
    submittedById?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    submittedBy?: boolean | FormResponse$submittedByArgs<ExtArgs>
    items?: boolean | FormResponse$itemsArgs<ExtArgs>
    _count?: boolean | FormResponseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormDefaultArgs<ExtArgs>
    submittedBy?: boolean | FormResponse$submittedByArgs<ExtArgs>
  }

  export type $FormResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormResponse"
    objects: {
      form: Prisma.$FormPayload<ExtArgs>
      submittedBy: Prisma.$UserPayload<ExtArgs> | null
      items: Prisma.$FormItemResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formId: string
      submittedById: string | null
      status: $Enums.ResponseStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formResponse"]>
    composites: {}
  }

  type FormResponseGetPayload<S extends boolean | null | undefined | FormResponseDefaultArgs> = $Result.GetResult<Prisma.$FormResponsePayload, S>

  type FormResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FormResponseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormResponseCountAggregateInputType | true
    }

  export interface FormResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormResponse'], meta: { name: 'FormResponse' } }
    /**
     * Find zero or one FormResponse that matches the filter.
     * @param {FormResponseFindUniqueArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormResponseFindUniqueArgs>(args: SelectSubset<T, FormResponseFindUniqueArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FormResponse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FormResponseFindUniqueOrThrowArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, FormResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FormResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindFirstArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormResponseFindFirstArgs>(args?: SelectSubset<T, FormResponseFindFirstArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FormResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindFirstOrThrowArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, FormResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FormResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormResponses
     * const formResponses = await prisma.formResponse.findMany()
     * 
     * // Get first 10 FormResponses
     * const formResponses = await prisma.formResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formResponseWithIdOnly = await prisma.formResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormResponseFindManyArgs>(args?: SelectSubset<T, FormResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FormResponse.
     * @param {FormResponseCreateArgs} args - Arguments to create a FormResponse.
     * @example
     * // Create one FormResponse
     * const FormResponse = await prisma.formResponse.create({
     *   data: {
     *     // ... data to create a FormResponse
     *   }
     * })
     * 
     */
    create<T extends FormResponseCreateArgs>(args: SelectSubset<T, FormResponseCreateArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FormResponses.
     * @param {FormResponseCreateManyArgs} args - Arguments to create many FormResponses.
     * @example
     * // Create many FormResponses
     * const formResponse = await prisma.formResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormResponseCreateManyArgs>(args?: SelectSubset<T, FormResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormResponses and returns the data saved in the database.
     * @param {FormResponseCreateManyAndReturnArgs} args - Arguments to create many FormResponses.
     * @example
     * // Create many FormResponses
     * const formResponse = await prisma.formResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormResponses and only return the `id`
     * const formResponseWithIdOnly = await prisma.formResponse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, FormResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FormResponse.
     * @param {FormResponseDeleteArgs} args - Arguments to delete one FormResponse.
     * @example
     * // Delete one FormResponse
     * const FormResponse = await prisma.formResponse.delete({
     *   where: {
     *     // ... filter to delete one FormResponse
     *   }
     * })
     * 
     */
    delete<T extends FormResponseDeleteArgs>(args: SelectSubset<T, FormResponseDeleteArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FormResponse.
     * @param {FormResponseUpdateArgs} args - Arguments to update one FormResponse.
     * @example
     * // Update one FormResponse
     * const formResponse = await prisma.formResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormResponseUpdateArgs>(args: SelectSubset<T, FormResponseUpdateArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FormResponses.
     * @param {FormResponseDeleteManyArgs} args - Arguments to filter FormResponses to delete.
     * @example
     * // Delete a few FormResponses
     * const { count } = await prisma.formResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormResponseDeleteManyArgs>(args?: SelectSubset<T, FormResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormResponses
     * const formResponse = await prisma.formResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormResponseUpdateManyArgs>(args: SelectSubset<T, FormResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FormResponse.
     * @param {FormResponseUpsertArgs} args - Arguments to update or create a FormResponse.
     * @example
     * // Update or create a FormResponse
     * const formResponse = await prisma.formResponse.upsert({
     *   create: {
     *     // ... data to create a FormResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormResponse we want to update
     *   }
     * })
     */
    upsert<T extends FormResponseUpsertArgs>(args: SelectSubset<T, FormResponseUpsertArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FormResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseCountArgs} args - Arguments to filter FormResponses to count.
     * @example
     * // Count the number of FormResponses
     * const count = await prisma.formResponse.count({
     *   where: {
     *     // ... the filter for the FormResponses we want to count
     *   }
     * })
    **/
    count<T extends FormResponseCountArgs>(
      args?: Subset<T, FormResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormResponseAggregateArgs>(args: Subset<T, FormResponseAggregateArgs>): Prisma.PrismaPromise<GetFormResponseAggregateType<T>>

    /**
     * Group by FormResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormResponseGroupByArgs['orderBy'] }
        : { orderBy?: FormResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormResponse model
   */
  readonly fields: FormResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends FormDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormDefaultArgs<ExtArgs>>): Prisma__FormClient<$Result.GetResult<Prisma.$FormPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    submittedBy<T extends FormResponse$submittedByArgs<ExtArgs> = {}>(args?: Subset<T, FormResponse$submittedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    items<T extends FormResponse$itemsArgs<ExtArgs> = {}>(args?: Subset<T, FormResponse$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormResponse model
   */ 
  interface FormResponseFieldRefs {
    readonly id: FieldRef<"FormResponse", 'String'>
    readonly formId: FieldRef<"FormResponse", 'String'>
    readonly submittedById: FieldRef<"FormResponse", 'String'>
    readonly status: FieldRef<"FormResponse", 'ResponseStatus'>
    readonly createdAt: FieldRef<"FormResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"FormResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormResponse findUnique
   */
  export type FormResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse findUniqueOrThrow
   */
  export type FormResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse findFirst
   */
  export type FormResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormResponses.
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormResponses.
     */
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * FormResponse findFirstOrThrow
   */
  export type FormResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormResponses.
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormResponses.
     */
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * FormResponse findMany
   */
  export type FormResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponses to fetch.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormResponses.
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * FormResponse create
   */
  export type FormResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a FormResponse.
     */
    data: XOR<FormResponseCreateInput, FormResponseUncheckedCreateInput>
  }

  /**
   * FormResponse createMany
   */
  export type FormResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormResponses.
     */
    data: FormResponseCreateManyInput | FormResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormResponse createManyAndReturn
   */
  export type FormResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FormResponses.
     */
    data: FormResponseCreateManyInput | FormResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormResponse update
   */
  export type FormResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a FormResponse.
     */
    data: XOR<FormResponseUpdateInput, FormResponseUncheckedUpdateInput>
    /**
     * Choose, which FormResponse to update.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse updateMany
   */
  export type FormResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormResponses.
     */
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyInput>
    /**
     * Filter which FormResponses to update
     */
    where?: FormResponseWhereInput
  }

  /**
   * FormResponse upsert
   */
  export type FormResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the FormResponse to update in case it exists.
     */
    where: FormResponseWhereUniqueInput
    /**
     * In case the FormResponse found by the `where` argument doesn't exist, create a new FormResponse with this data.
     */
    create: XOR<FormResponseCreateInput, FormResponseUncheckedCreateInput>
    /**
     * In case the FormResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormResponseUpdateInput, FormResponseUncheckedUpdateInput>
  }

  /**
   * FormResponse delete
   */
  export type FormResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter which FormResponse to delete.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse deleteMany
   */
  export type FormResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormResponses to delete
     */
    where?: FormResponseWhereInput
  }

  /**
   * FormResponse.submittedBy
   */
  export type FormResponse$submittedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * FormResponse.items
   */
  export type FormResponse$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    where?: FormItemResponseWhereInput
    orderBy?: FormItemResponseOrderByWithRelationInput | FormItemResponseOrderByWithRelationInput[]
    cursor?: FormItemResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormItemResponseScalarFieldEnum | FormItemResponseScalarFieldEnum[]
  }

  /**
   * FormResponse without action
   */
  export type FormResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
  }


  /**
   * Model FormItemResponse
   */

  export type AggregateFormItemResponse = {
    _count: FormItemResponseCountAggregateOutputType | null
    _min: FormItemResponseMinAggregateOutputType | null
    _max: FormItemResponseMaxAggregateOutputType | null
  }

  export type FormItemResponseMinAggregateOutputType = {
    id: string | null
    formResponseId: string | null
    formItemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormItemResponseMaxAggregateOutputType = {
    id: string | null
    formResponseId: string | null
    formItemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormItemResponseCountAggregateOutputType = {
    id: number
    formResponseId: number
    formItemId: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormItemResponseMinAggregateInputType = {
    id?: true
    formResponseId?: true
    formItemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormItemResponseMaxAggregateInputType = {
    id?: true
    formResponseId?: true
    formItemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormItemResponseCountAggregateInputType = {
    id?: true
    formResponseId?: true
    formItemId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormItemResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormItemResponse to aggregate.
     */
    where?: FormItemResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormItemResponses to fetch.
     */
    orderBy?: FormItemResponseOrderByWithRelationInput | FormItemResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormItemResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormItemResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormItemResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormItemResponses
    **/
    _count?: true | FormItemResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormItemResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormItemResponseMaxAggregateInputType
  }

  export type GetFormItemResponseAggregateType<T extends FormItemResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateFormItemResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormItemResponse[P]>
      : GetScalarType<T[P], AggregateFormItemResponse[P]>
  }




  export type FormItemResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormItemResponseWhereInput
    orderBy?: FormItemResponseOrderByWithAggregationInput | FormItemResponseOrderByWithAggregationInput[]
    by: FormItemResponseScalarFieldEnum[] | FormItemResponseScalarFieldEnum
    having?: FormItemResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormItemResponseCountAggregateInputType | true
    _min?: FormItemResponseMinAggregateInputType
    _max?: FormItemResponseMaxAggregateInputType
  }

  export type FormItemResponseGroupByOutputType = {
    id: string
    formResponseId: string
    formItemId: string
    value: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: FormItemResponseCountAggregateOutputType | null
    _min: FormItemResponseMinAggregateOutputType | null
    _max: FormItemResponseMaxAggregateOutputType | null
  }

  type GetFormItemResponseGroupByPayload<T extends FormItemResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormItemResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormItemResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormItemResponseGroupByOutputType[P]>
            : GetScalarType<T[P], FormItemResponseGroupByOutputType[P]>
        }
      >
    >


  export type FormItemResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formResponseId?: boolean
    formItemId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    formResponse?: boolean | FormResponseDefaultArgs<ExtArgs>
    formItem?: boolean | FormItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formItemResponse"]>

  export type FormItemResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    formResponseId?: boolean
    formItemId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    formResponse?: boolean | FormResponseDefaultArgs<ExtArgs>
    formItem?: boolean | FormItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formItemResponse"]>

  export type FormItemResponseSelectScalar = {
    id?: boolean
    formResponseId?: boolean
    formItemId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormItemResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formResponse?: boolean | FormResponseDefaultArgs<ExtArgs>
    formItem?: boolean | FormItemDefaultArgs<ExtArgs>
  }
  export type FormItemResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formResponse?: boolean | FormResponseDefaultArgs<ExtArgs>
    formItem?: boolean | FormItemDefaultArgs<ExtArgs>
  }

  export type $FormItemResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormItemResponse"
    objects: {
      formResponse: Prisma.$FormResponsePayload<ExtArgs>
      formItem: Prisma.$FormItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      formResponseId: string
      formItemId: string
      value: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formItemResponse"]>
    composites: {}
  }

  type FormItemResponseGetPayload<S extends boolean | null | undefined | FormItemResponseDefaultArgs> = $Result.GetResult<Prisma.$FormItemResponsePayload, S>

  type FormItemResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FormItemResponseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormItemResponseCountAggregateInputType | true
    }

  export interface FormItemResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormItemResponse'], meta: { name: 'FormItemResponse' } }
    /**
     * Find zero or one FormItemResponse that matches the filter.
     * @param {FormItemResponseFindUniqueArgs} args - Arguments to find a FormItemResponse
     * @example
     * // Get one FormItemResponse
     * const formItemResponse = await prisma.formItemResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormItemResponseFindUniqueArgs>(args: SelectSubset<T, FormItemResponseFindUniqueArgs<ExtArgs>>): Prisma__FormItemResponseClient<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FormItemResponse that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FormItemResponseFindUniqueOrThrowArgs} args - Arguments to find a FormItemResponse
     * @example
     * // Get one FormItemResponse
     * const formItemResponse = await prisma.formItemResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormItemResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, FormItemResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormItemResponseClient<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FormItemResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemResponseFindFirstArgs} args - Arguments to find a FormItemResponse
     * @example
     * // Get one FormItemResponse
     * const formItemResponse = await prisma.formItemResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormItemResponseFindFirstArgs>(args?: SelectSubset<T, FormItemResponseFindFirstArgs<ExtArgs>>): Prisma__FormItemResponseClient<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FormItemResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemResponseFindFirstOrThrowArgs} args - Arguments to find a FormItemResponse
     * @example
     * // Get one FormItemResponse
     * const formItemResponse = await prisma.formItemResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormItemResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, FormItemResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormItemResponseClient<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FormItemResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormItemResponses
     * const formItemResponses = await prisma.formItemResponse.findMany()
     * 
     * // Get first 10 FormItemResponses
     * const formItemResponses = await prisma.formItemResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formItemResponseWithIdOnly = await prisma.formItemResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormItemResponseFindManyArgs>(args?: SelectSubset<T, FormItemResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FormItemResponse.
     * @param {FormItemResponseCreateArgs} args - Arguments to create a FormItemResponse.
     * @example
     * // Create one FormItemResponse
     * const FormItemResponse = await prisma.formItemResponse.create({
     *   data: {
     *     // ... data to create a FormItemResponse
     *   }
     * })
     * 
     */
    create<T extends FormItemResponseCreateArgs>(args: SelectSubset<T, FormItemResponseCreateArgs<ExtArgs>>): Prisma__FormItemResponseClient<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FormItemResponses.
     * @param {FormItemResponseCreateManyArgs} args - Arguments to create many FormItemResponses.
     * @example
     * // Create many FormItemResponses
     * const formItemResponse = await prisma.formItemResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormItemResponseCreateManyArgs>(args?: SelectSubset<T, FormItemResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormItemResponses and returns the data saved in the database.
     * @param {FormItemResponseCreateManyAndReturnArgs} args - Arguments to create many FormItemResponses.
     * @example
     * // Create many FormItemResponses
     * const formItemResponse = await prisma.formItemResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormItemResponses and only return the `id`
     * const formItemResponseWithIdOnly = await prisma.formItemResponse.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormItemResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, FormItemResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FormItemResponse.
     * @param {FormItemResponseDeleteArgs} args - Arguments to delete one FormItemResponse.
     * @example
     * // Delete one FormItemResponse
     * const FormItemResponse = await prisma.formItemResponse.delete({
     *   where: {
     *     // ... filter to delete one FormItemResponse
     *   }
     * })
     * 
     */
    delete<T extends FormItemResponseDeleteArgs>(args: SelectSubset<T, FormItemResponseDeleteArgs<ExtArgs>>): Prisma__FormItemResponseClient<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FormItemResponse.
     * @param {FormItemResponseUpdateArgs} args - Arguments to update one FormItemResponse.
     * @example
     * // Update one FormItemResponse
     * const formItemResponse = await prisma.formItemResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormItemResponseUpdateArgs>(args: SelectSubset<T, FormItemResponseUpdateArgs<ExtArgs>>): Prisma__FormItemResponseClient<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FormItemResponses.
     * @param {FormItemResponseDeleteManyArgs} args - Arguments to filter FormItemResponses to delete.
     * @example
     * // Delete a few FormItemResponses
     * const { count } = await prisma.formItemResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormItemResponseDeleteManyArgs>(args?: SelectSubset<T, FormItemResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormItemResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormItemResponses
     * const formItemResponse = await prisma.formItemResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormItemResponseUpdateManyArgs>(args: SelectSubset<T, FormItemResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FormItemResponse.
     * @param {FormItemResponseUpsertArgs} args - Arguments to update or create a FormItemResponse.
     * @example
     * // Update or create a FormItemResponse
     * const formItemResponse = await prisma.formItemResponse.upsert({
     *   create: {
     *     // ... data to create a FormItemResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormItemResponse we want to update
     *   }
     * })
     */
    upsert<T extends FormItemResponseUpsertArgs>(args: SelectSubset<T, FormItemResponseUpsertArgs<ExtArgs>>): Prisma__FormItemResponseClient<$Result.GetResult<Prisma.$FormItemResponsePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FormItemResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemResponseCountArgs} args - Arguments to filter FormItemResponses to count.
     * @example
     * // Count the number of FormItemResponses
     * const count = await prisma.formItemResponse.count({
     *   where: {
     *     // ... the filter for the FormItemResponses we want to count
     *   }
     * })
    **/
    count<T extends FormItemResponseCountArgs>(
      args?: Subset<T, FormItemResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormItemResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormItemResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormItemResponseAggregateArgs>(args: Subset<T, FormItemResponseAggregateArgs>): Prisma.PrismaPromise<GetFormItemResponseAggregateType<T>>

    /**
     * Group by FormItemResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormItemResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormItemResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormItemResponseGroupByArgs['orderBy'] }
        : { orderBy?: FormItemResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormItemResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormItemResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormItemResponse model
   */
  readonly fields: FormItemResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormItemResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormItemResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formResponse<T extends FormResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormResponseDefaultArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    formItem<T extends FormItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormItemDefaultArgs<ExtArgs>>): Prisma__FormItemClient<$Result.GetResult<Prisma.$FormItemPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormItemResponse model
   */ 
  interface FormItemResponseFieldRefs {
    readonly id: FieldRef<"FormItemResponse", 'String'>
    readonly formResponseId: FieldRef<"FormItemResponse", 'String'>
    readonly formItemId: FieldRef<"FormItemResponse", 'String'>
    readonly value: FieldRef<"FormItemResponse", 'Json'>
    readonly createdAt: FieldRef<"FormItemResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"FormItemResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormItemResponse findUnique
   */
  export type FormItemResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormItemResponse to fetch.
     */
    where: FormItemResponseWhereUniqueInput
  }

  /**
   * FormItemResponse findUniqueOrThrow
   */
  export type FormItemResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormItemResponse to fetch.
     */
    where: FormItemResponseWhereUniqueInput
  }

  /**
   * FormItemResponse findFirst
   */
  export type FormItemResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormItemResponse to fetch.
     */
    where?: FormItemResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormItemResponses to fetch.
     */
    orderBy?: FormItemResponseOrderByWithRelationInput | FormItemResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormItemResponses.
     */
    cursor?: FormItemResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormItemResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormItemResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormItemResponses.
     */
    distinct?: FormItemResponseScalarFieldEnum | FormItemResponseScalarFieldEnum[]
  }

  /**
   * FormItemResponse findFirstOrThrow
   */
  export type FormItemResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormItemResponse to fetch.
     */
    where?: FormItemResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormItemResponses to fetch.
     */
    orderBy?: FormItemResponseOrderByWithRelationInput | FormItemResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormItemResponses.
     */
    cursor?: FormItemResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormItemResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormItemResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormItemResponses.
     */
    distinct?: FormItemResponseScalarFieldEnum | FormItemResponseScalarFieldEnum[]
  }

  /**
   * FormItemResponse findMany
   */
  export type FormItemResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormItemResponses to fetch.
     */
    where?: FormItemResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormItemResponses to fetch.
     */
    orderBy?: FormItemResponseOrderByWithRelationInput | FormItemResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormItemResponses.
     */
    cursor?: FormItemResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormItemResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormItemResponses.
     */
    skip?: number
    distinct?: FormItemResponseScalarFieldEnum | FormItemResponseScalarFieldEnum[]
  }

  /**
   * FormItemResponse create
   */
  export type FormItemResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a FormItemResponse.
     */
    data: XOR<FormItemResponseCreateInput, FormItemResponseUncheckedCreateInput>
  }

  /**
   * FormItemResponse createMany
   */
  export type FormItemResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormItemResponses.
     */
    data: FormItemResponseCreateManyInput | FormItemResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormItemResponse createManyAndReturn
   */
  export type FormItemResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FormItemResponses.
     */
    data: FormItemResponseCreateManyInput | FormItemResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormItemResponse update
   */
  export type FormItemResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a FormItemResponse.
     */
    data: XOR<FormItemResponseUpdateInput, FormItemResponseUncheckedUpdateInput>
    /**
     * Choose, which FormItemResponse to update.
     */
    where: FormItemResponseWhereUniqueInput
  }

  /**
   * FormItemResponse updateMany
   */
  export type FormItemResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormItemResponses.
     */
    data: XOR<FormItemResponseUpdateManyMutationInput, FormItemResponseUncheckedUpdateManyInput>
    /**
     * Filter which FormItemResponses to update
     */
    where?: FormItemResponseWhereInput
  }

  /**
   * FormItemResponse upsert
   */
  export type FormItemResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the FormItemResponse to update in case it exists.
     */
    where: FormItemResponseWhereUniqueInput
    /**
     * In case the FormItemResponse found by the `where` argument doesn't exist, create a new FormItemResponse with this data.
     */
    create: XOR<FormItemResponseCreateInput, FormItemResponseUncheckedCreateInput>
    /**
     * In case the FormItemResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormItemResponseUpdateInput, FormItemResponseUncheckedUpdateInput>
  }

  /**
   * FormItemResponse delete
   */
  export type FormItemResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
    /**
     * Filter which FormItemResponse to delete.
     */
    where: FormItemResponseWhereUniqueInput
  }

  /**
   * FormItemResponse deleteMany
   */
  export type FormItemResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormItemResponses to delete
     */
    where?: FormItemResponseWhereInput
  }

  /**
   * FormItemResponse without action
   */
  export type FormItemResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormItemResponse
     */
    select?: FormItemResponseSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormItemResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SalesforceConfigScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    instanceUrl: 'instanceUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SalesforceConfigScalarFieldEnum = (typeof SalesforceConfigScalarFieldEnum)[keyof typeof SalesforceConfigScalarFieldEnum]


  export const FormScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    salesforceId: 'salesforceId',
    createdById: 'createdById',
    status: 'status',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormScalarFieldEnum = (typeof FormScalarFieldEnum)[keyof typeof FormScalarFieldEnum]


  export const FormItemScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    label: 'label',
    type: 'type',
    required: 'required',
    order: 'order',
    options: 'options',
    validation: 'validation',
    salesforceId: 'salesforceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormItemScalarFieldEnum = (typeof FormItemScalarFieldEnum)[keyof typeof FormItemScalarFieldEnum]


  export const FormResponseScalarFieldEnum: {
    id: 'id',
    formId: 'formId',
    submittedById: 'submittedById',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormResponseScalarFieldEnum = (typeof FormResponseScalarFieldEnum)[keyof typeof FormResponseScalarFieldEnum]


  export const FormItemResponseScalarFieldEnum: {
    id: 'id',
    formResponseId: 'formResponseId',
    formItemId: 'formItemId',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormItemResponseScalarFieldEnum = (typeof FormItemResponseScalarFieldEnum)[keyof typeof FormItemResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'FormStatus'
   */
  export type EnumFormStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormStatus'>
    


  /**
   * Reference to a field of type 'FormStatus[]'
   */
  export type ListEnumFormStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormStatus[]'>
    


  /**
   * Reference to a field of type 'FormItemType'
   */
  export type EnumFormItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormItemType'>
    


  /**
   * Reference to a field of type 'FormItemType[]'
   */
  export type ListEnumFormItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FormItemType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ResponseStatus'
   */
  export type EnumResponseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResponseStatus'>
    


  /**
   * Reference to a field of type 'ResponseStatus[]'
   */
  export type ListEnumResponseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ResponseStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    salesforceConfigs?: SalesforceConfigListRelationFilter
    forms?: FormListRelationFilter
    formResponses?: FormResponseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    salesforceConfigs?: SalesforceConfigOrderByRelationAggregateInput
    forms?: FormOrderByRelationAggregateInput
    formResponses?: FormResponseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    salesforceConfigs?: SalesforceConfigListRelationFilter
    forms?: FormListRelationFilter
    formResponses?: FormResponseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SalesforceConfigWhereInput = {
    AND?: SalesforceConfigWhereInput | SalesforceConfigWhereInput[]
    OR?: SalesforceConfigWhereInput[]
    NOT?: SalesforceConfigWhereInput | SalesforceConfigWhereInput[]
    id?: StringFilter<"SalesforceConfig"> | string
    userId?: StringFilter<"SalesforceConfig"> | string
    accessToken?: StringFilter<"SalesforceConfig"> | string
    refreshToken?: StringFilter<"SalesforceConfig"> | string
    instanceUrl?: StringFilter<"SalesforceConfig"> | string
    createdAt?: DateTimeFilter<"SalesforceConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SalesforceConfig"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SalesforceConfigOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    instanceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SalesforceConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalesforceConfigWhereInput | SalesforceConfigWhereInput[]
    OR?: SalesforceConfigWhereInput[]
    NOT?: SalesforceConfigWhereInput | SalesforceConfigWhereInput[]
    userId?: StringFilter<"SalesforceConfig"> | string
    accessToken?: StringFilter<"SalesforceConfig"> | string
    refreshToken?: StringFilter<"SalesforceConfig"> | string
    instanceUrl?: StringFilter<"SalesforceConfig"> | string
    createdAt?: DateTimeFilter<"SalesforceConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SalesforceConfig"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type SalesforceConfigOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    instanceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SalesforceConfigCountOrderByAggregateInput
    _max?: SalesforceConfigMaxOrderByAggregateInput
    _min?: SalesforceConfigMinOrderByAggregateInput
  }

  export type SalesforceConfigScalarWhereWithAggregatesInput = {
    AND?: SalesforceConfigScalarWhereWithAggregatesInput | SalesforceConfigScalarWhereWithAggregatesInput[]
    OR?: SalesforceConfigScalarWhereWithAggregatesInput[]
    NOT?: SalesforceConfigScalarWhereWithAggregatesInput | SalesforceConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalesforceConfig"> | string
    userId?: StringWithAggregatesFilter<"SalesforceConfig"> | string
    accessToken?: StringWithAggregatesFilter<"SalesforceConfig"> | string
    refreshToken?: StringWithAggregatesFilter<"SalesforceConfig"> | string
    instanceUrl?: StringWithAggregatesFilter<"SalesforceConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SalesforceConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SalesforceConfig"> | Date | string
  }

  export type FormWhereInput = {
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    id?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    salesforceId?: StringNullableFilter<"Form"> | string | null
    createdById?: StringFilter<"Form"> | string
    status?: EnumFormStatusFilter<"Form"> | $Enums.FormStatus
    expiresAt?: DateTimeNullableFilter<"Form"> | Date | string | null
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    formItems?: FormItemListRelationFilter
    formResponses?: FormResponseListRelationFilter
  }

  export type FormOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    salesforceId?: SortOrderInput | SortOrder
    createdById?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    formItems?: FormItemOrderByRelationAggregateInput
    formResponses?: FormResponseOrderByRelationAggregateInput
  }

  export type FormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormWhereInput | FormWhereInput[]
    OR?: FormWhereInput[]
    NOT?: FormWhereInput | FormWhereInput[]
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    salesforceId?: StringNullableFilter<"Form"> | string | null
    createdById?: StringFilter<"Form"> | string
    status?: EnumFormStatusFilter<"Form"> | $Enums.FormStatus
    expiresAt?: DateTimeNullableFilter<"Form"> | Date | string | null
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    formItems?: FormItemListRelationFilter
    formResponses?: FormResponseListRelationFilter
  }, "id">

  export type FormOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    salesforceId?: SortOrderInput | SortOrder
    createdById?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormCountOrderByAggregateInput
    _max?: FormMaxOrderByAggregateInput
    _min?: FormMinOrderByAggregateInput
  }

  export type FormScalarWhereWithAggregatesInput = {
    AND?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    OR?: FormScalarWhereWithAggregatesInput[]
    NOT?: FormScalarWhereWithAggregatesInput | FormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Form"> | string
    title?: StringWithAggregatesFilter<"Form"> | string
    description?: StringNullableWithAggregatesFilter<"Form"> | string | null
    salesforceId?: StringNullableWithAggregatesFilter<"Form"> | string | null
    createdById?: StringWithAggregatesFilter<"Form"> | string
    status?: EnumFormStatusWithAggregatesFilter<"Form"> | $Enums.FormStatus
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Form"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Form"> | Date | string
  }

  export type FormItemWhereInput = {
    AND?: FormItemWhereInput | FormItemWhereInput[]
    OR?: FormItemWhereInput[]
    NOT?: FormItemWhereInput | FormItemWhereInput[]
    id?: StringFilter<"FormItem"> | string
    formId?: StringFilter<"FormItem"> | string
    label?: StringFilter<"FormItem"> | string
    type?: EnumFormItemTypeFilter<"FormItem"> | $Enums.FormItemType
    required?: BoolFilter<"FormItem"> | boolean
    order?: IntFilter<"FormItem"> | number
    options?: JsonNullableFilter<"FormItem">
    validation?: JsonNullableFilter<"FormItem">
    salesforceId?: StringNullableFilter<"FormItem"> | string | null
    createdAt?: DateTimeFilter<"FormItem"> | Date | string
    updatedAt?: DateTimeFilter<"FormItem"> | Date | string
    form?: XOR<FormRelationFilter, FormWhereInput>
    responses?: FormItemResponseListRelationFilter
  }

  export type FormItemOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    options?: SortOrderInput | SortOrder
    validation?: SortOrderInput | SortOrder
    salesforceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    form?: FormOrderByWithRelationInput
    responses?: FormItemResponseOrderByRelationAggregateInput
  }

  export type FormItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormItemWhereInput | FormItemWhereInput[]
    OR?: FormItemWhereInput[]
    NOT?: FormItemWhereInput | FormItemWhereInput[]
    formId?: StringFilter<"FormItem"> | string
    label?: StringFilter<"FormItem"> | string
    type?: EnumFormItemTypeFilter<"FormItem"> | $Enums.FormItemType
    required?: BoolFilter<"FormItem"> | boolean
    order?: IntFilter<"FormItem"> | number
    options?: JsonNullableFilter<"FormItem">
    validation?: JsonNullableFilter<"FormItem">
    salesforceId?: StringNullableFilter<"FormItem"> | string | null
    createdAt?: DateTimeFilter<"FormItem"> | Date | string
    updatedAt?: DateTimeFilter<"FormItem"> | Date | string
    form?: XOR<FormRelationFilter, FormWhereInput>
    responses?: FormItemResponseListRelationFilter
  }, "id">

  export type FormItemOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    options?: SortOrderInput | SortOrder
    validation?: SortOrderInput | SortOrder
    salesforceId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormItemCountOrderByAggregateInput
    _avg?: FormItemAvgOrderByAggregateInput
    _max?: FormItemMaxOrderByAggregateInput
    _min?: FormItemMinOrderByAggregateInput
    _sum?: FormItemSumOrderByAggregateInput
  }

  export type FormItemScalarWhereWithAggregatesInput = {
    AND?: FormItemScalarWhereWithAggregatesInput | FormItemScalarWhereWithAggregatesInput[]
    OR?: FormItemScalarWhereWithAggregatesInput[]
    NOT?: FormItemScalarWhereWithAggregatesInput | FormItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormItem"> | string
    formId?: StringWithAggregatesFilter<"FormItem"> | string
    label?: StringWithAggregatesFilter<"FormItem"> | string
    type?: EnumFormItemTypeWithAggregatesFilter<"FormItem"> | $Enums.FormItemType
    required?: BoolWithAggregatesFilter<"FormItem"> | boolean
    order?: IntWithAggregatesFilter<"FormItem"> | number
    options?: JsonNullableWithAggregatesFilter<"FormItem">
    validation?: JsonNullableWithAggregatesFilter<"FormItem">
    salesforceId?: StringNullableWithAggregatesFilter<"FormItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FormItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormItem"> | Date | string
  }

  export type FormResponseWhereInput = {
    AND?: FormResponseWhereInput | FormResponseWhereInput[]
    OR?: FormResponseWhereInput[]
    NOT?: FormResponseWhereInput | FormResponseWhereInput[]
    id?: StringFilter<"FormResponse"> | string
    formId?: StringFilter<"FormResponse"> | string
    submittedById?: StringNullableFilter<"FormResponse"> | string | null
    status?: EnumResponseStatusFilter<"FormResponse"> | $Enums.ResponseStatus
    createdAt?: DateTimeFilter<"FormResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FormResponse"> | Date | string
    form?: XOR<FormRelationFilter, FormWhereInput>
    submittedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    items?: FormItemResponseListRelationFilter
  }

  export type FormResponseOrderByWithRelationInput = {
    id?: SortOrder
    formId?: SortOrder
    submittedById?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    form?: FormOrderByWithRelationInput
    submittedBy?: UserOrderByWithRelationInput
    items?: FormItemResponseOrderByRelationAggregateInput
  }

  export type FormResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormResponseWhereInput | FormResponseWhereInput[]
    OR?: FormResponseWhereInput[]
    NOT?: FormResponseWhereInput | FormResponseWhereInput[]
    formId?: StringFilter<"FormResponse"> | string
    submittedById?: StringNullableFilter<"FormResponse"> | string | null
    status?: EnumResponseStatusFilter<"FormResponse"> | $Enums.ResponseStatus
    createdAt?: DateTimeFilter<"FormResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FormResponse"> | Date | string
    form?: XOR<FormRelationFilter, FormWhereInput>
    submittedBy?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    items?: FormItemResponseListRelationFilter
  }, "id">

  export type FormResponseOrderByWithAggregationInput = {
    id?: SortOrder
    formId?: SortOrder
    submittedById?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormResponseCountOrderByAggregateInput
    _max?: FormResponseMaxOrderByAggregateInput
    _min?: FormResponseMinOrderByAggregateInput
  }

  export type FormResponseScalarWhereWithAggregatesInput = {
    AND?: FormResponseScalarWhereWithAggregatesInput | FormResponseScalarWhereWithAggregatesInput[]
    OR?: FormResponseScalarWhereWithAggregatesInput[]
    NOT?: FormResponseScalarWhereWithAggregatesInput | FormResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormResponse"> | string
    formId?: StringWithAggregatesFilter<"FormResponse"> | string
    submittedById?: StringNullableWithAggregatesFilter<"FormResponse"> | string | null
    status?: EnumResponseStatusWithAggregatesFilter<"FormResponse"> | $Enums.ResponseStatus
    createdAt?: DateTimeWithAggregatesFilter<"FormResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormResponse"> | Date | string
  }

  export type FormItemResponseWhereInput = {
    AND?: FormItemResponseWhereInput | FormItemResponseWhereInput[]
    OR?: FormItemResponseWhereInput[]
    NOT?: FormItemResponseWhereInput | FormItemResponseWhereInput[]
    id?: StringFilter<"FormItemResponse"> | string
    formResponseId?: StringFilter<"FormItemResponse"> | string
    formItemId?: StringFilter<"FormItemResponse"> | string
    value?: JsonFilter<"FormItemResponse">
    createdAt?: DateTimeFilter<"FormItemResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FormItemResponse"> | Date | string
    formResponse?: XOR<FormResponseRelationFilter, FormResponseWhereInput>
    formItem?: XOR<FormItemRelationFilter, FormItemWhereInput>
  }

  export type FormItemResponseOrderByWithRelationInput = {
    id?: SortOrder
    formResponseId?: SortOrder
    formItemId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    formResponse?: FormResponseOrderByWithRelationInput
    formItem?: FormItemOrderByWithRelationInput
  }

  export type FormItemResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FormItemResponseWhereInput | FormItemResponseWhereInput[]
    OR?: FormItemResponseWhereInput[]
    NOT?: FormItemResponseWhereInput | FormItemResponseWhereInput[]
    formResponseId?: StringFilter<"FormItemResponse"> | string
    formItemId?: StringFilter<"FormItemResponse"> | string
    value?: JsonFilter<"FormItemResponse">
    createdAt?: DateTimeFilter<"FormItemResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FormItemResponse"> | Date | string
    formResponse?: XOR<FormResponseRelationFilter, FormResponseWhereInput>
    formItem?: XOR<FormItemRelationFilter, FormItemWhereInput>
  }, "id">

  export type FormItemResponseOrderByWithAggregationInput = {
    id?: SortOrder
    formResponseId?: SortOrder
    formItemId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormItemResponseCountOrderByAggregateInput
    _max?: FormItemResponseMaxOrderByAggregateInput
    _min?: FormItemResponseMinOrderByAggregateInput
  }

  export type FormItemResponseScalarWhereWithAggregatesInput = {
    AND?: FormItemResponseScalarWhereWithAggregatesInput | FormItemResponseScalarWhereWithAggregatesInput[]
    OR?: FormItemResponseScalarWhereWithAggregatesInput[]
    NOT?: FormItemResponseScalarWhereWithAggregatesInput | FormItemResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FormItemResponse"> | string
    formResponseId?: StringWithAggregatesFilter<"FormItemResponse"> | string
    formItemId?: StringWithAggregatesFilter<"FormItemResponse"> | string
    value?: JsonWithAggregatesFilter<"FormItemResponse">
    createdAt?: DateTimeWithAggregatesFilter<"FormItemResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormItemResponse"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    salesforceConfigs?: SalesforceConfigCreateNestedManyWithoutUserInput
    forms?: FormCreateNestedManyWithoutCreatedByInput
    formResponses?: FormResponseCreateNestedManyWithoutSubmittedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    salesforceConfigs?: SalesforceConfigUncheckedCreateNestedManyWithoutUserInput
    forms?: FormUncheckedCreateNestedManyWithoutCreatedByInput
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutSubmittedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesforceConfigs?: SalesforceConfigUpdateManyWithoutUserNestedInput
    forms?: FormUpdateManyWithoutCreatedByNestedInput
    formResponses?: FormResponseUpdateManyWithoutSubmittedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesforceConfigs?: SalesforceConfigUncheckedUpdateManyWithoutUserNestedInput
    forms?: FormUncheckedUpdateManyWithoutCreatedByNestedInput
    formResponses?: FormResponseUncheckedUpdateManyWithoutSubmittedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesforceConfigCreateInput = {
    id?: string
    accessToken: string
    refreshToken: string
    instanceUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSalesforceConfigsInput
  }

  export type SalesforceConfigUncheckedCreateInput = {
    id?: string
    userId: string
    accessToken: string
    refreshToken: string
    instanceUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesforceConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    instanceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalesforceConfigsNestedInput
  }

  export type SalesforceConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    instanceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesforceConfigCreateManyInput = {
    id?: string
    userId: string
    accessToken: string
    refreshToken: string
    instanceUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesforceConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    instanceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesforceConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    instanceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormCreateInput = {
    id?: string
    title: string
    description?: string | null
    salesforceId?: string | null
    status?: $Enums.FormStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutFormsInput
    formItems?: FormItemCreateNestedManyWithoutFormInput
    formResponses?: FormResponseCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    salesforceId?: string | null
    createdById: string
    status?: $Enums.FormStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    formItems?: FormItemUncheckedCreateNestedManyWithoutFormInput
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutFormsNestedInput
    formItems?: FormItemUpdateManyWithoutFormNestedInput
    formResponses?: FormResponseUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formItems?: FormItemUncheckedUpdateManyWithoutFormNestedInput
    formResponses?: FormResponseUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    salesforceId?: string | null
    createdById: string
    status?: $Enums.FormStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemCreateInput = {
    id?: string
    label: string
    type: $Enums.FormItemType
    required?: boolean
    order: number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutFormItemsInput
    responses?: FormItemResponseCreateNestedManyWithoutFormItemInput
  }

  export type FormItemUncheckedCreateInput = {
    id?: string
    formId: string
    label: string
    type: $Enums.FormItemType
    required?: boolean
    order: number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: FormItemResponseUncheckedCreateNestedManyWithoutFormItemInput
  }

  export type FormItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFormItemTypeFieldUpdateOperationsInput | $Enums.FormItemType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutFormItemsNestedInput
    responses?: FormItemResponseUpdateManyWithoutFormItemNestedInput
  }

  export type FormItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFormItemTypeFieldUpdateOperationsInput | $Enums.FormItemType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: FormItemResponseUncheckedUpdateManyWithoutFormItemNestedInput
  }

  export type FormItemCreateManyInput = {
    id?: string
    formId: string
    label: string
    type: $Enums.FormItemType
    required?: boolean
    order: number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFormItemTypeFieldUpdateOperationsInput | $Enums.FormItemType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFormItemTypeFieldUpdateOperationsInput | $Enums.FormItemType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormResponseCreateInput = {
    id?: string
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutFormResponsesInput
    submittedBy?: UserCreateNestedOneWithoutFormResponsesInput
    items?: FormItemResponseCreateNestedManyWithoutFormResponseInput
  }

  export type FormResponseUncheckedCreateInput = {
    id?: string
    formId: string
    submittedById?: string | null
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: FormItemResponseUncheckedCreateNestedManyWithoutFormResponseInput
  }

  export type FormResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutFormResponsesNestedInput
    submittedBy?: UserUpdateOneWithoutFormResponsesNestedInput
    items?: FormItemResponseUpdateManyWithoutFormResponseNestedInput
  }

  export type FormResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    submittedById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: FormItemResponseUncheckedUpdateManyWithoutFormResponseNestedInput
  }

  export type FormResponseCreateManyInput = {
    id?: string
    formId: string
    submittedById?: string | null
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    submittedById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemResponseCreateInput = {
    id?: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponse: FormResponseCreateNestedOneWithoutItemsInput
    formItem: FormItemCreateNestedOneWithoutResponsesInput
  }

  export type FormItemResponseUncheckedCreateInput = {
    id?: string
    formResponseId: string
    formItemId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormItemResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponse?: FormResponseUpdateOneRequiredWithoutItemsNestedInput
    formItem?: FormItemUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type FormItemResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    formResponseId?: StringFieldUpdateOperationsInput | string
    formItemId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemResponseCreateManyInput = {
    id?: string
    formResponseId: string
    formItemId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormItemResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    formResponseId?: StringFieldUpdateOperationsInput | string
    formItemId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SalesforceConfigListRelationFilter = {
    every?: SalesforceConfigWhereInput
    some?: SalesforceConfigWhereInput
    none?: SalesforceConfigWhereInput
  }

  export type FormListRelationFilter = {
    every?: FormWhereInput
    some?: FormWhereInput
    none?: FormWhereInput
  }

  export type FormResponseListRelationFilter = {
    every?: FormResponseWhereInput
    some?: FormResponseWhereInput
    none?: FormResponseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SalesforceConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SalesforceConfigCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    instanceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesforceConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    instanceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SalesforceConfigMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    instanceUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFormStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FormStatus | EnumFormStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FormStatus[] | ListEnumFormStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormStatus[] | ListEnumFormStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFormStatusFilter<$PrismaModel> | $Enums.FormStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FormItemListRelationFilter = {
    every?: FormItemWhereInput
    some?: FormItemWhereInput
    none?: FormItemWhereInput
  }

  export type FormItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salesforceId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salesforceId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    salesforceId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFormStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormStatus | EnumFormStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FormStatus[] | ListEnumFormStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormStatus[] | ListEnumFormStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFormStatusWithAggregatesFilter<$PrismaModel> | $Enums.FormStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormStatusFilter<$PrismaModel>
    _max?: NestedEnumFormStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumFormItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FormItemType | EnumFormItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormItemType[] | ListEnumFormItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormItemType[] | ListEnumFormItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFormItemTypeFilter<$PrismaModel> | $Enums.FormItemType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FormRelationFilter = {
    is?: FormWhereInput
    isNot?: FormWhereInput
  }

  export type FormItemResponseListRelationFilter = {
    every?: FormItemResponseWhereInput
    some?: FormItemResponseWhereInput
    none?: FormItemResponseWhereInput
  }

  export type FormItemResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormItemCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    options?: SortOrder
    validation?: SortOrder
    salesforceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FormItemMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    salesforceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormItemMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    label?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    salesforceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumFormItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormItemType | EnumFormItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormItemType[] | ListEnumFormItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormItemType[] | ListEnumFormItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFormItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.FormItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormItemTypeFilter<$PrismaModel>
    _max?: NestedEnumFormItemTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumResponseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStatus | EnumResponseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStatusFilter<$PrismaModel> | $Enums.ResponseStatus
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FormResponseCountOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    submittedById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    submittedById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormResponseMinOrderByAggregateInput = {
    id?: SortOrder
    formId?: SortOrder
    submittedById?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumResponseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStatus | EnumResponseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResponseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResponseStatusFilter<$PrismaModel>
    _max?: NestedEnumResponseStatusFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FormResponseRelationFilter = {
    is?: FormResponseWhereInput
    isNot?: FormResponseWhereInput
  }

  export type FormItemRelationFilter = {
    is?: FormItemWhereInput
    isNot?: FormItemWhereInput
  }

  export type FormItemResponseCountOrderByAggregateInput = {
    id?: SortOrder
    formResponseId?: SortOrder
    formItemId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormItemResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    formResponseId?: SortOrder
    formItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormItemResponseMinOrderByAggregateInput = {
    id?: SortOrder
    formResponseId?: SortOrder
    formItemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SalesforceConfigCreateNestedManyWithoutUserInput = {
    create?: XOR<SalesforceConfigCreateWithoutUserInput, SalesforceConfigUncheckedCreateWithoutUserInput> | SalesforceConfigCreateWithoutUserInput[] | SalesforceConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalesforceConfigCreateOrConnectWithoutUserInput | SalesforceConfigCreateOrConnectWithoutUserInput[]
    createMany?: SalesforceConfigCreateManyUserInputEnvelope
    connect?: SalesforceConfigWhereUniqueInput | SalesforceConfigWhereUniqueInput[]
  }

  export type FormCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FormCreateWithoutCreatedByInput, FormUncheckedCreateWithoutCreatedByInput> | FormCreateWithoutCreatedByInput[] | FormUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FormCreateOrConnectWithoutCreatedByInput | FormCreateOrConnectWithoutCreatedByInput[]
    createMany?: FormCreateManyCreatedByInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type FormResponseCreateNestedManyWithoutSubmittedByInput = {
    create?: XOR<FormResponseCreateWithoutSubmittedByInput, FormResponseUncheckedCreateWithoutSubmittedByInput> | FormResponseCreateWithoutSubmittedByInput[] | FormResponseUncheckedCreateWithoutSubmittedByInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutSubmittedByInput | FormResponseCreateOrConnectWithoutSubmittedByInput[]
    createMany?: FormResponseCreateManySubmittedByInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type SalesforceConfigUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SalesforceConfigCreateWithoutUserInput, SalesforceConfigUncheckedCreateWithoutUserInput> | SalesforceConfigCreateWithoutUserInput[] | SalesforceConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalesforceConfigCreateOrConnectWithoutUserInput | SalesforceConfigCreateOrConnectWithoutUserInput[]
    createMany?: SalesforceConfigCreateManyUserInputEnvelope
    connect?: SalesforceConfigWhereUniqueInput | SalesforceConfigWhereUniqueInput[]
  }

  export type FormUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FormCreateWithoutCreatedByInput, FormUncheckedCreateWithoutCreatedByInput> | FormCreateWithoutCreatedByInput[] | FormUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FormCreateOrConnectWithoutCreatedByInput | FormCreateOrConnectWithoutCreatedByInput[]
    createMany?: FormCreateManyCreatedByInputEnvelope
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
  }

  export type FormResponseUncheckedCreateNestedManyWithoutSubmittedByInput = {
    create?: XOR<FormResponseCreateWithoutSubmittedByInput, FormResponseUncheckedCreateWithoutSubmittedByInput> | FormResponseCreateWithoutSubmittedByInput[] | FormResponseUncheckedCreateWithoutSubmittedByInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutSubmittedByInput | FormResponseCreateOrConnectWithoutSubmittedByInput[]
    createMany?: FormResponseCreateManySubmittedByInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SalesforceConfigUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalesforceConfigCreateWithoutUserInput, SalesforceConfigUncheckedCreateWithoutUserInput> | SalesforceConfigCreateWithoutUserInput[] | SalesforceConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalesforceConfigCreateOrConnectWithoutUserInput | SalesforceConfigCreateOrConnectWithoutUserInput[]
    upsert?: SalesforceConfigUpsertWithWhereUniqueWithoutUserInput | SalesforceConfigUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalesforceConfigCreateManyUserInputEnvelope
    set?: SalesforceConfigWhereUniqueInput | SalesforceConfigWhereUniqueInput[]
    disconnect?: SalesforceConfigWhereUniqueInput | SalesforceConfigWhereUniqueInput[]
    delete?: SalesforceConfigWhereUniqueInput | SalesforceConfigWhereUniqueInput[]
    connect?: SalesforceConfigWhereUniqueInput | SalesforceConfigWhereUniqueInput[]
    update?: SalesforceConfigUpdateWithWhereUniqueWithoutUserInput | SalesforceConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalesforceConfigUpdateManyWithWhereWithoutUserInput | SalesforceConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalesforceConfigScalarWhereInput | SalesforceConfigScalarWhereInput[]
  }

  export type FormUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FormCreateWithoutCreatedByInput, FormUncheckedCreateWithoutCreatedByInput> | FormCreateWithoutCreatedByInput[] | FormUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FormCreateOrConnectWithoutCreatedByInput | FormCreateOrConnectWithoutCreatedByInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutCreatedByInput | FormUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FormCreateManyCreatedByInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutCreatedByInput | FormUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FormUpdateManyWithWhereWithoutCreatedByInput | FormUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type FormResponseUpdateManyWithoutSubmittedByNestedInput = {
    create?: XOR<FormResponseCreateWithoutSubmittedByInput, FormResponseUncheckedCreateWithoutSubmittedByInput> | FormResponseCreateWithoutSubmittedByInput[] | FormResponseUncheckedCreateWithoutSubmittedByInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutSubmittedByInput | FormResponseCreateOrConnectWithoutSubmittedByInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutSubmittedByInput | FormResponseUpsertWithWhereUniqueWithoutSubmittedByInput[]
    createMany?: FormResponseCreateManySubmittedByInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutSubmittedByInput | FormResponseUpdateWithWhereUniqueWithoutSubmittedByInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutSubmittedByInput | FormResponseUpdateManyWithWhereWithoutSubmittedByInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type SalesforceConfigUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalesforceConfigCreateWithoutUserInput, SalesforceConfigUncheckedCreateWithoutUserInput> | SalesforceConfigCreateWithoutUserInput[] | SalesforceConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalesforceConfigCreateOrConnectWithoutUserInput | SalesforceConfigCreateOrConnectWithoutUserInput[]
    upsert?: SalesforceConfigUpsertWithWhereUniqueWithoutUserInput | SalesforceConfigUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalesforceConfigCreateManyUserInputEnvelope
    set?: SalesforceConfigWhereUniqueInput | SalesforceConfigWhereUniqueInput[]
    disconnect?: SalesforceConfigWhereUniqueInput | SalesforceConfigWhereUniqueInput[]
    delete?: SalesforceConfigWhereUniqueInput | SalesforceConfigWhereUniqueInput[]
    connect?: SalesforceConfigWhereUniqueInput | SalesforceConfigWhereUniqueInput[]
    update?: SalesforceConfigUpdateWithWhereUniqueWithoutUserInput | SalesforceConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalesforceConfigUpdateManyWithWhereWithoutUserInput | SalesforceConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalesforceConfigScalarWhereInput | SalesforceConfigScalarWhereInput[]
  }

  export type FormUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FormCreateWithoutCreatedByInput, FormUncheckedCreateWithoutCreatedByInput> | FormCreateWithoutCreatedByInput[] | FormUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FormCreateOrConnectWithoutCreatedByInput | FormCreateOrConnectWithoutCreatedByInput[]
    upsert?: FormUpsertWithWhereUniqueWithoutCreatedByInput | FormUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FormCreateManyCreatedByInputEnvelope
    set?: FormWhereUniqueInput | FormWhereUniqueInput[]
    disconnect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    delete?: FormWhereUniqueInput | FormWhereUniqueInput[]
    connect?: FormWhereUniqueInput | FormWhereUniqueInput[]
    update?: FormUpdateWithWhereUniqueWithoutCreatedByInput | FormUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FormUpdateManyWithWhereWithoutCreatedByInput | FormUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FormScalarWhereInput | FormScalarWhereInput[]
  }

  export type FormResponseUncheckedUpdateManyWithoutSubmittedByNestedInput = {
    create?: XOR<FormResponseCreateWithoutSubmittedByInput, FormResponseUncheckedCreateWithoutSubmittedByInput> | FormResponseCreateWithoutSubmittedByInput[] | FormResponseUncheckedCreateWithoutSubmittedByInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutSubmittedByInput | FormResponseCreateOrConnectWithoutSubmittedByInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutSubmittedByInput | FormResponseUpsertWithWhereUniqueWithoutSubmittedByInput[]
    createMany?: FormResponseCreateManySubmittedByInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutSubmittedByInput | FormResponseUpdateWithWhereUniqueWithoutSubmittedByInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutSubmittedByInput | FormResponseUpdateManyWithWhereWithoutSubmittedByInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSalesforceConfigsInput = {
    create?: XOR<UserCreateWithoutSalesforceConfigsInput, UserUncheckedCreateWithoutSalesforceConfigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesforceConfigsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSalesforceConfigsNestedInput = {
    create?: XOR<UserCreateWithoutSalesforceConfigsInput, UserUncheckedCreateWithoutSalesforceConfigsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesforceConfigsInput
    upsert?: UserUpsertWithoutSalesforceConfigsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalesforceConfigsInput, UserUpdateWithoutSalesforceConfigsInput>, UserUncheckedUpdateWithoutSalesforceConfigsInput>
  }

  export type UserCreateNestedOneWithoutFormsInput = {
    create?: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormsInput
    connect?: UserWhereUniqueInput
  }

  export type FormItemCreateNestedManyWithoutFormInput = {
    create?: XOR<FormItemCreateWithoutFormInput, FormItemUncheckedCreateWithoutFormInput> | FormItemCreateWithoutFormInput[] | FormItemUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormItemCreateOrConnectWithoutFormInput | FormItemCreateOrConnectWithoutFormInput[]
    createMany?: FormItemCreateManyFormInputEnvelope
    connect?: FormItemWhereUniqueInput | FormItemWhereUniqueInput[]
  }

  export type FormResponseCreateNestedManyWithoutFormInput = {
    create?: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput> | FormResponseCreateWithoutFormInput[] | FormResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormInput | FormResponseCreateOrConnectWithoutFormInput[]
    createMany?: FormResponseCreateManyFormInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type FormItemUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormItemCreateWithoutFormInput, FormItemUncheckedCreateWithoutFormInput> | FormItemCreateWithoutFormInput[] | FormItemUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormItemCreateOrConnectWithoutFormInput | FormItemCreateOrConnectWithoutFormInput[]
    createMany?: FormItemCreateManyFormInputEnvelope
    connect?: FormItemWhereUniqueInput | FormItemWhereUniqueInput[]
  }

  export type FormResponseUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput> | FormResponseCreateWithoutFormInput[] | FormResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormInput | FormResponseCreateOrConnectWithoutFormInput[]
    createMany?: FormResponseCreateManyFormInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type EnumFormStatusFieldUpdateOperationsInput = {
    set?: $Enums.FormStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutFormsNestedInput = {
    create?: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormsInput
    upsert?: UserUpsertWithoutFormsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFormsInput, UserUpdateWithoutFormsInput>, UserUncheckedUpdateWithoutFormsInput>
  }

  export type FormItemUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormItemCreateWithoutFormInput, FormItemUncheckedCreateWithoutFormInput> | FormItemCreateWithoutFormInput[] | FormItemUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormItemCreateOrConnectWithoutFormInput | FormItemCreateOrConnectWithoutFormInput[]
    upsert?: FormItemUpsertWithWhereUniqueWithoutFormInput | FormItemUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormItemCreateManyFormInputEnvelope
    set?: FormItemWhereUniqueInput | FormItemWhereUniqueInput[]
    disconnect?: FormItemWhereUniqueInput | FormItemWhereUniqueInput[]
    delete?: FormItemWhereUniqueInput | FormItemWhereUniqueInput[]
    connect?: FormItemWhereUniqueInput | FormItemWhereUniqueInput[]
    update?: FormItemUpdateWithWhereUniqueWithoutFormInput | FormItemUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormItemUpdateManyWithWhereWithoutFormInput | FormItemUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormItemScalarWhereInput | FormItemScalarWhereInput[]
  }

  export type FormResponseUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput> | FormResponseCreateWithoutFormInput[] | FormResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormInput | FormResponseCreateOrConnectWithoutFormInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutFormInput | FormResponseUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormResponseCreateManyFormInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutFormInput | FormResponseUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutFormInput | FormResponseUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type FormItemUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormItemCreateWithoutFormInput, FormItemUncheckedCreateWithoutFormInput> | FormItemCreateWithoutFormInput[] | FormItemUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormItemCreateOrConnectWithoutFormInput | FormItemCreateOrConnectWithoutFormInput[]
    upsert?: FormItemUpsertWithWhereUniqueWithoutFormInput | FormItemUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormItemCreateManyFormInputEnvelope
    set?: FormItemWhereUniqueInput | FormItemWhereUniqueInput[]
    disconnect?: FormItemWhereUniqueInput | FormItemWhereUniqueInput[]
    delete?: FormItemWhereUniqueInput | FormItemWhereUniqueInput[]
    connect?: FormItemWhereUniqueInput | FormItemWhereUniqueInput[]
    update?: FormItemUpdateWithWhereUniqueWithoutFormInput | FormItemUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormItemUpdateManyWithWhereWithoutFormInput | FormItemUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormItemScalarWhereInput | FormItemScalarWhereInput[]
  }

  export type FormResponseUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput> | FormResponseCreateWithoutFormInput[] | FormResponseUncheckedCreateWithoutFormInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormInput | FormResponseCreateOrConnectWithoutFormInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutFormInput | FormResponseUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: FormResponseCreateManyFormInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutFormInput | FormResponseUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutFormInput | FormResponseUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type FormCreateNestedOneWithoutFormItemsInput = {
    create?: XOR<FormCreateWithoutFormItemsInput, FormUncheckedCreateWithoutFormItemsInput>
    connectOrCreate?: FormCreateOrConnectWithoutFormItemsInput
    connect?: FormWhereUniqueInput
  }

  export type FormItemResponseCreateNestedManyWithoutFormItemInput = {
    create?: XOR<FormItemResponseCreateWithoutFormItemInput, FormItemResponseUncheckedCreateWithoutFormItemInput> | FormItemResponseCreateWithoutFormItemInput[] | FormItemResponseUncheckedCreateWithoutFormItemInput[]
    connectOrCreate?: FormItemResponseCreateOrConnectWithoutFormItemInput | FormItemResponseCreateOrConnectWithoutFormItemInput[]
    createMany?: FormItemResponseCreateManyFormItemInputEnvelope
    connect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
  }

  export type FormItemResponseUncheckedCreateNestedManyWithoutFormItemInput = {
    create?: XOR<FormItemResponseCreateWithoutFormItemInput, FormItemResponseUncheckedCreateWithoutFormItemInput> | FormItemResponseCreateWithoutFormItemInput[] | FormItemResponseUncheckedCreateWithoutFormItemInput[]
    connectOrCreate?: FormItemResponseCreateOrConnectWithoutFormItemInput | FormItemResponseCreateOrConnectWithoutFormItemInput[]
    createMany?: FormItemResponseCreateManyFormItemInputEnvelope
    connect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
  }

  export type EnumFormItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.FormItemType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FormUpdateOneRequiredWithoutFormItemsNestedInput = {
    create?: XOR<FormCreateWithoutFormItemsInput, FormUncheckedCreateWithoutFormItemsInput>
    connectOrCreate?: FormCreateOrConnectWithoutFormItemsInput
    upsert?: FormUpsertWithoutFormItemsInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutFormItemsInput, FormUpdateWithoutFormItemsInput>, FormUncheckedUpdateWithoutFormItemsInput>
  }

  export type FormItemResponseUpdateManyWithoutFormItemNestedInput = {
    create?: XOR<FormItemResponseCreateWithoutFormItemInput, FormItemResponseUncheckedCreateWithoutFormItemInput> | FormItemResponseCreateWithoutFormItemInput[] | FormItemResponseUncheckedCreateWithoutFormItemInput[]
    connectOrCreate?: FormItemResponseCreateOrConnectWithoutFormItemInput | FormItemResponseCreateOrConnectWithoutFormItemInput[]
    upsert?: FormItemResponseUpsertWithWhereUniqueWithoutFormItemInput | FormItemResponseUpsertWithWhereUniqueWithoutFormItemInput[]
    createMany?: FormItemResponseCreateManyFormItemInputEnvelope
    set?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    disconnect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    delete?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    connect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    update?: FormItemResponseUpdateWithWhereUniqueWithoutFormItemInput | FormItemResponseUpdateWithWhereUniqueWithoutFormItemInput[]
    updateMany?: FormItemResponseUpdateManyWithWhereWithoutFormItemInput | FormItemResponseUpdateManyWithWhereWithoutFormItemInput[]
    deleteMany?: FormItemResponseScalarWhereInput | FormItemResponseScalarWhereInput[]
  }

  export type FormItemResponseUncheckedUpdateManyWithoutFormItemNestedInput = {
    create?: XOR<FormItemResponseCreateWithoutFormItemInput, FormItemResponseUncheckedCreateWithoutFormItemInput> | FormItemResponseCreateWithoutFormItemInput[] | FormItemResponseUncheckedCreateWithoutFormItemInput[]
    connectOrCreate?: FormItemResponseCreateOrConnectWithoutFormItemInput | FormItemResponseCreateOrConnectWithoutFormItemInput[]
    upsert?: FormItemResponseUpsertWithWhereUniqueWithoutFormItemInput | FormItemResponseUpsertWithWhereUniqueWithoutFormItemInput[]
    createMany?: FormItemResponseCreateManyFormItemInputEnvelope
    set?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    disconnect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    delete?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    connect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    update?: FormItemResponseUpdateWithWhereUniqueWithoutFormItemInput | FormItemResponseUpdateWithWhereUniqueWithoutFormItemInput[]
    updateMany?: FormItemResponseUpdateManyWithWhereWithoutFormItemInput | FormItemResponseUpdateManyWithWhereWithoutFormItemInput[]
    deleteMany?: FormItemResponseScalarWhereInput | FormItemResponseScalarWhereInput[]
  }

  export type FormCreateNestedOneWithoutFormResponsesInput = {
    create?: XOR<FormCreateWithoutFormResponsesInput, FormUncheckedCreateWithoutFormResponsesInput>
    connectOrCreate?: FormCreateOrConnectWithoutFormResponsesInput
    connect?: FormWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFormResponsesInput = {
    create?: XOR<UserCreateWithoutFormResponsesInput, UserUncheckedCreateWithoutFormResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormResponsesInput
    connect?: UserWhereUniqueInput
  }

  export type FormItemResponseCreateNestedManyWithoutFormResponseInput = {
    create?: XOR<FormItemResponseCreateWithoutFormResponseInput, FormItemResponseUncheckedCreateWithoutFormResponseInput> | FormItemResponseCreateWithoutFormResponseInput[] | FormItemResponseUncheckedCreateWithoutFormResponseInput[]
    connectOrCreate?: FormItemResponseCreateOrConnectWithoutFormResponseInput | FormItemResponseCreateOrConnectWithoutFormResponseInput[]
    createMany?: FormItemResponseCreateManyFormResponseInputEnvelope
    connect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
  }

  export type FormItemResponseUncheckedCreateNestedManyWithoutFormResponseInput = {
    create?: XOR<FormItemResponseCreateWithoutFormResponseInput, FormItemResponseUncheckedCreateWithoutFormResponseInput> | FormItemResponseCreateWithoutFormResponseInput[] | FormItemResponseUncheckedCreateWithoutFormResponseInput[]
    connectOrCreate?: FormItemResponseCreateOrConnectWithoutFormResponseInput | FormItemResponseCreateOrConnectWithoutFormResponseInput[]
    createMany?: FormItemResponseCreateManyFormResponseInputEnvelope
    connect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
  }

  export type EnumResponseStatusFieldUpdateOperationsInput = {
    set?: $Enums.ResponseStatus
  }

  export type FormUpdateOneRequiredWithoutFormResponsesNestedInput = {
    create?: XOR<FormCreateWithoutFormResponsesInput, FormUncheckedCreateWithoutFormResponsesInput>
    connectOrCreate?: FormCreateOrConnectWithoutFormResponsesInput
    upsert?: FormUpsertWithoutFormResponsesInput
    connect?: FormWhereUniqueInput
    update?: XOR<XOR<FormUpdateToOneWithWhereWithoutFormResponsesInput, FormUpdateWithoutFormResponsesInput>, FormUncheckedUpdateWithoutFormResponsesInput>
  }

  export type UserUpdateOneWithoutFormResponsesNestedInput = {
    create?: XOR<UserCreateWithoutFormResponsesInput, UserUncheckedCreateWithoutFormResponsesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormResponsesInput
    upsert?: UserUpsertWithoutFormResponsesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFormResponsesInput, UserUpdateWithoutFormResponsesInput>, UserUncheckedUpdateWithoutFormResponsesInput>
  }

  export type FormItemResponseUpdateManyWithoutFormResponseNestedInput = {
    create?: XOR<FormItemResponseCreateWithoutFormResponseInput, FormItemResponseUncheckedCreateWithoutFormResponseInput> | FormItemResponseCreateWithoutFormResponseInput[] | FormItemResponseUncheckedCreateWithoutFormResponseInput[]
    connectOrCreate?: FormItemResponseCreateOrConnectWithoutFormResponseInput | FormItemResponseCreateOrConnectWithoutFormResponseInput[]
    upsert?: FormItemResponseUpsertWithWhereUniqueWithoutFormResponseInput | FormItemResponseUpsertWithWhereUniqueWithoutFormResponseInput[]
    createMany?: FormItemResponseCreateManyFormResponseInputEnvelope
    set?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    disconnect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    delete?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    connect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    update?: FormItemResponseUpdateWithWhereUniqueWithoutFormResponseInput | FormItemResponseUpdateWithWhereUniqueWithoutFormResponseInput[]
    updateMany?: FormItemResponseUpdateManyWithWhereWithoutFormResponseInput | FormItemResponseUpdateManyWithWhereWithoutFormResponseInput[]
    deleteMany?: FormItemResponseScalarWhereInput | FormItemResponseScalarWhereInput[]
  }

  export type FormItemResponseUncheckedUpdateManyWithoutFormResponseNestedInput = {
    create?: XOR<FormItemResponseCreateWithoutFormResponseInput, FormItemResponseUncheckedCreateWithoutFormResponseInput> | FormItemResponseCreateWithoutFormResponseInput[] | FormItemResponseUncheckedCreateWithoutFormResponseInput[]
    connectOrCreate?: FormItemResponseCreateOrConnectWithoutFormResponseInput | FormItemResponseCreateOrConnectWithoutFormResponseInput[]
    upsert?: FormItemResponseUpsertWithWhereUniqueWithoutFormResponseInput | FormItemResponseUpsertWithWhereUniqueWithoutFormResponseInput[]
    createMany?: FormItemResponseCreateManyFormResponseInputEnvelope
    set?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    disconnect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    delete?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    connect?: FormItemResponseWhereUniqueInput | FormItemResponseWhereUniqueInput[]
    update?: FormItemResponseUpdateWithWhereUniqueWithoutFormResponseInput | FormItemResponseUpdateWithWhereUniqueWithoutFormResponseInput[]
    updateMany?: FormItemResponseUpdateManyWithWhereWithoutFormResponseInput | FormItemResponseUpdateManyWithWhereWithoutFormResponseInput[]
    deleteMany?: FormItemResponseScalarWhereInput | FormItemResponseScalarWhereInput[]
  }

  export type FormResponseCreateNestedOneWithoutItemsInput = {
    create?: XOR<FormResponseCreateWithoutItemsInput, FormResponseUncheckedCreateWithoutItemsInput>
    connectOrCreate?: FormResponseCreateOrConnectWithoutItemsInput
    connect?: FormResponseWhereUniqueInput
  }

  export type FormItemCreateNestedOneWithoutResponsesInput = {
    create?: XOR<FormItemCreateWithoutResponsesInput, FormItemUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormItemCreateOrConnectWithoutResponsesInput
    connect?: FormItemWhereUniqueInput
  }

  export type FormResponseUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<FormResponseCreateWithoutItemsInput, FormResponseUncheckedCreateWithoutItemsInput>
    connectOrCreate?: FormResponseCreateOrConnectWithoutItemsInput
    upsert?: FormResponseUpsertWithoutItemsInput
    connect?: FormResponseWhereUniqueInput
    update?: XOR<XOR<FormResponseUpdateToOneWithWhereWithoutItemsInput, FormResponseUpdateWithoutItemsInput>, FormResponseUncheckedUpdateWithoutItemsInput>
  }

  export type FormItemUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<FormItemCreateWithoutResponsesInput, FormItemUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: FormItemCreateOrConnectWithoutResponsesInput
    upsert?: FormItemUpsertWithoutResponsesInput
    connect?: FormItemWhereUniqueInput
    update?: XOR<XOR<FormItemUpdateToOneWithWhereWithoutResponsesInput, FormItemUpdateWithoutResponsesInput>, FormItemUncheckedUpdateWithoutResponsesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumFormStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FormStatus | EnumFormStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FormStatus[] | ListEnumFormStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormStatus[] | ListEnumFormStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFormStatusFilter<$PrismaModel> | $Enums.FormStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumFormStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormStatus | EnumFormStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FormStatus[] | ListEnumFormStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormStatus[] | ListEnumFormStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFormStatusWithAggregatesFilter<$PrismaModel> | $Enums.FormStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormStatusFilter<$PrismaModel>
    _max?: NestedEnumFormStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumFormItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FormItemType | EnumFormItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormItemType[] | ListEnumFormItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormItemType[] | ListEnumFormItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFormItemTypeFilter<$PrismaModel> | $Enums.FormItemType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumFormItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FormItemType | EnumFormItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FormItemType[] | ListEnumFormItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FormItemType[] | ListEnumFormItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFormItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.FormItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFormItemTypeFilter<$PrismaModel>
    _max?: NestedEnumFormItemTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumResponseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStatus | EnumResponseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStatusFilter<$PrismaModel> | $Enums.ResponseStatus
  }

  export type NestedEnumResponseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ResponseStatus | EnumResponseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ResponseStatus[] | ListEnumResponseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumResponseStatusWithAggregatesFilter<$PrismaModel> | $Enums.ResponseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumResponseStatusFilter<$PrismaModel>
    _max?: NestedEnumResponseStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SalesforceConfigCreateWithoutUserInput = {
    id?: string
    accessToken: string
    refreshToken: string
    instanceUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesforceConfigUncheckedCreateWithoutUserInput = {
    id?: string
    accessToken: string
    refreshToken: string
    instanceUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesforceConfigCreateOrConnectWithoutUserInput = {
    where: SalesforceConfigWhereUniqueInput
    create: XOR<SalesforceConfigCreateWithoutUserInput, SalesforceConfigUncheckedCreateWithoutUserInput>
  }

  export type SalesforceConfigCreateManyUserInputEnvelope = {
    data: SalesforceConfigCreateManyUserInput | SalesforceConfigCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FormCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    salesforceId?: string | null
    status?: $Enums.FormStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    formItems?: FormItemCreateNestedManyWithoutFormInput
    formResponses?: FormResponseCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    salesforceId?: string | null
    status?: $Enums.FormStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    formItems?: FormItemUncheckedCreateNestedManyWithoutFormInput
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutCreatedByInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutCreatedByInput, FormUncheckedCreateWithoutCreatedByInput>
  }

  export type FormCreateManyCreatedByInputEnvelope = {
    data: FormCreateManyCreatedByInput | FormCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type FormResponseCreateWithoutSubmittedByInput = {
    id?: string
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutFormResponsesInput
    items?: FormItemResponseCreateNestedManyWithoutFormResponseInput
  }

  export type FormResponseUncheckedCreateWithoutSubmittedByInput = {
    id?: string
    formId: string
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: FormItemResponseUncheckedCreateNestedManyWithoutFormResponseInput
  }

  export type FormResponseCreateOrConnectWithoutSubmittedByInput = {
    where: FormResponseWhereUniqueInput
    create: XOR<FormResponseCreateWithoutSubmittedByInput, FormResponseUncheckedCreateWithoutSubmittedByInput>
  }

  export type FormResponseCreateManySubmittedByInputEnvelope = {
    data: FormResponseCreateManySubmittedByInput | FormResponseCreateManySubmittedByInput[]
    skipDuplicates?: boolean
  }

  export type SalesforceConfigUpsertWithWhereUniqueWithoutUserInput = {
    where: SalesforceConfigWhereUniqueInput
    update: XOR<SalesforceConfigUpdateWithoutUserInput, SalesforceConfigUncheckedUpdateWithoutUserInput>
    create: XOR<SalesforceConfigCreateWithoutUserInput, SalesforceConfigUncheckedCreateWithoutUserInput>
  }

  export type SalesforceConfigUpdateWithWhereUniqueWithoutUserInput = {
    where: SalesforceConfigWhereUniqueInput
    data: XOR<SalesforceConfigUpdateWithoutUserInput, SalesforceConfigUncheckedUpdateWithoutUserInput>
  }

  export type SalesforceConfigUpdateManyWithWhereWithoutUserInput = {
    where: SalesforceConfigScalarWhereInput
    data: XOR<SalesforceConfigUpdateManyMutationInput, SalesforceConfigUncheckedUpdateManyWithoutUserInput>
  }

  export type SalesforceConfigScalarWhereInput = {
    AND?: SalesforceConfigScalarWhereInput | SalesforceConfigScalarWhereInput[]
    OR?: SalesforceConfigScalarWhereInput[]
    NOT?: SalesforceConfigScalarWhereInput | SalesforceConfigScalarWhereInput[]
    id?: StringFilter<"SalesforceConfig"> | string
    userId?: StringFilter<"SalesforceConfig"> | string
    accessToken?: StringFilter<"SalesforceConfig"> | string
    refreshToken?: StringFilter<"SalesforceConfig"> | string
    instanceUrl?: StringFilter<"SalesforceConfig"> | string
    createdAt?: DateTimeFilter<"SalesforceConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SalesforceConfig"> | Date | string
  }

  export type FormUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: FormWhereUniqueInput
    update: XOR<FormUpdateWithoutCreatedByInput, FormUncheckedUpdateWithoutCreatedByInput>
    create: XOR<FormCreateWithoutCreatedByInput, FormUncheckedCreateWithoutCreatedByInput>
  }

  export type FormUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: FormWhereUniqueInput
    data: XOR<FormUpdateWithoutCreatedByInput, FormUncheckedUpdateWithoutCreatedByInput>
  }

  export type FormUpdateManyWithWhereWithoutCreatedByInput = {
    where: FormScalarWhereInput
    data: XOR<FormUpdateManyMutationInput, FormUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type FormScalarWhereInput = {
    AND?: FormScalarWhereInput | FormScalarWhereInput[]
    OR?: FormScalarWhereInput[]
    NOT?: FormScalarWhereInput | FormScalarWhereInput[]
    id?: StringFilter<"Form"> | string
    title?: StringFilter<"Form"> | string
    description?: StringNullableFilter<"Form"> | string | null
    salesforceId?: StringNullableFilter<"Form"> | string | null
    createdById?: StringFilter<"Form"> | string
    status?: EnumFormStatusFilter<"Form"> | $Enums.FormStatus
    expiresAt?: DateTimeNullableFilter<"Form"> | Date | string | null
    createdAt?: DateTimeFilter<"Form"> | Date | string
    updatedAt?: DateTimeFilter<"Form"> | Date | string
  }

  export type FormResponseUpsertWithWhereUniqueWithoutSubmittedByInput = {
    where: FormResponseWhereUniqueInput
    update: XOR<FormResponseUpdateWithoutSubmittedByInput, FormResponseUncheckedUpdateWithoutSubmittedByInput>
    create: XOR<FormResponseCreateWithoutSubmittedByInput, FormResponseUncheckedCreateWithoutSubmittedByInput>
  }

  export type FormResponseUpdateWithWhereUniqueWithoutSubmittedByInput = {
    where: FormResponseWhereUniqueInput
    data: XOR<FormResponseUpdateWithoutSubmittedByInput, FormResponseUncheckedUpdateWithoutSubmittedByInput>
  }

  export type FormResponseUpdateManyWithWhereWithoutSubmittedByInput = {
    where: FormResponseScalarWhereInput
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyWithoutSubmittedByInput>
  }

  export type FormResponseScalarWhereInput = {
    AND?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
    OR?: FormResponseScalarWhereInput[]
    NOT?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
    id?: StringFilter<"FormResponse"> | string
    formId?: StringFilter<"FormResponse"> | string
    submittedById?: StringNullableFilter<"FormResponse"> | string | null
    status?: EnumResponseStatusFilter<"FormResponse"> | $Enums.ResponseStatus
    createdAt?: DateTimeFilter<"FormResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FormResponse"> | Date | string
  }

  export type UserCreateWithoutSalesforceConfigsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    forms?: FormCreateNestedManyWithoutCreatedByInput
    formResponses?: FormResponseCreateNestedManyWithoutSubmittedByInput
  }

  export type UserUncheckedCreateWithoutSalesforceConfigsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    forms?: FormUncheckedCreateNestedManyWithoutCreatedByInput
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutSubmittedByInput
  }

  export type UserCreateOrConnectWithoutSalesforceConfigsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalesforceConfigsInput, UserUncheckedCreateWithoutSalesforceConfigsInput>
  }

  export type UserUpsertWithoutSalesforceConfigsInput = {
    update: XOR<UserUpdateWithoutSalesforceConfigsInput, UserUncheckedUpdateWithoutSalesforceConfigsInput>
    create: XOR<UserCreateWithoutSalesforceConfigsInput, UserUncheckedCreateWithoutSalesforceConfigsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalesforceConfigsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalesforceConfigsInput, UserUncheckedUpdateWithoutSalesforceConfigsInput>
  }

  export type UserUpdateWithoutSalesforceConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forms?: FormUpdateManyWithoutCreatedByNestedInput
    formResponses?: FormResponseUpdateManyWithoutSubmittedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSalesforceConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    forms?: FormUncheckedUpdateManyWithoutCreatedByNestedInput
    formResponses?: FormResponseUncheckedUpdateManyWithoutSubmittedByNestedInput
  }

  export type UserCreateWithoutFormsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    salesforceConfigs?: SalesforceConfigCreateNestedManyWithoutUserInput
    formResponses?: FormResponseCreateNestedManyWithoutSubmittedByInput
  }

  export type UserUncheckedCreateWithoutFormsInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    salesforceConfigs?: SalesforceConfigUncheckedCreateNestedManyWithoutUserInput
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutSubmittedByInput
  }

  export type UserCreateOrConnectWithoutFormsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
  }

  export type FormItemCreateWithoutFormInput = {
    id?: string
    label: string
    type: $Enums.FormItemType
    required?: boolean
    order: number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: FormItemResponseCreateNestedManyWithoutFormItemInput
  }

  export type FormItemUncheckedCreateWithoutFormInput = {
    id?: string
    label: string
    type: $Enums.FormItemType
    required?: boolean
    order: number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    responses?: FormItemResponseUncheckedCreateNestedManyWithoutFormItemInput
  }

  export type FormItemCreateOrConnectWithoutFormInput = {
    where: FormItemWhereUniqueInput
    create: XOR<FormItemCreateWithoutFormInput, FormItemUncheckedCreateWithoutFormInput>
  }

  export type FormItemCreateManyFormInputEnvelope = {
    data: FormItemCreateManyFormInput | FormItemCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type FormResponseCreateWithoutFormInput = {
    id?: string
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    submittedBy?: UserCreateNestedOneWithoutFormResponsesInput
    items?: FormItemResponseCreateNestedManyWithoutFormResponseInput
  }

  export type FormResponseUncheckedCreateWithoutFormInput = {
    id?: string
    submittedById?: string | null
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: FormItemResponseUncheckedCreateNestedManyWithoutFormResponseInput
  }

  export type FormResponseCreateOrConnectWithoutFormInput = {
    where: FormResponseWhereUniqueInput
    create: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput>
  }

  export type FormResponseCreateManyFormInputEnvelope = {
    data: FormResponseCreateManyFormInput | FormResponseCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFormsInput = {
    update: XOR<UserUpdateWithoutFormsInput, UserUncheckedUpdateWithoutFormsInput>
    create: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFormsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFormsInput, UserUncheckedUpdateWithoutFormsInput>
  }

  export type UserUpdateWithoutFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesforceConfigs?: SalesforceConfigUpdateManyWithoutUserNestedInput
    formResponses?: FormResponseUpdateManyWithoutSubmittedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesforceConfigs?: SalesforceConfigUncheckedUpdateManyWithoutUserNestedInput
    formResponses?: FormResponseUncheckedUpdateManyWithoutSubmittedByNestedInput
  }

  export type FormItemUpsertWithWhereUniqueWithoutFormInput = {
    where: FormItemWhereUniqueInput
    update: XOR<FormItemUpdateWithoutFormInput, FormItemUncheckedUpdateWithoutFormInput>
    create: XOR<FormItemCreateWithoutFormInput, FormItemUncheckedCreateWithoutFormInput>
  }

  export type FormItemUpdateWithWhereUniqueWithoutFormInput = {
    where: FormItemWhereUniqueInput
    data: XOR<FormItemUpdateWithoutFormInput, FormItemUncheckedUpdateWithoutFormInput>
  }

  export type FormItemUpdateManyWithWhereWithoutFormInput = {
    where: FormItemScalarWhereInput
    data: XOR<FormItemUpdateManyMutationInput, FormItemUncheckedUpdateManyWithoutFormInput>
  }

  export type FormItemScalarWhereInput = {
    AND?: FormItemScalarWhereInput | FormItemScalarWhereInput[]
    OR?: FormItemScalarWhereInput[]
    NOT?: FormItemScalarWhereInput | FormItemScalarWhereInput[]
    id?: StringFilter<"FormItem"> | string
    formId?: StringFilter<"FormItem"> | string
    label?: StringFilter<"FormItem"> | string
    type?: EnumFormItemTypeFilter<"FormItem"> | $Enums.FormItemType
    required?: BoolFilter<"FormItem"> | boolean
    order?: IntFilter<"FormItem"> | number
    options?: JsonNullableFilter<"FormItem">
    validation?: JsonNullableFilter<"FormItem">
    salesforceId?: StringNullableFilter<"FormItem"> | string | null
    createdAt?: DateTimeFilter<"FormItem"> | Date | string
    updatedAt?: DateTimeFilter<"FormItem"> | Date | string
  }

  export type FormResponseUpsertWithWhereUniqueWithoutFormInput = {
    where: FormResponseWhereUniqueInput
    update: XOR<FormResponseUpdateWithoutFormInput, FormResponseUncheckedUpdateWithoutFormInput>
    create: XOR<FormResponseCreateWithoutFormInput, FormResponseUncheckedCreateWithoutFormInput>
  }

  export type FormResponseUpdateWithWhereUniqueWithoutFormInput = {
    where: FormResponseWhereUniqueInput
    data: XOR<FormResponseUpdateWithoutFormInput, FormResponseUncheckedUpdateWithoutFormInput>
  }

  export type FormResponseUpdateManyWithWhereWithoutFormInput = {
    where: FormResponseScalarWhereInput
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyWithoutFormInput>
  }

  export type FormCreateWithoutFormItemsInput = {
    id?: string
    title: string
    description?: string | null
    salesforceId?: string | null
    status?: $Enums.FormStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutFormsInput
    formResponses?: FormResponseCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutFormItemsInput = {
    id?: string
    title: string
    description?: string | null
    salesforceId?: string | null
    createdById: string
    status?: $Enums.FormStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutFormItemsInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutFormItemsInput, FormUncheckedCreateWithoutFormItemsInput>
  }

  export type FormItemResponseCreateWithoutFormItemInput = {
    id?: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    formResponse: FormResponseCreateNestedOneWithoutItemsInput
  }

  export type FormItemResponseUncheckedCreateWithoutFormItemInput = {
    id?: string
    formResponseId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormItemResponseCreateOrConnectWithoutFormItemInput = {
    where: FormItemResponseWhereUniqueInput
    create: XOR<FormItemResponseCreateWithoutFormItemInput, FormItemResponseUncheckedCreateWithoutFormItemInput>
  }

  export type FormItemResponseCreateManyFormItemInputEnvelope = {
    data: FormItemResponseCreateManyFormItemInput | FormItemResponseCreateManyFormItemInput[]
    skipDuplicates?: boolean
  }

  export type FormUpsertWithoutFormItemsInput = {
    update: XOR<FormUpdateWithoutFormItemsInput, FormUncheckedUpdateWithoutFormItemsInput>
    create: XOR<FormCreateWithoutFormItemsInput, FormUncheckedCreateWithoutFormItemsInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutFormItemsInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutFormItemsInput, FormUncheckedUpdateWithoutFormItemsInput>
  }

  export type FormUpdateWithoutFormItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutFormsNestedInput
    formResponses?: FormResponseUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutFormItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: FormResponseUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormItemResponseUpsertWithWhereUniqueWithoutFormItemInput = {
    where: FormItemResponseWhereUniqueInput
    update: XOR<FormItemResponseUpdateWithoutFormItemInput, FormItemResponseUncheckedUpdateWithoutFormItemInput>
    create: XOR<FormItemResponseCreateWithoutFormItemInput, FormItemResponseUncheckedCreateWithoutFormItemInput>
  }

  export type FormItemResponseUpdateWithWhereUniqueWithoutFormItemInput = {
    where: FormItemResponseWhereUniqueInput
    data: XOR<FormItemResponseUpdateWithoutFormItemInput, FormItemResponseUncheckedUpdateWithoutFormItemInput>
  }

  export type FormItemResponseUpdateManyWithWhereWithoutFormItemInput = {
    where: FormItemResponseScalarWhereInput
    data: XOR<FormItemResponseUpdateManyMutationInput, FormItemResponseUncheckedUpdateManyWithoutFormItemInput>
  }

  export type FormItemResponseScalarWhereInput = {
    AND?: FormItemResponseScalarWhereInput | FormItemResponseScalarWhereInput[]
    OR?: FormItemResponseScalarWhereInput[]
    NOT?: FormItemResponseScalarWhereInput | FormItemResponseScalarWhereInput[]
    id?: StringFilter<"FormItemResponse"> | string
    formResponseId?: StringFilter<"FormItemResponse"> | string
    formItemId?: StringFilter<"FormItemResponse"> | string
    value?: JsonFilter<"FormItemResponse">
    createdAt?: DateTimeFilter<"FormItemResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FormItemResponse"> | Date | string
  }

  export type FormCreateWithoutFormResponsesInput = {
    id?: string
    title: string
    description?: string | null
    salesforceId?: string | null
    status?: $Enums.FormStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutFormsInput
    formItems?: FormItemCreateNestedManyWithoutFormInput
  }

  export type FormUncheckedCreateWithoutFormResponsesInput = {
    id?: string
    title: string
    description?: string | null
    salesforceId?: string | null
    createdById: string
    status?: $Enums.FormStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    formItems?: FormItemUncheckedCreateNestedManyWithoutFormInput
  }

  export type FormCreateOrConnectWithoutFormResponsesInput = {
    where: FormWhereUniqueInput
    create: XOR<FormCreateWithoutFormResponsesInput, FormUncheckedCreateWithoutFormResponsesInput>
  }

  export type UserCreateWithoutFormResponsesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    salesforceConfigs?: SalesforceConfigCreateNestedManyWithoutUserInput
    forms?: FormCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutFormResponsesInput = {
    id?: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    salesforceConfigs?: SalesforceConfigUncheckedCreateNestedManyWithoutUserInput
    forms?: FormUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutFormResponsesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFormResponsesInput, UserUncheckedCreateWithoutFormResponsesInput>
  }

  export type FormItemResponseCreateWithoutFormResponseInput = {
    id?: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    formItem: FormItemCreateNestedOneWithoutResponsesInput
  }

  export type FormItemResponseUncheckedCreateWithoutFormResponseInput = {
    id?: string
    formItemId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormItemResponseCreateOrConnectWithoutFormResponseInput = {
    where: FormItemResponseWhereUniqueInput
    create: XOR<FormItemResponseCreateWithoutFormResponseInput, FormItemResponseUncheckedCreateWithoutFormResponseInput>
  }

  export type FormItemResponseCreateManyFormResponseInputEnvelope = {
    data: FormItemResponseCreateManyFormResponseInput | FormItemResponseCreateManyFormResponseInput[]
    skipDuplicates?: boolean
  }

  export type FormUpsertWithoutFormResponsesInput = {
    update: XOR<FormUpdateWithoutFormResponsesInput, FormUncheckedUpdateWithoutFormResponsesInput>
    create: XOR<FormCreateWithoutFormResponsesInput, FormUncheckedCreateWithoutFormResponsesInput>
    where?: FormWhereInput
  }

  export type FormUpdateToOneWithWhereWithoutFormResponsesInput = {
    where?: FormWhereInput
    data: XOR<FormUpdateWithoutFormResponsesInput, FormUncheckedUpdateWithoutFormResponsesInput>
  }

  export type FormUpdateWithoutFormResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutFormsNestedInput
    formItems?: FormItemUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutFormResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formItems?: FormItemUncheckedUpdateManyWithoutFormNestedInput
  }

  export type UserUpsertWithoutFormResponsesInput = {
    update: XOR<UserUpdateWithoutFormResponsesInput, UserUncheckedUpdateWithoutFormResponsesInput>
    create: XOR<UserCreateWithoutFormResponsesInput, UserUncheckedCreateWithoutFormResponsesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFormResponsesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFormResponsesInput, UserUncheckedUpdateWithoutFormResponsesInput>
  }

  export type UserUpdateWithoutFormResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesforceConfigs?: SalesforceConfigUpdateManyWithoutUserNestedInput
    forms?: FormUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutFormResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salesforceConfigs?: SalesforceConfigUncheckedUpdateManyWithoutUserNestedInput
    forms?: FormUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type FormItemResponseUpsertWithWhereUniqueWithoutFormResponseInput = {
    where: FormItemResponseWhereUniqueInput
    update: XOR<FormItemResponseUpdateWithoutFormResponseInput, FormItemResponseUncheckedUpdateWithoutFormResponseInput>
    create: XOR<FormItemResponseCreateWithoutFormResponseInput, FormItemResponseUncheckedCreateWithoutFormResponseInput>
  }

  export type FormItemResponseUpdateWithWhereUniqueWithoutFormResponseInput = {
    where: FormItemResponseWhereUniqueInput
    data: XOR<FormItemResponseUpdateWithoutFormResponseInput, FormItemResponseUncheckedUpdateWithoutFormResponseInput>
  }

  export type FormItemResponseUpdateManyWithWhereWithoutFormResponseInput = {
    where: FormItemResponseScalarWhereInput
    data: XOR<FormItemResponseUpdateManyMutationInput, FormItemResponseUncheckedUpdateManyWithoutFormResponseInput>
  }

  export type FormResponseCreateWithoutItemsInput = {
    id?: string
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutFormResponsesInput
    submittedBy?: UserCreateNestedOneWithoutFormResponsesInput
  }

  export type FormResponseUncheckedCreateWithoutItemsInput = {
    id?: string
    formId: string
    submittedById?: string | null
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormResponseCreateOrConnectWithoutItemsInput = {
    where: FormResponseWhereUniqueInput
    create: XOR<FormResponseCreateWithoutItemsInput, FormResponseUncheckedCreateWithoutItemsInput>
  }

  export type FormItemCreateWithoutResponsesInput = {
    id?: string
    label: string
    type: $Enums.FormItemType
    required?: boolean
    order: number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    form: FormCreateNestedOneWithoutFormItemsInput
  }

  export type FormItemUncheckedCreateWithoutResponsesInput = {
    id?: string
    formId: string
    label: string
    type: $Enums.FormItemType
    required?: boolean
    order: number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormItemCreateOrConnectWithoutResponsesInput = {
    where: FormItemWhereUniqueInput
    create: XOR<FormItemCreateWithoutResponsesInput, FormItemUncheckedCreateWithoutResponsesInput>
  }

  export type FormResponseUpsertWithoutItemsInput = {
    update: XOR<FormResponseUpdateWithoutItemsInput, FormResponseUncheckedUpdateWithoutItemsInput>
    create: XOR<FormResponseCreateWithoutItemsInput, FormResponseUncheckedCreateWithoutItemsInput>
    where?: FormResponseWhereInput
  }

  export type FormResponseUpdateToOneWithWhereWithoutItemsInput = {
    where?: FormResponseWhereInput
    data: XOR<FormResponseUpdateWithoutItemsInput, FormResponseUncheckedUpdateWithoutItemsInput>
  }

  export type FormResponseUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutFormResponsesNestedInput
    submittedBy?: UserUpdateOneWithoutFormResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    submittedById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemUpsertWithoutResponsesInput = {
    update: XOR<FormItemUpdateWithoutResponsesInput, FormItemUncheckedUpdateWithoutResponsesInput>
    create: XOR<FormItemCreateWithoutResponsesInput, FormItemUncheckedCreateWithoutResponsesInput>
    where?: FormItemWhereInput
  }

  export type FormItemUpdateToOneWithWhereWithoutResponsesInput = {
    where?: FormItemWhereInput
    data: XOR<FormItemUpdateWithoutResponsesInput, FormItemUncheckedUpdateWithoutResponsesInput>
  }

  export type FormItemUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFormItemTypeFieldUpdateOperationsInput | $Enums.FormItemType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutFormItemsNestedInput
  }

  export type FormItemUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFormItemTypeFieldUpdateOperationsInput | $Enums.FormItemType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesforceConfigCreateManyUserInput = {
    id?: string
    accessToken: string
    refreshToken: string
    instanceUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormCreateManyCreatedByInput = {
    id?: string
    title: string
    description?: string | null
    salesforceId?: string | null
    status?: $Enums.FormStatus
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormResponseCreateManySubmittedByInput = {
    id?: string
    formId: string
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SalesforceConfigUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    instanceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesforceConfigUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    instanceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalesforceConfigUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    refreshToken?: StringFieldUpdateOperationsInput | string
    instanceUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formItems?: FormItemUpdateManyWithoutFormNestedInput
    formResponses?: FormResponseUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formItems?: FormItemUncheckedUpdateManyWithoutFormNestedInput
    formResponses?: FormResponseUncheckedUpdateManyWithoutFormNestedInput
  }

  export type FormUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFormStatusFieldUpdateOperationsInput | $Enums.FormStatus
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormResponseUpdateWithoutSubmittedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    form?: FormUpdateOneRequiredWithoutFormResponsesNestedInput
    items?: FormItemResponseUpdateManyWithoutFormResponseNestedInput
  }

  export type FormResponseUncheckedUpdateWithoutSubmittedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: FormItemResponseUncheckedUpdateManyWithoutFormResponseNestedInput
  }

  export type FormResponseUncheckedUpdateManyWithoutSubmittedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    formId?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemCreateManyFormInput = {
    id?: string
    label: string
    type: $Enums.FormItemType
    required?: boolean
    order: number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormResponseCreateManyFormInput = {
    id?: string
    submittedById?: string | null
    status?: $Enums.ResponseStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormItemUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFormItemTypeFieldUpdateOperationsInput | $Enums.FormItemType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: FormItemResponseUpdateManyWithoutFormItemNestedInput
  }

  export type FormItemUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFormItemTypeFieldUpdateOperationsInput | $Enums.FormItemType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: FormItemResponseUncheckedUpdateManyWithoutFormItemNestedInput
  }

  export type FormItemUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: EnumFormItemTypeFieldUpdateOperationsInput | $Enums.FormItemType
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    salesforceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormResponseUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submittedBy?: UserUpdateOneWithoutFormResponsesNestedInput
    items?: FormItemResponseUpdateManyWithoutFormResponseNestedInput
  }

  export type FormResponseUncheckedUpdateWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: FormItemResponseUncheckedUpdateManyWithoutFormResponseNestedInput
  }

  export type FormResponseUncheckedUpdateManyWithoutFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    submittedById?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumResponseStatusFieldUpdateOperationsInput | $Enums.ResponseStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemResponseCreateManyFormItemInput = {
    id?: string
    formResponseId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormItemResponseUpdateWithoutFormItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponse?: FormResponseUpdateOneRequiredWithoutItemsNestedInput
  }

  export type FormItemResponseUncheckedUpdateWithoutFormItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    formResponseId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemResponseUncheckedUpdateManyWithoutFormItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    formResponseId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemResponseCreateManyFormResponseInput = {
    id?: string
    formItemId: string
    value: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormItemResponseUpdateWithoutFormResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formItem?: FormItemUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type FormItemResponseUncheckedUpdateWithoutFormResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    formItemId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormItemResponseUncheckedUpdateManyWithoutFormResponseInput = {
    id?: StringFieldUpdateOperationsInput | string
    formItemId?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormCountOutputTypeDefaultArgs instead
     */
    export type FormCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormItemCountOutputTypeDefaultArgs instead
     */
    export type FormItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormResponseCountOutputTypeDefaultArgs instead
     */
    export type FormResponseCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormResponseCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SalesforceConfigDefaultArgs instead
     */
    export type SalesforceConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SalesforceConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormDefaultArgs instead
     */
    export type FormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormItemDefaultArgs instead
     */
    export type FormItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormResponseDefaultArgs instead
     */
    export type FormResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormResponseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FormItemResponseDefaultArgs instead
     */
    export type FormItemResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FormItemResponseDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}