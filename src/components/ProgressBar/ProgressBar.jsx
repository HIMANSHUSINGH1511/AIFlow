import { useEffect, useState } from "react";
import "./ProgressBar.css";

function ProgressBar() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const current = window.scrollY;

      setScroll((current / total) * 100);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <div
      className="progress-scroll"
      style={{
        width: `${scroll}%`,
      }}
    ></div>

  );

}

export default ProgressBar;