import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

import background from "../assets/images/background.svg";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  input, button, textarea {
    font: 400 18px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  .form input {
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;
  }

  .form textarea {
    width: 100%;
    min-height: 140px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
    resize: vertical;
  }

  .button {
    width: 100%;
    height: 60%;
    background: #7159c1;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 16px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.3s;
  }

  .button:hover {
    filter: brightness(90%);
  }

  .back-link {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #fff;
    font-size: 18px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s;
  }


  .back-link svg {
    margin-right: 8px;
  }

  .back-link:hover {
    opacity: 0.8;
  }
`;
