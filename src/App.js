import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Login from "./features/auth/login";
import RequireAuth from "./features/auth/requireAuth";
import Welcome from "./features/auth/welcome";


function App() {
  return (
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/login" element={<Login/>}></Route>
            <Route element={<RequireAuth/>}>
              <Route path="/welcome" element={<Welcome/>}></Route>
            </Route>
          </Route>
        </Routes>
  );
}

export default App;
