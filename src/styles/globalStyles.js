import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --bg-purple: #820AD1;
    --bg-black:  #3c3c3c;
    --background: #f0f2f5;
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5229cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-light: #969cb3;
    --shape: #ffffff;
  }
  * {
    box-sizing: border-box;
    padding: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
  body, html, #root {
    height: 100%;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
  img {
    width: 100%;
  }
  input, select, text-area {
    font-family: 'Poppins', sans-serif;
  }
  button {
    cursor: pointer;
    border-radius: 4px;
    border: none;
  }
  button:hover, .btn-link:hover {
    filter: brightness(75%);
    transition: 0.5s;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
    -webkit-text-fill-color: #fff;
  }
`;