// import { Queue } from './dequeue'

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

function buildTree(arr) {
    if (!arr || !arr.length) return null
    var root = new TreeNode(arr[0]);
    // var q = new Queue()
    // q.enqueue(root)
    var q=[root]
    for (let i = 1, j = 2; i < arr.length; i += 2, j += 2) {
        let r = q.shift()
        let left, right = null
        if (arr[i]) {
            left = new TreeNode(arr[i])
            r.left = left
            q.push(left)
        }
        if (arr[j]) {
            right = new TreeNode(arr[j])
            r.right = right
            q.push(right)
        }
    }
    return root;
}
/**1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder 和 inorder 均无重复元素
inorder 均出现在 preorder
preorder 保证为二叉树的前序遍历序列
inorder 保证为二叉树的中序遍历序列
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTreeFromOrder = function(preorder, inorder) {
    if(!preorder.length)return null
    var root=new TreeNode(preorder[0])
    // var mid=0
    // while(mid<inorder.length&&inorder[mid]!=preorder[0]){
    //     mid++
    // }
    var mid=inorder.indexOf(preorder[0])
    var left=buildTreeFromOrder(preorder.slice(1,mid+1),inorder.slice(0,mid))
    var right=buildTreeFromOrder(preorder.slice(mid+1),inorder.slice(mid+1))
    root.left=left
    root.right=right
    return root
};
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root!=null){
        var temp=root.left
        root.left=root.right
        root.right=temp
        root.left=invertTree(root.left)
        root.right=invertTree(root.right)
    }
    return root
};

// var preorder = [3,9,20,15,7],inorder = [9,3,15,20,7]
// var r=buildTreeFromOrder(preorder,inorder)
// console.log('a');

export {TreeNode,buildTree}
// var arr=[3,9,20,null,null,15,7]
// var r=buildTree(arr)
// console.log(r)