import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { AuthModule } from 'src/auth/auth.module';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports: [AuthModule],    
  controllers: [TestController],
  providers: [JwtAuthGuard],
})
export class TestModule {}
