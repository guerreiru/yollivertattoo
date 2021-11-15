import React from "react";
import { Container, Content, Footer } from "./styles";

function ModalConfirm({ item, isOpen, setIsOpen, del }) {
  
  function handeDelete() {
    del(item.id)
    setIsOpen(false)
  }

  if (!isOpen) {
    return null;
  } else {
    return (
      <Container>
        <Content>
          <h3>Deseja realmente excluir o produto: {item.name} ?</h3>
          <Footer>
            <button id="btn-save" onClick={handeDelete}>Confirmar</button>
            <button id="btn-close" onClick={() => setIsOpen(false)}>
              Cancelar
            </button>
          </Footer>
        </Content>
      </Container>
    );
  }
}

export default ModalConfirm;
