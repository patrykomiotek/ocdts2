import { expect, it } from "vitest";

// TODO: fix types for functions
interface User {
  id: string;
  firstName: string;
  lastName: string;
}

// any (All)
// unknown
// void (func: void)
// never
// null -> JS
// NaN -> JS
// undefined -> JS

// var a;

type A = never & unknown;

let user: unknown;
user.eyes = "sth";
user = new UserActivation();

user = 123;

let cat: any;
cat.eyes = 2;

const createThenGetUser = async (
  createUser: () => Promise<string>, // Awaited<Promise<string>>
  getUser: (id: string) => Promise<User>
): Promise<User> => {
  const userId: string = await createUser();

  const user = await getUser(userId);

  return user;
};

it("Should create the user, then get them", async () => {
  const user = await createThenGetUser(
    async () => "123",
    async (id) => ({
      id,
      firstName: "John",
      lastName: "Doe",
    })
  );

  expect(user).toEqual({
    id: "123",
    firstName: "John",
    lastName: "Doe",
  });
});
