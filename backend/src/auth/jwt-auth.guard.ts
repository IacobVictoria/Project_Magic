import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest<Request>();
    const token = request.cookies['jwt']; //aici am salvat tokenul de la login

     if (!token) throw new UnauthorizedException('Missing token');

    try {
      const decoded = this.jwtService.verify(token);
      request['user'] = decoded;
      return true;
    } catch (err) {
       throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
