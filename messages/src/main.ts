import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'messages',
        brokers: ['localhost:29092'],
      },
    },
  });
  app.startAllMicroservices().then(() => {
    console.log('[Messaging] Microservice started');
  });

  app.listen(3333).then(() => {
    console.log('[messages] server running on port 3333');
  });
}
bootstrap();
