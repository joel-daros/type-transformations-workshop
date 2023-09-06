import { Equal, Expect } from "../helpers/type-utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organizationId: string;
  groupId: string;
}

// type OnlyIdKeys<T> = {
//   [K in Extract<keyof T, `${string}Id` | `${string}id`>]: T[K];
// };

type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}Id` | `${string}id` ? K : never]: T[K];
};

type x = OnlyIdKeys<Example>;

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organizationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
