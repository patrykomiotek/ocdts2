import { expect, it } from "vitest";
import { Equal, Expect } from "./helpers/type-utils";

// TODO: fix typings error
// create User interface/type which can take generic role
type Role = "admin" | "user";

export interface User<T extends Role> {
  id: number;
  first: string;
  role: T;
}

const janusz: User<Role> = {
  id: 123,
  first: "Janusz",
  role: "admin",
};

const guitarists = new Set<string>(); // Map<string, User>

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

it("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).toEqual(true);
  expect(guitarists.has("Eric Clapton")).toEqual(true);
});

it("Should give a type error when you try to pass a non-string", () => {
  // @ts-expect-error
  guitarists.add(2);
});

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);

  type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});
