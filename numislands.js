/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    var m=grid.length,n=grid[0].length
    var flood=function(i,j){
        if(i>=0 && j>=0 && i<m && j<n && fl[i][j]==0 && grid[i][j]==1){
            fl[i][j]=1
            flood(i-1,j)
            flood(i+1,j)
            flood(i,j-1)
            flood(i,j+1)
        }
    }
    var fl=new Array(m).fill(0)
    fl.map((v,i)=>fl[i]=new Array(n).fill(0))
    var islands=0
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==1&&fl[i][j]==0){
                flood(i,j)
                islands+=1
            }
        }
    }
    return islands
    // console.log(fl)
    // console.log(islands);
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var m=grid.length,n=grid[0].length
    var area=[]
    var flood=function(i,j,area){
        if(i>=0 && j>=0 && i<m && j<n && fl[i][j]==0 && grid[i][j]==1){
            fl[i][j]=1
            area.a+=1
            flood(i-1,j,area)
            flood(i+1,j,area)
            flood(i,j-1,area)
            flood(i,j+1,area)
        }
    }
    var fl=new Array(m).fill(0)
    fl.map((v,i)=>fl[i]=new Array(n).fill(0))
    var maxarea=-Infinity
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==1&&fl[i][j]==0){
                var area={'a':0}
                flood(i,j,area)
                maxarea=Math.max(maxarea,area.a)
            }
        }
    }
    return maxarea
};
var grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  
  console.log( maxAreaOfIsland(grid));
// console.log('d');