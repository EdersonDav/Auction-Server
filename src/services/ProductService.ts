import { getCustomRepository, Repository, Like } from "typeorm";
import { Product } from "../entities/Product";
import { ProductsRepository } from "../repositories/ProductRepository";

class ProductsService {
  private ProductRepository: Repository<Product>

  constructor(){
    this.ProductRepository = getCustomRepository(ProductsRepository);
  }

  async create(name:string , description:string, expiredTime:Date, price: number){

    const product = this.ProductRepository.create({ name, description, expiredTime, price });
    await this.ProductRepository.save(product);

    return product;
  }

  async getAll(page: number){
    const take = 10;
    const skip = (page - 1) * 10;
    const products = await this.ProductRepository.find({take, skip });
    if(products){
      return products;
    }

    throw new Error ('Products not found')
  }

  async search(term: string, page: number){
    const take = 10;
    const skip = (page - 1) * 10;

    let products = await this.ProductRepository.find({where: {name : term}, take, skip});

    if(products.length){
      return products
    }else{
      products = await this.ProductRepository.find({where: {description : Like(`%${term}%`)}, take, skip});
      if(products.length){
        return products
      }
    }

    throw new Error ('Products not found')
  }

  async getById(id: string){
    const product = await this.ProductRepository.findOne({where:{id}});
    if(product){
      return product;
    }

    throw new Error ('Product not found')
  }

  async setLastBid(id: string, value: number){
    const product = await this.ProductRepository.findOne({where:{id}});
    if(product){

      product.lastBidPrice = value;
      await this.ProductRepository.save(product);
    }
  }

}

export {ProductsService}
