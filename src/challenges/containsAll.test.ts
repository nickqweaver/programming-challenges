import { containsAll } from "./containsAll";

test("It does not care about casing", () => {
  expect(containsAll(["Hello", "hello"])).toBe(true);
});

test("It fails if last item does not match", () => {
  expect(containsAll(["hello", "hey"])).toBe(false);
});

test("It returns true for random order letters", () => {
  expect(containsAll(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).toBe(true);
});

test("It returns true for same letters in different order", () => {
  expect(containsAll(["Mary", "Aarmy"])).toBe(true);
});

test("It returns true when first letter does not exist in first", () => {
  expect(containsAll(["Alien", "line"])).toBe(true);
});

test("It returns true when middle letter does not exist in first", () => {
  expect(containsAll(["floor", "for"])).toBe(true);
});

test("It returns false when first letter is not found", () => {
  expect(containsAll(["hello", "neo"])).toBe(false);
});

test("It returns false when first letter is not found, short", () => {
  expect(containsAll(["voodoo", "no"])).toBe(false);
});

test("It returns false when all items in 1st exist in 2nd but all items in 2nd DNE in 1st", () => {
  expect(containsAll(["ate", "date"])).toBe(false);
});

test("It returns false when items don't match", () => {
  expect(containsAll(["Tiger", "Zebra"])).toBe(false);
});

test("It returns true when items match", () => {
  expect(containsAll(["Noel", "Ole"])).toBe(true);
});
