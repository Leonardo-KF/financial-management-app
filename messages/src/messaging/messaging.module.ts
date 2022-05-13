import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { ReceiversService } from '../services/receiver.service';
import { BillsController } from './controllers/bills.controller';
import { MailModule } from '../mail/mail.module';

// Controller no nest não são só pra htpp, são também para recepção de mensagens do kafka
@Module({
  imports: [HttpModule, ConfigModule.forRoot(), MailModule],
  controllers: [BillsController],
  providers: [ReceiversService, PrismaService],
})
export class MessagingModule {}
