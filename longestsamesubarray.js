/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var longestsamesubarray = function(nums1, nums2) {
    var m=0,k=0;
    for(var i=0;i<nums1.length;i++){
        for(var j=0;j<nums2.length;j++){
            k=0
            while(nums1[i+k]==nums2[j+k])k++
            m=Math.max(m,k)
        }
    }
    return m
};
var longestsamesubarray = function(nums1, nums2) {
    var m=0
    var dp=new Array(nums1.length+1).fill(0).map(v=>new Array(nums2.length+1).fill(0)),ans=0
    // dp[nums1.length][nums2.length]=-
    for(var i=nums1.length-1;i>=0;i--){
        for(var j=nums2.length-1;j>=0;j--){
            dp[i][j]=nums1[i]==nums2[j]?dp[i+1][j+1]+1:0
            // m=Math.max(m,dp[i][j])
        }
    }
    // return m
    // return dp.map(Function.apply.bind(Math.max, null));
}
// public int findLength(int[] A, int[] B) {
//     return A.length < B.length ? findMax(A, B) : findMax(B, A);
// }

// int findMax(int[] A, int[] B) {
    int n = A.size(), m = B.size();
    int ret = 0;
    for (int i = 0; i < n; i++) {
        int len = min(m, n - i);
        int maxlen = maxLength(A, B, i, 0, len);
        ret = max(ret, maxlen);
    }
    for (int i = 0; i < m; i++) {
        int len = min(n, m - i);
        int maxlen = maxLength(A, B, 0, i, len);
        ret = max(ret, maxlen);
    }
    return ret;
}


// int maxLen(int[] a, int i, int[] b, int j, int len) {
//     int count = 0, max = 0;
//     for(int k = 0; k < len; k++) {
//         if(a[i+k] == b[j+k]) {
//             count++;
//         } else{
//             
//             count = 0;
//         }
           // max = Math.max(max, count);
//     }
//     return max;
// }

console.log(longestsamesubarray([1,2,3,2,1,0,2,7],[2,1,3,2,1,1,0,2,7]));