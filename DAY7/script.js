// const taskInput = document.getElementById("taskInput");
// const addTaskBtn = document.getElementById("addTaskBtn");
// const taskList = document.getElementById("taskList");

// addTaskBtn.addEventListener("click", function () {
//   const taskText = taskInput.value.trim();
//   if (taskText !== "") {
//     const li = document.createElement("li");
//     li.textContent = taskText;

//     li.addEventListener("click", function () {
//       li.classList.toggle("completed");
     
//     });
//     li.addEventListener("click",()=>{
//         delBtn.textContent = "completed"
//         delBtn.style.backgroundColor = "green"
//     })

//     const delBtn = document.createElement("button");
//     delBtn.textContent = "Delete";
//     delBtn.className = "delete";
//     delBtn.addEventListener("click", function (e) {
//       e.stopPropagation();
//       taskList.removeChild(li);
//     });

//     li.appendChild(delBtn);
//     taskList.appendChild(li);
//     taskInput.value = "";
//   }
// });
