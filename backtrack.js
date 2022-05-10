/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    var backtrack = function (first = 0) {

        if (first == n) {
            // console.log(nums);
            res.push([...nums])
        }
        for (let i = first; i < n; i++) {
            [nums[first], nums[i]] = [nums[i], nums[first]]
            backtrack(first + 1);
            [nums[first], nums[i]] = [nums[i], nums[first]]
        }
    }
    var n = nums.length
    var res = []
    backtrack()
    return res
}

console.log(permute([1,2,3]))


/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var ans = []
    //如果左括号数量不大于 nn，我们可以放一个左括号。如果右括号数量小于左括号的数量，我们可以放一个右括号。
    var backtrack = function (S, left, right) {
        if (S.length == 2 * n) {
            ans.push(S.join(''))
            return;
        }
        if (left < n) {
            S.push('(')
            backtrack(S, left + 1, right)
            S.pop()
        }
        if (right < left) {
            S.push(')')
            backtrack(S, left, right + 1)
            S.pop()
        }
    }
    backtrack([], 0, 0)
    return ans
}
/**2^n * n
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const t = [];
    const ans = [];
    const n = nums.length;
    const dfs = (cur) => {
        if (cur === nums.length) {
            ans.push(t.slice());
            return;
        }
        t.push(nums[cur]);
        dfs(cur + 1);
        t.pop();
        dfs(cur + 1);
    }
    dfs(0);
    return ans;
};
// console.log(subsets([1,2,3]));
// console.log(generateParenthesis(3));
