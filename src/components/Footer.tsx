"use client";

import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Flower2,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Salad,
  Sprout,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import PlanConsultationModal from "@/components/consultation/PlanConsultationModal";

type FooterLink = { label: string; href: string };
type ServiceLink = FooterLink & { icon: LucideIcon };

const exploreLinks: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our Products", href: "/products" },
  { label: "Patient Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const serviceLinks: ServiceLink[] = [
  { label: "Doctor Consultation", href: "/contact", icon: Stethoscope },
  { label: "Panchakarma Therapies", href: "/panchakarma", icon: Flower2 },
  { label: "Ayurvedic Treatments", href: "/treatments", icon: Sprout },
  { label: "Yoga & Lifestyle Care", href: "/treatments", icon: Leaf },
  { label: "Ayurvedic Medicines", href: "/products", icon: Sprout },
  { label: "Diet & Nutrition Guidance", href: "/treatments", icon: Salad },
  { label: "Wellness Programs", href: "/treatments", icon: Flower2 },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  { label: "YouTube", href: "https://www.youtube.com", icon: "youtube" },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
  { label: "WhatsApp", href: "https://wa.me/919876543210", icon: "whatsapp" },
];

function SocialIcon({ name }: { name: string }) {
  if (name === "instagram") {
    return <span className="relative h-[15px] w-[15px] rounded-[4px] border-2 border-current"><span className="absolute left-1/2 top-1/2 h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-current" /><span className="absolute right-[1.5px] top-[1.5px] h-[2px] w-[2px] rounded-full bg-current" /></span>;
  }
  if (name === "youtube") {
    return <span className="relative h-[13px] w-[18px] rounded-[3px] border-2 border-current"><span className="absolute left-[6px] top-[2px] h-0 w-0 border-y-[3px] border-l-[5px] border-y-transparent border-l-current" /></span>;
  }
  if (name === "whatsapp") {
    return <span className="relative"><MessageCircle className="h-[17px] w-[17px] stroke-[2.5]" /><Phone className="absolute left-[4px] top-[4px] h-[9px] w-[9px] -rotate-[24deg] stroke-[3]" /></span>;
  }
  return <span className={name === "facebook" ? "font-serif text-[19px] font-semibold leading-none" : "text-[13px] font-bold leading-none"}>{name === "facebook" ? "f" : "in"}</span>;
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <h3 className="font-serif text-[23px] leading-none text-[#fffdf4]">{children}</h3>
      <span className="mt-3 block h-[2px] w-11 bg-[#dfbd62]" />
    </div>
  );
}

