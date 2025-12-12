/*
  Warnings:

  - The primary key for the `draw_results` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `draw_results` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `groups` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `groups` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `notifications` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `notifications` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `groupId` column on the `notifications` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `pairs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `pairs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `participants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `participants` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `restrictions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `restrictions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `wishlists` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `wishlists` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[groupId]` on the table `draw_results` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `groupId` on the `draw_results` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ownerId` on the `groups` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `notifications` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `drawResultId` on the `pairs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `giverId` on the `pairs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `takerId` on the `pairs` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `participants` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `groupId` on the `participants` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `blockedGiverId` on the `restrictions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `blockedTakerId` on the `restrictions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `participantId` on the `wishlists` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "public"."draw_results" DROP CONSTRAINT "draw_results_groupId_fkey";

-- DropForeignKey
ALTER TABLE "public"."groups" DROP CONSTRAINT "groups_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."notifications" DROP CONSTRAINT "notifications_groupId_fkey";

-- DropForeignKey
ALTER TABLE "public"."notifications" DROP CONSTRAINT "notifications_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."pairs" DROP CONSTRAINT "pairs_drawResultId_fkey";

-- DropForeignKey
ALTER TABLE "public"."pairs" DROP CONSTRAINT "pairs_giverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."pairs" DROP CONSTRAINT "pairs_takerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."participants" DROP CONSTRAINT "participants_groupId_fkey";

-- DropForeignKey
ALTER TABLE "public"."participants" DROP CONSTRAINT "participants_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."restrictions" DROP CONSTRAINT "restrictions_blockedGiverId_fkey";

-- DropForeignKey
ALTER TABLE "public"."restrictions" DROP CONSTRAINT "restrictions_blockedTakerId_fkey";

-- DropForeignKey
ALTER TABLE "public"."wishlists" DROP CONSTRAINT "wishlists_participantId_fkey";

-- AlterTable
ALTER TABLE "draw_results" DROP CONSTRAINT "draw_results_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "groupId",
ADD COLUMN     "groupId" INTEGER NOT NULL,
ADD CONSTRAINT "draw_results_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "groups" DROP CONSTRAINT "groups_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "ownerId",
ADD COLUMN     "ownerId" INTEGER NOT NULL,
ADD CONSTRAINT "groups_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "notifications" DROP CONSTRAINT "notifications_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "groupId",
ADD COLUMN     "groupId" INTEGER,
ADD CONSTRAINT "notifications_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "pairs" DROP CONSTRAINT "pairs_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "drawResultId",
ADD COLUMN     "drawResultId" INTEGER NOT NULL,
DROP COLUMN "giverId",
ADD COLUMN     "giverId" INTEGER NOT NULL,
DROP COLUMN "takerId",
ADD COLUMN     "takerId" INTEGER NOT NULL,
ADD CONSTRAINT "pairs_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "participants" DROP CONSTRAINT "participants_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
DROP COLUMN "groupId",
ADD COLUMN     "groupId" INTEGER NOT NULL,
ADD CONSTRAINT "participants_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "restrictions" DROP CONSTRAINT "restrictions_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "blockedGiverId",
ADD COLUMN     "blockedGiverId" INTEGER NOT NULL,
DROP COLUMN "blockedTakerId",
ADD COLUMN     "blockedTakerId" INTEGER NOT NULL,
ADD CONSTRAINT "restrictions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "wishlists" DROP CONSTRAINT "wishlists_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "participantId",
ADD COLUMN     "participantId" INTEGER NOT NULL,
ADD CONSTRAINT "wishlists_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "draw_results_groupId_key" ON "draw_results"("groupId");

-- CreateIndex
CREATE UNIQUE INDEX "pairs_drawResultId_giverId_key" ON "pairs"("drawResultId", "giverId");

-- CreateIndex
CREATE UNIQUE INDEX "participants_userId_groupId_key" ON "participants"("userId", "groupId");

-- CreateIndex
CREATE UNIQUE INDEX "restrictions_blockedGiverId_blockedTakerId_key" ON "restrictions"("blockedGiverId", "blockedTakerId");

-- CreateIndex
CREATE UNIQUE INDEX "wishlists_participantId_key" ON "wishlists"("participantId");

-- AddForeignKey
ALTER TABLE "groups" ADD CONSTRAINT "groups_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "participants" ADD CONSTRAINT "participants_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "wishlists" ADD CONSTRAINT "wishlists_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restrictions" ADD CONSTRAINT "restrictions_blockedGiverId_fkey" FOREIGN KEY ("blockedGiverId") REFERENCES "participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "restrictions" ADD CONSTRAINT "restrictions_blockedTakerId_fkey" FOREIGN KEY ("blockedTakerId") REFERENCES "participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "draw_results" ADD CONSTRAINT "draw_results_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pairs" ADD CONSTRAINT "pairs_drawResultId_fkey" FOREIGN KEY ("drawResultId") REFERENCES "draw_results"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pairs" ADD CONSTRAINT "pairs_giverId_fkey" FOREIGN KEY ("giverId") REFERENCES "participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pairs" ADD CONSTRAINT "pairs_takerId_fkey" FOREIGN KEY ("takerId") REFERENCES "participants"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE SET NULL ON UPDATE CASCADE;
