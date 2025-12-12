import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from 'src/database/prisma.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { GroupService } from './group/group.service';
import { GroupController } from './group/group.controller';
import { WishlistController } from './wishlist/wishlist.controller';
import { WishlistService } from './wishlist/wishlist.service';
import { ParticipantModule } from './participant/participant.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { DrawModule } from './draw/draw.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [ParticipantModule, WishlistModule, DrawModule, NotificationModule],
  controllers: [
    AppController,
    UserController,
    GroupController,
    WishlistController,
  ],
  providers: [
    AppService,
    PrismaService,
    UserService,
    GroupService,
    WishlistService,
  ],
})
export class AppModule {}
