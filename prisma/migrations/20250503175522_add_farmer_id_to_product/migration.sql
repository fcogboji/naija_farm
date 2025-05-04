/*
  Warnings:

  - Added the required column `farmerId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "farmerId" TEXT NOT NULL;
