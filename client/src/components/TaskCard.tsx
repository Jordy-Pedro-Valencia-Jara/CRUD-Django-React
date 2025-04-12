import { useNavigate } from "react-router-dom";
const TaskCard = ({ task }) => {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-tr-lg bg-emerald-700/80"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <div className="p-3">
        <h1 className="p-2 pb-4 ">{task.title}</h1>
        <p className="">{task.descripcion}</p>
      </div>
    </div>
  );
};

export default TaskCard;
