/*
  Warnings:

  - You are about to drop the column `size` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `Product` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "ClothSize" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL');

-- CreateEnum
CREATE TYPE "ShoeSize" AS ENUM ('4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14');

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "size",
DROP COLUMN "stock";

-- CreateTable
CREATE TABLE "Quantity" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "clothSize" "ClothSize",
    "shoeSize" "ShoeSize",
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "Quantity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Quantity" ADD CONSTRAINT "Quantity_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
