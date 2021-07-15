/**
 * Return the length of the longest word in the provided sentence
 * Your response should be a number.
 * Example 1:
 *   findLongestWord("how are you doing?") // Would return 6 as doing? has 6 character (note punctuation at the end is included as part of the word)
 * Example 2:
 *   findLongestWord("thiswordhasnotspacessocanttellhowlongitis") // Returns 41 because there is no whitespace between the words so it gets evaluated as 1 word
 * Example 3:
 *   findLongestWord(" ") // Returns 0 as empty space is not considered a word
 * Look at the tests for further examples
 *
 * ASSIGNED 07/09/2021, DUE 07/16/2021
 *
 * @param str - the string to run the search on
 * @return - the length of the longest string
 */

export function findLongestWord(str: string): number {
	const cleanString = str
		.replace(/\.+$/, "")
		.split(" ")
		.sort((a, b) => b.length - a.length);

	return cleanString[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); // Should return 6 as "jumped" is the longest word in the array
