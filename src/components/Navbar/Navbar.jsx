import "./Navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import DemoModal from "../DemoModal/DemoModal";

import { useEffect, useState } from "react";

function Navbar() {

  const [active, setActive] = useState("home");
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScroll(window.scrollY > 50);

      const sections = [
        "home",
        "features",
        "pricing",
        "reviews",
      ];

      sections.forEach((id) => {

        const section = document.getElementById(id);

        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < bottom
        ) {
          setActive(id);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <>

      <header
        className={`navbar ${
          scroll ? "scrolled" : ""
        }`}
      >

        <div className="container nav-wrapper">

          <h2 className="logo">
            AI<span>Flow</span>
          </h2>

          <nav>

            <a
              href="#home"
              className={
                active === "home"
                  ? "active-link"
                  : ""
              }
            >
              Home
            </a>

            <a
              href="#features"
              className={
                active === "features"
                  ? "active-link"
                  : ""
              }
            >
              Features
            </a>

            <a
              href="#pricing"
              className={
                active === "pricing"
                  ? "active-link"
                  : ""
              }
            >
              Pricing
            </a>

            <a
              href="#reviews"
              className={
                active === "reviews"
                  ? "active-link"
                  : ""
              }
            >
              Reviews
            </a>

          </nav>

          <div
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >

            <ThemeToggle />

            <button
              className="demo-btn"
              onClick={() => setOpen(true)}
            >
              Book Demo
            </button>

          </div>

        </div>

      </header>

      <DemoModal
        open={open}
        onClose={() => setOpen(false)}
      />

    </>
  );
}

export default Navbar;