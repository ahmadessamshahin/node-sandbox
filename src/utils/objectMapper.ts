import { IObject } from "@interfaces/index";

export function objectMapper<F, T>(obj: IObject<F>, fn: (value: F, key: string, index: number) => T): IObject<T> {
  return Object.fromEntries(
    Object.entries(obj).map(
      ([k, v], i) => [k, fn(v, k, i)]
    )
  );
}