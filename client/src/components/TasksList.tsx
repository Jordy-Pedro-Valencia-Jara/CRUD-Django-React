import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import TaskCard from "./TaskCard";

function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [loading, setLoading] = useState(true); // Estado de carga

  async function LoadTasks(page = 1) {
    setLoading(true);
    try {
      const res = await getAllTasks(page);
      setTasks(res.data.results);
      setHasNextPage(res.data.next !== null);
      setHasPrevPage(res.data.previous !== null);
    } catch (error) {
      console.error("Error cargando tareas:", error);
    }
    setLoading(false);
  }

  useEffect(() => {
    LoadTasks(currentPage);
  }, [currentPage]);

  const nextPage = () => hasNextPage && setCurrentPage(currentPage + 1);
  const prevPage = () =>
    hasPrevPage && currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="p-4">
      {/* Contenedor de tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading
          ? // Skeleton estilizado como TaskCard
            Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/20 backdrop-blur-sm p-4 rounded-xl shadow-md animate-pulse h-[150px]"
              >
                <div className="h-5 bg-gray-300 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              </div>
            ))
          : // Lista de tareas reales
            tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      </div>

      {/* Botones de paginación */}
      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={prevPage}
          disabled={!hasPrevPage || loading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Página anterior
        </button>
        <span className="self-center">Página {currentPage}</span>
        <button
          onClick={nextPage}
          disabled={!hasNextPage || loading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Página siguiente
        </button>
      </div>
    </div>
  );
}

export default TasksList;
