import { useEffect, useState } from "react";
import { getAllTasks, DeleteTask } from "../api/tasks.api";
import TaskCard from "./TaskCard";
function TasksList() {
  const [tasks, settask] = useState([]);
  useEffect(() => {
    async function LoadTasks() {
      const res = await getAllTasks();
      settask(res.data);
    }
    LoadTasks();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksList;
