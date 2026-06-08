import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar py-3 px-3 d-flex align-items-center fixed-top shadow bg-white">
      <Link to="/">
        <img src="/images/craving.png" width="70" alt="logo" />
      </Link>

      <div className="ms-auto">
        <Link to="/login">
          <button className="text-dark bg-transparent border-0 fs-6">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="btn btn-primary ms-2">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;