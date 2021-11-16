import React from "react";

import CardProduct from "../CardProduct";
import Header from "../Header";
import ModalEditProduct from "../ModalEditProduct";
import { Container, Content, ListCategory } from "./styles";

function HomeComponent(props) {
  return (
    <Container>
      <ModalEditProduct
        modalIsOpen={props.modalIsOpen}
        setModalIsOpen={props.setModalIsOpen}
        produto={props.produtoToEdit}
      />
      <Header
        busca={props.busca}
        setBusca={props.setBusca}
        buscarProduto={props.buscarProduto}
        limparBusca={props.limparBusca}
      />
      <Content>
        <ListCategory>
          <ul>
            <li>
              <button onClick={props.filterByCategory}>agulhas</button>
            </li>
            <li>
              <button onClick={props.filterByCategory}>bicos</button>
            </li>
            <li>
              <button onClick={props.filterByCategory}>tintas</button>
            </li>
            {props.filterActive ? (
              <li>
                <button onClick={props.limparBusca}>limpar filtro</button>
              </li>
            ) : null}
          </ul>
        </ListCategory>
        {props.produtos.map((produto) => (
          <CardProduct
            key={produto.id}
            data={produto}
            edit={props.editarProduto}
            del={props.deleteProduct}
          />
        ))}
      </Content>
    </Container>
  );
}

export default HomeComponent;
