import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiFillDelete,
} from "react-icons/ai";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { books } from "../listCards/cards";
import "./cartItem.css";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } =
    useShoppingCart();
  const item = books.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="app-container-cart-item">
      <div className="wrapper-grid">
        <div className="cart-item-img">
          <img src={item.image} alt="imagen del producto"></img>
        </div>
        <div className="cart-item-info">
          <h1>{item.title}</h1>
          <span>S/ {item.price}</span>
          <div className="cart-item-info-quantity">
            {quantity > 0 && (
              <>
                <AiFillMinusCircle
                  className="cart-item-icon-deacrease"
                  title="Disminuir 1 libro"
                  onClick={() => decreaseCartQuantity(item.id)}
                ></AiFillMinusCircle>
                <span className="cart-item-quantity">x {quantity}</span>
              </>
            )}
            <AiFillPlusCircle
              className="cart-item-icon-increase"
              title="Aumentar 1 libro más"
              onClick={() => increaseCartQuantity(item.id)}
            ></AiFillPlusCircle>
          </div>
        </div>
        <div className="cart-item-btn-delete">
          <AiFillDelete
            className="icon-delete-item"
            title="Eliminar libro del carrito de compras"
            onClick={() => removeFromCart(item.id)}
          ></AiFillDelete>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
