import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./app.css";

import NewUser from "./components/pages/newUser/NewUser";
import UserList from "./components/pages/userList/UserList";
import User from "./components/pages/user/User";
import ProductList from "./components/pages/productList/ProductList";
import Product from "./components/pages/product/Product";
import NewProduct from "./components/pages/newProduct/NewProduct";

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
          <Route path="/newUser" element={<NewUser />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/:productId" element={<Product />}></Route>
          <Route path="/newproduct" element={<NewProduct></NewProduct>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
