import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateUserParams {
  authUserId: string;
}
@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  getUserByAuthUserId(authUserId: string) {
    return this.prisma.user.findUnique({
      where: {
        authUserId,
      },
    });
  }

  createUser({ authUserId }: CreateUserParams) {
    return this.prisma.user.create({
      data: {
        authUserId,
      },
    });
  }
}