function FooterNav({ links }: { links: FooterLink[] }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <Link href={link.href} className="group flex items-center justify-between gap-3 text-[13px] text-[#f5f2e8]/90 transition-colors hover:text-[#e5bd59]">
            {link.label}
            <ChevronRight className="h-4 w-4 shrink-0 text-[#dfbd62] transition-transform group-hover:translate-x-1" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function StackedFooterLogo() {
  return (
    <div className="relative h-[210px] w-[350px] max-w-full overflow-hidden select-none">
      <img
        src="/footer-logo-transparent.png"
        alt="Vaidhyashala Innovative Healing"
        className="absolute -left-[51px] top-0 w-[444px] max-w-none"
      />
    </div>
  );
}

export default function Footer() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);

  return (
    <>
      <footer
        className="relative overflow-hidden text-[#fffdf4]"
        style={{
          background:
            "radial-gradient(circle at 12% 28%, rgba(8, 72, 43, .38), transparent 28%), linear-gradient(180deg, #012C1B 0%, #012615 58%, #012114 100%)",
        }}
      >
        <img src="/leaf.webp" alt="" aria-hidden="true" className="pointer-events-none absolute -bottom-28 -left-24 w-80 rotate-[18deg] opacity-[.18] mix-blend-screen" />
        <img src="/leaf.webp" alt="" aria-hidden="true" className="pointer-events-none absolute right-[-6rem] top-24 w-80 -rotate-[26deg] opacity-[.18] mix-blend-screen" />

        <div
          className="relative border-b border-[#d8b45d]/70 bg-cover bg-[center_42%] bg-no-repeat text-[#172c23]"
          style={{ backgroundImage: 'url("/fot.png")' }}
        >
          <div className="mx-auto grid max-w-[1440px] items-center gap-5 px-6 py-5 lg:grid-cols-[1fr_auto] lg:px-16">
            <div>
              <h2 className="font-serif text-[clamp(26px,2.15vw,34px)] font-semibold leading-tight">Begin Your Healing Journey with Expert Ayurvedic Care</h2>
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[.3em] text-[#706b61]">Personalised Treatment <span className="mx-2 text-[#9c927d]">|</span> Traditional Wisdom <span className="mx-2 text-[#9c927d]">|</span> Holistic Wellness</p>
            </div>
            <div className="flex flex-col items-start lg:-translate-x-14">
              <button
                type="button"
                onClick={() => setIsConsultModalOpen(true)}
                className="inline-flex items-center gap-2.5 rounded-lg bg-[#064a35] px-6 py-3 font-serif text-[17px] text-[#fffdf4] shadow-[0_8px_16px_rgba(3,43,32,.2)] transition hover:-translate-y-0.5 hover:bg-[#086044] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8b45d]"
              >
                <CalendarDays className="h-5 w-5 text-[#e6be5e]" />
                Book a Consultation
                <ArrowRight className="h-5 w-5 text-[#e6be5e]" />
              </button>
              <p className="mt-2 text-[13px] font-bold text-[#13271e]">Take the first step towards a healthier, happier you.</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 py-7 lg:px-16 lg:py-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1.5fr_1fr_1.25fr_1.25fr] xl:gap-0">
            <section className="flex flex-col items-center xl:pr-12">
              <Link href="/" aria-label="Vaidhyashala home" className="inline-block">
                <StackedFooterLogo />
              </Link>
              <p className="mt-2 w-full max-w-[330px] text-[13px] leading-[1.3] text-[#f5f2e8]/90">Vaidhyashala offers authentic Ayurvedic care, personalised therapies and holistic wellness solutions for a healthier, balanced you.</p>
              <div className="mt-3 flex w-full max-w-[330px] flex-wrap justify-center gap-3">
                {socialLinks.map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-full border-2 border-[#dfbd62] text-[#e6be5e] transition hover:bg-[#dfbd62] hover:text-[#073225]">
                    <SocialIcon name={icon} />
                  </a>
                ))}
              </div>
            </section>

            <nav aria-label="Explore" className="border-[#d8b45d]/45 xl:border-l xl:px-11">
              <FooterHeading>Explore</FooterHeading>
              <FooterNav links={exploreLinks} />
            </nav>

            <nav aria-label="Our services" className="border-[#d8b45d]/45 xl:border-l xl:px-11">
              <FooterHeading>Our Services</FooterHeading>
              <ul className="space-y-2">
                {serviceLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <Link href={href} className="group flex items-center gap-3 text-[13px] text-[#f5f2e8]/90 transition-colors hover:text-[#e5bd59]">
                      <Icon className="h-5 w-5 shrink-0 text-[#dfbd62]" />
                      <span className="flex-1">{label}</span>
                      <ChevronRight className="h-4 w-4 shrink-0 text-[#dfbd62] transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section className="border-[#d8b45d]/45 xl:border-l xl:pl-11">
              <FooterHeading>Contact &amp; Visit</FooterHeading>
              <div className="space-y-3 text-[13px] leading-[1.22] text-[#f5f2e8]/90">
                <Link href="/contact" className="group flex gap-3 hover:text-[#e5bd59]"><MapPin className="h-9 w-9 shrink-0 rounded-full border border-[#c99f45] p-[7px] text-[#e7bf61]" /><span><strong className="block font-normal text-[#fffdf4]">Clinic Address</strong>Add your clinic address here,<br />City, State - PIN</span></Link>
                <a href="tel:+919876543210" className="group flex gap-3 hover:text-[#e5bd59]"><Phone className="h-9 w-9 shrink-0 rounded-full border border-[#c99f45] p-[7px] text-[#e7bf61]" /><span><strong className="block font-normal text-[#fffdf4]">Call / WhatsApp</strong>+91 98765 43210</span></a>
                <a href="mailto:info@vaidhyashala.com" className="group flex gap-3 hover:text-[#e5bd59]"><Mail className="h-9 w-9 shrink-0 rounded-full border border-[#c99f45] p-[7px] text-[#e7bf61]" /><span><strong className="block font-normal text-[#fffdf4]">Email</strong>info@vaidhyashala.com</span></a>
                <div className="my-4 border-t border-[#d8b45d]/20" />
                <div className="flex gap-3"><Clock3 className="h-9 w-9 shrink-0 rounded-full border border-[#c99f45] p-[7px] text-[#e7bf61]" /><span><strong className="block font-normal text-[#fffdf4]">Clinic Hours</strong>Mon – Sat&nbsp; | &nbsp;9:00 AM – 6:00 PM<br />Sunday – By Appointment</span></div>
              </div>
            </section>
          </div>
        </div>

        <div className="relative border-t border-[#d8b45d] bg-[#001E12]">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-3 text-[12px] text-[#f5f2e8]/90 lg:flex-row lg:items-center lg:justify-between lg:px-16">
            <p>© 2026 Vaidhyashala. All rights reserved.</p>
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Link href="/privacy" className="hover:text-[#e5bd59]">Privacy Policy</Link><span className="hidden text-[#d8b45d] sm:inline">|</span>
              <Link href="/terms" className="hover:text-[#e5bd59]">Terms &amp; Conditions</Link><span className="hidden text-[#d8b45d] sm:inline">|</span>
              <Link href="/#faqs" className="hover:text-[#e5bd59]">FAQs</Link><span className="hidden text-[#d8b45d] sm:inline">|</span>
              <Link href="/" className="hover:text-[#e5bd59]">Sitemap</Link>
            </nav>
            <Link href="/about" className="flex items-center gap-2 self-start text-right hover:text-[#e5bd59] lg:self-auto"><Leaf className="h-5 w-5 text-[#dfbd62]" /> Ayurveda for a Healthier, Happier You.</Link>
          </div>
        </div>
      </footer>
      <PlanConsultationModal isOpen={isConsultModalOpen} onClose={() => setIsConsultModalOpen(false)} />
    </>
  );
}
