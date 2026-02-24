import React, { useState } from "react";
import { motion } from "framer-motion";

const Forms = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      fullName: `${formData.firstName || ""} ${formData.lastName || ""}`.trim(),
      phone: formData.phone || "",
      email: formData.email || "",
      companyName: formData.companyName || "",
      message: formData.message || "",
      dateTime: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/scOQiAcg#generic-webhook",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error(`Privyr responded with status ${response.status}`);
      }

      setSubmitted(true);

      if (
        typeof window !== "undefined" &&
        typeof window.gtag_report_conversion === "function"
      ) {
        try {
          window.gtag_report_conversion();
        } catch (e) {
          console.warn("gtag_report_conversion failed", e);
        }
      }
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-20 text-center space-y-4"
      >
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-10 h-10 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-3xl font-light text-gray-900 italic font-serif">
          Thank You
        </h3>
        <p className="text-gray-500 font-light max-w-xs uppercase tracking-widest text-[10px]">
          Our team will reach out to you shortly to discuss your journey.
        </p>
      </motion.div>
    );
  }

  const InputField = ({
    label,
    name,
    type = "text",
    required = false,
    isTextArea = false,
  }) => (
    <motion.div
      className="relative mb-10 group"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <label
        htmlFor={name}
        className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-[0.2em] text-[10px] ${
          focusedField === name || formData[name]
            ? "-top-6 text-primary font-bold"
            : "top-2 text-gray-400"
        }`}
      >
        {label}
        {required && "*"}
      </label>
      {isTextArea ? (
        <textarea
          name={name}
          id={name}
          required={required}
          className="w-full bg-transparent border-b border-gray-200 py-2 text-gray-900 outline-none transition-colors duration-300 focus:border-primary resize-none h-24 font-light"
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField(null)}
          onChange={handleInputChange}
          value={formData[name] || ""}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          className="w-full bg-transparent border-b border-gray-200 py-2 text-gray-900 outline-none transition-colors duration-300 focus:border-primary font-light"
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField(null)}
          onChange={handleInputChange}
          value={formData[name] || ""}
        />
      )}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-primary"
        initial={{ width: 0 }}
        animate={{ width: focusedField === name ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="mb-16">
        <h3 className="text-4xl font-light text-gray-900 leading-tight">
          Let's Start Your{" "}
          <span className="text-primary italic font-serif">Journey.</span>
        </h3>
        <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] mt-4">
          Fill the details below and we'll be in touch.
        </p>
      </div>

      <form
        onSubmit={handleFormSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12"
      >
        <InputField label="First Name" name="firstName" required />
        <InputField label="Last Name" name="lastName" />
        <InputField label="Phone" name="phone" type="tel" required />
        <InputField label="Email" name="email" type="email" required />
        <div className="md:col-span-2">
          <InputField label="Company Name" name="companyName" />
          <InputField label="Message" name="message" isTextArea />
        </div>

        <div className="md:col-span-2 flex flex-col items-start gap-8 mt-4">
          <button
            type="submit"
            disabled={loading}
            className="group relative px-12 py-4 bg-primary overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gray-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
            <span
              className={`relative z-10 text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-300 ${loading ? "text-white" : "text-white group-hover:text-white"}`}
            >
              {loading ? "Discovering..." : "Send Request"}
            </span>
          </button>
          <span className="text-[9px] text-gray-400 uppercase tracking-widest italic">
            * All fields are handled with utmost confidentiality.
          </span>
        </div>
      </form>
    </div>
  );
};

export default Forms;
