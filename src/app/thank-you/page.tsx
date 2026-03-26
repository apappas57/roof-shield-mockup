import type { Metadata } from "next";
import { siteConfig } from "../../../site.config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: `Thanks for contacting ${siteConfig.businessName}. We'll be in touch shortly.`,
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <section
      className="section"
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="container"
        style={{
          textAlign: "center",
          maxWidth: "640px",
        }}
      >
        {/* Checkmark icon */}
        <div
          style={{
            width: "4rem",
            height: "4rem",
            borderRadius: "50%",
            backgroundColor: "var(--color-primary)",
            color: "#FFFFFF",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            marginBottom: "1.5rem",
          }}
        >
          <span aria-hidden="true">&#10003;</span>
        </div>

        <h1 style={{ marginBottom: "1rem" }}>Thanks for reaching out!</h1>

        <p
          style={{
            color: "var(--color-text-muted)",
            fontSize: "1.125rem",
            lineHeight: 1.7,
            marginBottom: "1rem",
            marginInline: "auto",
          }}
        >
          We&apos;ve received your message and will get back to you as soon as
          possible. For urgent jobs, give us a call directly.
        </p>

        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "var(--color-primary)",
            textDecoration: "none",
            marginBottom: "2rem",
          }}
        >
          <span aria-hidden="true">&#9742;</span>
          {siteConfig.phone}
        </a>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/services" className="btn btn-outline">
            View Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
