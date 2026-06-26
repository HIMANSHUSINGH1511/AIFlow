import "./DemoModal.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function DemoModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        "service_vqltx4q",
        "template_ceppxzp",
        {
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        "dSZpABdg0XjR-ch1m"
      )
      .then(() => {
        alert("Demo Request Sent Successfully!");

        setForm({
          name: "",
          email: "",
          company: "",
          message: "",
        });

        onClose();
      })
      .catch(() => {
        alert("Something went wrong.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <h2>Book a Demo</h2>

        <p>
          Leave your details and our AI experts will contact you.
        </p>

        <form onSubmit={sendEmail}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            className="submit-btn"
            type="submit"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

        </form>

      </div>
    </div>
  );
}

export default DemoModal;