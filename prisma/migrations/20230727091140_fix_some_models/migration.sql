/*
  Warnings:

  - You are about to drop the column `title` on the `Comment` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - You are about to drop the column `typeId` on the `SubType` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[uniqueName]` on the table `SubType` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[uniqueName]` on the table `Type` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `typeName` to the `SubType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uniqueName` to the `SubType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uniqueName` to the `Type` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SubType" DROP CONSTRAINT "SubType_typeId_fkey";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "title";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "rating",
DROP COLUMN "title",
ALTER COLUMN "price" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "SubType" DROP COLUMN "typeId",
ADD COLUMN     "typeName" TEXT NOT NULL,
ADD COLUMN     "uniqueName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Type" ADD COLUMN     "uniqueName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SubType_uniqueName_key" ON "SubType"("uniqueName");

-- CreateIndex
CREATE UNIQUE INDEX "Type_uniqueName_key" ON "Type"("uniqueName");

-- AddForeignKey
ALTER TABLE "SubType" ADD CONSTRAINT "SubType_typeName_fkey" FOREIGN KEY ("typeName") REFERENCES "Type"("uniqueName") ON DELETE RESTRICT ON UPDATE CASCADE;
