
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

  constructor(name: string, password: string){
    this.name = name;
    this.password = password;
    this.id = v4();
  }

}

export { User }