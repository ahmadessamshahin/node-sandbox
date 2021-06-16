import express from 'express';
import morganMiddleware from "@config/middleware/morganRest";

const app = express();


/**
 * MiddleWare
 */

app.use(morganMiddleware)

export default app