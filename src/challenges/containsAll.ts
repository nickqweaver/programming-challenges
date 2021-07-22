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
	const compareStrings = upperCaseArray[0].includes(upperCaseArray[1]);
	return compareStrings;
}

// This one is tricky, ask questions if needed ;)
