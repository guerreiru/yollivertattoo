import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { Container, Content, Logo, Cart, InputGroup } from "./styles";
import { useCart } from "../../hooks/useCart";

function Header({ busca, buscarProduto, limparBusca, setBusca, location }) {
  const { cart } = useCart();
  const cartSize = React.useMemo(() => cart.length, [cart]);

  return (
    <Container>
      <Content>
        <Logo to="/">Yolliver Tattoo</Logo>
        {!location ? <Link to="/register">Cadastrar Produto</Link> : null}
        {!location ? (
          <InputGroup>
            <input
              value={busca}
              onChange={({ target }) =>
                setBusca(target.value.toLocaleLowerCase())
              }
            />
            <button onClick={buscarProduto}>Buscar</button>
            <button onClick={limparBusca}>Limpar</button>
          </InputGroup>
        ) : null}
        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span data-testid="cart-size">
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      </Content>
    </Container>
  );
}

export default Header;
