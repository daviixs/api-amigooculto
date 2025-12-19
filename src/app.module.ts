import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
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
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';

@Module({
  imports: [
    AuthModule,
    ParticipantModule,
    WishlistModule,
    DrawModule,
    NotificationModule,
  ],
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
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    WishlistService,
  ],
})
export class AppModule {}
