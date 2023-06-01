

function validateForm() {
 
  // Clear previous error messages
  clearErrors();
  
  // Get form field values
  var taskName = document.getElementById("taskName").value;
  var description = document.getElementById("description").value;
  var assignedTo = document.getElementById("assignedTo").value;
  var dueDate = document.getElementById("dueDate").value;
  var status = document.getElementById("status").value;
  
  // Flag to track form validity
  var isValid = true;

  // Validate Task Name
  if (taskName === "") {
    alert("taskNameError", "Task Name is required.");
    isValid = false;
  }

  // Validate Description
  if (description=== "") {
    alert("descriptionError", "Description is required.");
    isValid = false;
  }
=======
    // Clear previous error messages
    clearErrors();
    
    // Get form field values
    var taskName = document.getElementById("taskName").value;
    var description = document.getElementById("description").value;
    var assignedTo = document.getElementById("assignedTo").value;
    var dueDate = document.getElementById("dueDate").value;
    var status = document.getElementById("status").value;
    
    // Flag to track form validity
    var isValid = true;

    // Validate Task Name
    if (taskName === "") {
      alert("taskNameError", "Task Name is required.");
      isValid = false;
    }

    // Validate Description
    if (description=== "") {
      alert("descriptionError", "Description is required.");
      isValid = false;
    }

    // Validate Assigned To
    if (assignedTo === "") {
      alert("assignedToError", "Assigned To is required.");
      isValid = false;
    }

    // Validate Due Date
    if (dueDate === "") {
      alert("dueDateError", "Due Date is required.");
      isValid = false;
    }

    // Validate Status
    if (status === "") {
      alert("statusError", "Status is required.");
      isValid = false;
    }

<<<<<<< HEAD
<<<<<<< HEAD
 return isValid;
}

  function clearErrors() {
    var errorElements = document.getElementsByClassName("error-text");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].innerText = "";
    }
=======
    return isValid;
  }


  // Validate Assigned To
  if (assignedTo === "") {
    alert("assignedToError", "Assigned To is required.");
    isValid = false;
>>>>>>> d0a79a0d3440487778e152ab9ed36a262f726f3f
  }

=======
    return isValid;
  }


  // Validate Assigned To
  if (assignedTo === "") {
    alert("assignedToError", "Assigned To is required.");
    isValid = false;
  }

>>>>>>> d0a79a0d3440487778e152ab9ed36a262f726f3f
  // Validate Due Date
  if (dueDate === "") {
    displayError("dueDateError", "Due Date is required.");
    isValid = false;
  }

  // Validate Status
  if (status === "") {
    displayError("statusError", "Status is required.");
    isValid = false;
  }

  return isValid;
}

function displayError(id, message) {
  var errorElement = document.getElementById(id);
  errorElement.innerText = message;
}

function clearErrors() {
  var errorElements = document.getElementsByClassName("error-text");
  for (var i = 0; i < errorElements.length; i++) {
    errorElements[i].innerText = "";
  }
}

document.getElementById("task").addEventListener('click', validateForm);
