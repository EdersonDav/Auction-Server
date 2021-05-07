import { getCustomRepository, Repository } from "typeorm";
import { BidAutomatic } from "../entities/BidAutomatic";
import { BidAutomaticRepository } from "../repositories/BidAutomaticRepository";
import {UsersService} from './UserService'
import {BidService} from './BidService'


class BidAutomaticService {
  private bidAutomaticRepository: Repository<BidAutomatic>

  constructor(){
    this.bidAutomaticRepository = getCustomRepository(BidAutomaticRepository);
  }

  async create(user_id: string, product_id: string, balance: number){
    const userService = new UsersService();
    await userService.setAmount(user_id, balance);
    const bidAutomatic =  this.bidAutomaticRepository.create({user_id, product_id})
    await this.bidAutomaticRepository.save(bidAutomatic);
    const bidService = new BidService();
    const lastBid = await bidService.getLastBid(product_id);
    if(lastBid.user_id !== user_id){
      await bidService.create(user_id, lastBid.product_id, lastBid.price + 1);
      await userService.setAmount(user_id, balance - (lastBid.price + 1));
    }

    await this.automaticBids(product_id)
  }

  async automaticBids(product_id: string){
    const bidService = new BidService();
    const userService = new UsersService();
    const allBids = await this.bidAutomaticRepository.find({where:{product_id}});
    const lastBid = await bidService.getLastBid(product_id);
    let lastBidInitial = lastBid.price;

    for(let bid of allBids){
      const user = await userService.getUser(bid.user_id);
      lastBidInitial ++
      if(user.balance <= lastBidInitial - 1){
       await userService.rollbackAmount(user.id)
      }else if(lastBid.user_id !== user.id){
        await bidService.create(user.id, lastBid.product_id, lastBidInitial);
        await userService.setAmount(user.id, user.balance - lastBidInitial);
      }else if(lastBid.user_id === user.id){
        return
      }
    }

  }
}

export {BidAutomaticService}
