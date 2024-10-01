let arr =[]
document.querySelector('#Sign-Up').addEventListener("submit",(e)=>{
    e.preventDefault()
    
    let username = document.getElementById("un").value
    let email = document.getElementById("e-i").value
    let password = document.getElementById("password").value
    if(validate()){

    let obj = {
        username,
        email,
        password
    }
    console.log(obj)
    arr.push(obj)
    console.log("All Users:", arr);
  
    

}})

document.getElementById('s').addEventListener("click",()=>{
    document.querySelector('.login').style.display = "block"
    document.querySelector('.sign').style.display = "none"
})
document.getElementById('l').addEventListener("click",()=>{
    document.querySelector('.sign').style.display = "block"
    document.querySelector('.login').style.display = "none"
})
function validate(){
    
    
    let username = document.getElementById("un").value
    let email = document.getElementById("e-i").value
    let password = document.getElementById("password").value
    
    if(username=="" || password == "" || email == ""){
        alert("blank is not allowed")
        return false
        
    }
    else if( !email.includes("@")) {
        alert("Invalid email. Email must include '@'.");
        return false
    }
    else{
       
        return true
    }
}



document.querySelector("#log").addEventListener("submit",(e)=>{
    e.preventDefault()
    let loginemail = document.getElementById("Email").value
    let loginpassword = document.getElementById("pass").value
    let flag = false
    arr.forEach((el)=>{
        if(el.email == loginemail && el.password == loginpassword){
           flag = true
          

        }
        console.log(el)
        console.log(loginemail,loginpassword)
       
    })
    if(flag == true){
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
    }
    else{
        alert("Login fail")
    }
})
