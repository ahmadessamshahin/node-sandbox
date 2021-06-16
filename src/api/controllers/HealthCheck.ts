import express from 'express';
import { interfaces, controller, httpGet, request, response } from "inversify-express-utils";

@controller("/health_check")
export class HealthCheckController implements interfaces.Controller {
  @httpGet("/")
  public async index(@request() _: express.Request, @response() res: express.Response) {
    try {
      res.status(200).send("healthy\n")
    } catch (error) {
      res.status(400).json(error);
    }
  }
}