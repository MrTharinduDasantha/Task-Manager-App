import db from "../models/db.js";

// Get all tasks
const getTasks = (req, res) => {
  const query = "SELECT * FROM tasks";
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching tasks");
    } else {
      res.json(results);
    }
  });
};

// Add a new task
const addTask = (req, res) => {
  const { name, description, status } = req.body;
  const query =
    "INSERT INTO tasks (name, description, status) VALUES (?, ?, ?)";
  db.query(query, [name, description, status], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error adding task");
    } else {
      res.send("Task added successfully");
    }
  });
};

// Update an existing task
const updateTask = (req, res) => {
  const { id } = req.params;
  const { name, description, status } = req.body;
  const query =
    "UPDATE tasks SET name = ?, description = ?, status = ? WHERE id = ?";
  db.query(query, [name, description, status, id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error updating task");
    } else {
      res.send("Task updated successfully");
    }
  });
};

// Delete a task
const deleteTask = (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM tasks WHERE id = ?";
  db.query(query, [id], (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting task");
    } else {
      res.send("Task deleted successfully");
    }
  });
};

export { getTasks, addTask, updateTask, deleteTask };
