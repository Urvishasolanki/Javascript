// Row Sum of a 2D Array
//    Write a function to calculate the sum of elements in each row of a 2D array and return the result as a 1D array.
//    Input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//    Output: [6, 15, 24]

let arr = [[1,2,3],[4,5,6],[7,8,9]]
let sumarr = [];

for(let i=0; i<=arr.length-1; i++){
    let sum=0;
    for(j=0; j<=arr.length-1; j++){
       sum += arr[i][j]
    }
    sumarr.push(sum)
}
console.log(sumarr)