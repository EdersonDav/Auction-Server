import { Router } from "express";

import { UsersController } from "./controllers/UserController";
import { ProductsController } from "./controllers/ProductController";
import { BidController } from "./controllers/BidController";
import { BidAutomaticController } from "./controllers/BidAutomaticController";

const routes = Router();

const usersController = new UsersController();
const productsController = new ProductsController();
const bitController = new BidController()
const bidAutomaticController = new BidAutomaticController()

routes.post("/login", usersController.login);
routes.post("/users", usersController.create);
routes.post("/bid", bitController.create);
routes.post("/bidAutomatic", bidAutomaticController.create);
routes.get("/:term", productsController.search)
routes.get("/product/:id", productsController.getById)
routes.get("/", productsController.getAll)

export { routes };
