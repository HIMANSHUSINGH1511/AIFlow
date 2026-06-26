import "./FAQ.css";
import { useState } from "react";

const data = [
  {
    question: "Is AIFlow secure?",
    answer:
      "Yes. We use enterprise-grade encryption, role-based access control and secure cloud infrastructure.",
  },
  {
    question: "Can I integrate with Slack and Gmail?",
    answer:
      "Yes. AIFlow integrates with Slack, Gmail, Microsoft Teams, CRM, ERP and over 100 services.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Absolutely. Every new user gets a free trial to explore all premium features.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. There are no long-term contracts. Cancel whenever you want.",
  },
  {
    question: "Do you provide enterprise support?",
    answer:
      "Yes. Enterprise customers receive dedicated onboarding and priority support.",
  },
];

function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section id="faq">

      <div className="container">

        <h2 className="faq-title">
          Frequently Asked Questions
        </h2>

        <div className="faq-list">

          {data.map((item, index) => (

            <div
              key={index}
              className="faq-item"
            >

              <button
                className="faq-question"
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                {item.question}

                <span>
                  {active === index ? "−" : "+"}
                </span>

              </button>

              <div
                className={`faq-answer ${
                  active === index ? "open" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;