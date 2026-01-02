import Logo from "../assets/react.svg";
import "./mainLayout.style.css";
import { Outlet } from "react-router";

function MainLayout() {
  const year = new Date().getUTCFullYear();

  return (
    <>
      <section className="w-full">
        <nav className="nav">
          <p>
            <img className="logo" src={Logo} alt="website logo" />
          </p>
          <section>
            <a href="/components">Components</a>
            <a href="/about">About</a>
            <a href="/github">Github</a>
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
