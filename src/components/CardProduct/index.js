import React from "react";
import { MdAddShoppingCart, MdDelete } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { Card, Footer } from "./styles";
import { formatPrice } from "../../util/formatPrice";
import ModalConfirm from "../ModalConfirm";
import { useCart } from "../../hooks/useCart";
import logo from "../../assets/placeholder.png";

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
        <img src={logo} alt={data.name} />
        <p>{data.name}</p>
        <p>{formatPrice(data.price)}</p>
        <p>Estoque: {data.amount}</p>
        <p>Categoria: {data.category}</p>
        <Footer>
          <button type="button" onClick={() => handleAddProduct(data.id)}>
            <MdAddShoppingCart size={16} color="#FFF" />
            <span>{cartItemsAmount[data.id] || 0}</span>
          </button>

          <button type="button" onClick={() => edit(data)}>
            <GoPencil size={16} color="#fff" />
          </button>

          <button type="button" onClick={() => setModalConfirmIsOpen(true)}>
            <MdDelete size={16} color="#fff" />
          </button>
        </Footer>
      </Card>
    </>
  );
}

export default CardProduct;
