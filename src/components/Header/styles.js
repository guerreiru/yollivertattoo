import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg-black);
  padding: 30px 20px;
  margin: 0;
  border-bottom: 0.5px solid black;
`;
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 880px) {
    flex-direction: column;
    row-gap: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      transform: scale(102%);
    }
  }
`;

export const Logo = styled(Link)`
  font-weight: 700;
  font-size: 22px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.8);
  text-align: center;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      color: #fff;
      margin-right: 10px;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;

export const InputGroup = styled.div`
  text-align: center;
  input {
    border-radius: 4px;
    padding: 2px 8px;
    border: none;
  }

  button {
    margin-left: 4px;
    padding: 4px;
    font-weight: 600;
  }

  @media (max-width: 578px) {
    input {
      max-width: 50%;
    }
  }
`;
