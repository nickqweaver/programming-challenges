import { convertUsers } from "../convertUsers";
import { level3DB } from "../data/level3DataBase";
import { newDataBase } from "../data/newDataBase";

test("It converts full DB correctly", () => {
  expect(convertUsers(level3DB)).toStrictEqual(newDataBase);
});

test("It converts first user correctly", () => {
  expect(convertUsers([level3DB[0]])).toStrictEqual([newDataBase[0]]);
});

test("It converts second user correctly", () => {
  expect(convertUsers([level3DB[1]])).toStrictEqual([newDataBase[1]]);
});

test("It converts third user correctly", () => {
  expect(convertUsers([level3DB[2]])).toStrictEqual([newDataBase[2]]);
});

test("It converts fourth user correctly", () => {
  expect(convertUsers([level3DB[3]])).toStrictEqual([newDataBase[3]]);
});

test("It converts fifth user correctly", () => {
  expect(convertUsers([level3DB[4]])).toStrictEqual([newDataBase[4]]);
});

test("It converts sixth user correctly", () => {
  expect(convertUsers([level3DB[5]])).toStrictEqual([newDataBase[5]]);
});

test("It converts sevent user correctly", () => {
  expect(convertUsers([level3DB[6]])).toStrictEqual([newDataBase[6]]);
});
