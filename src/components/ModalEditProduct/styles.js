import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  background-color: var(--bg-black);
  border-radius: 8px;
  min-width: 40%;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;

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
    margin-right: 6px;
    font-weight: 600;
    border-radius: 8px;
    border: none;

    &:hover {
      filter: brightness(0.8);
      transition: 0.4s;
      transform: scale(105%);
    }
  }
`;


export const Footer = styled.div`
    #btn-save {
      background-color: #5cb85c;
      color: white;
    }

    #btn-close {
      background-color: crimson;
      color: white;
    }
`
