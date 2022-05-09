import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from '@nestjs/axios';
import { MessagingModule } from './messaging/messaging.module';
import { MessagesService } from './services/message.service';
import { ReceiversService } from './services/receiver.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './database/prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    HttpModule,
    MessagingModule,
  ],
  controllers: [],
  providers: [MessagesService, ReceiversService, PrismaService],
})
export class AppModule {}
