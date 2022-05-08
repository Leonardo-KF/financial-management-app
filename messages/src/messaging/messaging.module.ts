import { Module } from '@nestjs/common';
import { BillsController } from './controllers/bills.controller';

// Controller no nest não são só pra htpp, são também para recepção de mensagens do kafka
@Module({
  controllers: [BillsController],
})
export class MessagingModule {}
