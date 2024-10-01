// Swap the values of two variables without using a function. Given two variables, swap their values.
function swap(){
    let val=Number(document.getElementById("data").value)
    
    let val1=Number(document.getElementById("data1").value)

    val=val+val1;
    val1=val-val1;
    val=val-val1;
    
    console.log(val);
    console.log(val1);

    document.getElementById('swap1').innerHTML=`${val} and ${val1}`
}
