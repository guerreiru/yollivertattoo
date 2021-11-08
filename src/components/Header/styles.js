import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin: 50px 0;

  @media(max-width: 768px) {
    flex-direction: column;
    .linksHeader {
      margin-bottom: 20px;
    }
  }

  a {
    transition: opacity 0.2s;
    text-decoration: none;
    color: white;

    &:hover {
      opacity: 0.7;
    }

    .logo {
      font-size: 2rem;
      font-weight: 600;
    }

    .newProduct {
      font-size: 1rem;
      margin-left: 20px;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
