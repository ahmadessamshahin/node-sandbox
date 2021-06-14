import { UserRepository } from "@api/repository/Users";
import Logger from "@config/logger";
import { TYPES } from "@interfaces/inversifyTypes";
import { inject, injectable } from "inversify";

@injectable()
export class UserService {
  constructor(@inject(TYPES.UserRepository) private readonly userRepository: UserRepository) {
  }
  all() {
    Logger.info("get all user Info from the service")
    return this.userRepository.findAll()
  }
}