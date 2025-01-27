import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductImage } from './entities/product-image.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductImage])
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService, TypeOrmModule]//muchas veces es necesario el TypeOrmModule debido a que necesitamos sus entidades declaradas
})
export class ProductsModule { }
