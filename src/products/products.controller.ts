import { Controller, Post,Delete, Res, Body, HttpStatus, Get, Param, Put, NotFoundException } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {

  constructor(
    private productsService: ProductsService
  ) { }

  @Get()
  async getProducts(@Res() res) {
    const products = await this.productsService.getProducts();
    return res.status(HttpStatus.OK).json(products);
  }

  @Get(':id')
  async getProduct(@Res() res, @Param('id') id: string) {
    console.log(id)
    const product = await this.productsService.getProduct(id);
    return res.status(HttpStatus.OK).json(product);
  }

  @Post()
  async addProduct(@Res() res, @Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.addProduct(createProductDto);
    return res.status(HttpStatus.CREATED).json(product)
  }

  @Put(':id')
  async updateProduct(@Res() res, @Param('id') id: string, @Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.updateProduct(id, createProductDto);
    return res.status(HttpStatus.CREATED).json(product)
  }

  @Delete(':id')
  async deleteProduct(@Res() res, @Param('id') id: string) {
    const product = await this.productsService.deleteProduct(id);
    return res.status(HttpStatus.CREATED).json(product)
  }

}
