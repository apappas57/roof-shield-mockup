"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "../../../site.config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      {/* Top bar — phone number always visible */}
      <div
        style={{
          backgroundColor: "var(--color-primary)",
          color: "#FFFFFF",
          padding: "0.375rem 0",
          fontSize: "0.8125rem",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            style={{
              color: "#FFFFFF",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            <span aria-hidden="true" style={{ marginRight: "0.25rem" }}>
              &#9742;
            </span>
            {siteConfig.phone}
          </a>
          <span style={{ opacity: 0.5 }} aria-hidden="true">|</span>
          <a
            href={`mailto:${siteConfig.email}`}
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            {siteConfig.email}
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <nav className="container" aria-label="Main navigation">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "4rem",
          }}
        >
          {/* Business name / logo */}
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
              fontWeight: 700,
              fontSize: "1.25rem",
              color: "var(--color-primary)",
              textDecoration: "none",
            }}
          >
            {siteConfig.businessName}
          </Link>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="nav-desktop"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="nav-hamburger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              display: "none", // shown via CSS media query below
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "var(--color-text)",
              fontSize: "1.5rem",
            }}
          >
            {mobileOpen ? "\u2715" : "\u2630"}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="nav-mobile"
            style={{
              paddingBottom: "1.5rem",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "0.75rem 0",
                  fontSize: "1rem",
                  fontWeight: 500,
                  color: "var(--color-text)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary"
              style={{
                marginTop: "1rem",
                width: "100%",
                textAlign: "center",
              }}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </nav>

      {/* Responsive styles for nav */}
      <style>{`
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 768px) {
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
