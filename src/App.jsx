// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={<Home />} />
        <Route path="/success" Component={<Success />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
