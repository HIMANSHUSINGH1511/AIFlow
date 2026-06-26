import "./Pricing.css";
import pricingMatrix from "../../data/pricingMatrix";
import { getPrice } from "../../utils/pricingEngine";
import { memo, useState } from "react";

const plans = ["starter", "pro", "enterprise"];

const Card = memo(({ plan, currency, yearly, featured }) => {
  const price = getPrice(
    pricingMatrix,
    currency,
    plan,
    yearly
  );

  return (
    <div className={`price-card ${featured ? "featured" : ""}`}>

      {featured && (
        <span className="badge">
          POPULAR
        </span>
      )}

      <h3>{plan.toUpperCase()}</h3>

      <h1>
        {price.symbol}
        {price.value}
      </h1>

      <p>{yearly ? "per year" : "per month"}</p>

      <button>Choose Plan</button>

    </div>
  );
});

function Pricing() {
  const [currency, setCurrency] = useState("INR");
  const [yearly, setYearly] = useState(false);

  return (
  <section
  id="pricing"
  data-aos="fade-up"
>
      <div className="container">

        <h2>Pricing</h2>

        <div className="controls">

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>

          <button
            onClick={() => setYearly(!yearly)}
          >
            {yearly ? "Annual" : "Monthly"}
          </button>

        </div>

        <div className="pricing-grid">

          {plans.map((plan, index) => (
            <Card
              key={plan}
              plan={plan}
              currency={currency}
              yearly={yearly}
              featured={index === 1}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Pricing;