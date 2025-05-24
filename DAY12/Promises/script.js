// 1.Create a promise that resolves after 2 seconds with a success message.

// const prom = new Promise(function (resolve){
//     setTimeout(()=>{
//         resolve("Successs!!")
//     },2000)
// })
// prom.then (function(msg){
//     console.log(msg)
// })

// 2.Write a function that returns a promise to check if a number is even or odd.

// function check(num){
//     return new Promise(function(resolve,reject){
//         if(typeof num === "number"){
//         if(num %2===0){
//             resolve("Number is even")
//         }
//         else{
//             resolve("Odd number")
//         }
    
//     }
//     else{
//         reject("Invalid input!!")
// }

//     })

// }
// check(5).then(console.log).catch(console.log)


// 3.Simulate a fake login system using promises — resolve if username is "admin".

// function Login(username){
//     return new Promise(function(resolve,reject){
//         if(username === "admin"){
//             resolve("Login successfully!!")
//         }
//         else{
//             reject("Login failed!")
//         }
//     })
// }
// Login("admin").then(console.log)


// 4. Check if age is valid

function Check(age){
    return new Promise(function(resolve,reject){
        if(age>=18){
            resolve("You can vote!")
        }
        else{
            reject("You cannot vote!")
        }
    })
}

Check(20).then(console.log).catch(console.log)
