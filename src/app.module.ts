import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductsModule } from './products/products.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { StockMovementsModule } from './stock-movements/stock-movements.module';
import { Role } from './roles/entities/role.entity';
import { User } from './user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Supplier } from './suppliers/entities/supplier.entity';
import { Product } from './products/entities/product.entity';
import { StockMovement } from './stock-movements/entities/stock-movement.entity';
import { CheckAdminMiddleware } from './middleware/logger.middleware';
import { RolesController } from './roles/roles.controller';

@Module({
  imports: [RolesModule, AuthModule, UserModule, ProductsModule, SuppliersModule, StockMovementsModule,
     ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [User, Product, Supplier, StockMovement, Role],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([User, Product, Supplier, StockMovement, Role]),
    AuthModule,


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckAdminMiddleware)
      .forRoutes(RolesController); // Middleware only on RolesController
  }
}