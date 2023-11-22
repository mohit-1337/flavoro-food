import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );

  const navigate = useNavigate();

  const [activeCart, setActiveCart] = useState(false);

  return (
    <>
      <div
        className={` fixed top-0 right-0 w-full lg:w-[20vw] h-full p-5 bg-white ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl text-gray-800 font-bold">My Order</span>
          <IoMdClose
            onClick={() => {
              setActiveCart(!activeCart);
            }}
            className="border-2 border-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-300 cursor-pointer"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return <ItemCard key={food.id} {...food} img={food.img} />;
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800 mt-10 opacity-50">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items: {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount: ₹{totalPrice}
          </h3>
          <hr className="lg:w-[18vw] w-[90vw] my-2" />
          <button
            onClick={() => {
              navigate("/success");
            }}
            className="bg-green-500 rounded-lg text-white font-bold px-3 py-2 w-[90vw] lg:w-[18vw] mb-5"
          >
            CheackOut
          </button>
        </div>
      </div>
      <FaCartShopping
        onClick={() => {
          setActiveCart(!activeCart);
        }}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-10 lg:right-20 right-1 ${
          totalQty > 0 && "animate-bounce delay-500 transition-all"
        } `}
      />
    </>
  );
};

export default Cart;
