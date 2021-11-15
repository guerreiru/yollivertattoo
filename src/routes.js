import { Routes, Route } from "react-router-dom";

import Register from "./pages/Register";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Router;