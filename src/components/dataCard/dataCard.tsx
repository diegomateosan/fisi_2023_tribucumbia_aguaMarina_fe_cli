import React, { useEffect, useState } from "react";
import categoryService from "../../services/category";
import { CategoryData } from "../../entities/category";
import { useNavigate } from "react-router-dom";

import "./dataCard.css";

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
    <div>
      {categoryList?.map((data, idx) => (
        <div className="wrapper-card" key={idx}>
          <div className="category-card">
            <img src={data.image_url} alt="category-data-card" />
            <h3 className="category-tittle">{data.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};
