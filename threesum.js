/**给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]

 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var tuples = []
    var l = nums.length
    if (l < 3) return []
    nums.sort((a, b) => a - b)
    for (let a = 0; a < l - 2 && nums[a] <= 0; a++) {
        if (a > 0 && nums[a] == nums[a - 1]) continue;
        var c = l - 1, target = -nums[a]
        for (let b = a + 1; b < l; b++) {
            if (b > a + 1 && nums[b] == nums[b - 1]) continue;
            while (c > b && nums[b] + nums[c] > target) c--;
            if (b == c) break;
            if (nums[b] + nums[c] == target) {
                tuples.push([nums[a], nums[b], nums[c]])
            }
        }
    }
    return tuples
};
var r = threeSum([-1,0,1,2,-1,-4])
console.log(r)