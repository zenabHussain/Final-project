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
 
  // Add task function
function addTask() {
  
let check=validateForm();



  let a = document.getElementById("taskName").value;
  let b = document.getElementById("description").value;
  let c = document.getElementById("assignedTo").value;
  let d = document.getElementById("dueDate").value;
  let e = document.getElementById("status").value;

  // Create pop-up card container
  let cardContainer = document.createElement('div');
  cardContainer.className = 'pop-up-card';

  // Create pop-up card content
  let cardContent = document.createElement('div');
  cardContent.className = 'pop-up-card-content';

  // Set card content HTML
  cardContent.innerHTML =
    '<span class="close-btn" onclick="closeCard()">&times;</span>' +
    '<h3>Task Details</h3>' +
    '<div class="form-group">' +
    '<strong>Taskname:</strong> ' + a +
    '<br>' +
    '<strong>Description:</strong> ' + b +
    '<br>' +
    '<strong>Assigned To:</strong> ' + c +
    '<br>' +
    '<strong>Due Date:</strong> ' + d +
    '<br>' +
    '<strong>Status:</strong> ' + e +
    '</div>';

  // Append card content to card container
  cardContainer.appendChild(cardContent);

  // Append card container to body
  document.body.appendChild(cardContainer);

// Close card function
function closeCard() {
  let card = document.querySelector('.pop-up-card');
  document.body.removeChild(card);
}
}
// Add task event listener
document.getElementById('task').addEventListener('click', addTask);
