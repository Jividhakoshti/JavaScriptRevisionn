// ✅1. map() – Transforming Data
// Goal: Use map() to return a new array with modified elements.

// Practice Questions:

// You have an array of users:

// const users = [
//   { id: 1, name: 'Alice', age: 25 },
//   { id: 2, name: 'Bob', age: 30 },
// ];
// 1.Create an array of usernames in uppercase.

// const Uuser = users.map(user => user.name.toUpperCase());
// console.log(Uuser)

//2. Add a new property isAdult (true if age ≥ 18) to each user.

// const isAdult = users.map(user =>({...user,isAdult:user.age>=18,}))
// console.log(isAdult)

// ✅ 2. filter() – Selecting Specific Items
// Goal: Use filter() to return items that meet a condition.

// From an array of products:

// const products = [
//   { name: 'Laptop', price: 1000 },
//   { name: 'Mouse', price: 25 },
// ];

// Get all products priced above ₹100.

// const prod = products.filter(product=> product.price>100)
// console.log(prod)

// Get all products whose name includes the letter "o".
// const newproducts = products.filter(p => p.name.toLowerCase().includes("o"));
// console.log(newproducts)

// ✅ 3. reduce() – Accumulating Values
// Goal: Use reduce() to combine elements into a single value.


// Given this array of transactions:

const transactions = [
  { id: 1, amount: 100 },
  { id: 2, amount: -50 },
];
// Calculate the total balance.
const total = transactions.reduce((acc,tx)=>acc+tx.amount,0)
console.log(total)

// Count how many transactions are positive.
const countpositive = transactions.reduce((count,txn)=>{
return txn.amount>0?count+1: count},0)
console.log(countpositive)

// ✅ 4. find() – Getting the First Match
// Goal: Use find() to locate the first item that matches a condition.

// Practice Questions:

// Given:

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
// Find the user with the name 'Bob'.
const uname = users.find(user=>user.name==="Bob")
console.log(uname)

// Find the first user whose name starts with "A".
const userStartsWithA = users.find(user => user.name.startsWith("A"));
console.log(userStartsWithA);

// ✅ 5. forEach() – Executing a Function on Each Item
// Goal: Use forEach() to perform side effects (logging, modifying).

// From an array of students:

const students = [
  { name: 'Anu', score: 85 },
  { name: 'Ravi', score: 92 },
];
// Log each student’s name and score.
students.forEach(student=>{
    console.log("Name : " + student.name +" "+ "scor : " + student.score)
})


// Add 5 bonus marks to each student and print the new score.
students.forEach(student=>{
    const newscore = student.score + 5;
    console.log("Name : " + student.name +" "+ "newscore : " + student.newscore)
})

// ✅ Bonus: Combined Usage
// Challenge Question:

// From an array of users:

const userss = [
  { name: 'John', age: 17 },
  { name: 'Jane', age: 21 },
  { name: 'Mark', age: 30 },
];
// Filter adults (age ≥ 18), map to their names, then reduce to a single comma-separated string of names.
const Adults = userss.filter(user=>
    user.age>=18)
.map(user=>user.name)
.reduce((acc, name, index, arr) => {
    return index === arr.length - 1 ? acc + name : acc + name + ', ';
  }, '');
  console.log(Adults)
