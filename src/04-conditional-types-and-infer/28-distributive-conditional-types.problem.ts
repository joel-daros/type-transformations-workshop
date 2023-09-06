import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// this work because when using generic, the generic will iterate every element of
// Fruit and check one by one:
// T extends "apple"?
// T extends "banana"?
// T extends "orange"?
type RemoveOrange<T> = T extends "orange" ? never : T;

type AppleOrBanana = RemoveOrange<Fruit>;

// this not works, because Fruits is not a generic. It will iterate over the elements of Fruit.
// type AppleOrBanana = Fruit extends "apple" | "banana" ? Fruit : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
