/**
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 * Example 1:
 *   ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
 * Example 2:
 *   The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
 * Example 3:
 *   ["Alien", "line"], should return true because all of the letters in line are present in Alien.
 * Example 4:
 *   ["line", "Alien"], should return false because all of hte letters in Alien are not present in line
 *
 * @param arr -  an array of 2 strings
 */

export function containsAll(arr: [string, string]): boolean {
	const upperCaseArray = arr.map((a) => a.toUpperCase());
	const string1 = upperCaseArray[0];
	const string2 = upperCaseArray[1];
	console.log(upperCaseArray[0]);
	for (let i = 0; i < string2.length; i++) {
		if (string1.includes(string2[i])) {
			console.log(string2[i]);
			return true;
		}
	}

	return false;
}

// This one is tricky, ask questions if needed ;)
