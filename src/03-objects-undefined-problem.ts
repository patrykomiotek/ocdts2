import { expect, it } from "vitest";

// TODO: fix typings with optional value
interface Name {
  first: string;
  // option 1
  // last?: string;
  // option 2
  last: string | undefined;
}

export const getName = (params: Name) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "John",
    last: undefined,
  });

  expect(name).toEqual("John");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "John",
    last: "Doe",
  });

  expect(name).toEqual("John Doe");
});
