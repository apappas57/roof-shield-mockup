import type { Metadata } from "next";
import { siteConfig } from "../../../site.config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: `Professional ${siteConfig.trade} services from ${siteConfig.businessName}. ${siteConfig.services.map((s) => s.name).join(", ")}. Serving ${siteConfig.serviceAreas.slice(0, 3).join(", ")} and surrounding areas.`,
};

export default function ServicesPage() {
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
            Our Services
          </h1>
          <p style={{ opacity: 0.9, fontSize: "1.125rem" }}>
            Professional {siteConfig.trade} services for homes and businesses
            across {siteConfig.address}.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
            }}
          >
            {siteConfig.services.map((service, index) => (
              <div
                key={service.name}
                className="card"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.5rem",
                  alignItems: "start",
                }}
              >
                <div>
                  {/* Service number badge */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--color-primary)",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h2
                    style={{
                      fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {service.name}
                  </h2>

                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "1.0625rem",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {service.description}
                  </p>

                  <Link
                    href="/contact"
                    style={{
                      color: "var(--color-primary)",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                    }}
                  >
                    Get a quote for {service.name.toLowerCase()}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-alt">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2>Areas We Cover</h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                marginTop: "0.75rem",
                marginInline: "auto",
              }}
            >
              We provide all services across the following areas.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              justifyContent: "center",
            }}
          >
            {siteConfig.serviceAreas.map((area) => (
              <span className="badge" key={area}>
                <span
                  aria-hidden="true"
                  style={{ color: "var(--color-accent)" }}
                >
                  &#9679;
                </span>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--color-primary)",
          color: "#FFFFFF",
          padding: "clamp(3rem, 6vw, 4.5rem) 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
          }}
        >
          <h2 style={{ color: "#FFFFFF" }}>
            Ready to get started?
          </h2>
          <p style={{ opacity: 0.9, fontSize: "1.125rem" }}>
            Call us now or fill out our form for a free, no-obligation quote.
          </p>

          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "var(--color-accent)",
              textDecoration: "none",
            }}
          >
            <span aria-hidden="true" style={{ marginRight: "0.5rem" }}>
              &#9742;
            </span>
            {siteConfig.phone}
          </a>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-accent">
              Get a Free Quote
            </Link>
            <a
              href={`mailto:${siteConfig.email}`}
              className="btn btn-outline"
              style={{
                borderColor: "rgba(255,255,255,0.4)",
                color: "#FFFFFF",
              }}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
