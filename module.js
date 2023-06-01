// Task class
class Task {
 
    constructor(taskID, taskName, description, assignedTo, dueDate, status) {
      this.taskName = taskName;
      this.description = description;
      this.assignedTo = assignedTo;
      this.dueDate = dueDate;
      this.status = status;
      this.taskID=taskID;
    }
  }
  let counter=0;
  // Task list
  const taskList = [];
  
  // Function to add a new task
  function addTask() {
  let a=document.getElementById("taskName").value;
  let b=document.getElementById("description").value;
  let c =document.getElementById("assignedTo").value;
  let d=document.getElementById("dueDate").value;
  let e=document.getElementById("status").value;

taskList.push(counter, a,b,c,d,e);
counter++;
console.log(taskList);
let taskListElement = document.getElementById('taskList');
let taskItemElement = document.createElement('li');
taskItemElement.innerHTML =
  '<div class="form-group w-75 my-5">' +
  a +
  '</strong> - ' +
  b +
  ' (Due: ' +
  c +
  '</div>';
taskListElement.appendChild(taskItemElement);
  } 
// Add task event listener
document.getElementById('task').addEventListener('click', function () {
  let taskName = document.getElementById('taskName').value;
  let description = document.getElementById('description').value;


});

  

document.getElementById("task").addEventListener('click', addTask);



  
  