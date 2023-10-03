import { expect, it } from "vitest";

// TODO: fix typings

// Map -> objet JS
// Set -> object JS
// Record -> type in TS

const createCache = () => {
  // const newMap = new Map<string, string>();

  // Record<key: string, value: User>
  const cache: Record<string, string> = {
    a: "jdshfjksdfk",
  };

  // const cache = new Map<string, string>();

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "John");

  expect(cache.cache["123"]).toEqual("John");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "John");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
