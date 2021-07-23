import { pickTheDataYouWant } from "./pickTheDataYouWant";

let numArrayToFill: number[];
let immutableNumberData: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17],
];

let stringArrayToFill: string[];
let immutableStringData: string[][] = [
  ["word", "is", "cool"],
  ["but"],
  ["maybe", "this", "is", "cooler"],
  ["how", "is"],
  ["it", "going"],
  ["today"],
];

type CustomType = {
  a: string;
  b: number;
  c: boolean;
};
let customDataToFill: CustomType[];
let immutableCustomData = [
  [
    { a: "a", b: 1, c: false },
    { a: "b", b: 2, c: true },
    { a: "c", b: 3, c: false },
  ],
  [{ a: "d", b: 4, c: true }],
  [
    { a: "e", b: 5, c: false },
    { a: "f", b: 6, c: true },
  ],
  [
    { a: "g", b: 7, c: false },
    { a: "h", b: 8, c: true },
  ],
];

beforeEach(() => {
  numArrayToFill = [];
  stringArrayToFill = [];
  customDataToFill = [];
});

afterEach(() => {
  // Ensure immutableData arguments do not get modified
  expect(immutableNumberData).toEqual([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17],
  ]);
  expect(immutableStringData).toEqual([
    ["word", "is", "cool"],
    ["but"],
    ["maybe", "this", "is", "cooler"],
    ["how", "is"],
    ["it", "going"],
    ["today"],
  ]);
  expect(immutableCustomData).toEqual([
    [
      { a: "a", b: 1, c: false },
      { a: "b", b: 2, c: true },
      { a: "c", b: 3, c: false },
    ],
    [{ a: "d", b: 4, c: true }],
    [
      { a: "e", b: 5, c: false },
      { a: "f", b: 6, c: true },
    ],
    [
      { a: "g", b: 7, c: false },
      { a: "h", b: 8, c: true },
    ],
  ]);
});
test("It returns the correct length of array", () => {
  const nthItems = 2;
  const itemsToGrab = 1;
  pickTheDataYouWant<number>(
    immutableNumberData,
    numArrayToFill,
    nthItems,
    itemsToGrab
  );
  expect(numArrayToFill.length).toEqual(
    Math.floor(immutableNumberData.length / nthItems) * itemsToGrab
  );
});

test("It adds the correct items to array", () => {
  pickTheDataYouWant<number>(immutableNumberData, numArrayToFill, 2, 1);
  expect(numArrayToFill).toEqual([3, 11]);
});

test("It adds the correct items to array #2", () => {
  pickTheDataYouWant<number>(immutableNumberData, numArrayToFill, 1, 2);
  expect(numArrayToFill).toEqual([0, 1, 3, 4, 6, 7, 11, 12, 16, 17]);
});

test("It adds the correct items to array #3", () => {
  pickTheDataYouWant<number>(immutableNumberData, numArrayToFill, 3, 3);
  expect(numArrayToFill).toEqual([6, 7, 8]);
});

test("It does not alter the array when nthItems is 0", () => {
  pickTheDataYouWant<number>(immutableNumberData, numArrayToFill, 0, 3);
  expect(numArrayToFill).toEqual([]);
});

test("It does not alter the array when itemsToGrab is 0", () => {
  pickTheDataYouWant<number>(immutableNumberData, numArrayToFill, 3, 0);
  expect(numArrayToFill).toEqual([]);
});

test("It appends the items to the end of an existing array", () => {
  const arrWithValues = [200, 100, 1];
  pickTheDataYouWant<number>(immutableNumberData, arrWithValues, 3, 2);
  expect(arrWithValues).toEqual([200, 100, 1, 6, 7]);
});

test("It does not grab more items than what the inner array holds", () => {
  pickTheDataYouWant<number>(immutableNumberData, numArrayToFill, 3, 6);
  expect(numArrayToFill).toEqual([6, 7, 8, 9, 10]);
});

test("It works with string types", () => {
  pickTheDataYouWant<string>(immutableStringData, stringArrayToFill, 3, 4);
  expect(stringArrayToFill).toEqual(["maybe", "this", "is", "cooler", "today"]);
});

test("It works with custom types", () => {
  pickTheDataYouWant<CustomType>(immutableCustomData, customDataToFill, 2, 4);
  expect(customDataToFill).toEqual([
    { a: "d", b: 4, c: true },
    { a: "g", b: 7, c: false },
    { a: "h", b: 8, c: true },
  ]);
});
