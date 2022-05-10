/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var ans,c=0
    for(var n of nums){
        if(c==0)ans=n
        c+=(ans==n)?1:-1
    }
    return ans
};

var nums=[1,3,3]
console.log(majorityElement(nums));