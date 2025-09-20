import type { Metadata } from "next";
import BannerHero from "../components/BannerHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { services } from "./data";
import Link from "next/link";
import { generateCanonicalMetadata } from "@/lib/seo";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import WhyChoose from "../components/WhyChoose";
import OurPromise from "../components/OurPromise";
import site from "@/app/config/site.json";
import { FaPlane, FaBriefcase, FaShip, FaGraduationCap, FaFutbol, FaStar, FaHeart, FaClock, FaShieldAlt, FaUsers, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export async function generateMetadata() {
  return generateCanonicalMetadata({
    title: "Services | 24 Hour Limo For You - Houston Limousine Service",
    description:
      "Explore all 24 Hour Limo For You services: airport, corporate, cruise, weddings, prom, sporting events and more in Houston. Professional chauffeurs, luxury fleet, 24/7 availability.",
    canonical: "services",
  });
}

export default function ServicesArchivePage() {
  // General FAQ for services page
  const generalFaq = [
    {
      q: "What areas do you serve in Houston?",
      a: "We provide limousine services throughout the greater Houston area, including downtown, the Medical Center, Galleria, and surrounding suburbs. We also serve Houston airports (IAH and HOU) and cruise terminals.",
    },
    {
      q: "How far in advance should I book my limo service?",
      a: "We recommend booking at least 24-48 hours in advance for standard service. For special events like weddings, proms, or corporate events, we suggest booking 1-2 weeks ahead to ensure availability.",
    },
    {
      q: "What is your cancellation policy?",
      a: "We offer flexible cancellation policies. Please contact us at least 24 hours before your scheduled service for a full refund. Cancellations within 24 hours may incur a small fee.",
    },
    {
      q: "Do you provide transportation for large groups?",
      a: "Yes! We offer a variety of vehicles including Sprinter vans and shuttle buses that can accommodate groups of up to 23 passengers. Perfect for corporate events, weddings, and group travel.",
    },
    {
      q: "Are your vehicles equipped with amenities?",
      a: "Absolutely! Our luxury vehicles feature premium amenities including Wi-Fi, climate control, leather seating, and entertainment systems. Some vehicles also include refreshments upon request.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, cash, and corporate accounts. We also offer convenient online booking with secure payment processing.",
    },
  ];

  // Why Choose content
  const whyChooseContent = {
    heading: "Why Choose 24 Hour Limo For You?",
    short: "Experience luxury, reliability, and professionalism with every ride",
    content: [
      "At 24 Hour Limo For You, we understand that every journey deserves to be exceptional. Our commitment to excellence goes beyond just providing transportation – we create memorable experiences.",
      "With over a decade of service in Houston, we've built our reputation on punctuality, safety, and unmatched customer service. Our professional chauffeurs are not just drivers; they're your trusted travel partners.",
      "From our meticulously maintained luxury fleet to our 24/7 availability, we ensure that every detail is perfect. Whether you're heading to a business meeting, celebrating a special occasion, or simply need reliable transportation, we're here to exceed your expectations.",
    ],
    image: "/limo-hero.jpg",
    ctaHref: "/booking",
    ctaText: "Book Your Luxury Ride Today",
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero/>
        
        {/* Services Overview Section */}
        <section className="py-16 bg-gradient-to-br from-black/90 to-[#1a1a1a]/90 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-[var(--primary)] drop-shadow-lg">
                Our Premium Services
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Discover the full range of luxury transportation services offered by 24 Hour Limo For You. 
                From airport transfers to special events, we ensure every journey is exceptional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.slug}
                    className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 flex flex-col hover:scale-105 transition-transform duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                        <Icon className="text-xl" />
                      </span>
                      <h2 className="text-2xl font-bold tracking-wide text-[var(--primary)] drop-shadow">
                        {service.title}
                      </h2>
                    </div>
                    <p className="text-white/90 mb-6 flex-grow">{service.short}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="relative inline-block px-8 py-3 rounded-full bg-transparent text-[color:var(--primary)] font-semibold text-lg shadow-xl border-2 border-[color:var(--primary)] overflow-hidden hover:bg-[color:var(--primary)] hover:text-primary-foreground hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40 w-fit group-hover:shadow-[color:var(--primary)]/40"
                    >
                      Learn More
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Highlights Section */}
        <section className="py-16 bg-gradient-to-br from-[#1a1a1a]/90 to-black/90 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] drop-shadow-lg">
                What Makes Us Different
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Experience the 24 Hour Limo For You difference with our commitment to excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
                <FaClock className="text-4xl text-[var(--primary)] mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-xl font-semibold mb-2 text-white">24/7 Availability</h3>
                <p className="text-white/70">Round-the-clock service for your convenience</p>
              </div>
              
              <div className="text-center p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
                <FaShieldAlt className="text-4xl text-[var(--primary)] mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-xl font-semibold mb-2 text-white">Fully Insured</h3>
                <p className="text-white/70">Complete coverage for your peace of mind</p>
              </div>
              
              <div className="text-center p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
                <FaUsers className="text-4xl text-[var(--primary)] mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-xl font-semibold mb-2 text-white">Group Travel</h3>
                <p className="text-white/70">Vehicles for any group size or occasion</p>
              </div>
              
              <div className="text-center p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl">
                <FaMapMarkerAlt className="text-4xl text-[var(--primary)] mx-auto mb-4 drop-shadow-lg" />
                <h3 className="text-xl font-semibold mb-2 text-white">Houston Wide</h3>
                <p className="text-white/70">Service throughout the greater Houston area</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        {/* <WhyChoose {...whyChooseContent} /> */}

        {/* Our Promise Section */}
        <OurPromise />

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-black/90 to-[#1a1a1a]/90 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] drop-shadow-lg">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Get answers to common questions about our limousine services
              </p>
            </div>
            <Faq faq={generalFaq} />
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/10 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] drop-shadow-lg">
              Ready to Experience Luxury Transportation?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact 24 Hour Limo For You today to book your premium limousine service. 
              Our team is ready to help you plan the perfect transportation experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-[color:var(--primary)] text-black font-semibold rounded-full shadow-xl hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40"
              >
                Contact Us
              </Link>
              <Link
                href={`tel:${site.No}`}
                className="px-8 py-4 bg-transparent text-[color:var(--primary)] font-semibold rounded-full shadow-xl border-2 border-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-black transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40"
              >
                Book Now
              </Link>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/80">
              <div className="flex items-center gap-2">
                <FaPhone className="text-[var(--primary)]" />
                <span>Call us anytime: {site.No}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[var(--primary)]" />
                <span>Serving {site.address} & Surrounding Areas</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
