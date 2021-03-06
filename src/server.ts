import "reflect-metadata";
import "./database";
import express from 'express';
import cors from 'cors';

import { routes } from "./routes";

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(5000, () =>{
  console.log('Server runing in port 5000')
})
