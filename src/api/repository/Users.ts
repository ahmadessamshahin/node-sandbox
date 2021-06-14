import Logger from "@config/logger";
import { injectable } from "inversify";

@injectable()
export class UserRepository {
  findAll() {
    Logger.info("get all user Info from the repository")
  }

  create() {
    //
  }

  findById() {
    //
  }

  update() {
    //
  }

  delete() {
    //
  }
}