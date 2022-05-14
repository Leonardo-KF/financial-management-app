import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

interface ReceiverParams {
  id: string;
  authUserId: string;
  name: string;
  email: string;
}

interface BillParams {
  title: string;
  value: number;
  description: string;
}

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEmail(user: ReceiverParams, Bill: BillParams) {
    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Your bill expired to day',
      template: 'billExpirated',
      context: {
        name: user.name,
        bill: Bill,
      },
    });
  }
}
