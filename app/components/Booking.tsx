"use client";
import Image from "next/image";
import { useState } from "react";

const services = [
  "Airport Transfers",
  "Party Bus Rentals",
  "Corporate Transportation",
  "Special Occasions",
];

export default function Booking({ className = "" }: { className?: string }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <section
      className={`relative py-20 md:py-28 w-full bg-gradient-to-br from-black/90 to-[#1a1a1a]/90 overflow-hidden ${className}`}
      id="booking"
    >
      {/* Background Image with vignette overlay to match Hero */}
      <Image
        src="/book_section1.jpg"
        alt="Luxury Limo Background"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Book Your
            <span className="ml-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">
              Ride
            </span>
          </h2>
          <p className="mt-3 text-white/80 text-lg md:text-xl">
            Luxury, comfort, and style—reserve in under a minute.
          </p>
        </div>

        {/* Glassmorphism Form Card */}
        <form
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 md:p-10 text-white"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
            />
            <select
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 text-white placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
              defaultValue=""
            >
              <option value="" disabled className="text-black">
                Select Service
              </option>
              {services.map((service) => (
                <option key={service} value={service} className="text-black">
                  {service}
                </option>
              ))}
            </select>
            <input
              type="date"
              defaultValue={new Date().toISOString().split("T")[0]}
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition [color-scheme:dark]"
            />
            <input
              type="text"
              placeholder="Pickup Location"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
            />
            <input
              type="text"
              placeholder="Drop-off Location"
              className="px-4 py-3 rounded-xl bg-black/30 border border-white/20 placeholder-white/70 focus:ring-4 focus:ring-[color:var(--primary)]/40 focus:border-[color:var(--primary)] outline-none transition"
            />
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-xl border-2 border-[color:var(--primary)] hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40"
            >
              Request Booking
            </button>
            <span className="text-white/70 text-sm">
              Instant confirmation. No hidden fees.
            </span>
          </div>
        </form>
      </div>

      {/* CTA Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-white/20 rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close popup"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">
                Your ride is just a call away!
              </h3>
              <p className="text-white/80 mb-6">
                Book now for instant confirmation with no hidden fees.
              </p>

              <button className="w-full py-4 px-6 bg-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Tap to call & book your ride instantly
              </button>

              <button
                onClick={closePopup}
                className="mt-4 w-full py-3 text-white/80 hover:text-white transition-colors"
              >
                Continue browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
