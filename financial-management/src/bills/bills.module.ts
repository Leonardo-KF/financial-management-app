import { Module } from '@nestjs/common';
import { BillsService } from './bills.service';
import { BillsResolver } from './bills.resolver';

@Module({
  providers: [BillsResolver, BillsService],
})
export class BillsModule {}
