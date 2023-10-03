import { expect, it } from "vitest";

// TODO: fix typings for defaultUser

interface User {
  id: number;
  firstName: string;
  lastName: string;
  isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
// const defaultUser = {} as User;
// const defaultUser: User | undefined = undefined;
// const defaultUser: User = {
const defaultUser = {
  id: 123,
  firstName: "a",
  lastName: "b",
  isAdmin: true,
};

type Admin = typeof defaultUser & { age: number } & { isAdmin: true };
type ApiResponse =
  | {
      // pending
      data: undefined;
      isLoading: true;
      isError: false;
    }
  | {
      // fulfilled
      data: User[];
      isLoading: false;
      isError: false;
    }
  | {
      // rejected
      data: undefined;
      isLoading: false;
      isError: true;
    };

// TODO: do not touch
const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
