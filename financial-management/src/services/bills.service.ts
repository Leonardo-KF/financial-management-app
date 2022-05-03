import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateBillParams {
  title: string;
  value: number;
  description: string;
  expiration: Date;
  userId: string;
}

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  async getBills() {
    return this.prisma.bills.findMany();
  }

  async getBill(id: string) {
    return this.prisma.bills.findFirst({
      where: {
        id,
      },
    });
  }

  async createBill(data: CreateBillParams) {
    return this.prisma.bills.create({
      data,
    });
  }
}
