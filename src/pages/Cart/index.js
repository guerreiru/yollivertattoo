import React, { useMemo } from "react";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";
import Header from "../../components/Header";
import { useCart } from "../../hooks/useCart";

import { formatPrice } from "../../util/formatPrice";
import { Container, ProductTable, Total, Content } from "./styles";

const Cart = () => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = useMemo(
    () =>
      cart.map((product) => ({
        ...product,
        priceFormatted: formatPrice(product.price),
        subTotal: formatPrice(product.price * product.amount),
      })),
    [cart]
  );
  const total = useMemo(
    () =>
      formatPrice(
        cart.reduce((sumTotal, product) => {
          return sumTotal + product.price * product.amount;
        }, 0)
      ),
    [cart]
  );

  function handleProductIncrement(product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId) {
    removeProduct(productId);
  }

  return (
    <Container>
      <Header />
      <Content>
        <ProductTable>
          <thead>
            <tr>
              <th>PRODUTO</th>
              <th>QTD</th>
              <th>SUBTOTAL</th>
              <th aria-label="delete icon" />
            </tr>
          </thead>
          <tbody>
            {cartFormatted.map((product) => (
              <tr key={product.id} data-testid="product">
                <td>
                  <strong>{product.name}</strong>
                  <span>{product.priceFormatted}</span>
                </td>
                <td>
                  <div>
                    <button
                      type="button"
                      data-testid="decrement-product"
                      disabled={product.amount === 1}
                      onClick={() => handleProductDecrement(product)}
                    >
                      <MdRemoveCircleOutline size={20} />
                    </button>
                    <input
                      type="text"
                      data-testid="product-amount"
                      readOnly
                      value={product.amount}
                    />
                    <button
                      type="button"
                      data-testid="increment-product"
                      onClick={() => handleProductIncrement(product)}
                    >
                      <MdAddCircleOutline size={20} />
                    </button>
                  </div>
                </td>
                <td>
                  <strong>{product.subTotal}</strong>
                </td>
                <td>
                  <button
                    type="button"
                    data-testid="remove-product"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </ProductTable>

        <footer>
          <button type="button">Finalizar pedido</button>
          <Total>
            <span>TOTAL</span>
            <strong>{total}</strong>
          </Total>
        </footer>
      </Content>
    </Container>
  );
};

export default Cart;
