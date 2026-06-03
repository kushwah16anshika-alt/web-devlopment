// import { Link } from "react-router-dom";
// function Header() {
//   return (
//     <>
//      <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
//      <div className="text-primary fs-4 fw-bold">my company</div>

//      <div className="d-flex text-light gap-4">
//      <link to={"/"}>Home</link>
//       <link to={"/about"}>Aboutus</link>
//        <link to={"/products"}>Products</link>
//         <link to={"/contact-us"}>Contactus</link>

//      </div>
//      <div className="d-flex gap-3">
//       <Link to={"/login"}>
//       <button className="btn btn-outline-primary">Login</button>
//       </Link>
//        <Link to={"/register"}>
//       <button className="btn btn-primary">Register</button>
//       </Link>
//      </div>
//      </div>
//     </>
//   );
// }
// export default Header;
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
      <div className="text-primary fs-4 fw-bold">
        my company
      </div>

      <div className="d-flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>

      <div className="d-flex gap-3">
        <Link to="/login">
          <button className="btn btn-outline-primary">Login</button>
        </Link>

        <Link to="/register">
          <button className="btn btn-primary">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;