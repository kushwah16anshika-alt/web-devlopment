import react from "react";
import { FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-blue-500 text-white p-3 flex justify-between items-center">
        <div className=" flex text-2xl">
          <FaStore />
        </div>
        <div className="flex gap-2 p-3.5 ">
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Products"}>Products</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
      </div>
    </>
  );
};
export default Header;
