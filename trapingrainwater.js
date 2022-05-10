
/**对于下标 ii，下雨后水能到达的最大高度等于下标 ii 两边的最大高度的最小值，
下标 ii 处能接的雨水量等于下标 ii 处的水能到达的最大高度减去 \textit{height}[i]height[i]。
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var l=height.length
    if(l<=2)return 0
    var left=new Array(l).fill(0),right=new Array(l).fill(0)
    left[0]=height[0]
    right[l-1]=height[l-1]
    for(let i=1;i<l;++i){
        left[i]=Math.max(height[i],left[i-1])
    }
    for(let i=l-2,t=height[l-1];i>=0;--i){
        right[i]=Math.max(height[i],right[i+1])
        
    }
    var ans=0
    for(let i=0;i<l;++i){
        ans+=Math.min(left[i],right[i])-height[i]
    }
    return ans
};

// 维护两个指针 \textit{left}left 和 \textit{right}right，以及两个变量 \textit{leftMax}leftMax 
// 和 \textit{rightMax}rightMax，初始时 \textit{left}=0,\textit{right}=n-1,\textit{leftMax}=0,
// \textit{rightMax}=0left=0,right=n−1,leftMax=0,rightMax=0。指针 \textit{left}left 只会向右移动，
// 指针 \textit{right}right 只会向左移动，在移动指针的过程中维护两个变量 \textit{leftMax}leftMax 
// 和 \textit{rightMax}rightMax 的值。
var trap = function(height) {
    var l=height.length
    if(l<=2)return 0
    // var left=new Array(l).fill(0),right=new Array(l).fill(0)
    var left=0,right=l-1,leftmax=0,rightmax=0,ans=0
    while(left<right){
        leftmax=Math.max(height[left],leftmax)
        rightmax = Math.max(rightmax, height[right]);
        // 如果 \textit{height}[\textit{left}]<\textit{height}[\textit{right}]height[left]<height[right]，
        // 则必有 \textit{leftMax}<\textit{rightMax}leftMax<rightMax，
        // 下标 \textit{left}left 处能接的雨水量等于 
        // \textit{leftMax}-\textit{height}[\textit{left}]leftMax−height[left]，
        // 将下标 \textit{left}left 处能接的雨水量加到能接的雨水总量
        if (height[left] < height[right]) {
            ans += leftmax - height[left];
            ++left;
        } else {
            ans += rightmax - height[right];
            --right;
        }
    }
    return ans
};
var height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height));