import { useState, useEffect } from "react";
import axios from "../services/api";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import { toast } from "react-toastify";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [editTask, setEditTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await axios.get("/tasks");
      setTasks(response.data);
      setFilteredTasks(response.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      toast.error("Error fetching tasks");
    }
  };

  const filterTasks = (status) => {
    setFilter(status);
    if (status === "All") {
      setFilteredTasks(tasks);
    } else {
      setFilteredTasks(tasks.filter((task) => task.status === status));
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`/tasks/${id}`);
      toast.success(response.data);
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
      toast.error("Error deleting task");
    }
  };

  const toggleCompletion = async (task) => {
    try {
      const response = await axios.put(`/tasks/${task.id}`, {
        ...task,
        status: task.status === "Completed" ? "Not Completed" : "Completed",
      });
      toast.success(response.data);
      fetchTasks();
    } catch (err) {
      console.error("Error updating task status:", err);
      toast.error("Error updating task status");
    }
  };

  const handleEdit = (task) => {
    setEditTask(task);
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    filterTasks(filter);
  }, [tasks]);

  return (
    <div>
      <AddTask fetchTasks={fetchTasks} />
      <EditTask
        task={editTask}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        fetchTasks={fetchTasks}
      />
      <h1 className="text-xl font-bold text-center my-4">Filter Tasks</h1>
      <div className="flex justify-center my-4">
        <button
          className={`px-4 py-2 mx-2 ${
            filter === "All" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => filterTasks("All")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            filter === "Completed" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => filterTasks("Completed")}
        >
          Completed
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            filter === "Not Completed"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => filterTasks("Not Completed")}
        >
          Not Completed
        </button>
      </div>
      <ul className="mt-4">
        {filteredTasks.map((task) => (
          <li key={task.id} className="p-2 border-b flex justify-between">
            <div>
              <h3 className="font-semibold">{task.name}</h3>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white px-2 py-1 mr-2"
                onClick={() => handleEdit(task)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 mr-2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
              <button
                className="bg-green-500 text-white px-2 py-1"
                onClick={() => toggleCompletion(task)}
              >
                {task.status === "Completed"
                  ? "Mark as Incomplete"
                  : "Mark as Complete"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
