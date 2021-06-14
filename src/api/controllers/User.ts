import { UserService } from '@api/services/Users';
import { TYPES } from '@interfaces/inversifyTypes';
import * as express from 'express';
import { inject } from 'inversify';
import { interfaces, controller, httpGet, request, response } from "inversify-express-utils";

@controller("/users")
export class UserController implements interfaces.Controller {
  constructor(@inject(TYPES.UserService) private readonly userService: UserService) {
  }
  @httpGet("/")
  public async index(@request() _: express.Request, @response() res: express.Response) {
    try {
      const users = this.userService.all();
      res.status(200).json(users);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}