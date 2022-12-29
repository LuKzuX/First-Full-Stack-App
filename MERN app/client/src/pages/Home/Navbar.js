import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-header">
        <div className="navbar-logo">
          <Link to={"/"}>Store name</Link>
        </div>
        <div className="navbar-items">
          <Link to={"/account"}>Account</Link>
          <Link to={"/cart"}>Cart</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
