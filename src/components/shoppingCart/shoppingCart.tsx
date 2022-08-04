import CartItem from "../cartItem/cartItem";
import { FcUndo } from "react-icons/fc";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "./shoppingCart.css";
import { books } from "../listCards/cards";
import { calculatePriceWithDiscount } from "../card/card";

type ShoppingCartProps = {
  isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <>
      {isOpen && (
        <div className="app-container-shopping-cart">
          <div
            className="wrapper-close-shopping-cart"
            onClick={closeCart}
          ></div>
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
                return <CartItem key={item.id} {...item}></CartItem>;
              })}
            </div>
            <div className="shopping-cart-footer">
              <div className="shopping-cart-footer-subtotal">
                <span>Total</span>
                <span>
                  S/{" "}
                  {cartItems
                    .reduce((subTotal, cartItem) => {
                      const item = books.find((i) => i.id === cartItem.id);
                      let realPrice;
                      if (item?.percentDiscount) {
                        realPrice = calculatePriceWithDiscount(
                          item.price,
                          item.percentDiscount
                        );
                      } else {
                        realPrice = item?.price;
                      }
                      return subTotal + (realPrice || 0) * cartItem.quantity;
                    }, 0)
                    .toFixed(2)}
                </span>
              </div>

              <div className="shopping-cart-footer-discounts">
                <span>
                  Gracias a los descuentos usted ha ahorrado un total de S/{" "}
                  {cartItems
                    .reduce((descuentoTotal, cartItem) => {
                      const item = books.find((i) => i.id === cartItem.id);
                      let realPrice, descuento;
                      if (item?.percentDiscount) {
                        realPrice = calculatePriceWithDiscount(
                          item.price,
                          item.percentDiscount
                        );
                        descuento = item.price - realPrice;
                      }
                      return (
                        descuentoTotal + (descuento || 0) * cartItem.quantity
                      );
                    }, 0)
                    .toFixed(2)}
                </span>
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
