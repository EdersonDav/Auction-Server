import { EntityRepository, Repository } from "typeorm";
import { Bid } from "../entities/Bid";

@EntityRepository(Bid)
class BidRepository extends Repository<Bid> {}

export { BidRepository }
