import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'path';
import { BillsService } from '../services/bills.service';
import { DatabaseModule } from '../database/database.module';
import { ProductsResolver } from './graphql/resolvers/bills.resolver';
import { UsersService } from 'src/services/users.service';
import { UsersResolver } from './graphql/resolvers/user.resolver';

//configmodule is a nestjs dependencia that allows us to access the .env file

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [ProductsResolver, UsersResolver, BillsService, UsersService],
})
export class HttpModule {}
