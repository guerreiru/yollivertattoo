import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket, MdPowerSettingsNew } from "react-icons/md";
import { Container, Cart } from "./styles";
import { useCart } from "../../hooks/useCart";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { cart } = useCart();
  const cartSize = React.useMemo(() => cart.length, [cart]);
  const { logado, setLogado } = React.useContext(UserContext);

  function handleUserLogado() {
    setLogado(false)
    localStorage.setItem("userLogado", "false");
  }

  return (
    <Container>
      <div className="linksHeader">
        <Link to="/home">
          <span className="logo">Yolliver {logado ? 'on' : 'off'}</span>
        </Link>
        {logado ? (
          <>
            <Link to="/newproduct">
              <span className="newProduct">Cadastrar Produto</span>
            </Link>
            <Link to="/" onClick={handleUserLogado}>
              <span className="newProduct">Sair</span>
            </Link>
          </>
        ) : null}
      </div>

      {cartSize ? (
        <Cart to="/cart">
          <div>
            <strong>Meu carrinho</strong>
            <span data-testid="cart-size">
              {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
            </span>
          </div>
          <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
      ) : null}
    </Container>
  );
};

export default Header;
