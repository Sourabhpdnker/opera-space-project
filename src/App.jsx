import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import BloodGroup from "./components/BloodGroup";
import StudentAbilitiesPage from "./components/StudentAbilitiesPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/professor-blood-group"
          element={<BloodGroup></BloodGroup>}
        ></Route>
        <Route
          path="/student-blood-group"
          element={<StudentAbilitiesPage></StudentAbilitiesPage>}
        ></Route>
        <Route path="/" element={<Login></Login>} />
      </Routes>
    </BrowserRouter>
  );
}
