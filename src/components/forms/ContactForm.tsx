"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "../../../site.config";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.status === 429) {
        setErrorMessage("Too many submissions. Please try again later.");
        setStatus("error");
        return;
      }

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed");
      }

      // Redirect to thank you page on success
      router.push("/thank-you");
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        {/* Name */}
        <div>
          <label htmlFor="name">
            Name <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">
            Email <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="0400 000 000"
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service">What do you need help with?</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service...</option>
            {siteConfig.services.map((service) => (
              <option key={service.name} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message">
            Message <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us about your job — location, urgency, any details that help us quote accurately."
          />
        </div>

        {/* Error message */}
        {status === "error" && (
          <p
            style={{
              color: "#DC2626",
              fontSize: "0.9375rem",
              fontWeight: 500,
            }}
          >
            {errorMessage || "Something went wrong."} Please try again or call
            us on {siteConfig.phone}.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === "sending"}
          style={{
            width: "100%",
            opacity: status === "sending" ? 0.7 : 1,
            cursor: status === "sending" ? "not-allowed" : "pointer",
          }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--color-text-muted)",
            textAlign: "center",
          }}
        >
          We typically respond within a few hours during business hours.
        </p>
      </div>
    </form>
  );
}
