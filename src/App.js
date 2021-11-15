import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Router from "./routes";
import GlobalStyles from "./styles/globalStyles";
import { CartProvider } from "./hooks/useCart";
import "react-toastify/dist/ReactToastify.css";
// import GlobalStyles from "./styles/global";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <ToastContainer autoClose={2000} />
        <Router />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
