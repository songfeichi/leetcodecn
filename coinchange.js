/**给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

 

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1

F(S)= min F(S−c)+1 subject to  S−c 
i
 ≥0
F(S) = 0 \ , \text{when} \ S = 0
F(S)=0 ,when S=0

F(S) = -1 \ , \text{when} \ n = 0
F(S)=−1 ,when n=0


 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {
    if(amount==0)return 0
    count=new Array(amount+1).fill(amount+1)
    count[0]=0
    for(var a=1;a<amount+1;a++){
        for(var c of coins)
        {
            if(a-c>=0){
                count[a]=Math.min(count[a],count[a-c]+1)
            }
        }
    }
    return count[amount]<=amount?count[amount]:-1
}

var r=coinChange([186,419,83,408],6249)
console.log(r)