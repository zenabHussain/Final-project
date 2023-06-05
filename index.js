function validateForm() {
  // Clear previous error messages
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
  }
}

// Delete task 

function handleDeleteTask(event) {
  if (event.target.classList.contains("delete-button")) {
    const taskID = parseInt(event.target.getAttribute("data-id"));
    taskManager.deleteTask(taskID);
    deleteTaskFromDOM(taskID);
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


  document.getElementById("task").addEventListener('click', validateForm);
