import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 id="navbar-title">Buildy</h1>
      <div className="links">
        <Link className={"link-style"} to="/">
          Home
        </Link>
        {/* <a href="/">Home</a> */}
        <Link className={"link-style"} to="/about">
          About
        </Link>
        {/* <a href="/create"> About</a> */}
        <Link className={"link-style"} id={"login-circle"} to="/calendar">
          Start
        </Link>
        {/* <a id="login-circle" href="/Login">Login</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
