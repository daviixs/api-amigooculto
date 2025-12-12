import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { EmailProvider } from '../email/email.provider';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService, EmailProvider, PrismaService],
  exports: [NotificationService],
})
export class NotificationModule {}
