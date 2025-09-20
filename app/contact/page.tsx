import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import content from "./content.json";
import site from "@/app/config/site.json";
import {
  FiShield,
  FiDollarSign,
  FiAward,
  FiMapPin,
  FiClock,
  FiPhone,
  FiMail,
  FiStar,
} from "react-icons/fi";
import { generateCanonicalMetadata } from "@/lib/seo";
import EnhancedBanner from "../components/EnhancedBanner";
import CtaSection from "./CtaSection";

export async function generateMetadata() {
  return generateCanonicalMetadata({
    title: "Contact 24 Hour Limo For You | Book Your Ride Today",
    description:
      "Have questions or need to book a ride? Contact 24 Hour Limo For You for reliable, luxury transportation in Houston. Call, email, or use our online booking system to reserve your vehicle today.",
    canonical: "contact",
  });
}

export default function ContactPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <EnhancedBanner 
          title="Contact Us"
          subtitle="Get in Touch"
          description="Have questions or need to book a ride? We're here to help!"
          showCarousel={false}
        />

        {/* Contact information section */}
        <section className="py-16 bg-surface/40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] items-start">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                  {content.heading}
                </h2>
                <p className="md:text-lg text-[var(--primary)]/90 tracking-wide uppercase text-sm sm:text-base mb-8">
                  {content.subheading}
                </p>
                
                {/* Contact details card */}
                <div className="rounded-xl border border-[var(--primary)]/40 bg-black/30 backdrop-blur-sm p-6 sm:p-8">
                  <ul className="space-y-6 text-gray-300">
                    <li className="flex gap-4 items-start">
                      <span className="text-[var(--primary)] mt-1">
                        <FiMapPin className="w-5 h-5" />
                      </span>
                      <span className="leading-relaxed text-lg">{site.address}</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-[var(--primary)] mt-1">
                        <FiClock className="w-5 h-5" />
                      </span>
                      <span className="text-lg">{content.hours}</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-[var(--primary)] mt-1">
                        <FiPhone className="w-5 h-5" />
                      </span>
                      <a
                        href={`tel:${site.tel}`}
                        className="text-lg hover:text-[var(--primary)] transition-colors duration-200"
                      >
                        + {site.No}
                      </a>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="text-[var(--primary)] mt-1">
                        <FiMail className="w-5 h-5" />
                      </span>
                      <a
                        href={`mailto:${site.mail}`}
                        className="text-lg hover:text-[var(--primary)] transition-colors duration-200"
                      >
                        {site.mail}
                      </a>
                    </li>
                  </ul>
                </div>
                
                {/* Additional descriptions */}
                {Array.isArray(content.descriptions) &&
                  content.descriptions.length > 0 && (
                    <div className="mt-8 space-y-4 text-gray-400 leading-relaxed">
                      {content.descriptions.map((p, i) => (
                        <p key={i} className="text-lg">{p}</p>
                      ))}
                    </div>
                  )}
              </div>

              {/* Right side info card */}
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-2xl bg-gradient-to-b from-[var(--primary)]/15 to-transparent blur-2xl"
                  aria-hidden
                />
                <div className="relative rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-8">
                  <h3 className="text-3xl text-[var(--primary)] mb-6">
                    Let's Connect with 24 Hour Limo For You
                  </h3>
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      We'd love to hear from you! Whether you have a question,
                      need to book a ride, or simply want more information about
                      our services, our team is here to assist you.
                    </p>
                    <p className="text-lg">
                      24 Hour Limo For You is committed to providing exceptional
                      customer service. Please reach out through any of the
                      contact methods below, and we'll get back to you as
                      quickly as possible.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {content.cta && (
         <CtaSection content={content} />
        )}
      </main>
      <Footer />
    </div>
  );
}
