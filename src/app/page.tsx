import { siteConfig } from "../../site.config";
import Link from "next/link";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} aria-hidden="true">
          {i < rating ? "\u2605" : "\u2606"}
        </span>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section
        className="section"
        style={{
          background: `linear-gradient(135deg, var(--color-primary) 0%, color-mix(in srgb, var(--color-primary) 85%, black) 100%)`,
          color: "#FFFFFF",
          paddingTop: "clamp(4rem, 10vw, 7rem)",
          paddingBottom: "clamp(4rem, 10vw, 7rem)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "720px" }}>
            {/* Trust badges */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1.5rem",
              }}
            >
              {["Licensed", "Insured", "Local"].map((badge) => (
                <span
                  key={badge}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    padding: "0.375rem 0.875rem",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    borderRadius: "100px",
                    backgroundColor: "rgba(255,255,255,0.15)",
                    color: "#FFFFFF",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <span aria-hidden="true">&#10003;</span> {badge}
                </span>
              ))}
            </div>

            <h1
              style={{
                fontSize: "clamp(2.25rem, 6vw, 3.75rem)",
                lineHeight: 1.1,
                marginBottom: "1rem",
                color: "#FFFFFF",
              }}
            >
              {siteConfig.businessName}
            </h1>

            <p
              style={{
                fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
                opacity: 0.9,
                marginBottom: "2rem",
                lineHeight: 1.5,
              }}
            >
              {siteConfig.tagline}. Serving{" "}
              {siteConfig.serviceAreas.slice(0, 3).join(", ")} and
              surrounding areas.
            </p>

            {/* Phone number — big and prominent */}
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                fontWeight: 700,
                color: "var(--color-accent)",
                marginBottom: "1.5rem",
                textDecoration: "none",
              }}
            >
              <span aria-hidden="true" style={{ fontSize: "1.5rem" }}>
                &#9742;
              </span>
              {siteConfig.phone}
            </a>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <Link
                href="/contact"
                className="btn btn-accent"
                style={{ fontSize: "1.0625rem" }}
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="btn btn-outline"
                style={{
                  borderColor: "rgba(255,255,255,0.4)",
                  color: "#FFFFFF",
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES GRID
          ============================================================ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2>Our Services</h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                marginTop: "0.75rem",
                marginInline: "auto",
              }}
            >
              Professional {siteConfig.trade} services you can rely on.
            </p>
          </div>

          <div className="grid-3">
            {siteConfig.services.map((service) => (
              <div className="card" key={service.name}>
                {/* Icon placeholder — swap for real icons per client */}
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--color-bg-soft)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1rem",
                    color: "var(--color-primary)",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                  }}
                >
                  <span aria-hidden="true">&#9670;</span>
                </div>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "0.5rem" }}>
                  {service.name}
                </h3>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.9375rem",
                  }}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          PHOTO SECTION — Swap placeholder for client photos
          ============================================================ */}
      <section className="section-alt">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div
              className="photo-placeholder"
              style={{ minHeight: "320px" }}
            >
              Replace with photo of the team / work in action
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICE AREAS
          ============================================================ */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2>Areas We Serve</h2>
            <p
              style={{
                color: "var(--color-text-muted)",
                marginTop: "0.75rem",
                marginInline: "auto",
              }}
            >
              Proudly servicing homes and businesses across Adelaide.
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

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      {siteConfig.testimonials.length > 0 && (
        <section className="section-alt">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2>What Our Customers Say</h2>
            </div>

            <div className="grid-3">
              {siteConfig.testimonials.map((testimonial, index) => (
                <div
                  className="card"
                  key={index}
                  style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <StarRating rating={testimonial.rating} />
                  <p
                    style={{
                      fontSize: "1rem",
                      lineHeight: 1.6,
                      fontStyle: "italic",
                      color: "var(--color-text)",
                      flex: 1,
                    }}
                  >
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      color: "var(--color-primary)",
                    }}
                  >
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          CTA BAND
          ============================================================ */}
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
            Need a {siteConfig.trade}? Get in touch today.
          </h2>

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
