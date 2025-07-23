import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from './entities/product.entity';
import { Role } from 'src/roles/entities/role.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Role, Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
