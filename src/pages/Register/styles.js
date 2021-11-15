import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg-black);
  margin: 0;
  min-height: 100%;

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 22px;
    color: #fff;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
  }
`
export const Content = styled.div`
  background-color: var(--bg-black);
  border-radius: 8px;
  min-width: 40%;
  padding: 0 20px;

  h1 {
    text-align: center;
    margin-top: 0;
    color: #fff;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
  }

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    max-width: 720px;
  }

  input,
  select {
    border-radius: 8px;
    border: none;
    box-sizing: border-box;
    width: 100%;
    padding: 12px;
    display: block;
    margin-bottom: 10px;
  }

  label {
    color: #fff;
  }

  button {
    padding: 10px 30px;
    font-weight: 600;
    border-radius: 8px;
    border: none;
    background-color: #5cb85c;
    color: white;
  }
`;
