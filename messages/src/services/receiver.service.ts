import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateReceiverParams {
  authUserId: string;
}

@Injectable()
export class ReceiversService {
  constructor(private prisma: PrismaService) {}

  async getReceiverByAuthUserId({ authUserId }: CreateReceiverParams) {
    return this.prisma.receiver.findUnique({
      where: {
        authUserId,
      },
    });
  }
}
