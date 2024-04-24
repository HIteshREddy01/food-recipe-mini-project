import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam , handleSubmit } = useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 px-10 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 "style={{ backgroundColor: "black" }}>
      <h1 className="text-3xl font-semibold text-white">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter Items..."
          className=" p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 shadow-red-600"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-white hover:text-orange-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-white hover:text-orange-700 duration-300"
          >
            favorites
          </NavLink>
        </li>
        
      </ul>
    </nav>
  );
}
