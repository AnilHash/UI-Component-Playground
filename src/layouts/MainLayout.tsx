import Logo from "../assets/react.svg";
import { pathTo } from "../utils/constants";
import "./mainLayout.style.css";
import { Link, NavLink, Outlet } from "react-router";

function MainLayout() {
  const year = new Date().getUTCFullYear();

  return (
    <>
      <section className="w-full">
        <nav className="w-screen top-0 nav fixed">
          <p>
            <img className="logo" src={Logo} alt="website logo" />
          </p>
          <section>
            <NavLink
              to={pathTo.ABOUT}
              className={({ isActive }) => (isActive ? "text-blue-400" : "")}
            >
              About
            </NavLink>
            <Link to={pathTo.GITHUB} target="_blank">
              Github
            </Link>
          </section>
        </nav>
        <main className="main">
          <Outlet />
        </main>
        <footer className="footer">
          <section>
            <p> &copy; rights reserved - {year}</p>
          </section>
        </footer>
      </section>
    </>
  );
}

export default MainLayout;
