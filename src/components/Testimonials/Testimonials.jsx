import "./Testimonials.css";
import testimonials from "../../data/testimonials";

function Testimonials() {
  return (
   <section
  id="reviews"
  data-aos="fade-up"
>
      <div className="container">

        <h2 className="section-title">
          Trusted by Teams Worldwide
        </h2>

        <p className="section-subtitle">
          Thousands of companies automate their workflows using our AI platform.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.id}>
              <p className="review">
                "{item.review}"
              </p>

              <div className="user">
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;