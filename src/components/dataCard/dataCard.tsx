import React, { useEffect, useState } from "react";
import categoryService from "../../services/category";
import { CategoryData } from "../../entities/category";
import { useNavigate } from "react-router-dom";

import "./dataCard.css";
import { DishesDefault } from "../../entities/dishes";
import dishesService from "../../services/dishes";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { BsCart } from "react-icons/bs";

export const CategoryCard: React.FC<{}> = () => {
    const [categoryList, setCategoryList] = useState<CategoryData[] | null>([]);
    const navigate = useNavigate();

    useEffect(() => {
        serviceCategory();
    }, []);

    const serviceCategory = async () => {
        const result = await categoryService.QuantList(6);
        setCategoryList(result);
        console.log(categoryList);
    };
    return (
        <div className="app-container-map-category-cards">
            {categoryList?.map((data, idx) => (
                <div className="wrapper-card" key={idx}>
                    <div
                        className="category-card"
                        onClick={() => console.log(data.id)}
                    >
                        <img src={data.image_url} alt="category-data-card" />
                        <h3 className="category-tittle">{data.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const DishesCard: React.FC<{}> = () => {
    const [dishesList, setDisheslist] = useState<DishesDefault[] | null>([]);

    const { openCart, increaseCartQuantity } = useShoppingCart();

    function openCartAndIncreaseQ(id: number) {
        increaseCartQuantity(id);
        openCart();
    }

    useEffect(() => {
        serviceDishes();
    }, []);

    const serviceDishes = async () => {
        const result = await dishesService.listQuant(11);
        setDisheslist(result);
        console.log(result);
    };

    return (
        <div className="container-cards">
            {dishesList?.map((data, idx) => (
                <div key={idx} className="card">
                    <div className="title-prevent">
                        <a href={"'#'"}>Destacados</a>
                    </div>
                    <img
                        src={data.imagen}
                        alt="card"
                        //   onClick={() => goToDetailsComp(book.id)}
                    ></img>

                    <div
                        className="description"
                        //   onClick={() => goToDetailsComp(book.id)}
                    >
                        {/* <p>{data.}</p> */}
                        <h3>{data.nombre}</h3>
                    </div>

                    <div className="card-bot">
                        <div className="precio">
                            <p className="price">S/ {data.precio}</p>
                        </div>
                    </div>

                    <div className="container-button-order">
                        <div className="wrapper-button-order">
                            <button className="button-order">
                                <span>Agregar al carrito</span>
                            </button>
                            <button
                                className="button-order button-order-hover"
                                onClick={() => openCartAndIncreaseQ(data.id)}
                            >
                                <BsCart className="icon-cart-button"></BsCart>
                                <span>Enviar al carrito</span>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
