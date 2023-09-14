/*
  Warnings:

  - You are about to drop the column `quantity` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `amount` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantityId` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "quantity",
ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "quantityId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "Role";

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_quantityId_fkey" FOREIGN KEY ("quantityId") REFERENCES "Quantity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
