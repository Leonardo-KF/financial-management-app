import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BillsService } from './bills.service';
import { CreateBillInput } from './dto/create-bill.input';
import { UpdateBillInput } from './dto/update-bill.input';

@Resolver('Bill')
export class BillsResolver {
  constructor(private readonly billsService: BillsService) {}

  @Mutation('createBill')
  create(@Args('createBillInput') createBillInput: CreateBillInput) {
    return this.billsService.create(createBillInput);
  }

  @Query('bills')
  findAll() {
    return this.billsService.findAll();
  }

  @Query('bill')
  findOne(@Args('id') id: number) {
    return this.billsService.findOne(id);
  }

  @Mutation('updateBill')
  update(@Args('updateBillInput') updateBillInput: UpdateBillInput) {
    return this.billsService.update(updateBillInput.id, updateBillInput);
  }

  @Mutation('removeBill')
  remove(@Args('id') id: number) {
    return this.billsService.remove(id);
  }
}
