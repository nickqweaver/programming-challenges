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
	// for (let k = 0; k < level3DB[i].friends.length; k++) {
	// 	let friendMatch =
	// 		level3DB[i].friends[k] === users[k].friends[i] ? users[k].id : "";

	// find the id based on either user.first or user.last

	// for (let i = 0; i < level3DB.length; i++) {
	// 	//console.log(level3DB[i].first,  "I am First");
	// 	let dataFirstName = level3DB[i].first.toUpperCase().toString();
	// 	console.log(dataFirstName);
	// 	for (let k = 0; k < users.length; k++) {
	// 		//console.log(users[k].first, "first name");
	// 		for (let i = 0; i < users[k].friends.length; i++) {
	// 			// console.log(users[k].friends[i].split(" "), "user friends");
	// 			let userFriendList = users[k].friends[i].toUpperCase();
	// 			console.log(userFriendList);
	// 		}
	// 	}
	// }

	let reshape = users.map((user, index) => {
		const newFriend = user.friends.map(
			(friend, index) => (friend = `${user.first} ${user.last}`)
		);
		const balls = {
			id: user.id,
			firstName: user.first,
			lastName: user.last,
			age: parseInt(user.age),
			friendIDs: newFriend === user.friends ? user.id : newFriend,
		};
		return balls;
	});

	console.log(reshape);
};

// let reshape = users.map((user, index) => ({

// 	id: user.id,
// 	firstName: user.first,
// 	lastName: user.last,
// 	age: parseInt(user.age),
// 	friendIDs: user.friends.map((friend, index) =>

// }));

// console.log(reshape);
//};

// get the user
// use user.friends array index and go back to old users array
// match by using the frien name
