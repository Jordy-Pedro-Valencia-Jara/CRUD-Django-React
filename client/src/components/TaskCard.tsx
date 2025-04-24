import { useNavigate } from "react-router-dom";
const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-tr-lg bg-green-600/70 hover:bg-green-600"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <div className="p-3">
        <h1 className="text-black flex justify-center p-2 pb-4 rounded-[1vw] bg-amber-400/90 hover:bg-amber-400">
          {task.title}
        </h1>
        <p className="flex justify-center p-2 pb-4">{task.descripcion}</p>
      </div>
    </div>
  );
};

export default TaskCard;
