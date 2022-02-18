import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./app.css";
import UserList from "./components/pages/home/userList/UserList";
import User from "./components/pages/home/user/User";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
