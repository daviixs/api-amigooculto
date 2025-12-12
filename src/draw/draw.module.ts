import { Module } from '@nestjs/common';
import { DrawService } from './draw.service';
import { DrawController } from './draw.controller';
import { PrismaService } from '../database/prisma.service';
import { NotificationModule } from '../notification/notification.module';

@Module({
  imports: [NotificationModule],
  controllers: [DrawController],
  providers: [DrawService, PrismaService],
  exports: [DrawService],
})
export class DrawModule {}
