import { Equal, Expect } from "./helpers/type-utils";

// TODO: complete type for MyType

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

/**
 * How do we create a new object type with _only_ the
 * firstName and lastName properties of User?
 */

type MyType = Pick<User, "firstName" | "lastName">;
type MyTypeWithOmit = Omit<User, "id">;

// type tests = [Expect<Equal<MyType, { firstName: string; lastName: string }>>];
