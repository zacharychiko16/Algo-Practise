/** Bubble Sort **
 * 
 * Sort the 'nums' array using bubble sort.
 *  
 * @example
 * bubbleSort([3, 2, 1]) -> [1, 2, 3]
 * bubbleSort([0, 12, 8]) -> [0, 8, 12]
 * bubbleSort([3, 4, 0, 2]) -> [0, 2, 3, 4]
 * 
 */

 const bubbleSort = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] < nums[j -1]) {
                let temp = nums[j]
                nums[j] = nums[j - 1]
                nums[j - 1] = temp
            }
        }
    }
    return nums
}

module.exports = bubbleSort;