import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from '@nestjs/axios';
import { MessagingModule } from './messaging/messaging.module';
import { MessagesService } from './services/message.service';
import { ReceiversService } from './services/receiver.service';

@Module({
  imports: [DatabaseModule, HttpModule, MessagingModule],
  controllers: [],
  providers: [MessagesService, ReceiversService],
})
export class AppModule {}
