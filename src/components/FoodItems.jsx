import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData";

const FoodItems = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {FoodData.map((food) => {
        return <FoodCard {...food} key={food.id} />;
      })}
    </div>
  );
};

export default FoodItems;
