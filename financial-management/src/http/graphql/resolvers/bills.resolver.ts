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

  @Query(() => [Bill])
  @UseGuards(AuthorizationGuard)
  bills() {
    return this.billsService.getBills();
  }

  @Mutation(() => Bill)
  @UseGuards(AuthorizationGuard)
  async createBill(
    @Args('data') data: CreateBillInput,
    @CurrentUser() user: AuthUser,
  ) {
    const authUser = await this.usersService.getUserByAuthUserId(user.sub);

    // if (!authUser) {
    //   throw new Error('User not found');
    // }

    return null;
    // return this.billsService.createBill({
    //   ...data,
    // });
  }
}
