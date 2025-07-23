import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class ActiveStatusGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const user = request.body.user; // Adjust based on how user is passed (header, token, etc.)

    if (!user || user.status !== 'active') {
      throw new UnauthorizedException('User status is not active');
    }

    return true;
  }
}
