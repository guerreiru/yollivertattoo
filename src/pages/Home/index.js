import React, { useState, useEffect, useMemo } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { api } from "../../services/api";
import { ProductList } from "./styles";
import { formatPrice } from "../../util/format";
import { useCart } from "../../hooks/useCart";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { addProduct, cart } = useCart();
  const history = useHistory();
  const { logado, setLogado } = React.useContext(UserContext);

  const cartItemsAmount = useMemo(
    () =>
      cart.reduce((sumAmount, product) => {
        const newSumAmount = { ...sumAmount };
        newSumAmount[product.id] = product.amount;
        return newSumAmount;
      }, {}),
    [cart]
  );

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get("products");
      const data = response.data.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));
      setProducts(data);
    }

    loadProducts();
  }, []);

  React.useEffect(() => {
    if (logado) {
      history.push("/home");
    }
  }, [logado, history]);

  function handleAddProduct(id) {
    addProduct(id);
  }

  return (
    <ProductList>
      {products.map((product) => (
        <li key={product.id}>
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>
          <button
            type="button"
            data-testid="add-product-button"
            onClick={() => handleAddProduct(product.id)}
          >
            <div data-testid="cart-product-quantity">
              <MdAddShoppingCart size={16} color="#FFF" />
              {cartItemsAmount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
};

export default Home;
