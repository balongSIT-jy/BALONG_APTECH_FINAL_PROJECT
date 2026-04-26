import { useState } from "react";
import './Contact.css'
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existing = JSON.parse(localStorage.getItem("messages")) || [];
    const updated = [...existing, form];

    localStorage.setItem("messages", JSON.stringify(updated));

    alert("Message sent!");

    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="container-fluid mt-5 mb-5 px-5">
      <h3>Contact Me</h3>

      <form className="w-50" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Your Name"
        />

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Your Email"
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Your Message"
        ></textarea>

        <button className="btn btn-dark">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;