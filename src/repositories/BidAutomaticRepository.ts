import { EntityRepository, Repository } from "typeorm";
import { BidAutomatic } from "../entities/BidAutomatic";

@EntityRepository(BidAutomatic)
class BidAutomaticRepository extends Repository<BidAutomatic> {}

export { BidAutomaticRepository }
