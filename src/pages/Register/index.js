import React from "react";
import { api } from "../../services/api";
import { Content, Container } from "./styles";
import Header from "../../components/Header";

const Register = () => {
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [category, setCategory] = React.useState(["agulha"]);

  function handleSelect({ target }) {
    const selectedOptions = [...target.selectedOptions];
    const options = selectedOptions.map((op) => op.value);
    setCategory(options);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      name: name.toLocaleLowerCase(),
      price,
      amount,
      category,
    };

    api
      .post("/produtos", data, {})
      .then((res) => console.log(res))
      .catch((er) => console.log(er));
  }

  return (
    <Container>
      <Header location="register" />
      <Content>
        <h1>Cadastrar Produto</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={({ target }) => setName(target.value)}
            type="text"
            placeholder="Nome"
            id="name"
            value={name}
          />
          <input
            onChange={({ target }) => setPrice(target.value)}
            type="number"
            placeholder="Preço"
            id="price"
            value={price}
          />
          <input
            onChange={({ target }) => setAmount(target.value)}
            type="number"
            placeholder="Quantidade"
            id="amount"
            value={amount}
          />
          <select
            name="category"
            value={category}
            onChange={handleSelect}
            multiple={true}
          >
            <option value="agulha">Agulha</option>
            <option value="batoque">Batoque</option>
            <option value="bico">Bico</option>
            <option value="tinta">Tinta</option>
          </select>

          <button>Cadastrar</button>
        </form>
      </Content>
    </Container>
  );
};

export default Register;
