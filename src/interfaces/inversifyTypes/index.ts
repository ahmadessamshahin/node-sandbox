import { objectMapper } from "@utils/objectMapper";

const repositoriesTypes = {
  UserRepository: 'UserRepository'
};


const servicesTypes = {
  UserService: 'UserService'
};

export const TYPES = objectMapper<string, symbol>({ ...repositoriesTypes, ...servicesTypes}, (value: string) => Symbol.for(value));