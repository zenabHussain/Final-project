// Task class
class Task {
    constructor(taskName, description, assignedTo, dueDate, status) {
      this.taskName = taskName;
      this.description = description;
      this.assignedTo = assignedTo;
      this.dueDate = dueDate;
      this.status = status;
    }
  }
  
  // Task list
  const taskList = [];
  
  // Function to add a new task
  function addTask(taskName, description, assignedTo, dueDate, status) {
    const task = new Task(taskName, description, assignedTo, dueDate, status);
    taskList.push(task);
  }
  
  // Example tasks
  addTask("Task 1", "Description of Task 1", "Val", "2023-05-04", "To Do");
  addTask("Task 2", "Description of Task 2", "Zenab", "2023-05-05", "In Progress");
  addTask("Task 3", "Description of Task 3", "Val", "2023-05-04", "In Progress");
  addTask("Task 4", "Description of Task 4", "Val", "2023-05-04", "In Progress");
  addTask("Task 5", "Description of Task 5", "Zenab", "2023-05-08", "Done");
  
  // Print task list
  console.log(taskList);
  