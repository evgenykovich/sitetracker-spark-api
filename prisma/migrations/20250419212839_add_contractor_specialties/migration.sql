-- CreateTable
CREATE TABLE "ContractorSpecialty" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContractorSpecialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContractorProfileToContractorSpecialty" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ContractorSpecialty_name_key" ON "ContractorSpecialty"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ContractorProfileToContractorSpecialty_AB_unique" ON "_ContractorProfileToContractorSpecialty"("A", "B");

-- CreateIndex
CREATE INDEX "_ContractorProfileToContractorSpecialty_B_index" ON "_ContractorProfileToContractorSpecialty"("B");

-- AddForeignKey
ALTER TABLE "_ContractorProfileToContractorSpecialty" ADD CONSTRAINT "_ContractorProfileToContractorSpecialty_A_fkey" FOREIGN KEY ("A") REFERENCES "ContractorProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContractorProfileToContractorSpecialty" ADD CONSTRAINT "_ContractorProfileToContractorSpecialty_B_fkey" FOREIGN KEY ("B") REFERENCES "ContractorSpecialty"("id") ON DELETE CASCADE ON UPDATE CASCADE;
