/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var ans=[],segments=[0,0,0,0],COUNT=4
    var n=s.length
    function backtrack(seg,start){
        if(seg==COUNT){
            if(start==n)
                ans.push(segments.join('.'))
            return
        }
        if(start==n)
            return
        if(s[start]=='0'){
            segments[seg]=0
            backtrack(seg+1,start+1)
        }
        var addr=0
        for(var end=start;end<n;++end){
            addr=s[end]-'0'+addr*10
            if(addr>0 && addr<=255){
                segments[seg]=addr
                backtrack(seg+1,end+1)
            }
            else break
        }
    }
    backtrack(0,0)
    return ans
};
console.log(restoreIpAddresses("010010"));