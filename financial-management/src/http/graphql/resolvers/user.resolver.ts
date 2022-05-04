import { UseGuards } from '@nestjs/common';
import { Resolver, Query, ResolveField, Parent } from '@nestjs/graphql';
import { UsersService } from '../../../services/users.service';
import { AuthorizationGuard } from '../../../http/auth/authorization.guard';
import { User } from '../models/user';
import { AuthUser, CurrentUser } from '../../../http/auth/current-user';
import { BillsService } from '../../../services/bills.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private billsService: BillsService,
  ) {}

  @Query(() => User)
  @UseGuards(AuthorizationGuard)
  me(@CurrentUser() user: AuthUser) {
    return this.usersService.getUserByAuthUserId(user.sub);
  }

  @ResolveField()
  bills(@Parent() user: User) {
    return this.billsService.getBillsFromUser(user.id);
  }
}
