// Task class
class Task {
  constructor(taskID, taskName, description, assignedTo, dueDate, status) {
    this.taskID = taskID;
    this.taskName = taskName;
    this.description = description;
    this.assignedTo = assignedTo;
    this.dueDate = dueDate;
    this.status = status;
    }
}



// TaskManager class

  class TaskManager {
  
    constructor() {
      this.taskList = [];
      this.counter = 0;
      console.log(this.taskList);
    }

    addTask(task) {
      this.taskList.push(task);
      this.counter++;
    }
  
    deleteTask(taskID) {
      const index = this.taskList.findIndex((task) => task.taskID === taskID);
      if (index !== -1) {
        this.taskList.splice(index, 1);
      }
    }
  
    updateTaskStatus(taskID) {
      const task = this.taskList.find((task) => task.taskID === taskID);
      if (task) {
        task.status = "Done";
      }
    }
  }
  

 const taskManager = new TaskManager();
 function doneTasks() {
  let span = document.getElementsByClassName("spin");
  let doneButton = document.getElementsByClassName("doneButton");

  for (let i = 0; i < doneButton.length; i++) {
    const element = doneButton[i];
    const element1 = span[i];

    element.addEventListener("click", (event) => {
      let target = event.target;
      let parent = target.parentElement;

      
      element1.innerHTML = "Done";

      const taskID = parseInt(target.getAttribute("data-task-id"));
      taskManager.updateTaskStatus(taskID, "Done");

      // Remove the "Done" button from the DOM
     target.remove();

      saveTasks();
    });
  }
}

// Load tasks from localStorage
function loadTasks() {
  const data = JSON.parse(localStorage.getItem("data")) || [];
  for (const taskData of data) {
    const task = new Task(
      taskData.taskID,
      taskData.taskName,
      taskData.description,
      taskData.assignedTo,
      taskData.dueDate,
      taskData.status
      );



    taskManager.addTask(task);
    addTaskToDOM(task);
    }
  
 
    doneTasks();

  }

  function saveTasks() {
    const data = JSON.stringify(taskManager.taskList);
    localStorage.setItem("data", data);
  }

function addTaskToDOM(task) {
  // Create task card container
  let taskCard = document.createElement("div");
  taskCard.className = "task-card";

  // Set task card HTML
  taskCard.innerHTML =
    
    "<br>" +
    "<strong>Task Name:</strong> " +
    task.taskName +
    '<div class="task-details">' +
    "<strong>Description:</strong> " +
    task.description +
    "<br>" +
    "<strong>Assigned To:</strong> " +
    task.assignedTo +
    "<br>" +
    "<strong>Due Date:</strong> " +
    task.dueDate +
    "<br>" +
    "<strong>Status:</strong> " + '<span class="spin">'+
    task.status + "</span>" +
    "</div>" +
    '<button class="delete-button btn btn-primary" data-id="'+
    task.taskID +
    '">Delete</button>' +  '<button   class="btn btn-primary doneButton">Done</button>';

  // Append task card to task list container
  let taskListContainer = document.getElementById("taskList");
  taskListContainer.appendChild(taskCard);

  doneTasks();
}

function deleteTaskFromDOM(taskID) {
  let taskCards = document.getElementsByClassName("task-card");
  for (let i = 0; i < taskCards.length; i++) {
    let card = taskCards[i];
    if (card.querySelector(".delete-button").getAttribute("data-id") == taskID) {
      card.remove();
      break;
    }
  }
}

function validateForm(event) {
  event.preventDefault(); // Prevent the form from being submitted

  clearErrors();

  var taskNameInput = document.getElementById("taskName");
  var descriptionInput = document.getElementById("description");
  var assignedToInput = document.getElementById("assignedTo");
  var dueDateInput = document.getElementById("dueDate");
  var statusInput = document.getElementById("status");

  var isValid = true;

  // Validate Task Name
  if (taskNameInput.value.trim() === "") {
    showError(taskNameInput, "Task Name is required.");
    isValid = false;
  }

  // Validate Description
  if (descriptionInput.value.trim() === "") {
    showError(descriptionInput, "Description is required.");
    isValid = false;
  } else if (descriptionInput.value.trim().length < 8) {
    showError(descriptionInput, "Description must be at least 8 characters long.");
    isValid = false;
  }

  // Validate Assigned To
  if (assignedToInput.value.trim() === "") {
    showError(assignedToInput, "Assigned To is required.");
    isValid = false;
  }

  // Validate Due Date
  if (dueDateInput.value.trim() === "") {
    showError(dueDateInput, "Due Date is required.");
    isValid = false;
  }

  // Validate Status
  if (statusInput.value.trim() === "") {
    showError(statusInput, "Status is required.");
    isValid = false;
  }

  if (isValid) {
    // Form is valid, perform the desired action (e.g., create the task object)
    let newTask = new Task(
      taskManager.counter,
      taskNameInput.value,
      descriptionInput.value,
      assignedToInput.value,
      dueDateInput.value,
      statusInput.value
  
    );


    taskManager.addTask(newTask);

    // Add the task to the task list
   addTaskToDOM(newTask);

    // Reset the form
    document.getElementById("taskForm").reset();

    // Save tasks to localStorage
    saveTasks();
  }
}

// Delete task
    function handleDeleteTask(event) {
    if (event.target.classList.contains("delete-button")) {
    const taskID = parseInt(event.target.getAttribute("data-id"));
    taskManager.deleteTask(taskID);
    deleteTaskFromDOM(taskID);

    // Save tasks to localStorage
    saveTasks();
  }
}

document.getElementById("taskList").addEventListener("click", handleDeleteTask);

// Error code
function showError(inputElement, errorMessage) {
  inputElement.classList.add("is-invalid");

  var errorText = document.createElement("div");
  errorText.classList.add("invalid-feedback");
  errorText.innerText = errorMessage;

  // Add the error message after the input element
  inputElement.parentNode.appendChild(errorText);
}

function clearErrors() {
  var errorElements = document.getElementsByClassName("invalid-feedback");
  while (errorElements.length > 0) {
    errorElements[0].parentNode.removeChild(errorElements[0]);
  }

  var inputElements = document.getElementsByClassName("is-invalid");
  while (inputElements.length > 0) {
    inputElements[0].classList.remove("is-invalid");
  }
}

document.getElementById("taskForm").addEventListener("submit", validateForm);

// Load tasks on page load
document.addEventListener("DOMContentLoaded", loadTasks);





/* 
add event parameter to done function
find event.target
find target.parentElement
use querry selector all on status [i] change status at index
using the querry selctor on the parent we can find the done buuton @ index [i] set display none
*/

