import { expect, it } from "vitest";

// TODO: write body of a function
interface User {
  id: number;
}

interface User {
  first: string;
}

const user: User = {
  id: 123,
  first: "Janusz",
};

class Calculator {
  public name: string = "";

  // public sum(a: number, b: number) {
  //   return a + b;
  // }

  // public sum(a: number, b: number, c: number) {
  //   return a + b + c;
  // }
}

const calculator: Calculator = new Calculator();
calculator.name = "aaaa";

// b = 3;

function sum(a: string) {
  return a;
}

const sum3 = function () {
  return null;
};

const sum2 = (a: string) => {
  return a;
};

const coerceAmount = (amount: number | { amount: number }) => {
  // JS
  if (typeof amount === "number") {
    return amount;
  }
  return amount.amount;
};

it("Should return the amount when passed an object", () => {
  expect(coerceAmount({ amount: 20 })).toEqual(20);
});

it("Should return the amount when passed a number", () => {
  expect(coerceAmount(20)).toEqual(20);
});
