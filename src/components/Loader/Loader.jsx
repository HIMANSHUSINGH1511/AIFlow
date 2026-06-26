import "./Loader.css";

function Loader() {
  return (
    <div className="loader">

      <h1>
        AI<span>Flow</span>
      </h1>

      <div className="loading-bar">

        <div className="progress"></div>

      </div>

      <p>Loading AI Platform...</p>

    </div>
  );
}

export default Loader;