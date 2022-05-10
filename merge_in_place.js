/**合并两个有序数组
 * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 var merge = function(nums1, m, nums2, n) {
    i=m-1,j=n-1,k=m+n-1
    while(i>=0||j>=0){
        if(i==-1)
            cur=nums2[j--]
        else if(j==-1)
            cur=nums1[i--]
        else if(nums1[i]>nums2[j]){
            cur=nums1[i--]
        }
        else
            cur=nums2[j--]
        nums1[k--]=cur
    }
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    var n=intervals.length
    res=[]
    var starts,ends
    for(let i=0;i<n;i++){
        starts.push(intervals[i][0])
        ends.push(intervals[i][1])
    }
    starts.sort()
    ends.sort()
    for(let i=0,j=0;i<n;i++){
        if(i==n-1||starts[i+1]>ends[i]){
            res.push([starts[j],ends[i]])
            j=i+1
        }
    }
    return  res
};