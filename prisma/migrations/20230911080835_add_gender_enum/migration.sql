/*
  Warnings:

  - Changed the type of `gender` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('men', 'women', 'unisex');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "images" TEXT[],
DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL;
