import type { Metadata } from "next";
import { siteConfig } from "../../../site.config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.businessName} — your trusted local ${siteConfig.trade} in ${siteConfig.address}. Licensed, insured, and committed to quality work.`,
};

export default function AboutPage() {
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
            About {siteConfig.businessName}
          </h1>
          <p style={{ opacity: 0.9, fontSize: "1.125rem" }}>
            Trusted local {siteConfig.trade} &mdash; proudly serving{" "}
            {siteConfig.address} and surrounding areas.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Text content */}
            <div style={{ maxWidth: "720px" }}>
              <h2 style={{ marginBottom: "1rem" }}>
                Your Local {siteConfig.trade.charAt(0).toUpperCase() + siteConfig.trade.slice(1)}
              </h2>

              {/*
                TODO: Replace this placeholder copy with the client's real story.
                Keep it personal, short, and focused on trust.
              */}
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "1.0625rem",
                  marginBottom: "1.25rem",
                  lineHeight: 1.7,
                }}
              >
                At {siteConfig.businessName}, we believe in doing the job right
                the first time. With years of experience across residential and
                commercial work, we&apos;ve built our reputation on honest
                pricing, quality workmanship, and showing up when we say we
                will.
              </p>

              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "1.0625rem",
                  marginBottom: "1.25rem",
                  lineHeight: 1.7,
                }}
              >
                We&apos;re fully licensed and insured, and we stand behind every
                job. Whether it&apos;s a small repair or a major project,
                you&apos;ll get the same level of care and professionalism.
              </p>

              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "1.0625rem",
                  marginBottom: "2rem",
                  lineHeight: 1.7,
                }}
              >
                We&apos;re locally owned and operated, so when you call us,
                you&apos;re talking to the people who do the work &mdash; not a
                call centre.
              </p>

              {/* Trust points */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "2.5rem",
                }}
              >
                {[
                  {
                    title: "Licensed & Insured",
                    description:
                      "Fully licensed and covered for your peace of mind.",
                  },
                  {
                    title: "Local & Reliable",
                    description:
                      "Based right here in the community we serve.",
                  },
                  {
                    title: "Honest Pricing",
                    description:
                      "Upfront quotes, no hidden charges. Ever.",
                  },
                  {
                    title: "Quality Guaranteed",
                    description:
                      "We stand behind every job we do.",
                  },
                ].map((point) => (
                  <div key={point.title}>
                    <h3
                      style={{
                        fontSize: "1.0625rem",
                        marginBottom: "0.375rem",
                        color: "var(--color-primary)",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{ marginRight: "0.375rem" }}
                      >
                        &#10003;
                      </span>
                      {point.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9375rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="btn btn-primary">
                Get a Free Quote
              </Link>
            </div>

            {/* Photo placeholder */}
            <div
              className="photo-placeholder"
              style={{ minHeight: "360px" }}
            >
              Replace with photo of the owner / team
            </div>
          </div>
        </div>
      </section>

      {/* ABN / Licence info strip */}
      <section className="section-alt">
        <div
          className="container"
          style={{ textAlign: "center" }}
        >
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.9375rem" }}>
            ABN: {siteConfig.abn}
            {siteConfig.licenceNumber && (
              <> &nbsp;&middot;&nbsp; Licence: {siteConfig.licenceNumber}</>
            )}
          </p>
        </div>
      </section>
    </>
  );
}
