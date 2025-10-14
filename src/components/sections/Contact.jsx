import { useState, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [fromData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  console.log(import.meta.env.VITE_PUBLIC_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oooops! Failed to send the message, please try again.")
      );
  };



  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-90 md:w-150">
          <h2 className="text-4xl font-bold mb-8 text-header">Get In Touch</h2>
          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={fromData.name}
                className="w-full bg-normal/10 border-normal/20 rounded px-4 py-3 text-header transition focus:outline-none focus:bg-primary/20"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...fromData, name: e.target.value })
                }
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={fromData.email}
                className="w-full bg-normal/10 border-normal/20 rounded px-4 py-3 text-header transition focus:outline-none focus:bg-primary/20"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...fromData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={fromData.message}
                rows={5}
                className="w-full bg-normal/10 border-normal/20 rounded px-4 py-3 text-header transition focus:outline-none focus:bg-primary/20"
                placeholder="Your message..."
                onChange={(e) =>
                  setFormData({ ...fromData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary/40 text-normal py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-secondary"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
