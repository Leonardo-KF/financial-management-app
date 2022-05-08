/*
  Warnings:

  - You are about to drop the `SendingMessages` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[authUserId]` on the table `Receiver` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authUserId` to the `Receiver` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SendingMessages" DROP CONSTRAINT "SendingMessages_receiverId_fkey";

-- AlterTable
ALTER TABLE "Receiver" ADD COLUMN     "authUserId" TEXT NOT NULL;

-- DropTable
DROP TABLE "SendingMessages";

-- CreateTable
CREATE TABLE "SendedMessages" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "receiverId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SendedMessages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Receiver_authUserId_key" ON "Receiver"("authUserId");

-- AddForeignKey
ALTER TABLE "SendedMessages" ADD CONSTRAINT "SendedMessages_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "Receiver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
