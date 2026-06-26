import { useEffect, useState } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle("light-mode", !dark);
  }, [dark]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setDark(!dark)}
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;