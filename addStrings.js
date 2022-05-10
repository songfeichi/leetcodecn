/**字符串相加
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-strings
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
    n1=num1.length-1,n2=num2.length-1,k=0
    arr=[]
    while(n1>=0||n2>=0||k!=0){
        x=n1>=0?num1[n1]-'0':0
        y=n2>=0?num2[n2]-'0':0
        r=x+y+k
        arr.push(r%10)
        k=Math.floor(r/10)
        n1--;
        n2--;
    }
    return arr.reverse().join('')
};