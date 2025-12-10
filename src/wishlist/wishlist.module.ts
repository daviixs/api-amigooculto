import { Module } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { PrismaService } from 'src/database/prisma.service';
import { WishlistController } from './wishlist.controller';

@Module({
  providers: [WishlistService, PrismaService],
  exports: [WishlistService],
  controllers: [WishlistController],
})
export class WishlistModule {}
