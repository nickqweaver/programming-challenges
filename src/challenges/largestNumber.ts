/**
 * Return an array consisting of the largest number from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 *
 * @param arr - Two dimensional array with 4 subarrays of numbers
 * @return - a new array with the largest number from each subarray
 */
export function largestOfFour(arr: [number[], number[], number[], number[]]) {
  return arr;
}
/* NOTE - You will get type errors if you do not have exactly 4 subarrays */
largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
