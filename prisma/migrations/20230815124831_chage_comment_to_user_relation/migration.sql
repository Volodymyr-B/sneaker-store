/*
  Warnings:

  - You are about to drop the column `userId` on the `Comment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[eMail,name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userEmail` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_userName_fkey";

-- DropIndex
DROP INDEX "User_id_name_key";

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_eMail_name_key" ON "User"("eMail", "name");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userEmail_userName_fkey" FOREIGN KEY ("userEmail", "userName") REFERENCES "User"("eMail", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
