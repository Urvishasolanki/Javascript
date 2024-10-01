function sos(){
     let a=document.getElementById("num1").value
     let b=document.getElementById("num2").value
     let c=document.getElementById("num3").value
     let as=a*a;
     let bs=b*b;
     let cs=c*c;
     let sum=as+bs+cs;
     console.log(as);
     console.log(bs);
     console.log(cs);
     console.log(sum);

     document.getElementById('res').innerHTML=`squre is ${sum}`
}