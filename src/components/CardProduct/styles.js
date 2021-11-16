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

  &:hover {
    transform: scale(105%);
    transition: 0.3s linear;
  }

  p {
    margin-block-start: 0.1em;
    margin-block-end: 0.1em;
  }

  div {
    align-self: flex-end;
    display: flex;

    button {
      padding: 5px 10px;
    }

    button + button {
      margin-left: 4px;
    }
  }
`;

export const Footer = styled.span`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  gap: 4px;

  button {
    background: #7159c1;
    color: #fff;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    flex: 1;

    &:hover {
      background: rgba(113, 89, 193, 0.9);
    }

    span {
      margin-right: 5px;
      text-align: center;
      font-weight: bold;
    }
  }
`;
