/**给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-search
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarysearch = function (nums, target) {
    var l = nums.length
    if (!l || target < nums[0] || target > nums[l - 1]) return -1
    var low = 0, high = l
    while (low <= high) {
        var mid = Math.floor((low + high) / 2)
        if(target<nums[mid]){
            high=mid-1
        }
        else if(target==nums[mid]){
            return mid;
        }
        else{
            low=mid+1
        }
    }
    return -1
};
var binaryreplace = function (nums, target) {
    var low = 0, high = nums.length
    while (low <= high) {
        var mid = (low + high)>>1
        if(nums[mid]<target){
            low=mid+1
        }
        else{
            high=mid-1
        }
    }
    nums[high+1]=target
};
// var r=search([-1,0,3,5,9,12],-1)
var nums=[1,4,5,7,9,10]
binaryreplace(nums,0)//0 4 5 7 9 10
console.log(nums);
// console.log(r)