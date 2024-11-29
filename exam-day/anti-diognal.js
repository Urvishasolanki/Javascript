let arr=[[1,2,3],[4,5,6],[7,8,9]]
sum = 0
for(let i=0,j=arr.length-1; j>=0; j--,i++){
    sum+=arr[i][j]
}
console.log(sum)