import { getCustomRepository, Repository } from "typeorm";
import { Bid } from "../entities/Bid";
import { BidRepository } from "../repositories/BidRepository";
import {ProductsService} from './ProductService'


class BidService {
  private bidRepository: Repository<Bid>

  constructor(){
    this.bidRepository = getCustomRepository(BidRepository);
  }

  async create(user_id: string, product_id: string, price: number){
    const product = new ProductsService();
    const oldBid = await this.bidRepository.find({where:{product_id}, relations: ["product"]});

    if(oldBid.length < 1){
      const minPrice = await product.getById(product_id);

      if(price < minPrice.price){
        throw new Error(`The minimum bid amount for this product is ${minPrice.price}`)
      }
    }else if(oldBid.length > 0){
      const valuesBids = oldBid.sort((a, b) => b.price - a.price);

      if(valuesBids[0].user_id === user_id){
        throw new Error('The last bid made for this product has already been made by you')
      }else if(valuesBids[0].price >= price){
        console.log(valuesBids[0].price,  price);

        throw new Error('Bid amount cannot be less than the last bid')
      }

    }

    const bid = this.bidRepository.create({product_id, user_id, price  });
    await this.bidRepository.save(bid);
    return bid;
  }

  async getLastBid(product_id: string){
    const allBids = await this.bidRepository.find({where: {product_id}});

    return allBids.sort((a, b) => b.price - a.price)[0]
  }
}

export {BidService}
