export const siteConfig = {
  businessName: "Roof Shield Restoration",
  tagline: "5x Award-Winning Roof Restoration — Adelaide",
  phone: "0478 710 798",
  email: "info@getroofshield.com.au",
  address: "Adelaide, SA",
  abn: "",
  trade: "roof restoration",
  domain: "https://getroofshield.com.au",
  licenceNumber: "",

  hours: {
    weekdays: "7am – 5pm",
    saturday: "8am – 12pm",
    sunday: "Closed",
    emergency: false,
  },

  services: [
    { name: "Roof Restoration", description: "Complete roof restoration to extend the life of your roof and boost your property value." },
    { name: "Roof Painting", description: "Professional roof painting in a wide range of colours. Transform the look of your home." },
    { name: "Roof Cleaning", description: "High-pressure cleaning to remove dirt, moss, lichen, and debris from all roof types." },
    { name: "Gutter Replacement", description: "Supply and install new gutters and downpipes. All materials and colours available." },
    { name: "Ridge Capping & Repointing", description: "Re-bed and repoint ridge caps to prevent leaks and storm damage." },
    { name: "Roof Repairs", description: "Fix cracked tiles, leaks, rust spots, and storm damage. Fast turnaround." },
  ],

  serviceAreas: [
    "Adelaide CBD", "North Adelaide", "Prospect", "Norwood",
    "Unley", "Glenelg", "Marion", "Salisbury", "Elizabeth",
    "Modbury", "Tea Tree Gully", "Morphett Vale",
  ],

  colors: {
    primary: "#1E3A5F",
    accent: "#E85D26",
  },

  fonts: {
    heading: "Space Grotesk",
    body: "Inter",
  },

  social: { facebook: "", instagram: "", google: "" },

  testimonials: [
    { name: "Mark S.", text: "Zia and the team did an incredible job on our roof. Looks brand new. Highly recommend.", rating: 5 },
    { name: "Karen L.", text: "Professional from start to finish. Fair price, great result. Our neighbours have already asked for the number.", rating: 5 },
    { name: "David R.", text: "Had our gutters replaced and roof painted. Top quality work, cleaned up after themselves. Will use again.", rating: 5 },
  ],

  seo: { titleTemplate: "", description: "" },
  googleAnalyticsId: "",
  email_from: "Roof Shield Website <noreply@getroofshield.com.au>",
  email_to: "info@getroofshield.com.au",
} as const;

export type SiteConfig = typeof siteConfig;
