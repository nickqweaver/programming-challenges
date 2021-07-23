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

//does the first letter of second word exist in first word
//does the second letter of second word exist in first word (continue thru each letter in first word)
// if yes continue, if no return false

export function containsAll(arr: [string, string]): boolean {
  const secondString = arr[1].toLowerCase().split("");
  const firstString = arr[0].toLowerCase().split("");

  const newArr = [];

  let newArrWithoutDuplicates: string[] = [];
  let secondStringWithoutDuplicates: string[] = [];

  for (let i = 0; i < secondString.length; i++) {
    for (let j = 0; j < firstString.length; j++) {
      if (firstString[j] === secondString[i]) newArr.push(secondString[i]);
    }
  }

  newArr.forEach((c) => {
    if (!newArrWithoutDuplicates.includes(c)) {
      newArrWithoutDuplicates.push(c);
    }
  });
  secondString.forEach((c) => {
    if (!secondStringWithoutDuplicates.includes(c)) {
      secondStringWithoutDuplicates.push(c);
    }
  });

  if (secondStringWithoutDuplicates.length !== newArrWithoutDuplicates.length)
    return false;
  else return true;

  // let chars = newArr;
  // let uniqueChars: string[] = [];
  // chars.forEach((c) => {
  //   if (!uniqueChars.includes(c)) {
  //     uniqueChars.push(c);
  //   }
  // });

  // let chars2 = firstString;

  // let uniqueChars2: string[] = [];

  // // console.log(secondString);
  // if (uniqueChars2 >= uniqueChars) return true;
  // return false;
}

// This one is tricky, ask questions if needed ;)
