import React from "react";
import { Card, Footer } from "./styles";
import { MdAddShoppingCart } from "react-icons/md";
import { formatPrice } from "../../util/formatPrice";
import ModalConfirm from "../ModalConfirm";
import { useCart } from "../../hooks/useCart";

function CardProduct({ data, edit, del }) {
  const [modalConfirmIsOpen, setModalConfirmIsOpen] = React.useState(false);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = React.useMemo(
    () =>
      cart.reduce((sumAmount, product) => {
        const newSumAmount = { ...sumAmount };
        newSumAmount[product.id] = product.amount;
        return newSumAmount;
      }, {}),
    [cart]
  );

  function handleAddProduct(id) {
    addProduct(id);
  }

  console.log(data);

  return (
    <>
      <ModalConfirm
        isOpen={modalConfirmIsOpen}
        setIsOpen={setModalConfirmIsOpen}
        item={data}
        del={del}
      />
      <Card>
        <div>
          <button onClick={() => edit(data)}>Editar</button>
          <button onClick={() => setModalConfirmIsOpen(true)}>Remover</button>
        </div>
        <p>Nome: {data.name}</p>
        <p>Preço: {formatPrice(data.price)}</p>
        <p>Estoque: {data.amount}</p>
        <p>Categoria: {data.category}</p>
        <Footer>
          <button
            type="button"
            onClick={() => handleAddProduct(data.id)}
          >
            <div>
              <MdAddShoppingCart size={16} color="#FFF" />
              {cartItemsAmount[data.id] || 0}
            </div>

            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </Footer>
      </Card>
    </>
  );
}

export default CardProduct;
