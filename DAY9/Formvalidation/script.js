// 4. Submit Event + Form Validation
// 💡 Questions:
// Prevent default form submission and display alert.

// Validate that username and password fields are not empty.

// Check if email contains @.

// Password must be at least 6 characters.

// Match confirm password with password.

let form = document.getElementById("form");
let uname = document.getElementById("uname");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let cpass = document.getElementById("confirmpass");
let msg = document.getElementById("msg")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    if(uname.value===" "|| pass.value===" "||mail.value === " "||confirmpass.value===" "){
        alert("Fields cannot be empty")
    }
    if(!mail.value.includes()==="@"){
        alert("email should contain ")
    }
    if(pass.value.length<6){
        alert("Password must be at least 6 characters.")
    }
    if(pass.value!==confirmpass.value){
        alert("Password is not matching")}

  

})

