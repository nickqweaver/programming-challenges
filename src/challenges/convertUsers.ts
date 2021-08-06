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
	for (let i = 0; i < level3DB.length; i++) {
		for (let k = 0; k < users.length; k++) {
			// console.log(users[k]);
			for (let i = 0; i < users[k].friends.length; i++) {
				console.log(users[k].friends[i].split(" "), "user friends");
			}
		}
		// for (let k = 0; k < level3DB[i].friends.length; k++) {
		// 	let something = level3DB[i].friends[k];
		// }

		// find the id based on either user.first or user.last

		let reshape = users.map((user, index) => ({
			id: user.id,
			firstName: user.first,
			lastName: user.last,
			age: parseInt(user.age),
			friendIDs: user.friends,
		}));

		// console.log(reshape);
	}
};
