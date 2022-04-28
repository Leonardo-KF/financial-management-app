import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TesteController } from 'src/http/teste.controller';

//configmodule is a nestjs dependencia that allows us to access the .env file

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TesteController],
})
export class HttpModule {}
