/**给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

叶子节点 是指没有子节点的节点。
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
import { buildTree } from "./binarytree.js";
var hasPathSum = function (root, targetSum) {
    if (root == null) return false
    if (root.val === targetSum && !root.left && !root.right)
        return true;
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};


/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function(root, target) {
    var ans=[],road=[]
    function dfs(node,tg){
        road.push(node.val)
        if(node.val==tg && !node.left &&!node.right)
            ans.push(road.slice())
        if(node.left){
            dfs(node.left,tg-node.val)
        }
        if(node.right)
            dfs(node.right,tg-node.val)
        road.pop()
    }
    if(root)
        dfs(root,target)
    return ans
};    


var root = buildTree([5,4,8,11,null,13,4,7,2,null,null,5,1]),target=22

console.log(pathSum(root,target));