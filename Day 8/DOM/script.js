// 1. getElementById, querySelector, innerHTML
// Practice Questions:

// 1.Create a paragraph with an id of "demo" and use JavaScript to change its content to "Hello, DOM!" using getElementById.

// let demo = document.querySelector("#demo")
// demo.innerHTML = "Hello, DOM!"


// 2.Use querySelector to select a div with the class .box and change its innerHTML to show a <h2>Updated!</h2>.
// let box = document.querySelector(".box");
// box.innerHTML = "<h2>Updated</h2>"


// 3.Create an HTML page with three buttons (btn1, btn2, btn3) and use getElementById to change their text when clicked.
// document.getElementById("btn1").onclick = () => btn1.innerHTML = "Clicked1"
// document.getElementById("btn2").onclick = () =>btn2.innerHTML = "Clicked2"
// document.getElementById("btn3").onclick = () =>btn2.innerHTML = "Clicked3"



// 4.Select a span inside a paragraph using querySelector and update its text dynamically.

// document.querySelector("p .highlight").innerHTML = "updated";

// 🔹 2. addEventListener
// Practice Questions:

//1. Add a button that says "Click Me" and when clicked, it alerts "Button Clicked!".
// let btn = document.querySelector("button")
// btn.addEventListener("click",()=>{
//     alert("Clicked")
// })


//2. Create an input box. On pressing a key (keyup event), display the typed text in a <p> tag below.
//  document.getElementById("textBox").addEventListener("keyup", function (){
//     document.getElementById("displayText").innerText = this.value;
//  });


//3. Create a div. Add a mouseover event that changes its background color when the mouse is over it.
// let div = document.querySelector("div");
// div.addEventListener("mouseover",()=>{
//     div.style.backgroundColor = "Blue"
// })

// 4.Create a list of items. When you click any item, it should log which item was clicked using event listeners.
// document.querySelectorAll("li").forEach(item=>{
//     item.addEventListener("click",()=>{
//         console.log("Clicked",item.innerText);
//     })
// })

// 🔹 3. Changing Styles and Attributes
// Practice Questions:

// 1.Add a button that changes the color of a paragraph to red when clicked.
// let btn = document.querySelector("button");
// let para = document.querySelector("p")
// btn.addEventListener("click",()=>{
//        para.style.color = "Red"
// })


// 2.Write a function to increase the font size of a text when a button is clicked.
// let btn = document.querySelector("button");
// let t = document.getElementById("text");
// btn.addEventListener("click",()=>{
//     t.style.fontSize = "2em";
// })



