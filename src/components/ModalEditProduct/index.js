import React from "react";
import { api } from "../../services/api";
import { Container, Content, Footer} from "./styles";

function ModalEditProduct({ produto, modalIsOpen, setModalIsOpen }) {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [category, setCategory] = React.useState(["agulha"]);

  React.useEffect(() => {
    setName(produto.name);
    setPrice(produto.price);
    setAmount(produto.amount);
    setCategory(produto.category);
  }, [modalIsOpen, produto.name, produto.price, produto.amount, produto.category]);

  function handleSelect({ target }) {
    const selectedOptions = [...target.selectedOptions];
    const options = selectedOptions.map((op) => op.value);
    setCategory(options);
  }

  function handleEditProduct() {
    const data = {
      name,
      price,
      amount,
      category,
    };
    api.put(`produtos/${produto.id}/update`, data);
    setModalIsOpen(false);
  }

  if (!modalIsOpen) {
    return null;
  } else {
    return (
      <Container>
        <Content>
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            type="text"
            onChange={({ target }) => setName(target.value)}
            value={name || " "}
          />
          <label htmlFor="price">Preço</label>
          <input
            id="price"
            type="number"
            onChange={({ target }) => setPrice(target.value)}
            value={price || " "}
          />
          <label htmlFor="amount">Quantidade</label>
          <input
            id="amount"
            type="number"
            onChange={({ target }) => setAmount(target.value)}
            value={amount || " "}
          />
          <label>Categoria</label>
          <select
            name="category"
            value={category || ["agulha"]}
            onChange={handleSelect}
            multiple={true}
          >
            <option value="agulha">Agulha</option>
            <option value="batoque">Batoque</option>
            <option value="bico">Bico</option>
            <option value="tinta">Tinta</option>
          </select>
          <Footer>
            <button id="btn-save" onClick={handleEditProduct}>
              Salvar
            </button>
            <button id="btn-close" onClick={() => setModalIsOpen(false)}>
              Cancelar
            </button>
          </Footer>
        </Content>
      </Container>
    );
  }
}

export default ModalEditProduct;
