import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="flex justify-end w-full  bg-cyan-950/50 ">
      <Link
        className="text-white  pt-5 pb-5 pl-6 pr-6 hover:bg-sky-700"
        to={"/tasks"}
      >
        TasksPage
      </Link>
      <Link
        className="text-white pt-5 pb-5 pl-6 pr-6 hover:bg-sky-700"
        to={"/tasks-create"}
      >
        TasksFormPage
      </Link>
    </div>
  );
};

export default Navigation;
