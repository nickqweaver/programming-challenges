export type OldUserType = {
  id: number;
  first: string;
  last: string;
  age: string;
  friends: string[];
};

export type NewUserType = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  friendIDs: number[];
};

export const level3DB: OldUserType[] = [
  {
    id: 1,
    first: "Jim",
    last: "Buck",
    age: "29",
    friends: ["Bobby Reynolds", "Ricky Jay"],
  },
  {
    id: 2,
    first: "Bobby",
    last: "Reynolds",
    age: "44",
    friends: ["Jim Buck", "Doug Towell"],
  },
  {
    id: 3,
    first: "Doug",
    last: "Towell",
    age: "44",
    friends: ["Bobby Reynolds", "Blart Zuck", "Jim Buck"],
  },
  {
    id: 4,
    first: "Blart",
    last: "Zuck",
    age: "89",
    friends: ["Bobby Reynolds", "Doug Towell"],
  },
  {
    id: 5,
    first: "Bald",
    last: "Schnief",
    age: "23",
    friends: ["Jim Buck", "Blart Zuck"],
  },
  {
    id: 6,
    first: "Ricky",
    last: "Jay",
    age: "62",
    friends: [],
  },
  {
    id: 7,
    first: "Jim",
    last: "Dell",
    age: "90",
    friends: ["Bald Schnief"],
  },
];
