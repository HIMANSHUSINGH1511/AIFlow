import "./Footer.css";

function Footer() {
  return (
   <footer
  className="footer"
  data-aos="fade-up"
>
      <div className="container footer-wrapper">

        <div>
          <h2>AI<span style={{ color: "#FFC801" }}>Flow</span></h2>

          <p>
            Next Generation AI Automation Platform powered by Artificial
            Intelligence. Build faster, automate smarter, and grow your business.
          </p>
        </div>

        <div>
          <h4>Product</h4>

          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#reviews">Reviews</a>
        </div>

        <div>
          <h4>Company</h4>

          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Support</a>
        </div>

      </div>

      <p className="copyright">
        © 2026 AIFlow. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;