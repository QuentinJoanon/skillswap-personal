import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { Request } from 'express';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @HttpCode(HttpStatus.OK)
  @Post('register')
  signUp(@Body() signUpDto: CreateUserDto) {
    return this.authService.signUp(signUpDto);
  }

  @Post('refresh')
  refresh(@Req() request: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const refreshToken: string = request.cookies['refreshToken'];
    return this.authService.refreshToken(refreshToken);
  }
}
