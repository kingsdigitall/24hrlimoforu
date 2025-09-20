"use client";
import React, { useState } from "react";

const CtaSection = ({ content }: { content: any }) => {
  const [showPopup, setShowPopup] = useState(false);
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <section className="py-16 bg-black/20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/30 to-white/5 backdrop-blur-sm p-8 sm:p-12 text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {content.cta.title}
            </h3>
            <p className="text-xl text-white/80 mb-8">{content.cta.subtitle}</p>
            <a
              onClick={handleSubmit}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:brightness-110 transition-all duration-200 hover:scale-105"
            >
              {content.cta.buttonText}
            </a>
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default CtaSection;
