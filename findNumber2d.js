/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    if(matrix==null || matrix.length==0 || matrix[0].length == 0 )return false
    var m=matrix.length,n=matrix[0].length
    var i=0,j=n-1
    while(i<m && j>=0){
        if(matrix[i][j]==target)return true
        else if(matrix[i][j]<target)i++
        else j--
    }
    return false
};