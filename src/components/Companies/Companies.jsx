import "./Companies.css";

const companies = [
  "OpenAI",
  "Microsoft",
  "Google",
  "Amazon",
  "Meta",
  "NVIDIA",
  "Oracle",
  "IBM",
];

function Companies() {
  return (
    <section className="companies">

      <div className="container">

        <p className="company-title">
          TRUSTED BY INDUSTRY LEADERS
        </p>

        <div className="marquee">

          <div className="marquee-track">

            {companies.map((company, index) => (
              <div
                className="company"
                key={index}
              >
                {company}
              </div>
            ))}

            {companies.map((company, index) => (
              <div
                className="company"
                key={`copy-${index}`}
              >
                {company}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Companies;