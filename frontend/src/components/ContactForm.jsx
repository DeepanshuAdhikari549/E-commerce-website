import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  gmail: "",
  phone: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef();

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.gmail.trim()) {
      newErrors.gmail = "Gmail is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(form.gmail)) {
      newErrors.gmail = "Enter a valid Gmail address";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      // Replace these with your EmailJS info:
      const SERVICE_ID = "service_hn31vmm";
      const TEMPLATE_ID = "template_u8qdm7f";
      const PUBLIC_KEY = "IWO9-05_0sQRrpqhl";

      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            setForm(initialState);
            setSubmitted(false);
            toast.success("Your message has been sent!");
          },
          (error) => {
            setSubmitted(false);
            toast.error("Failed to send message. Please try again.");
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="max-w-xl mx-auto mb-16 p-8 bg-white  rounded-lg shadow-lg border border-gray-100">
  <h3 className="text-2xl font-semibold mb-6 text-gray-600 text-center">Send us a Message</h3>
  <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
    {/* Name */}
    <div>
      <input
        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800 transition ${errors.name ? "border-red-500" : "border-gray-300"}`}
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
      />
      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
    </div>
    {/* Email */}
    <div>
      <input
        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800 transition ${errors.gmail ? "border-red-500" : "border-gray-300"}`}
        type="email"
        name="gmail"
        value={form.gmail}
        onChange={handleChange}
        placeholder="Username@gmail.com"
      />
      {errors.gmail && <p className="text-red-500 text-sm mt-1">{errors.gmail}</p>}
    </div>
    {/* Phone */}
    <div>
      <input
        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800 transition ${errors.phone ? "border-red-500" : "border-gray-300"}`}
        type="tel"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="Phone Number"
      />
      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
    </div>
    {/* Message */}
    <div>
      <textarea
        className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-800 transition ${errors.message ? "border-red-500" : "border-gray-300"}`}
        name="message"
        rows={4}
        value={form.message}
        onChange={handleChange}
        placeholder="Type your message..."
      />
      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
    </div>
    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 px-4 bg-black text-white rounded-2xl hover:bg-gray-900 transition font-semibold"
      disabled={submitted}
    >
      {submitted ? "Sending..." : "Send Message"}
    </button>
  </form>
</div>

  );
};

export default ContactForm;
