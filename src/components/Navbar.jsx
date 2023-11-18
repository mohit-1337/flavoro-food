const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10">
      <div className="">
        <h3 className="font-bold text-xl text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavoro Food</h1>
      </div>
      <div>
        <input
          placeholder="Search here"
          id=""
          autoComplete="off"
          type="search"
          name="search"
          className="border border-gray-400 outline-none rounded-lg text-sm p-3 w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
