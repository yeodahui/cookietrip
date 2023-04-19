import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/mypage" element={<HomePage />} />
        <Route path="*" element={<Navigate replace to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
