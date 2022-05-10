/**给定一个含有 n 个正整数的数组和一个正整数 target 。

找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

示例 1：

输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。

 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    if (nums.length == 0) return 0
    var low = 0, high = 0, res = Infinity
    // if (nums[low] >= target) return 1
    var s = 0
    while (high < nums.length) {
        s += nums[high]
        while (s >= target) {
            res = Math.min(res, high + 1 - low)
            if(res==1)return 1
            s -= nums[low]
            low++
        }
        high++
    }
    return res != Infinity ? res : 0
};

// public int minSubArrayLen(int s, int[] nums) {
//     int n = nums.length;
//     if (n == 0) {
//         return 0;
//     }
//     int ans = Integer.MAX_VALUE;
//     int start = 0, end = 0;
//     int sum = 0;
//     while (end < n) {
//         sum += nums[end];
//         while (sum >= s) {
//             ans = Math.min(ans, end - start + 1);
//             sum -= nums[start];
//             start++;
//         }
//         end++;
//     }
//     return ans == Integer.MAX_VALUE ? 0 : ans;
// }
// }

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/minimum-size-subarray-sum/solution/chang-du-zui-xiao-de-zi-shu-zu-by-leetcode-solutio/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
console.log(minSubArrayLen(6, [1, 2, 1]));
console.log(minSubArrayLen(9, [1, 2, -4, 1, 3, 4, 2, 5, 4, 1, -10, 1]));
console.log(minSubArrayLen(6, [1, 31, 1, 2, 4, 3, 6]));
// f(dp[i])=(dp[0~i])
