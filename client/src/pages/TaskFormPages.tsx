import { useForm } from "react-hook-form";
import { addTask, DeleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const TaskFormPages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
    } else {
      await addTask(data);
    }
    navigate("/tasks");
  });
  useEffect(() => {
    async function capturar() {
      if (params.id) {
        const {
          data: { title, descripcion },
        } = await getTask(params.id);
        setValue("title", title);
        setValue("descripcion", descripcion);
      }
    }
    capturar();
  }, []);
  return (
    <div className="flex justify-center w-full h-full">
      <form
        onSubmit={onSubmit}
        className="mt-12 flex flex-col gap-4 bg-black/80 p-6 rounded-md shadow-md w-full max-w-md h-100 max-h-100"
      >
        {params.id ? (
          <label className="text-white flex justify-center text-lg">
            Editar Tarea
          </label>
        ) : (
          <label className="text-white flex justify-center text-lg">
            Nueva Tarea
          </label>
        )}
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { required: true })}
          className="bg-black/30 text-white border border-amber-500  placeholder:text-white p-2 focus:border-amber-500 focus:outline-none"
        />
        {errors.title && (
          <span className="text-red-600">Tienes que llenar el titulo</span>
        )}
        <textarea
          placeholder="Descripcion"
          {...register("descripcion", { required: true })}
          className="bg-black/30 border text-white border-amber-500 placeholder:text-white p-2 focus:border-amber-500 focus:outline-none"
        ></textarea>
        {errors.descripcion && (
          <span className="text-red-600">Tienes que llenar la descripcion</span>
        )}
        <button className="bg-blue-600/80 p-3 text-white">Guardar</button>
        {params.id && (
          <button
            onClick={async () => {
              const validado = window.confirm("Estas seguro de esta tarea: ");
              if (validado) {
                await DeleteTask(params.id);
                navigate("/tasks");
              }
            }}
            className="bg-red-600 p-3 text-white"
          >
            Delete
          </button>
        )}
      </form>
    </div>
  );
};

export default TaskFormPages;
