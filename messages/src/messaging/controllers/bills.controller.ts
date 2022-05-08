import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

// json2ts
interface User {
  authUserId: string;
}

interface Bill {
  title: string;
  value: number;
  description: string;
}

interface billsExpiratedPayload {
  user: User;
  bill: Bill;
}

@Controller()
export class BillsController {
  @EventPattern('financialApp.billsExpired')
  async billsExpirated(@Payload('value') payload: billsExpiratedPayload) {
    console.log(payload);
  }
}
