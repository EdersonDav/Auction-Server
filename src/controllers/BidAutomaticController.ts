import { Request, Response } from "express";
import { BidAutomaticService } from "../services/BidAutomaticService";

class BidAutomaticController {
    async create(req: Request, res: Response): Promise<Response>{
      const bidAutomatic = new BidAutomaticService();
      const {user_id, product_id, balance} = req.body

      try {
        const bidAutomaticResponse = await bidAutomatic.create(user_id, product_id, balance)
        return res.status(200).json(bidAutomaticResponse);
      } catch (error) {
        return res.status(400).json({ message: error.message });
      }
    }
}

export { BidAutomaticController };
