import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthUser, CurrentUser } from 'src/http/auth/current-user';
import { BillsService } from '../../../services/bills.service';
import { UsersService } from '../../../services/users.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { CreateBillInput } from '../inputs/create-bill-input';
import { Bill } from '../models/bill';

// KISS - keep it simple and stupid

@Resolver()
export class ProductsResolver {
  constructor(
    private billsService: BillsService,
    private usersService: UsersService,
  ) {}

  @Mutation(() => Bill)
  @UseGuards(AuthorizationGuard)
  async createBill(
    @Args('data') data: CreateBillInput,
    @CurrentUser() user: AuthUser,
  ) {
    let authUser = await this.usersService.getUserByAuthUserId(user.sub);

    if (!authUser) {
      authUser = await this.usersService.createUser({ authUserId: user.sub });
    }

    return this.billsService.createBill({
      ...data,
      userId: authUser.id,
    });
  }
  @Mutation(() => Bill)
  @UseGuards(AuthorizationGuard)
  async updateBill(
    @Args('id') id: string,
    @Args('data') data: CreateBillInput,
  ) {
    return this.billsService.updateBill(id, data);
  }

  @Mutation(() => Bill)
  @UseGuards(AuthorizationGuard)
  async deleteBill(@Args('id') id: string) {
    return this.billsService.deleteBill(id);
  }
}
