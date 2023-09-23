import { resolve, join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';

const isProd = process.env.NODE_ENV === 'production';

const rootPath = resolve(
  join(__dirname, '..', '..', 'client', 'dist', 'client'),
);

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb+srv://adi:admin@cluster0.wxhrnig.mongodb.net/inventory?retryWrites=true&w=majority'),
    ServeStaticModule.forRoot({ rootPath }),
    // ProductModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
