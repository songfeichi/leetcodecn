/**给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 * 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
输出：[1,2,3,4,8,12,11,10,9,5,6,7]
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    var m = matrix.length
    var n = matrix[0].length
    var num=m*n
    var rs=0,re=m-1,cs=0,ce=n-1
    var res=[],r=0,c=-1,addr=0,addc=1
    while(1){
        //down
        r+=addr
        c+=addc
        if(c>ce){
            c=ce
            addr=1
            addc=0
            rs++
            continue
        }
        //left
        else if(r>re){
            r=re
            addr=0
            addc=-1
            ce--
            continue
        }
        //up
        else if(c<cs){
            c=cs
            addr=-1
            addc=0
            re--
            continue
        }
        //right
        else if(r<rs){
            r=rs
            addr=0
            addc=1
            cs++
            continue
        }
        res.push(matrix[r][c])
        if(res.length==num)
            break
    }
    return res
};
var matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
var res=spiralOrder(matrix)
console.log(res);