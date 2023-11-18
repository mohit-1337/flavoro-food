const CategoryMenu = () => {
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best Food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button className="font-bold  bg-gray-200 rounded-lg px-3 py-2 hover:bg-green-500 hover:text-white">
          All
        </button>
        <button className="font-bold  bg-gray-200 rounded-lg px-3 py-2 hover:bg-green-500 hover:text-white">
          Breakfast
        </button>
        <button className="font-bold  bg-gray-200 rounded-lg px-3 py-2 hover:bg-green-500 hover:text-white">
          Lunch
        </button>
        <button className="font-bold  bg-gray-200 rounded-lg px-3 py-2 hover:bg-green-500 hover:text-white">
          Dinner
        </button>
        <button className="font-bold  bg-gray-200 rounded-lg px-3 py-2 hover:bg-green-500 hover:text-white">
          Snakes
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
