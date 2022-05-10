/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    var md=0
    if(!root)return md
    var q=[root]
    while(q.length){
        let l=q.length   
        for(let i=0;i<l;i++){
            var node=q.shift()
            if(node.left)q.push(node.left)
            if(node.right)q.push(node.right)
        }
        md++
    }
    return md
};