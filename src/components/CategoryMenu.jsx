import { useState, useEffect } from "react";
import FoodData from "../data/FoodData";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/categorySlice";
import { useSelector } from "react-redux";

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

  const dispatch = useDispatch();

  const selectedcategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best Food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => {
            dispatch(setCategory("All"));
          }}
          className={`font-bold  bg-gray-200 rounded-lg px-3 py-2 hover:bg-green-500 hover:text-white ${
            selectedcategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => {
                dispatch(setCategory(category));
              }}
              key={index}
              className={`font-bold  bg-gray-200 rounded-lg px-3 py-2 hover:bg-green-500 hover:text-white ${
                selectedcategory === category && "bg-green-500 text-white"
              }`}
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
