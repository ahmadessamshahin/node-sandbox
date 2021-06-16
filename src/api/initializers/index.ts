import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./inversify.config";
import "@api/controllers/index"
import app from './routes'


/**
 *  Server configuration
 */

const server = new InversifyExpressServer(container, null, { rootPath: "/api" }, app);

export default server.build();