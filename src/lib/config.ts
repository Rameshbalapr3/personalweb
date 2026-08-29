export const siteConfig = {
  name: "Ramesh Bala P.R.",
  title: "AI-Integrated Full Stack Engineer",
  location: "Chennai, Tamil Nadu, India",
  experience: "1+ Year Professional Experience",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rameshbala.dev",
  github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "GITHUB_URL",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "LINKEDIN_URL",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "EMAIL",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "PHONE",
  resumePath: "/resume/Ramesh_Bala_FullStack_Developer.pdf",
  profileImage:
    process.env.NEXT_PUBLIC_PROFILE_IMAGE ?? "/images/profile.jpeg",
  ogImage: "/og-image.jpg",
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
