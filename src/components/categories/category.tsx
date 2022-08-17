import React from "react";
import "./category.css";
import "./category";
import { CategoryCard } from "../dataCard/dataCard";
export const Categories: React.FC<{}> = ({}) => {
  return (
    <div className="app-container-categories">
      <h2>Explora nuestras categorías especiales</h2>
      <CategoryCard />
    </div>
  );
};
