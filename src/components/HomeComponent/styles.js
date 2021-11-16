import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg-black);
  margin: 0;
  min-height: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 920px;
  padding: 10px;
  display: grid;
  grid-template-areas:
    "categorias categorias categorias"
    "card card card";
  grid-template-columns: auto;
  grid-template-rows: auto;
  column-gap: 10px;

  @media (max-width: 820px) {
    grid-template-areas:
      "categorias categorias"
      "card card";
  }

  @media (max-width: 620px) {
    grid-template-areas:
      "categorias"
      "card";
  }
`;

export const ListCategory = styled.div`
  grid-area: categorias;
  ul {
    list-style: none;
    display: flex;
    align-items: center;

    li button {
      padding: 8px 16px;
      margin-right: 8px;
      background: var(--bg-black);
      color: white;
      font-size: 16px;
      font-weight: 600;
      text-transform: capitalize;
    }
  }
`;

export const ListProdutos = styled.div``;
