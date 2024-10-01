function checkleap(){
    let year=document.getElementById("year").value
    let isLeapYear = false;
    if(year % 4 == 0){
       isLeapYear=true
    }
    document.getElementById('result').innerHTML = `the year is ${isLeapYear}`

    
    
}