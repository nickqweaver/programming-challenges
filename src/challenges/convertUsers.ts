/**
 * You current employer is cleaning up their database because years ago they trusted a level 3 developer
 * to determine their models. You are assigned with converting the existing user base over to the new user type.
 * A few things have changed:
 *
 * first -> firstName (string)
 * last -> lastName (string)
 * age type - string -> number
 * friends -> friendIDs List of friends names, now is a list of friend ID's *Note must keep same order to pass tests
 */
import { level3DB, OldUserType, NewUserType } from "./data/level3DataBase"; // level3DB is the data base you can use to perform lookups to find the friend ID's based on their names

export const convertUsers = (users: OldUserType[]): NewUserType[] => {
	const updateDate = (users: OldUserType) => {
		const newUser = {
			id: 0,
			firstName: "",
			lastName: "",
			age: 0,
			friendIDs: 0,
		};
		const shapeData = Object.create(newUser);
		shapeData.id = users.id;
		shapeData.firstName = users.first;
		shapeData.lastName = users.last;
		shapeData.age = users.age;
		shapeData.friendIDs = users.id;
	};
	console.log(updateDate);
};
