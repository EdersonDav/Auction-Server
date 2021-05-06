import { Request, Response, NextFunction } from "express";
import { ProductsService } from "../services/ProductService";
class ProductsController {
  async getAll(req: Request, res: Response, next: NextFunction): Promise<Response>{
    const product = new ProductsService();
    const {page} = req.query;

    try {
      const productsResponse = await product.getAll(Number(page));

      return res.status(200).json(productsResponse);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async search(req: Request, res: Response): Promise<Response>{
    const product = new ProductsService();
    const {term} = req.params;
    const {page} = req.query;
    try {
      const productsResponse = await product.search(term, Number(page))

      return res.status(200).json(productsResponse)
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<Response>{
    const product = new ProductsService();
    const {id} = req.params;
    try {
      const productResponse = await product.getById(id)

      return res.status(200).json(productResponse)
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { ProductsController };
