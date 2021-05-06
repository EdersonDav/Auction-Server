
import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 } from "uuid";
import { User } from "./User";
import { Product } from "./Product";

@Entity("bids")
class Bid {
  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @JoinColumn({ name: "product_id" })
  @ManyToOne(() => Product)
  product: Product;

  @Column()
  product_id: string;

  @Column()
  price: number;

  constructor(price: number, product_id: string, user_id: string){
    this.product_id = product_id;
    this.user_id = user_id;
    this.price = price;
    this.id = v4();
  }
}

export { Bid }
