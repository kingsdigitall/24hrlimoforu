"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // ✅ Scroll arrows

const fleet = [
  {
    name: "Mercedes Sprinter",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Mercedes%20Sprinter.jpg?updatedAt=1755857563352",
    details: "Spacious, luxury van for group travel and events.",
  },
  {
    name: "Black Chrysler Limousine Up To 8 Adults",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Black%20Chrysler%20Limousine%20Up%20To%208%20Adults2.jpg?updatedAt=1755857560265",
    details: "Classic black Chrysler limo, perfect for parties and business.",
  },
  {
    name: "White Chrysler Limousine Up To 8 Adults",
    image: "/feet/white-chrysler-limousine.jpg",
    details: "Elegant white Chrysler limo, ideal for weddings and celebrations.",
  },
  {
    name: "Black Chrysler Limousine Up To 8 Adults (Interior)",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Black%20Chrysler%20Limousine%20Up%20To%208%20Adults.jpg?updatedAt=1755857559163",
    details: "Luxurious interior for a premium experience.",
  },
  {
    name: "Luxury Vans",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Mercedes%20Executive%20Shuttle%20Van1.jpg?updatedAt=1755857560808",
    details: "Premium vans for comfort and convenience.",
  },
  {
    name: "Stretch Limo",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Stretch%20Limos.png?updatedAt=1755857567397",
    details: "Iconic stretch limo for unforgettable occasions.",
  },
  {
    name: "Mercedes Executive Shuttle Van",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/SUVs%20&%20Vans.jpg?updatedAt=1755857566060",
    details: "Executive shuttle for business and airport transfers.",
  },
  {
    name: "22 Passenger Shuttle Bus",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/22%20Passenger%20Shuttle%20Bus1.jpg?updatedAt=1755857553287",
    details: "Spacious shuttle bus for large groups and events.",
  },
  {
    name: "23 Passenger Corporate Shuttle Bus",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/27%20Passenger%20Corporate%20Shuttle%20Bus.jpg?updatedAt=1755857557927",
    details: "Corporate shuttle for business teams and conferences.",
  },
  {
    name: "18 Passenger Party Bus",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/18%20Passenger%20Party%20Bus2.png?updatedAt=1755857555014",
    details: "Party bus with premium sound and lighting for celebrations.",
  },
];

export default function Fleet({ className = "" }: { className?: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [centerIdx, setCenterIdx] = useState(0);

  // Snap to center logic
  useEffect(() => {
    const handleScroll = () => {
      const scroller = scrollerRef.current;
      if (!scroller) return;
      const children = Array.from(scroller.children) as HTMLDivElement[];
      let minDiff = Infinity;
      let activeIdx = 0;
      children.forEach((child, idx) => {
        const rect = child.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const diff = Math.abs(center - window.innerWidth / 2);
        if (diff < minDiff) {
          minDiff = diff;
          activeIdx = idx;
        }
      });
      setCenterIdx(activeIdx);
    };
    const scroller = scrollerRef.current;
    if (scroller) {
      scroller.addEventListener("scroll", handleScroll, { passive: true });
    }
    return () => {
      if (scroller) {
        scroller.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Scroll function for arrows
  const scrollBy = (direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const scrollAmount = 350; // px to scroll per click
    scroller.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`relative  py-20 md:min-h-[100vh] bg-gradient-to-br from-[#232526] via-[#414345] to-[#FFD70011] flex items-center justify-center overflow-hidden ${className}`}
      id="fleet"
    >
      {/* Vignette overlays */}
      <div className="pointer-events-none z-20 absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-[#232526] via-[#232526]/80 to-transparent" />
      <div className="pointer-events-none z-20 absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-[#232526] via-[#232526]/80 to-transparent" />
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/10 via-transparent to-yellow-400/10 mix-blend-lighten" />
      </div>

      <div className="relative z-10  max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-5xl font-extrabold text-center mb-14 text-white drop-shadow-lg tracking-tight uppercase">
          Our Luxury Fleet
        </h2>

        {/* Left Arrow */}
        <button
          onClick={() => scrollBy("left")}
          className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/60 text-white hover:bg-primary hover:text-black shadow-lg transition duration-300"
          aria-label="Scroll Left"
        >
          <FaChevronLeft size={16} />
        </button>

        {/* Scrollable cars */}
        <div
          ref={scrollerRef}
          className="overflow-x-auto flex gap-8 pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth px-2"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {fleet.map((car, idx) => (
            <div
              key={car.name + idx}
              className={`group min-w-[320px] max-w-xs flex-shrink-0 bg-black/60 backdrop-blur-xl border border-[color:var(--primary)]/40 rounded-3xl shadow-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 relative overflow-hidden snap-center ${
                centerIdx === idx
                  ? "scale-105 shadow-[0_0_32px_8px_var(--primary)] z-10 border-[color:var(--primary)]"
                  : "hover:scale-105"
              }`}
            >
              <span className="absolute top-4 left-4 bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary)] text-black text-xs font-bold px-4 py-1 rounded-full shadow-md z-10 border border-[color:var(--primary-light)]">
                #{idx + 1}
              </span>
              <div className="w-72 h-44 mb-5 relative rounded-2xl overflow-hidden shadow-lg border-4 border-[color:var(--primary)] bg-black/30">
                <img
                  src={car.image}
                  alt={car.name}
                  className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                  loading={idx > 2 ? "lazy" : "eager"}
                />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white leading-tight drop-shadow-sm uppercase tracking-wide">
                {car.name}
              </h3>
              <p className="text-white/90 text-base mb-3 min-h-[48px] font-medium drop-shadow">
                {car.details}
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scrollBy("right")}
          className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/60 text-white hover:bg-primary hover:text-black shadow-lg transition duration-300"
          aria-label="Scroll Right"
        >
          <FaChevronRight size={16} />
        </button>

        <div className="hover:scale-105 transition-transform duration-300 mt-6 text-center text-[color:var(--primary-light)]/80 text-lg font-semibold tracking-wide select-none">
          <Link href="/fleet">  
          <span className="inline-block bg-[color:var(--primary-light)]/10 px-6 py-2 rounded-full shadow-inner border border-[color:var(--primary-light)]/30">
            Click to view more luxury vehicles &rarr;
          </span>
          </Link>
        </div>
      </div>

      <style jsx global>{`
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
