/**无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    set=new Set();
    i=0,j=0;
    m=0;
    len=s.length;
    while(i<len&&j<len){
        if(!set.has(s[j])){
            set.add(s[j])
            j++;
            m=Math.max(m,j-i);
        }else{
            set.delete(s[i++])
        }
    }
    return m;
}

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    var set=new Array(128).fill(-1)
    var ans=0,st=0
    for(var i=0;i<s.length;i++){
        if(set[s[i].charCodeAt()]<st)
            ans=Math.max(ans,i-st+1)
        else{
            st=set[s[i].charCodeAt()]+1
        }
        set[s[i].charCodeAt()]=i
    }
    return ans
};

console.log(lengthOfLongestSubstring('abcabcbb'));