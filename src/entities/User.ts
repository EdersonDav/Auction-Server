
import { Entity, Column, PrimaryColumn } from "typeorm";
import {v4} from 'uuid'

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  balance: number;

  @Column()
  balanceInitial: number;

  constructor(name: string, password: string, balance: number, balanceInitial:number){
    this.password = password;
    this.balanceInitial = 0;
    this.balance = 0;
    this.name = name;
    this.id = v4();
  }

}

export { User }
