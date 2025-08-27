import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class DiscordService {
  async sendDiscordMessage(message: string) {
    const url = process.env.DISCORD_WEBHOOK_URL;
    if (!url) throw new BadRequestException('DISCORD_WEBHOOK_URL NOT FPOUND');

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: message }),
    });

    if (!res.ok) {
      throw new BadRequestException(`failed: ${res.status}`);
    }
  }
}
