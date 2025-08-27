import { Body, Controller, Post } from '@nestjs/common';
import { DiscordService } from './discord.service';


@Controller('discord')
export class DiscordController {
  constructor(private readonly discord: DiscordService) {}

  @Post('send')
  async send(@Body('content') message: string) {
    await this.discord.sendDiscordMessage(message);
    return { messageDone: 'A mers!' };
  }
}
