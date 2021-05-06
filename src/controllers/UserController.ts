import { Request, Response } from "express";
import { UsersService } from "../services/UserService";
import { ProductsService } from "../services/ProductService";

class UsersController {
    async create(req: Request, res: Response): Promise<Response>{
      const user = new UsersService();
      const product = new ProductsService()
      try {
        await user.create('user1', 'user1')
        await user.create('user2', 'user2')
        for(let i = 0; i<= 20; i++){
          await product.create(`Product-${i}`, `Description product number ${i}`, new Date(`2021-10-${i+1}`), Number(((i+1) * 100).toFixed(2)) )
        }
        return res.status(200).json({message: 'ok'});
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    }
    async login(req: Request, res: Response): Promise<Response>{
      const {name, password} = req.body;
      const user = new UsersService();
      try {
        const userResponse = await user.login(name, password)

        return res.status(200).json(userResponse)
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    }
}

export { UsersController };
