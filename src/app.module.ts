import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { MongooseModule } from '@nestjs/mongoose'
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/products_db', { useNewUrlParser: true }),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
