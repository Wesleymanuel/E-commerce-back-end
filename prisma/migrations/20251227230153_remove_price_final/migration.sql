/*
  Warnings:

  - You are about to drop the column `discount` on the `Buy` table. All the data in the column will be lost.
  - You are about to drop the column `finalValue` on the `Buy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Buy" DROP COLUMN "discount",
DROP COLUMN "finalValue";
