import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <div className="pt-7 pb-5">
      <Link className="pt-5 pb-5 pl-6 pr-6 hover:bg-sky-700" to={"/tasks"}>
        TasksPage
      </Link>
      <Link
        className="pt-5 pb-5 pl-6 pr-6 hover:bg-sky-700"
        to={"/tasks-create"}
      >
        TasksFormPage
      </Link>
    </div>
  );
};

export default Navigation;
