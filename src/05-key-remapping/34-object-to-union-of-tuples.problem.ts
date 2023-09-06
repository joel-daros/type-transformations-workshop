import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

// this is a easy method to accomplish the same result
// type Mapped<T> = T[keyof T];
// type ValuesAsUnionOfTuples = Mapped<{ [K in keyof Values]: [K, Values[K]] }>;

type ValuesAsUnionOfTuples = {
  [K in keyof Values]: [K, Values[K]];
}[keyof Values];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
