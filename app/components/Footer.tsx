import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";
import site from "@/app/config/site.json";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-2 text-gray-300 border-t border-white/20 bg-gradient-to-b from-black/95 via-[#0a0a0a] to-[#050505] relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(80%_60%_at_50%_0%,black,transparent)] bg-[radial-gradient(60rem_40rem_at_top,rgba(251,255,0,0.08),rgba(191,168,0,0.02),transparent)]" />

      {/* Decorative grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="relative">
        <div className="border-b border-white/20 bg-gradient-to-r from-black/60 via-[#0a0a0a]/80 to-black/60 backdrop-blur-xl shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-4 text-white">
              <span className="inline-flex h-3 w-3 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] shadow-[0_0_24px_var(--primary)] animate-pulse" />
              <p className="text-lg sm:text-xl font-bold tracking-tight text-center md:text-left bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ride in luxury. Available 24/7 across Houston.
              </p>
            </div>
            <Link
              href={`tel:${site.tel}`}
              className="group relative px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary)] text-black font-bold text-base sm:text-lg shadow-2xl shadow-[var(--primary)]/30 hover:shadow-[var(--primary)]/50 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/50 overflow-hidden"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center h-18 overflow-hidden">
                <img
                  src="https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/24%20Hour%20Limo%20For%20You.png?updatedAt=1755847281608"
                  alt="LimoLux Logo"
                  className="h-auto w-48  mr-2 object-contain"
                />
              </Link>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-sm">
              Premium chauffeured limousine service delivering comfort, safety,
              and style for every occasion.
            </p>
            <div className="flex items-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400 max-w-sm">
              <FaLocationDot className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
              <span>{site.address}</span>
            </div>
            <div className="flex gap-3 pt-4">
              <a
                aria-label="Facebook"
                href="#"
                className="group p-3 sm:p-3.5 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-[var(--primary)]/20 hover:to-[var(--primary)]/10 border border-white/20 hover:border-[var(--primary)]/50 text-white hover:text-[var(--primary)] transition-all duration-300 shadow-lg hover:shadow-[var(--primary)]/20 hover:scale-110"
              >
                <FaFacebookF className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="group p-3 sm:p-3.5 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-[var(--primary)]/20 hover:to-[var(--primary)]/10 border border-white/20 hover:border-[var(--primary)]/50 text-white hover:text-[var(--primary)] transition-all duration-300 shadow-lg hover:shadow-[var(--primary)]/20 hover:scale-110"
              >
                <FaInstagram className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                aria-label="X (Twitter)"
                href="#"
                className="group p-3 sm:p-3.5 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-[var(--primary)]/20 hover:to-[var(--primary)]/10 border border-white/20 hover:border-[var(--primary)]/50 text-white hover:text-[var(--primary)] transition-all duration-300 shadow-lg hover:shadow-[var(--primary)]/20 hover:scale-110"
              >
                <FaXTwitter className="group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                aria-label="YouTube"
                href="#"
                className="group p-3 sm:p-3.5 rounded-full bg-gradient-to-br from-white/10 to-white/5 hover:from-[var(--primary)]/20 hover:to-[var(--primary)]/10 border border-white/20 hover:border-[var(--primary)]/50 text-white hover:text-[var(--primary)] transition-all duration-300 shadow-lg hover:shadow-[var(--primary)]/20 hover:scale-110"
              >
                <FaYoutube className="group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Mobile 2-column grid for navigation */}
          <div className="grid grid-cols-2 gap-4 sm:hidden col-span-1">
            <div className="group">
              <h4 className="text-white font-bold mb-3 tracking-wide text-sm bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services"
                    className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fleet"
                    className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    Fleet
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="group">
              <h4 className="text-white font-bold mb-3 tracking-wide text-sm bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
                Services
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services/airport-transportation"
                    className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    Airport Travel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/wedding-transportation"
                    className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/corporate-transportation"
                    className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                    Corporate Travel
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Desktop Quick Links - hidden on mobile */}
          <div className="hidden sm:block group">
            <h4 className="text-white font-bold mb-3 sm:mb-4 md:mb-6 tracking-wide text-sm sm:text-base md:text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-sm">
              <li>
                <Link
                  href="/services"
                  className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/fleet"
                  className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                  Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Services - hidden on mobile */}
          <div className="hidden sm:block group">
            <h4 className="text-white font-bold mb-3 sm:mb-4 md:mb-6 tracking-wide text-sm sm:text-base md:text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3 md:space-y-4 text-sm">
              <li>
                <Link
                  href="/services/airport-transportation"
                  className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                  Airport Travel
                </Link>
              </li>
              <li>
                <Link
                  href="/services/wedding-transportation"
                  className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                  Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="/services/corporate-transportation"
                  className="group flex items-center text-gray-400 hover:text-[var(--primary)] transition-all duration-300"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-[var(--primary)] transition-all duration-300 mr-0 group-hover:mr-2 rounded-full"></span>
                  Corporate Travel
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 sm:space-y-6 col-span-1 sm:col-span-2 md:col-span-1">
            <h4 className="text-white font-bold mb-4 sm:mb-6 tracking-wide text-base sm:text-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
              Contact
            </h4>
            <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-300 group hover:text-[var(--primary)] transition-colors duration-300">
              <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                <FaPhone />
              </span>
              <a
                href={`tel:${site.tel}`}
                className="hover:text-white transition"
              >
                {site.No}
              </a>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base text-gray-300 group hover:text-[var(--primary)] transition-colors duration-300">
              <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/10 border border-[var(--primary)]/30 text-[var(--primary)] text-sm sm:text-base group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope />
              </span>
              <a
                href={`mailto:${site.mail}`}
                className="hover:text-white transition"
              >
                {site.mail}
              </a>
            </div>
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[var(--primary)]/10 to-transparent border border-[var(--primary)]/20">
              <p className="text-xs sm:text-sm text-[var(--primary)] font-medium">
                Response time under 10 minutes during business hours.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 bg-gradient-to-r from-black/80 via-[#0a0a0a]/60 to-black/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-sm sm:text-base">
            <p className="text-gray-400 font-medium">
              © {year} {site.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 sm:gap-8">
              <Link
                href="#"
                className="text-gray-400 hover:text-[var(--primary)] transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-[var(--primary)] transition-colors duration-300 font-medium"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
