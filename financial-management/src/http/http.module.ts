import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

//configmodule is a nestjs dependencia that allows us to access the .env file

@Module({
  imports: [ConfigModule.forRoot()],
})
export class HttpModule {}
