import { Request, Response } from "express";
import { BidService } from "../services/BidService";

class BidController {
    async create(req: Request, res: Response): Promise<Response>{
      const bid = new BidService();
      const {user_id, product_id, price} = req.body

      try {
        const bidResponse = await bid.create(user_id, product_id, price)
        return res.status(200).json(bidResponse);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    }
}

export { BidController };
