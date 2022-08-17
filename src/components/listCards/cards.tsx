import React, { Fragment, useEffect, useState } from "react";

import "./cards.css";
import Card from "../card/card";
import books from "../../models/books.json";
import { DishesCard } from "../dataCard/dataCard";

export interface Book {
  id: number;
  title: string;
  gender?: string;
  description: string;
  author: string;
  price: number;
  image: string;
  percentDiscount?: number;
  sku: string;
  isbn: string;
  editorial: string;
  anyo: number;
  pages?: number;
  language: string;
  weight?: number;
  width?: number;
  height?: number;
  age: string;
}

const Cards = () => {
  return (
    <Fragment>
      <main>
        <div className="secc">
          <div className="container">
            <h1>Los más destacados</h1>
            <DishesCard />
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Cards;
