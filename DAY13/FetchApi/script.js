const URL = "https://dogapi.dog/api-docs/v2/swagger.json"

const userURL = "https://randomuser.me/api/"

// fetching the URl
// let promise = fetch(URL);
//  console.log(promise)
 
// to handle the promise

//  const getFacts = async () => {
//  let response = await fetch(URL);
//  console.log(response)  //JSON format
//  console.log(response.status)
//  let data =  await response.json();
//  console.log(data)

    
//  }
//  getFacts();


// let promise = fetch(userURL);
// console.log(promise)


let btn = document.querySelector("#data");
let info = document.querySelector("#info");

const getData = async ()=>{
    let response = await fetch(userURL);
    // console.log(response)
    
    let data = await response.json();
    console.log(data.results[0])

    // Accessing name email and gender of the User
    const user = data.results[0];
    // console.log("Name : "+ user.name.first);
    // console.log("Email : " + user.email);
    // console.log("Gender : " + user.gender);
    info.innerText = user.name.first;
    info.innerText = user.email;

}

btn.addEventListener("click",getData)



