import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateBillParams {
  title: string;
  value: number;
  description: string;
  expiration: Date;
  userId: string;
}

interface UpdateBillParams {
  title: string;
  value: number;
  description: string;
  expiration: Date;
}

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService) {}

  async getBillsFromUser(userId: string) {
    return await this.prisma.bills.findMany({
      where: {
        userId,
      },
    });
  }

  async getBill(id: string) {
    return await this.prisma.bills.findUnique({
      where: {
        id,
      },
    });
  }

  async createBill(data: CreateBillParams) {
    return await this.prisma.bills.create({
      data,
    });
  }

  async updateBill(id: string, data: UpdateBillParams) {
    return await this.prisma.bills.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteBill(id: string) {
    return await this.prisma.bills.delete({
      where: {
        id,
      },
    });
  }
}
