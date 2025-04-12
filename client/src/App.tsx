import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TaskFormPages from "./pages/TaskFormPages";
import TasksPages from "./pages/TasksPages";
import Navigation from "./components/Navigation";
import Prueba from "./pages/Prueba";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to={"/prueba"} />} />
            <Route path="/prueba" element={<Prueba />} />
            <Route path="/tasks" element={<TasksPages />} />
            <Route path="/tasks-create" element={<TaskFormPages />} />
            <Route path="/tasks/:id" element={<TaskFormPages />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
