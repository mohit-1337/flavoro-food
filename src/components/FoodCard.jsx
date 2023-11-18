import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const FoodCard = ({ id, img, name, price, desc, rating }) => {
  const dispatch = useDispatch();

  return (
    <div className="font-bold bg-white rounded-lg w-[250px] p-5 flex flex-col gap-2">
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />

      <div className="flex text-sm justify-between">
        <h1>{name}</h1>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="font-normal text-sm">{desc.slice(0, 50)}...</p>
      <div className="text-sm flex justify-between">
        <span className="flex justify-center items-center">
          <FaStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, qty: 1 }));
          }}
          className="bg-green-500 hover:bg-green-600 text-sm text-white p-1 rounded-lg "
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
