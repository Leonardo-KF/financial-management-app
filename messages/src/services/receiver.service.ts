import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

interface CreateReceiverParams {
  authUserId: string;
  name: string;
  email: string;
}

@Injectable()
export class ReceiversService {
  private AUTH0_DOMAIN: string;
  private AUTH0_CLIENT_ID: string;
  private AUTH0_SECRET: string;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.AUTH0_DOMAIN = this.configService.get('AUTH0_DOMAIN') ?? '';
    this.AUTH0_CLIENT_ID = this.configService.get('AUTH0_CLIENT_ID') ?? '';
    this.AUTH0_SECRET = this.configService.get('AUTH0_SECRET') ?? '';
  }

  async getReceiverByAuthUserId(authUserId: string) {
    return this.prisma.receiver.findUnique({
      where: {
        authUserId,
      },
    });
  }

  async createReceiver(receiver: CreateReceiverParams) {
    return this.prisma.receiver.create({
      data: {
        authUserId: receiver.authUserId,
        name: receiver.name,
        email: receiver.email,
      },
    });
  }

  async getToken() {
    const accessData = await lastValueFrom(
      this.httpService.post(this.AUTH0_DOMAIN + '/oauth/token', {
        client_id: this.AUTH0_CLIENT_ID,
        client_secret: this.AUTH0_SECRET,
        audience: this.AUTH0_DOMAIN + '/api/v2/',
        grant_type: 'client_credentials',
      }),
    );
    // .pipe(map((response: AxiosResponse<any>) => response.data));

    return accessData.data.access_token;
  }

  async getReceiverInfobyAuthUserId(authUserId: string, token: string) {
    const response = await lastValueFrom(
      this.httpService.get(this.AUTH0_DOMAIN + '/api/v2/users/' + authUserId, {
        headers: { Authorization: 'Bearer ' + token },
      }),
    );
    const receiver = {
      authUserId: response.data.user_id,
      name: response.data.name,
      email: response.data.email,
    };
    return receiver;
  }
}
