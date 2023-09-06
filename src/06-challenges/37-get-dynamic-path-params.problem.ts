import { Equal, Expect } from "../helpers/type-utils";
import { S } from "ts-toolbelt";

type UserPath = "/users/:id";
type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractIds<T> = T extends `:${infer S}` ? S : never;

type ExtractPathParams<T extends string> = {
  [K in ExtractIds<S.Split<T, "/">[number]>]: string;
};

// another simple solution
// type ExtractPathParams<T extends string> = {
//   [K in S.Split<T, "/">[number] as K extends `:${infer S}` ? S : never]: string;
// };

type X = ExtractPathParams<UserPath>;

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
