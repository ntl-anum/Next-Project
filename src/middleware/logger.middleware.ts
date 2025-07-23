// src/middleware/check-admin.middleware.ts

import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CheckAdminMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const name = req.body.name;

    // Check if name contains 'Admin'
    if (!name || !name.toLowerCase().includes('admin')) {
      throw new UnauthorizedException('User is not an admin');
    }

    next(); // Continue to next handler
  }
}
