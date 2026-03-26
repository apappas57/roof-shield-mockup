import Link from "next/link";
import { siteConfig } from "../../../site.config";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--color-bg-soft)",
        borderTop: "1px solid var(--color-border)",
        paddingTop: "3rem",
        paddingBottom: "1.5rem",
      }}
    >
      <div className="container">
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Business info */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "var(--color-primary)",
                marginBottom: "0.75rem",
              }}
            >
              {siteConfig.businessName}
            </p>
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.9375rem",
                marginBottom: "1rem",
                maxWidth: "320px",
              }}
            >
              {siteConfig.tagline}. Licensed, insured, and local.
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--color-primary)",
                textDecoration: "none",
              }}
            >
              <span aria-hidden="true" style={{ marginRight: "0.375rem" }}>
                &#9742;
              </span>
              {siteConfig.phone}
            </a>
          </div>

          {/* Quick links */}
          <div>
            <p
              style={{
                fontWeight: 600,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--color-text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              Quick Links
            </p>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: "none", padding: 0 }}>
                {footerLinks.map((link) => (
                  <li key={link.href} style={{ marginBottom: "0.5rem" }}>
                    <Link
                      href={link.href}
                      style={{
                        color: "var(--color-text)",
                        fontSize: "0.9375rem",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact details */}
          <div>
            <p
              style={{
                fontWeight: 600,
                fontSize: "0.875rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--color-text-muted)",
                marginBottom: "0.75rem",
              }}
            >
              Contact
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                fontSize: "0.9375rem",
              }}
            >
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                style={{ color: "var(--color-text)", textDecoration: "none" }}
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{ color: "var(--color-text)", textDecoration: "none" }}
              >
                {siteConfig.email}
              </a>
              <p style={{ color: "var(--color-text-muted)" }}>
                {siteConfig.address}
              </p>
            </div>
          </div>
        </div>

        {/* Social links */}
        {(siteConfig.social.facebook ||
          siteConfig.social.instagram ||
          siteConfig.social.google) && (
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                Facebook
              </a>
            )}
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                Instagram
              </a>
            )}
            {siteConfig.social.google && (
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business"
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9375rem",
                  textDecoration: "none",
                }}
              >
                Google
              </a>
            )}
          </div>
        )}

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--color-border)",
            paddingTop: "1.25rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "0.75rem",
            fontSize: "0.8125rem",
            color: "var(--color-text-muted)",
          }}
        >
          <p>
            &copy; {currentYear} {siteConfig.businessName}. All rights
            reserved.
          </p>
          <p>ABN: {siteConfig.abn}</p>
        </div>

        {/* Footer grid responsive styles */}
        <style>{`
          @media (min-width: 768px) {
            footer .container > div:first-child {
              grid-template-columns: 2fr 1fr 1fr;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
