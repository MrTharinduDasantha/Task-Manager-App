import { useState } from "react";
import axios from "../services/api";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

function AddTask({ fetchTasks }) {
  const [task, setTask] = useState({
    name: "",
    description: "",
    status: "Not Completed",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/tasks", task);
      toast.success(response.data);
      fetchTasks();
      setTask({ name: "", description: "", status: "Not Completed" });
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  return (
    <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        className="border p-2 mr-2 w-1/2"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        className="border p-2 mr-2 w-1/2"
        required
      />
      <button
        type="submit"
        className="max-w-xl md:w-1/6 bg-blue-500 text-white px-4 py-2"
      >
        Add Task
      </button>
    </form>
  );
}

AddTask.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
};

export default AddTask;
