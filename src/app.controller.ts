import { Controller, Request, Post, UseGuards, Get, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './controllers/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUserDto } from './controllers/users/dto/get-user.dto';

@ApiTags('Auth')
@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() user, @Body() body: GetUserDto) {
      return this.authService.login(user.user);
  }
}