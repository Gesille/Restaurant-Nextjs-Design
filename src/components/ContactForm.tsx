"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent } from "react";

const emptyValues = { name: "", email: "", subject: "", message: "" };
type Values = typeof emptyValues;

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function ContactForm() {
  const [values, setValues] = useState<Values>(emptyValues);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const update =
    (key: keyof Values) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: values.name,
          email: values.email,
          subject: values.subject || "New message from website contact form",
          message: values.message,
          botcheck: "", // honeypot field, must stay empty
        }),
      });
      const data = await res.json();

      if (data.success) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {sent ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="status"
        >
          <p className="h5 font-weight-bold">Thank you, {values.name || "friend"}!</p>
          <p>Your message has been received. We&apos;ll get back to you soon.</p>
          <button
            type="button"
            className="btn btn-primary py-3 px-5"
            onClick={() => {
              setValues(emptyValues);
              setSent(false);
            }}
          >
            Send another message
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              aria-label="Your name"
              autoComplete="name"
              value={values.name}
              onChange={update("name")}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              aria-label="Your email"
              autoComplete="email"
              value={values.email}
              onChange={update("email")}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              aria-label="Subject"
              value={values.subject}
              onChange={update("subject")}
            />
          </div>
          <div className="form-group">
            <textarea
              cols={30}
              rows={7}
              className="form-control"
              placeholder="Message"
              aria-label="Message"
              value={values.message}
              onChange={update("message")}
              required
            />
          </div>

          {error && (
            <p className="text-danger" role="alert">
              {error}
            </p>
          )}

          <div className="form-group">
            <button type="submit" className="btn btn-primary py-3 px-5" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}