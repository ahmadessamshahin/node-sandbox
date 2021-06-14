import { objectMapper } from "@utils/objectMapper";

const types = {
  User: 'User'
};

export const TYPES = objectMapper<string, symbol>(types, (value: string) => Symbol.for(value));