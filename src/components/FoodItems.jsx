import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";
import toast, { Toaster } from "react-hot-toast";

const FoodItems = () => {
  const handdleToast = (name) => {
    toast.success(`Added ${name}`);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.map((food) => {
          return (
            <FoodCard {...food} key={food.id} handdleToast={handdleToast} />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
