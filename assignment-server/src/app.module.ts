import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentModule } from './assignment/assignment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  // this is for establishing the database connection with our nestjs application : 
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/assignment"), AssignmentModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
