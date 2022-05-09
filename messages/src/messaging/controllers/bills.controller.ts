import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { ReceiversService } from '../../services/receiver.service';
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
  constructor(private receiversService: ReceiversService) {}

  @EventPattern('financialApp.billsExpired')
  async billsExpirated(@Payload('value') payload: billsExpiratedPayload) {
    // upgrade: use the token in cache
    let receiver = await this.receiversService.getReceiverByAuthUserId(
      payload.user.authUserId,
    );
    if (!receiver) {
      const token = await this.receiversService.getToken();
      const user = await this.receiversService.getReceiverInfobyAuthUserId(
        payload.user.authUserId,
        token,
      );
      receiver = await this.receiversService.createReceiver(user);
    }
  }
}
