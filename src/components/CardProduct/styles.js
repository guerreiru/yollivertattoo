import styled from "styled-components";
export const Card = styled.div`
  margin-bottom: 8px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 2px 2px 5px 1px #000;
  padding: 20px 40px;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
  display: flex;
  flex-direction: column;

  p {
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
  }

  div {
    align-self: flex-end;
    display: flex;

    button {
      padding: 10px 20px;
    }

    button + button {
      margin-left: 4px;
    }
  }
`;

export const Footer = styled.span`
  margin-top: 10px;
  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: rgba(113, 89, 193, 0.9);
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
