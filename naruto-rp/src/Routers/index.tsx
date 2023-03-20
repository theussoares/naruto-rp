import { Route, Routes } from "react-router-dom";
import { DashBoard } from "../Components/Pages/DashBoard";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";

const Router = () => {
    return (
      <div>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<DashBoard />} />
        </Routes>
      </div>
    );
  };
  
  export default Router;