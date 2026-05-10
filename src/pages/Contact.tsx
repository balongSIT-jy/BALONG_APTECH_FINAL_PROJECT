import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) {
      return "Please fill in all fields.";
    }

    const emailPattern = /\S+@\S+\.\S+/;

    if (!emailPattern.test(form.email)) {
      return "Invalid email format.";
    }

    return "";
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const error = validate();

  if (error) {
    setStatus(error);
    return;
  }

  setLoading(true);
  setStatus("");

  try {
    // SEND EMAIL
    const response = await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    );

    console.log("SUCCESS:", response);

    // SAVE TO LOCAL STORAGE
    const existingMessages = JSON.parse(
      localStorage.getItem("messages") || "[]"
    );

    const newMessage = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    existingMessages.push(newMessage);

    localStorage.setItem(
      "messages",
      JSON.stringify(existingMessages)
    );

    setStatus("Message sent successfully!");

    // CLEAR FORM
    setForm({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.error("ERROR:", error);
    setStatus("Failed to send message.");
  }

  setLoading(false);
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

        <button className="btn btn-dark" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="mt-3">{status}</p>}
      </form>
    </section>
  );
}

export default Contact;