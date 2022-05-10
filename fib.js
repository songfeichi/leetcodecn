var fib = function(n) {
    if (n < 2) {
        return n;
    }
    const q=[[1,1],[1,0]]
    var res=pow(q,n-1)
    return res[0][0]
}
var pow =function(a,n){
    var ret=[[1,0],[0,1]]
    while(n>0){
        if(n&1==1){
            ret=multiply(ret,a)
        }
        n>>=1
        a=multiply(a,a)
    }
    return ret
}
// a[i][0]*b[0][j]+a[i][1]+b[1][j]
const multiply = (a, b) => {
    const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            c[i][j] = (BigInt(a[i][0]) * BigInt(b[0][j]) + BigInt(a[i][1]) * BigInt(b[1][j])) % BigInt(1000000007);
        }
    }
    return c;
}
