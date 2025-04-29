import { useEffect, useState } from "react";
import { getAllTasks, DeleteTask } from "../api/tasks.api";
import TaskCard from "./TaskCard";
function TasksList() {
  const [tasks, settask] = useState([]);
  // Estado para el número de la página actual
  const [currentPage, setCurrentPage] = useState(1);
  // Estado para saber si hay página siguiente o anterior
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  // Función para cargar tareas según la página
  async function LoadTasks(page = 1) {
    const res = await getAllTasks(page);
    settask(res.data.results); // almacenamos las tareas de la página
    setHasNextPage(res.data.next !== null); // Si hay página siguiente
    setHasPrevPage(res.data.previous !== null); // Si hay página anterior
  }
  useEffect(() => {
    LoadTasks(currentPage);
  }, [currentPage]);
  // Función para avanzar de página
  const nextPage = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Función para retroceder de página
  const prevPage = () => {
    if (hasPrevPage && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      {/* Botones de paginación */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={prevPage}
          disabled={!hasPrevPage}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Página anterior
        </button>

        <span className="self-center">Página {currentPage}</span>

        <button
          onClick={nextPage}
          disabled={!hasNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Página siguiente
        </button>
      </div>
    </div>
  );
}

export default TasksList;
