import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--bg-black);
  margin: 0;
  min-height: 100%;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 720px;
  padding: 10px;
`;

export const ListCategory = styled.div`
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
