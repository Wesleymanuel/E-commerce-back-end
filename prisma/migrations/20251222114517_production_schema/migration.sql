/*
  Warnings:

  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `sobrenome` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cpf]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rg]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `adress` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banckAccont` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banckAgency` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bornDate` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credityCard` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cvc` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validDate` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
DROP COLUMN "nome",
DROP COLUMN "password",
DROP COLUMN "sobrenome",
ADD COLUMN     "adress" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "banckAccont" TEXT NOT NULL,
ADD COLUMN     "banckAgency" TEXT NOT NULL,
ADD COLUMN     "bornDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "credityCard" TEXT NOT NULL,
ADD COLUMN     "cvc" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "rg" TEXT NOT NULL,
ADD COLUMN     "secondName" TEXT NOT NULL,
ADD COLUMN     "validDate" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_rg_key" ON "User"("rg");
