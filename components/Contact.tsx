"use client";

import { FormEvent, useState } from "react";
import { contact } from "./portfolio-data";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState(initialFormState);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name || "Website Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );

    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section sectionCompact">
      <div className="sectionLabel">05 / Contact</div>
      <h2 className="sectionTitle">PING ME</h2>
      <hr className="divider" />

      <div className="contactGrid">
        <div className="reveal">
          <p className="contactLead">
            If you are building a SaaS product, validating an MVP, or scaling an existing system, I can
            contribute across architecture, implementation, and delivery.
          </p>

          <div className="contactLinks">
            <a className="contactLink" href={`mailto:${contact.email}`}>
              <span className="contactIcon">@</span> {contact.email}
            </a>
            <a className="contactLink" href={contact.github} target="_blank" rel="noreferrer">
              <span className="contactIcon">/</span> github.com/oye-hunter
            </a>
            <a className="contactLink" href={contact.linkedin} target="_blank" rel="noreferrer">
              <span className="contactIcon">in</span> linkedin.com/in/hassan814
            </a>
            <a className="contactLink" href={contact.resume} download>
              <span className="contactIcon">↓</span> Download Resume
            </a>
          </div>
        </div>

        <form className="contactForm reveal" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
              placeholder="Your name"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
              placeholder="you@company.com"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              placeholder="Tell me about your product, scope, and timeline"
              required
            />
          </div>

          <button className="btn" type="submit">
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}
