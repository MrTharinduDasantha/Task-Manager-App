import { useState, useEffect } from "react";
import axios from "../services/api";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

function EditTask({ task, isModalOpen, setIsModalOpen, fetchTasks }) {
  const [updatedTask, setUpdatedTask] = useState(task || {});

  useEffect(() => {
    if (task) {
      setUpdatedTask(task);
    }
  }, [task]);

  const handleClose = () => {
    setIsModalOpen(false);
    setUpdatedTask({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/tasks/${updatedTask.id}`, updatedTask);
      toast.success(response.data);
      fetchTasks();
      handleClose();
    } catch (err) {
      console.error("Error editing task:", err);
    }
  };

  // Return null if the modal is not open or task is null
  if (!isModalOpen || !task) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-semibold">Task Name</label>
            <input
              type="text"
              value={updatedTask.name || ""}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, name: e.target.value })
              }
              className="border w-full p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Description</label>
            <textarea
              value={updatedTask.description || ""}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, description: e.target.value })
              }
              className="border w-full p-2 rounded"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Status</label>
            <select
              value={updatedTask.status || "Not Completed"}
              onChange={(e) =>
                setUpdatedTask({ ...updatedTask, status: e.target.value })
              }
              className="border w-full p-2 rounded"
              required
            >
              <option value="Not Completed">Not Completed</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

EditTask.propTypes = {
  task: PropTypes.object,
  isModalOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired,
  fetchTasks: PropTypes.func.isRequired,
};

export default EditTask;
