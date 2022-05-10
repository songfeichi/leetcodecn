/**给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @return {number}
 */
// var lengthOfLIS = function (nums) {
//     var l = nums.length
//     var dp = new Array(l).fill(1)
//     for (let i = 1; i < l; i++) {
//         var maxl=0
//         for(let j=0;j<i;j++){
//             if(nums[j]<nums[i])maxl=Math.max(maxl,dp[j])
//         }
//         dp[i]=maxl+1
//     }
//     // return dp
//     return Math.max(...dp)
// };
var lengthOfLIS = function (nums) {
    var dp = []
    for (var num of nums) {
        if (!dp.length || dp[dp.length - 1] < num) dp.push(num)
        else {
            var left = 0, right = dp.length - 1, loc = right
            while (left <= right) {
                let mid = (left + right) >> 1
                if (dp[mid] < num) left = mid + 1
                else {
                    loc = mid
                    right = mid - 1
                }
            }
            dp[loc] = num
        }
    }
    return dp.length
};
var lengthOfLIS = function (nums) {
    var dp = new Array(nums.length)
    dp[0] = nums[0]//严格递增
    var piles = 1
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]
        if (dp[piles - 1] < num) {
            dp[piles++] = num;
        }
        else {
            //find dp[j]<num<dp[j+1]  binaryinsert num to dp
            var left = 0, right = piles - 1
            while (left <= right) {
                let mid = (left + right) >> 1
                if (dp[mid] < num) left = mid + 1
                else {
                    right = mid - 1
                }
            }
            dp[right+1] = num
        }
    }
    return piles
};
// class Solution {
//     /**
//      * 将求最长递增子序列的问题类比为一种叫patience game的纸牌游戏，利用牌堆顶的
//      * 有序性，采用二分搜索来发牌，最终牌堆数就是最长子序列的长度。
//      */
//     public int lengthOfLIS(int[] nums) {
//        int[] top = new int[nums.length];
//        //牌堆数初始化为0
//        int piles = 0;
//        for (int i = 0; i < nums.length; i++) {
//            //要处理的扑克牌
//            int poker = nums[i];

//            //二分搜索，左闭右开
//            int left = 0, right = piles;
//            while (left < right) {
//                int mid = (left + right) / 2;
//                if (top[mid] > poker) {
//                    right = mid;
//                } else if (top[mid] < poker) {
//                    left = mid + 1;
//                } else {
//                    right = mid;
//                }
//            }

//            //没有找到合适的牌堆，新建一个
//            if (left == piles) piles++;
//            //发牌
//            top[left] = poker;
//        }
//        return piles;
//     }
// }
// d = []
// for num in nums:
//     if not d or d[-1] < num:
//         d.append(num)
//     else:
//         left, right = 0, len(d) - 1
//         loc = right
//         while left <= right:
//             mid = (left + right) // 2
//             if d[mid] < num:
//                 left = mid + 1
//             else:
//                 loc = mid
//                 right = mid - 1
//         d[loc] = num
// return len(d)   
// var nums = [0, 1, 0, 3, 2, 3]//4  1 2 1 3 3 4
var nums = [4, 10, 4, 3, 8, 9]//3  1 2 1 1 2 3
// var nums=[10,9,2,5,3,7,101,18]//4   1 1 1 2 2 3 4 4
var r = lengthOfLIS(nums)
console.log(r);