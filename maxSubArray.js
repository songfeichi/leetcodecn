/**给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

 
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    var m=nums[0],pre=0
    for(let i=0;i<nums.length;i++){
        pre=Math.max(pre+nums[i],nums[i])
        m=pre>m?pre:m
    }
    return m
 }
    

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); 