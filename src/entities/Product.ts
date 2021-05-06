
import { Entity, Column, PrimaryColumn } from "typeorm";
import {v4} from 'uuid'

@Entity("products")
class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @Column()
  expiredTime: Date;

  constructor(name: string, description: string, price: number, expiredTime: Date){
    this.name = name;
    this.description = description;
    this.id = v4();
    this.price = price;
    this.expiredTime = expiredTime;

  }

}

export { Product }