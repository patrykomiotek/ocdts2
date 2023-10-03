import { expect, it } from "vitest";

// TODO: fix typings for catch statement

class ValidationError extends Error {}

const tryCatchDemo = (state: "fail" | "succeed") => {
  // throw new Calculator();
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    // throw new Error('sdfsdf');
    if (e instanceof ValidationError) {
      return e.message;
    }
    if (e instanceof Error) {
      return e.message;
    }
    return (e as any).message;
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
