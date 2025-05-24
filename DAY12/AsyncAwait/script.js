// async/await

// // Wait and Print Message
// // Q: Write an async function that waits 2 seconds and prints "Hello after 2 sec".

// // function delay(tym){
// //     return new Promise(function(resolve){
// //      setTimeout(()=>{
// //         resolve();
// //      },tym)
// //     })
// // }
// // async function Printmsg() {
// //     await delay(2000);
// //         console.log("Helloooo!!!")
    
    
// // }
// // Printmsg();

// //  2. Fake API using async/await
// // Q: Create a function getData() that simulates fetching data from an API using setTimeout.

// function fakeApi(){
//     return new Promise(function(resolve){
//         setTimeout(()=>{
//             resolve("Data fetched succesfully!")
//         },3000)

//     })
// }
// async function getData() {
//     const data = await fakeApi();
//     console.log(data);
    
// }
// getData();
