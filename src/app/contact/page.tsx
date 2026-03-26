import type { Metadata } from "next";
import { siteConfig } from "../../../site.config";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${siteConfig.businessName}. Call ${siteConfig.phone} or fill out our contact form for a free quote.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section
        style={{
          background: "var(--color-primary)",
          color: "#FFFFFF",
          padding: "clamp(3rem, 6vw, 5rem) 0",
        }}
      >
        <div className="container">
          <h1 style={{ color: "#FFFFFF", marginBottom: "0.75rem" }}>
            Contact Us
          </h1>
          <p style={{ opacity: 0.9, fontSize: "1.125rem" }}>
            Get a free, no-obligation quote. We typically respond within a few
            hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
          >
            {/* Form */}
            <div style={{ maxWidth: "640px" }}>
              <h2
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                Send Us a Message
              </h2>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  marginBottom: "2rem",
                }}
              >
                Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </p>

              <ContactForm />
            </div>

            {/* Contact Details */}
            <div>
              <h2
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                Get In Touch Directly
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Phone */}
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Phone
                  </p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--color-primary)",
                    }}
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    style={{
                      fontSize: "1.0625rem",
                      color: "var(--color-primary)",
                    }}
                  >
                    {siteConfig.email}
                  </a>
                </div>

                {/* Address */}
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Service Area
                  </p>
                  <p style={{ fontSize: "1.0625rem" }}>
                    {siteConfig.address}
                  </p>
                </div>

                {/* Hours */}
                <div>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Hours
                  </p>
                  <p style={{ fontSize: "1.0625rem" }}>
                    Mon &ndash; Fri: {siteConfig.hours.weekdays}
                    <br />
                    Sat: {siteConfig.hours.saturday}
                    {siteConfig.hours.sunday !== "Closed" && (
                      <>
                        <br />
                        Sun: {siteConfig.hours.sunday}
                      </>
                    )}
                    {siteConfig.hours.emergency && (
                      <>
                        <br />
                        Emergency callouts available 24/7
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
