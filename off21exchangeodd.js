/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    var low = 0, high = nums.length - 1
    var temp
    while (low < high) {
        while (low<nums.length && nums[low] & 1) {
            low++;
        }
        while (high>=0 && (nums[high] & 1) == 0) {
            high--
        }
        if (low < high) {
            temp = nums[low]
            nums[low] = nums[high]
            nums[high] = temp
            low++
            high--
        }
    }
};
var nums = [2,4,6]
exchange(nums)
console.log(nums);