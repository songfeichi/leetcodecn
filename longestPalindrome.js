/**给你一个字符串 s，找到 s 中最长的回文子串。

 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {string}
 */

if (s == null || s.length() < 1) {
    return "";
}
int start = 0, end = 0;
for (int i = 0; i < s.length(); i++) {
    int len1 = expandAroundCenter(s, i, i);
    int len2 = expandAroundCenter(s, i, i + 1);
    int len = Math.max(len1, len2);
    if (len > end - start) {
        start = i - (len - 1) / 2;
        end = i + len / 2;
    }
}
return s.substring(start, end + 1);
}

public int expandAroundCenter(String s, int left, int right) {
while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
    --left;
    ++right;
}
return right - left - 1;
}

// var longestPalindrome = function(s) {
//     if(s.length==1)return s
//     var maxl=1,l=s.length
//     for(var mid=0;mid<l;mid++){
//         var low=mid-1,high=mid+1
//         while(low>=0 && high<l && s[low]==s[high]){
//             low--;
//             high++;
//         }
//         low=low>0?low:0
//         high=high<l?high:l-1
//         maxl=Math.max(maxl,high-low+1)
//         // console.log(high-low+1);
//         low=mid-1;
//         high=mid;
//         while(low>=0 && high<l && s[low]==s[high]){
//             low--;
//             high++;
//         }
//         low=low>0?low:0
//         high=high<l?high:l-1
//         maxl=Math.max(maxl,high-low+1)
//         // console.log(high-low+1);
//     }
//     return maxl
// };
// var longestPalindrome = function (s) {
//     if (s.length == 1) return s
//     var l = s.length, maxp = 1, end=1
//     var dp = new Array(l)//.map((v,i,dp)=>dp[i]=i,dp)
//     dp[0] = 0
//     for (var i = 1; i < l; i++) {
//         dp[i] = i
//         var test = dp[i - 1] - 1
//         if (test >= 0 && s[i] == s[test]) {
//             dp[i] = test
//             if(maxp<i-test+1){
//                 maxp=i-test+1
//                 end=i
//             }
//         }
//         if(dp[i-1]==i-1){
//             if(s[i-1]==s[i]){
//                 dp[i]=i-1
//                 if(maxp<2){
//                     maxp=2
//                     end=i
//                 }
//             }
//         }
//         // if(dp[i-1]!=i-1)
//     }
    
//     console.log(dp);
//     console.log(maxp);
//     console.log(end);
//     return s.slice(end+1-maxp,end+1)
//     // var dp2=dp.map((v,i)=>i-v)
//     // console.log(dp2);
// }
console.log(longestPalindrome('abbab'))