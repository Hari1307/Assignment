import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AssignmentModule } from 'src/assignment/assignment.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [forwardRef(() => AssignmentModule), PassportModule,
  JwtModule.register({
    secret: "hari", // place this value in the .env file for security purpose 
    signOptions: { expiresIn: "120000s" }
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
