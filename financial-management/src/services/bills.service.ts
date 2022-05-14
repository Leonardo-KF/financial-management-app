import { Injectable } from '@nestjs/common';
import { KafkaService } from '../messaging/kafka.service';
import { PrismaService } from '../database/prisma/prisma.service';
import { Cron } from '@nestjs/schedule';

interface CreateBillParams {
  title: string;
  value: number;
  description: string;
  expiration: Date;
  userId: string;
}

interface UpdateBillParams {
  title?: string;
  value: number;
  description?: string;
  expiration: Date;
}

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService, private kafka: KafkaService) {}

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
  // (segundo, minuto, hora, dia, mês, dia da semana)
  @Cron('* * 11 * * *')
  async allBills() {
    console.log('running cron');
    const date = Date.now();
    const currentDay =
      new Date(date).toISOString().slice(0, 10) + 'T00:00:00.000Z';

    const bills = await this.prisma.bills.findMany({
      where: {
        expiration: currentDay,
      },
    });

    bills.map(async (bill) => {
      const user = await this.prisma.user.findUnique({
        where: {
          id: bill.userId,
        },
      });
      this.kafka.emit('financialApp.billsExpired', {
        user: {
          authUserId: user.authUserId,
        },
        bill: {
          title: bill.title,
          value: bill.value,
          description: bill.description,
        },
      });
    });
  }
}
