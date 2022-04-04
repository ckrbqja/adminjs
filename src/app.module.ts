import { AdminModule } from '@adminjs/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';
import { Database, Resource } from '@adminjs/typeorm';
import AdminJS from 'adminjs'

AdminJS.registerAdapter({ Database, Resource });
@Module({
  imports: [TypeOrmModule.forRoot({
    name: 'default',
    keepConnectionAlive: true,
    type: 'mysql',
    host: 'database-1.c5xn4tjuilf4.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    username: 'admin',
    password: 'kivel1212!',
    database: 'kivel',
    entities: [User],
    migrations: [__dirname + '/../**/*.migration{.ts,.js}'],
    logging: ['query', 'error'],
    charset: 'utf8mb4',
}),
AdminModule.createAdmin({
  adminJsOptions: {
    rootPath: '/admin',
    resources: [User],
  }
})
,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
