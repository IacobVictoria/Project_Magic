import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { TestModule } from './test/test.module';
import { ConfigModule } from '@nestjs/config';
import { DiscordModule } from './discord/discord.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',   
      password: '1234',  
      database: 'magic_hub',
      entities: [User],      
      synchronize: true,     
    }),
    UsersModule,
    AuthModule,
    TestModule,
    DiscordModule,
    ConfigModule.forRoot({ isGlobal: true })
  ],
})
export class AppModule {}
