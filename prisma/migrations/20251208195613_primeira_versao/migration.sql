-- CreateEnum
CREATE TYPE "ParticipantStatus" AS ENUM ('PENDING', 'APPROVED');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('INVITE', 'APPROVAL', 'DRAW_RESULT', 'GENERAL');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "inviteCode" TEXT NOT NULL,
    "minValue" DOUBLE PRECISION,
    "maxValue" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupId" INTEGER NOT NULL,
    "status" "ParticipantStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "id" SERIAL NOT NULL,
    "participantId" INTEGER NOT NULL,
    "items" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restriction" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "blockedGiverId" INTEGER NOT NULL,
    "blockedTakerId" INTEGER NOT NULL,

    CONSTRAINT "Restriction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DrawResult" (
    "id" SERIAL NOT NULL,
    "groupId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DrawResult_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pair" (
    "id" SERIAL NOT NULL,
    "drawId" INTEGER NOT NULL,
    "giverId" INTEGER NOT NULL,
    "takerId" INTEGER NOT NULL,

    CONSTRAINT "Pair_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupId" INTEGER,
    "type" "NotificationType" NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "delivered" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Group_inviteCode_key" ON "Group"("inviteCode");

-- CreateIndex
CREATE UNIQUE INDEX "Wishlist_participantId_key" ON "Wishlist"("participantId");

-- CreateIndex
CREATE UNIQUE INDEX "DrawResult_groupId_key" ON "DrawResult"("groupId");

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_participantId_fkey" FOREIGN KEY ("participantId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restriction" ADD CONSTRAINT "Restriction_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restriction" ADD CONSTRAINT "Restriction_blockedGiverId_fkey" FOREIGN KEY ("blockedGiverId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Restriction" ADD CONSTRAINT "Restriction_blockedTakerId_fkey" FOREIGN KEY ("blockedTakerId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DrawResult" ADD CONSTRAINT "DrawResult_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pair" ADD CONSTRAINT "Pair_drawId_fkey" FOREIGN KEY ("drawId") REFERENCES "DrawResult"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pair" ADD CONSTRAINT "Pair_giverId_fkey" FOREIGN KEY ("giverId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pair" ADD CONSTRAINT "Pair_takerId_fkey" FOREIGN KEY ("takerId") REFERENCES "Participant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
