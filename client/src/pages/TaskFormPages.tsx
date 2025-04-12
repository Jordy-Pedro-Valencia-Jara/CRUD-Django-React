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
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Tienes que llenar el titulo</span>}
        <textarea
          placeholder="Descripcion"
          {...register("descripcion", { required: true })}
        ></textarea>
        <button>Guardar</button>
      </form>
      {params.id && (
        <button
          onClick={async () => {
            const validado = window.confirm("Estas seguro de esta tarea: ");
            if (validado) {
              await DeleteTask(params.id);
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default TaskFormPages;
