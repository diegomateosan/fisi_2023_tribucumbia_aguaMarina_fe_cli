import CartItem from "../cartItem/cartItem";
import { FcUndo } from "react-icons/fc";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "./shoppingCart.css";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems, getItemQuantity } = useShoppingCart();

  return (
    <>
      {isOpen && (
        <div className="app-container-shopping-cart">
          <div className="wrapper-shopping-cart">
            <div className="shopping-cart-head">
              <FcUndo
                className="shopping-card-head-return"
                title="Cerrar carrito"
                onClick={closeCart}
              />
              <h1>CARRITO DE COMPRAS</h1>
            </div>

            <div className="shopping-cart-body">
              {cartItems.map((item) => {
                return (
                  <>
                    <CartItem key={item.id} {...item}></CartItem>
                  </>
                );
              })}
            </div>
            <div className="shopping-cart-footer">
              <div className="shopping-cart-footer subtotal">
                <p>Subtotal</p>
                <span>{}</span>
              </div>

              <div className="shopping-cart-footer-discounts">
                <p>Descuentos</p>
                <span> - {}</span>
              </div>
              <button className="shopping-cart-footer-btn">
                Finalizar compra
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
