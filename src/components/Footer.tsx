import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "About Us", href: "/about" },
    { name: "Treatments", href: "/treatments" },
    { name: "Panchakarma", href: "/panchakarma" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Blog", href: "/#blog" },
    { name: "Patient Testimonials", href: "/testimonials" },
    { name: "FAQs", href: "/#faqs" },
  ];

  const ourServices = [
    { name: "Doctor Consultation", href: "/#services-consultation" },
    { name: "Panchakarma Therapies", href: "/panchakarma" },
    { name: "Yoga & Lifestyle Care", href: "/#services-yoga" },
    { name: "Ayurvedic Medicines", href: "/#services-medicines" },
  ];

  return (
    <footer className="bg-[#093325] text-[#D3E0D8]">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        {/* 4 Column Layout with vertical divider borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {/* Col 1: Centered Logo and Brand */}
          <div className="flex flex-col items-center justify-center text-center lg:pr-8 lg:border-r lg:border-[#194E3E]/70">
            {/* Official Circular Logo */}
            <div className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full overflow-hidden border border-[#235848]/60 bg-[#FAF8F3] shadow-xs mb-3">
              <img
                src="/logo.webp"
                alt="Vaidhyashala Logo"
                className="h-full w-full object-cover scale-[1.02]"
              />
            </div>

            {/* Brand Title */}
            <span className="font-serif text-[18px] sm:text-[20px] font-normal tracking-[0.14em] uppercase text-[#F1F6F3] leading-tight">
              Vaidhyashala
            </span>

            {/* Subtitle */}
            <span className="text-[9px] sm:text-[9.5px] font-medium tracking-[0.16em] uppercase text-[#8FA598] leading-tight mt-1.5">
              Ayurvedic Clinic &<br />
              Panchakarma Centre
            </span>
          </div>

          {/* Col 2: QUICK LINKS */}
          <div className="lg:px-8 lg:border-r lg:border-[#194E3E]/70">
            <h3 className="text-[11.5px] font-bold tracking-[1.4px] uppercase text-[#A58351]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-1.5 sm:space-y-2 text-[12.5px] sm:text-[13px]">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#ADC1B7] transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: OUR SERVICES */}
          <div className="lg:px-8 lg:border-r lg:border-[#194E3E]/70">
            <h3 className="text-[11.5px] font-bold tracking-[1.4px] uppercase text-[#A58351]">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2 text-[12.5px] sm:text-[13px]">
              {ourServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-[#ADC1B7] transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: VISIT & CONNECT */}
          <div className="lg:pl-8 space-y-5">
            <div>
              <h3 className="text-[11.5px] font-bold tracking-[1.4px] uppercase text-[#A58351]">
                Visit & Connect
              </h3>
              <div className="mt-4">
                <Link
                  href="/#consultation"
                  className="group inline-flex items-center justify-between gap-4 rounded-md border border-[#235848] bg-transparent px-4 py-2.5 sm:py-3 text-[13.5px] sm:text-[14px] font-semibold text-[#E2EDE7] transition-all hover:bg-[#124535] hover:border-[#387B65] hover:text-white"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex items-center space-x-3 pt-1">
              {/* WhatsApp */}
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#235848] text-[#9CB2A6] transition-all hover:border-[#4B957B] hover:text-white"
              >
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2M12.05 20.16C10.57 20.16 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C16.6 3.67 20.3 7.37 20.3 11.92C20.28 16.46 16.59 20.16 12.05 20.16M16.57 14.41C16.32 14.28 15.1 13.68 14.87 13.6C14.65 13.52 14.49 13.48 14.33 13.72C14.16 13.97 13.7 14.51 13.55 14.67C13.41 14.84 13.27 14.86 13.02 14.73C12.78 14.61 11.98 14.35 11.04 13.51C10.3 12.85 9.8 12.04 9.66 11.79C9.51 11.55 9.64 11.41 9.77 11.29C9.88 11.17 10.02 11 10.14 10.85C10.27 10.71 10.31 10.6 10.4 10.42C10.48 10.23 10.44 10.09 10.38 9.96C10.32 9.84 9.83 8.63 9.62 8.14C9.42 7.65 9.22 7.72 9.07 7.71C8.93 7.7 8.77 7.7 8.61 7.7C8.45 7.7 8.18 7.76 7.96 8C7.73 8.25 7.1 8.84 7.1 10.04C7.1 11.25 7.98 12.41 8.1 12.58C8.23 12.74 9.83 15.22 12.3 16.28C14.07 17.05 14.63 16.94 15.2 16.88C15.83 16.82 17.15 16.12 17.42 15.35C17.7 14.58 17.7 13.93 17.62 13.79C17.54 13.66 17.38 13.59 17.13 13.47" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#235848] text-[#9CB2A6] transition-all hover:border-[#4B957B] hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#235848] text-[#9CB2A6] transition-all hover:border-[#4B957B] hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#235848] text-[#9CB2A6] transition-all hover:border-[#4B957B] hover:text-white"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.738-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-6 flex flex-col items-center justify-between border-t border-[#123F31] pt-4 sm:flex-row text-[12px] text-[#7B9588]">
          <div>© 2026 Vaidhyashala. All rights reserved.</div>
          <div className="mt-3 sm:mt-0 flex items-center space-x-2">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
