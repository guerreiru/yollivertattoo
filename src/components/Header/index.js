import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { Container, Cart } from "./styles";
import { useCart } from "../../hooks/useCart";

const Header = () => {
  const { cart } = useCart();
  const cartSize = React.useMemo(() => cart.length, [cart]);

  return (
    <Container>
      <div className="linksHeader">
        <Link to="/home">
          <span className="logo">Yolliver</span>
        </Link>

        <Link to="/newproduct">
          <span className="newProduct">Cadastrar Produto</span>
        </Link>
      </div>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
};

export default Header;
