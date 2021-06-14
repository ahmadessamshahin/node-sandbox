import "reflect-metadata";
import express from 'express';
import { InversifyExpressServer } from "inversify-express-utils";
import morganMiddleware from "@config/middleware/morganRest";
import container from "./inversify.config";
import "@api/controllers/index"

const app = express();
app.use(morganMiddleware)
let server = new InversifyExpressServer(container, null, { rootPath: "/api" }, app);

export default server.build();