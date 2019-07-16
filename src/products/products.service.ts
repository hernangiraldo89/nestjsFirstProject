import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interfaces/Product.interface";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductsService {

  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>
  ) {}

  async getProducts(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  async getProduct(id: string): Promise<Product> {
    const products = await this.productModel.findById(id);
    return products;
  }

  async addProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = new this.productModel(createProductDto);
    await product.save();
    return product;
  }

  async updateProduct(id: string, createProductDto: CreateProductDto): Promise<Product> {
    const product = await this.productModel.findByIdAndUpdate(id, createProductDto, { new: true });
    return product;
  }

  async deleteProduct(id: string): Promise<Product> {
    const product = await this.productModel.findByIdAndDelete(id);
    return product;
  }

}
