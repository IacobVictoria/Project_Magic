import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@Controller('test')
export class TestController {
  @UseGuards(JwtAuthGuard)
  @Get()
  hello() {
    return { message: 'Salut' };
  }
}
