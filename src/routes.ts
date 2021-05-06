import { Router } from "express";

import { UsersController } from "./controllers/UserController";
import { ProductsController } from "./controllers/ProductController";
import { BidController } from "./controllers/BidController";

const routes = Router();

const usersController = new UsersController();
const productsController = new ProductsController();
const bitController = new BidController()

routes.post("/login", usersController.login);
routes.post("/users", usersController.create);
routes.post("/bid", bitController.create);
routes.get("/:term", productsController.search)
routes.get("/product/:id", productsController.getById)
routes.get("/", productsController.getAll)

export { routes };
