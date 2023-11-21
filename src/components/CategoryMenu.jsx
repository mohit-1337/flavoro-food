import { useState, useEffect } from "react";
import FoodData from "../data/FoodData";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best Food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className="font-bold  bg-gray-200 rounded-lg px-3 py-2 hover:bg-green-500 hover:text-white"
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
