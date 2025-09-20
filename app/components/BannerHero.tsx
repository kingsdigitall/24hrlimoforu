'use client';

import Image from "next/image";
import React, { useState, useRef } from "react";

const fleetImages = [
  { src: "/feet/black-chrysler-limousine.jpg", alt: "Black Chrysler Limousine", details: "Black Chrysler Limousine - Luxury and comfort for any event." },
  { src: "/feet/mercedes-sprinter.jpg", alt: "Mercedes Sprinter", details: "Mercedes Sprinter - Executive shuttle for group travel." },
  { src: "/feet/18-passenger-party-bus.jpg", alt: "18 Passenger Party Bus", details: "18 Passenger Party Bus - Celebrate in style on the go." },
  { src: "/feet/stretch-limo.jpg", alt: "Stretch Limo", details: "Stretch Limo - Classic elegance for special occasions." },
];

export default function Hero({ className = "" }: { className?: string }) {
  const [featuredIdx, setFeaturedIdx] = useState(0);
  const featured = fleetImages[featuredIdx];
  const thumbRowRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => setFeaturedIdx((prev) => (prev === 0 ? fleetImages.length - 1 : prev - 1));
  const handleNext = () => setFeaturedIdx((prev) => (prev === fleetImages.length - 1 ? 0 : prev + 1));

  // Scroll thumbnail row to keep selected in view
  React.useEffect(() => {
    if (thumbRowRef.current) {
      const selected = thumbRowRef.current.children[featuredIdx] as HTMLElement;
      if (selected) {
        selected.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [featuredIdx]);

  return (
    <section
      className={`relative flex items-center justify-center min-h-[70vh] w-full bg-gradient-to-br from-black/90 to-[#1a1a1a]/90 overflow-hidden ${className}`}
      id="hero"
    >
      {/* Background Image with vignette overlay */}
      <Image
        src="/limo-hero.jpg"
        alt="Luxury Limo Car"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Vignette overlay for luxury depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none z-0" />
      {/* Main Content: Glass card and carousel */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-4 py-16 gap-10 animate-fade-in">
        {/* Left: Glassmorphism Card */}
        <div className="flex-1 flex flex-col items-start justify-center w-full max-w-lg backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 md:mr-4 relative">
          {/* Floating featured car details box */}
          <div className="absolute -top-10 left-6 bg-black/70 text-white rounded-xl px-6 py-3 shadow-lg border border-white/20 text-sm max-w-xs hidden md:block">
            <div className="font-bold text-base mb-1 text-[var(--primary)]">{featured.alt}</div>
            <div>{featured.details}</div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            Experience Houston's{' '}
            <span className="relative inline-block bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent drop-shadow-lg shimmer-text">
              Premier
              <span className="shimmer" />
            </span>{' '}
            Limousine Service
          </h1>
          <p className="text-lg sm:text-2xl mb-10 font-medium text-white/90 drop-shadow">
            Luxury, comfort, and style for every occasion.<br className="hidden sm:inline" /> Book your ride today!
          </p>
          <a
            href="#booking"
            className="relative inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-xl border-2 border-[color:var(--primary)] overflow-hidden button-shine hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40"
          >
            <span className="relative z-10">Book Now</span>
            <span className="shine" />
          </a>
        </div>
        {/* Right: Modern Horizontal Snap Carousel */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-xl">
          <div className="relative w-full flex items-center justify-center mb-6">
            {/* Arrow left */}
            <button
              onClick={handlePrev}
              className="absolute -left-10 z-20 bg-primary text-primary-foreground hover:brightness-110 rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Previous car"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="14" cy="14" r="13" fill="none" /><path stroke="currentColor" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            {/* Main featured car image */}
            <div className="mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[color:var(--primary)] w-[340px] h-[210px] flex items-center justify-center bg-black/30 transition-all duration-300">
              <Image
                src={featured.src}
                alt={featured.alt}
                width={340}
                height={210}
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
            {/* Arrow right */}
            <button
              onClick={handleNext}
              className="absolute -right-10 z-20 bg-primary text-primary-foreground hover:brightness-110 rounded-full p-2 shadow-lg transition-all duration-200"
              aria-label="Next car"
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            >
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="14" cy="14" r="13" fill="none" /><path stroke="currentColor" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
          {/* Thumbnails: horizontal scroll snap */}
          <div
            ref={thumbRowRef}
            className="flex gap-3 mt-2 justify-center w-full overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            {fleetImages.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => setFeaturedIdx(idx)}
                className={`rounded-xl overflow-hidden border-2 snap-center ${idx === featuredIdx ? 'border-[color:var(--primary)]' : 'border-white/20'} shadow transition-all duration-200 w-20 h-14 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] bg-transparent`}
                aria-label={`Show ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={80}
                  height={56}
                  className="object-cover object-center w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Animations and effects */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.4,0,0.2,1) both;
        }
        /* Shimmer effect for Premier */
        .shimmer-text {
          position: relative;
        }
        .shimmer {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(120deg, transparent 0%, #fff7 40%, transparent 80%);
          opacity: 0.7;
          filter: blur(2px);
          pointer-events: none;
          animation: shimmer-move 2.5s infinite linear;
        }
        @keyframes shimmer-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        /* Button shine sweep */
        .button-shine {
          position: relative;
          overflow: hidden;
        }
        .button-shine .shine {
          content: '';
          position: absolute;
          top: 0; left: -75%;
          width: 50%; height: 100%;
          background: linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 100%);
          transform: skewX(-20deg);
          animation: shine-move 2.2s infinite cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes shine-move {
          0% { left: -75%; }
          100% { left: 125%; }
        }
        /* Hide scrollbar for thumbnails */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
