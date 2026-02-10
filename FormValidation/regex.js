let userName=document.getElementById("name")
let errorMsg=document.querySelectorAll(".errorMsg")

let userNameReges=/^[a-zA-Z._ ]+$/

function userNameCheck()
{
    if(userName.value)
    {

    
    if(!userNameReges.test(userName.value.trim()))
    {
        errorMsg[0].style.visibility="visible"
        errorMsg[0].textContent="The user Name is invalid"
    }
    else
    {
        errorMsg[0].style.visibility="hidden"
        errorMsg[0].textContent=""
    }
    }
    else
    {
        errorMsg[0].style.visibility="visible"
        errorMsg[0].textContent="The Field is Empty"
    }
}


let password=document.getElementById("password")

let passReges = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


function passCheck()
{
    if(password.value)
    {

    if(!passReges.test(password.value.trim()))
    {
        errorMsg[1].style.visibility="visible"
        errorMsg[1].textContent="The Password is invalid"
    }
    else
    {
     errorMsg[1].style.visibility="hidden"  
     errorMsg[1].textContent=""
     
    }
    }
    else
    {
        errorMsg[1].style.visibility="visible"
        errorMsg[1].textContent="The Field is Empty"
    }

}

let phone=document.getElementById("phone")
let phoneRegex=/^[6-9]\d{9}$/

function phoneCheck()
{
    if(phone.value)
    {

    
    if(!phoneRegex.test(phone.value.trim()))
    {
        errorMsg[2].style.visibility="visible";
        errorMsg[2].textContent="The Phone Number is invalid"
    }
    else{
        errorMsg[2].style.visibility="hidden";
        errorMsg[2].textContent=""
    }

}
else
{
    errorMsg[2].style.visibility="visible"
    errorMsg[2].textContent="The Field is Empty"
}

}
let email=document.getElementById("email")
emailRegex=/^[a-zA-Z0-9.+_]+\@gmail\.com$/

function emailCheck()
{
   if(email.value)
   {
    if(!emailRegex.test(email.value.trim()))
    {
        errorMsg[3].style.visibility="visible"
        errorMsg[3].textContent="The email is invalid"
    }
    else
    {
        errorMsg[3].style.visibility="hidden"
        errorMsg[3].textContent=""
    }
}
else
{
    errorMsg[3].style.visibility="visible"
    errorMsg[3].textContent="The Field is Empty"
}
}

let submitbtn=document.getElementById("submitbtn")
console.log(submitbtn)
submitbtn.addEventListener("click",(event)=>
{
    event.preventDefault()
    userNameCheck()
    passCheck()
    phoneCheck()
    emailCheck()
   
})



