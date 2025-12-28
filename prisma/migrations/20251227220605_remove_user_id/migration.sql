/*
  Warnings:

  - You are about to drop the column `userId` on the `Buy` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Buy" DROP CONSTRAINT "Buy_userId_fkey";

-- AlterTable
ALTER TABLE "Buy" DROP COLUMN "userId";
