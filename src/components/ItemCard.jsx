import FoodData from "../data/FoodData";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCard = () => {
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete className="absolute right-7 text-gray-600 cursor-pointer"/>
      <img
        src={FoodData[0].img}
        alt={FoodData[0].name}
        className="w-[50px] h-[50px]"
      />
      <div className="leading-5">
        <h2 className="font-bold text-gray-800">{FoodData[0].name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{FoodData[0].price}</span>
          <div className="flex justify-center items-center absolute right-7 gap-2">
            <AiOutlinePlus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
            <span>1</span>
            <AiOutlineMinus className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
