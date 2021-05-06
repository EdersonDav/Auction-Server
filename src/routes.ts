import { Router } from "express";

import { UsersController } from "./controllers/UserController";
import { ProductsController } from "./controllers/ProductController";

const routes = Router();

const usersController = new UsersController();
const productsController = new ProductsController();

routes.post("/login", usersController.login);
routes.post("/users", usersController.create);
routes.get("/:term", productsController.search)
routes.get("/product/:id", productsController.getById)
routes.get("/", productsController.getAll)

export { routes };
