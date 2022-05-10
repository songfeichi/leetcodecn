/**假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=1)return 1
    arr=[1,2]
    for(i=2;i<n;i++)
        arr[i]=arr[i-1]+arr[i-2]
    return arr[arr.length-1]
};
climbStairs(10)