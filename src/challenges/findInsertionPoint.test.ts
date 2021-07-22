// import { findInsertionPoint } from "./findInsertionPoint";
// import "jest-matcher-one-of"; // Using ES6 w/ Babel or TypeScript

// test("It returns the correct index", () => {
//   expect(findInsertionPoint([1, 2, 3, 4], 5)).toStrictEqual(4);
// });

// test("It returns the correct index when array is unsorted", () => {
//   expect(findInsertionPoint([2, 100, 5, 19, 27, 39], 25)).toStrictEqual(3);
// });

// test("It returns zero index with all same values and same insetion", () => {
//   expect(findInsertionPoint([10, 10, 10, 10], 10)).toBeOneOf([0, 4]); // Technically it is correct to insert at the beginning or end when all items are the same
// });

// test("It returns zero index with all same values and diff insertion", () => {
//   expect(findInsertionPoint([10, 10, 10, 10], 11)).toStrictEqual(4);
// });

// test("It returns zero index with all same values and diff insertion #2", () => {
//   expect(findInsertionPoint([10, 10, 10, 10], 9)).toStrictEqual(0);
// });

// test("It returns correct index with negative values", () => {
//   expect(findInsertionPoint([-1, -5, -10, -14], -7)).toStrictEqual(2);
// });

// test("It returns correct index with negative values, unsorted", () => {
//   expect(findInsertionPoint([-1, -5, -10, -14], -7)).toStrictEqual(2);
// });
