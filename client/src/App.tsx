import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TaskFormPages from "./pages/TaskFormPages";
import TasksPages from "./pages/TasksPages";
import Navigation from "./components/Navigation";
import Prueba from "./pages/Prueba";
import "./App.css";

function App() {
  return (
    <>
      <div
        className="min-h-screen  bg-cover"
        style={{
          backgroundImage: `url('https://preview.redd.it/8j16f7e41qb91.jpg?auto=webp&s=e1320d2c734ca979aad48f98b9fc672ab2a56009')`,
        }}
      >
        <BrowserRouter>
          <Navigation />
          <div className="mx-auto w-[90%]  h-[560px] m-2 bg-white/10">
            <Routes>
              <Route path="/" element={<Navigate to={"/prueba"} />} />
              <Route path="/prueba" element={<Prueba />} />
              <Route path="/tasks" element={<TasksPages />} />
              <Route path="/tasks-create" element={<TaskFormPages />} />
              <Route path="/tasks/:id" element={<TaskFormPages />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
