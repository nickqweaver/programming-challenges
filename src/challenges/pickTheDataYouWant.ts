/**
 * This function should grab every nth item from the immutableData array and add the numberOfItemsToGrab from
 * that nth item to the arrayToFill. If nthItem is equal to 0 or items to grab is equal to zero no items
 * should be added to the arrayToFill
 *
 * Example:
 * const arr = [] // The array to fill starts empty
 * pickTheDataYouWant([[1, 2], [3], [4, 5, 6], [7, 8]], arr, 2, 1)
 * After calling pickTheDataYouWant with the above arguments
 * console.log(arr) // [3, 7]
 * Because [3] and [7, 8] is every 2 item in immutableData and numberOfItemsToGrab is 1 so we only grab the first item
 * Note - the arrays should not be sorted and numberOfItemsToGrab should always start with the first item
 *
 * Example 2
 * const arr = [1, 2]
 * pickTheDataYouWant([[1],[2],[5],[8],[9],[12],[14],[19], [22]], arr, 3, 1)
 * console.log(arr) // [1, 2, 5, 12, 22] // We started with 1 and 2 in array therefore they remain and we add to the end
 * Because [5] [12] & [22] is every 3 item in immutableData argument
 *
 * Note if the number of items is greater than the nth item it should only add the amount of items that exists:
 * const arr = []
 * pickTheDataYouWant([[1], [2, 4, 6]], arr, 2, 4)
 * console.log(arr) // [2, 4, 6]
 * ^ Even though the numberOfItemsToGrab was 4 the nth item of 2 only had 3 items therefore we only grab 3 items
 *
 * This function does not return anything! It is only adding items to the arrayToFill parameter, you can test this by
 * starting with an array, calling this function on the next line and then checking the contents of your array after the function
 * gets called.
 *
 * @param immutableData - A two dimensional array of type T (not to be altered)
 * @param arrayToFill - An array of type T that will have the specific items added to it
 * @param nthItem - Represents every nth item to be looked at in immutableData array
 * @param numberOfItemsToGrab - The number of items to grab from the nth item
 *
 *
 */

export const pickTheDataYouWant = <T>(
  immutableData: T[][],
  arrayToFill: T[],
  nthItem: number, //this is not index based. first item would be at 0 index position
  numberOfItemsToGrab: number // this is the number of items you are grabbing starting from the first item in the subArray (result of nthItem array)
): void => {
  if (nthItem === 0) return;
  // starting at nth item and skipping to every nth item
  for (let i = nthItem - 1; i < immutableData.length; i = i + nthItem) {
    // starting at 0 index of subarray and iterating until numberOfItemsToGrab
    for (let j = 0; j < numberOfItemsToGrab; j++) {
      // because number of items to grab can exceed subarray we only want to push items in if j is less than subarray length
      if (j < immutableData[i].length) arrayToFill.push(immutableData[i][j]);
    }
    console.log(arrayToFill);
  }
};
