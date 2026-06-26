import "./Hero.css";
import useCounter from "../../hooks/useCounter";

function Hero() {
  const users = useCounter(24);
  const accuracy = useCounter(98);
  const integrations = useCounter(320);

  return (
    <section
      id="home"
      className="hero"
      data-aos="fade-up"
    >
      <div className="container hero-content">

        <div className="left">

          <p className="badge">
            AI Powered Automation
          </p>

          <h1>
            Automate Your
            <br />
            Business With
            <br />
            Next-Gen AI
          </h1>

          <p className="subtitle">
            Build workflows, analyze millions of records,
            automate business operations and deploy
            intelligent AI agents without writing code.
          </p>

          <div className="hero-buttons">

            <button
              className="start"
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              Start Free →
            </button>

            <button
              className="learn"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              Watch Demo
            </button>

          </div>

        </div>

        <div className="right">

          <div className="dashboard">

            <div className="top-row">
              <div className="circle green"></div>
              <div className="circle yellow"></div>
              <div className="circle red"></div>
            </div>

            <div className="graph">
              <div className="bar h1"></div>
              <div className="bar h2"></div>
              <div className="bar h3"></div>
              <div className="bar h4"></div>
              <div className="bar h5"></div>
            </div>

            <div className="stats">

              <div>
                <h4>{users}K</h4>
                <p>Users</p>
              </div>

              <div>
                <h4>{accuracy}%</h4>
                <p>Accuracy</p>
              </div>

              <div>
                <h4>{integrations}+</h4>
                <p>Integrations</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;