import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./app.css";
import UserList from "./components/pages/home/userList/UserList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route element={<UserList />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
