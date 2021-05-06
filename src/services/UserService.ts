import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UserRepository";

class UsersService {
  private userRepository: Repository<User>

  constructor(){
    this.userRepository = getCustomRepository(UsersRepository);
  }

  async create(name:string , password:string){

    const user = this.userRepository.create({ name, password });
    await this.userRepository.save(user);
    return user;
  }

  async login(name: string, password: string){
    const user = await this.userRepository.findOne({where: {name}});

    if(user){
      if( user.password === password){
        return user;
      }
    }
    throw new Error('User incorrect');
  }
}

export {UsersService}
