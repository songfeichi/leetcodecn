import { buildTree } from "./binarytree.js";
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    var arr=[]
    if(!root)return arr
    var q=[root]
    while(q.length){
        var level=[]
        let l=q.length   
        for(let i=0;i<l;i++){
            var node=q.shift()
            level.push(node.val)
            if(node.left)q.push(node.left)
            if(node.right)q.push(node.right)
        }
        arr.push(level)
    }
    return arr
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    function preorder(root,arr){
        if(root){
            arr.push(root.val)
            preorder(root.left,arr)
            preorder(root.right,arr)
        }
    }
    var arr=[]
    preorder(root,arr)
    return arr
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal=function(root) {
    var ans=[],stack=[]
    var node=root
    while(node || stack.length){
        if(node){
            ans.push(node.val)
            stack.push(node.right)
            if(node.left){
                node=node.left
            }
            else{
                node=node.right
            }
        }
        else{
            node=stack.pop()
        }
    }
    return ans
};  


/** binary search tree
 * mid order
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    var ans=[]
    var stack=[]
    var node=root
    while(node || stack.length){
        if(ans.length==k)return ans[k-1]
        if(node){
            if(node.left){
                stack.push(node)
                node=node.left
            }
            else{
                ans.push(node.val)
                node=node.right
            }
        }
        else{
            node=stack.pop()
            ans.push(node.val)
            node=node.right
        }
    }
    return ans[k-1]
    // return ans
};

var root=buildTree([1])
console.log(kthSmallest(root,1));