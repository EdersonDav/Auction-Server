import { Entity, PrimaryColumn, Column } from "typeorm";
import { v4 } from "uuid";

@Entity("bidautomatics")
class BidAutomatic {
  @PrimaryColumn()
  id: string;

  @Column()
  user_id: string;

  @Column()
  product_id: string;

  constructor(product_id: string, user_id: string){
    this.product_id = product_id;
    this.user_id = user_id;
    this.id = v4();
  }
}

export { BidAutomatic }
