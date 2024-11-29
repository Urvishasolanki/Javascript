let arr = []
for(let i=0; i<3; i++){
    let arr2 = []
    for(let j=0; j<3; j++){
        let random = Math.round(Math.random() * 100)
        arr2.push(random)
    }
    arr.push(arr2)
}
console.log(arr)