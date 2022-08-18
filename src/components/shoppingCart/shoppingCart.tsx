import CartItem from "../cartItem/cartItem";
import { FcUndo } from "react-icons/fc";
import { useShoppingCart } from "../context/ShoppingCartContext";
import "./shoppingCart.css";
import books from "../../models/books.json";
import { calculatePriceWithDiscount } from "../card/card";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { DishesDefault } from "../../entities/dishes";
import dishesService from "../../services/dishes";
import userService from "../../services/user";
import { AiOutlineShoppingCart } from "react-icons/ai";

type ShoppingCartProps = {
    isOpen: boolean;
};

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
    const navigate = useNavigate();
    const { closeCart, cartItems, cartQuantity } = useShoppingCart();
    const [dishesList, setDisheslist] = useState<DishesDefault[] | null>([]);

    useEffect(() => {
        serviceDishes();
    }, []);

    const serviceDishes = async () => {
        const result = await dishesService.listQuant(11);
        setDisheslist(result);
        console.log(result);
    };

    const Comprar = async () => {
        const resultVerify = await userService.verify();
        console.log("LOGEADO?" + resultVerify);
        if (resultVerify === true) {
            navigate("/finalizarCompra");
        } else {
            alert("Primero debe Iniciar Sesión para continuat");
        }
    };

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

                        {cartQuantity === 0 ? (
                            <div className="shopping-cart-body shopping-empty-cart">
                                <AiOutlineShoppingCart className="icon-empty-cart"></AiOutlineShoppingCart>
                                <span className="ad-empty-cart">
                                    Tu carrito está vacío
                                </span>
                            </div>
                        ) : (
                            <>
                                <div className="shopping-cart-body">
                                    {cartItems.map((item) => {
                                        return (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            ></CartItem>
                                        );
                                    })}
                                </div>
                                <div className="shopping-cart-footer">
                                    <div className="shopping-cart-footer-subtotal">
                                        <span>Total</span>
                                        <span className="total-price">
                                            S/{" "}
                                            {cartItems
                                                .reduce(
                                                    (subTotal, cartItem) => {
                                                        const item =
                                                            dishesList!.find(
                                                                (i) =>
                                                                    i.id ===
                                                                    cartItem.id
                                                            );
                                                        let realPrice;

                                                        realPrice =
                                                            item?.precio;

                                                        return (
                                                            subTotal +
                                                            (realPrice || 0) *
                                                                cartItem.quantity
                                                        );
                                                    },
                                                    0
                                                )
                                                .toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="shopping-cart-footer-discounts">
                                        <span>
                                            Gracias a los descuentos usted ha
                                            ahorrado un total de S/{" "}
                                            {cartItems
                                                .reduce(
                                                    (
                                                        descuentoTotal,
                                                        cartItem
                                                    ) => {
                                                        const item = books.find(
                                                            (i) =>
                                                                i.id ===
                                                                cartItem.id
                                                        );
                                                        let realPrice,
                                                            descuento;
                                                        if (
                                                            item?.percentDiscount
                                                        ) {
                                                            realPrice =
                                                                calculatePriceWithDiscount(
                                                                    item.price,
                                                                    item.percentDiscount
                                                                );
                                                            descuento =
                                                                item.price -
                                                                realPrice;
                                                        }
                                                        return (
                                                            descuentoTotal +
                                                            (descuento || 0) *
                                                                cartItem.quantity
                                                        );
                                                    },
                                                    0
                                                )
                                                .toFixed(2)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => Comprar()}
                                        className="shopping-cart-footer-btn"
                                    >
                                        Finalizar compra
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ShoppingCart;
