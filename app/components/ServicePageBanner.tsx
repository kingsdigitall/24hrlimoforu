"use client";
import site from "@/app/config/site.json";

export default function ModernBanner({h1}: {h1?: string}) {
  return (
    <section className="bg-black text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, #e9ed01, transparent)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 rounded-full opacity-15 animate-pulse delay-1000"
          style={{
            background: `radial-gradient(circle, #e9ed01, transparent)`,
          }}
        ></div>

        {/* Geometric lines */}
        <div
          className="absolute top-1/4 left-0 w-full h-px opacity-10"
          style={{
            background: `linear-gradient(90deg, transparent, #e9ed01, transparent)`,
          }}
        ></div>
        <div
          className="absolute bottom-1/4 left-0 w-full h-px opacity-10"
          style={{
            background: `linear-gradient(90deg, transparent, #e9ed01, transparent)`,
          }}
        ></div>

        {/* Floating particles */}
        <div
          className="absolute top-16 left-1/4 w-2 h-2 rounded-full animate-bounce delay-500"
          style={{ backgroundColor: "#e9ed01", opacity: 0.6 }}
        ></div>
        <div
          className="absolute top-32 right-1/3 w-1 h-1 rounded-full animate-bounce delay-700"
          style={{ backgroundColor: "#e9ed01", opacity: 0.4 }}
        ></div>
        <div
          className="absolute bottom-24 left-1/3 w-1.5 h-1.5 rounded-full animate-bounce delay-300"
          style={{ backgroundColor: "#e9ed01", opacity: 0.5 }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-block">
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-black leading-none">
              <span
                className="block mt-2 transform hover:scale-105 transition-transform duration-300 delay-100"
                style={{
                  color: "#e9ed01",
                  textShadow: `0 0 30px rgba(233, 237, 1, 0.3)`,
                  background: `linear-gradient(135deg, #e9ed01, #f0f54a)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {h1 || "Fleet Solutions"}
              </span>
            </h1>
          </div>
        </div>

        <div
          className="w-24 h-1 mx-auto mb-8 rounded-full animate-pulse"
          style={{ backgroundColor: "#e9ed01" }}
        ></div>

        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
          Explore all LimoLux services:{" "}
          <span className="font-semibold" style={{ color: "#e9ed01" }}>
            Luxury Ride | Premium Vehicles | Affordable Pricing | Experienced Drivers | On-time Service
          </span>{" "}
Book your ride today!
        </p>

        <div className="mt-12">
          <a href={`tel:${site.tel}`}>
            <button
              className="group relative px-8 py-4 bg-transparent border-2 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                borderColor: "#e9ed01",
                color: "#e9ed01",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#e9ed01";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#e9ed01";
              }}
            >
              Book Now
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{ backgroundColor: "#e9ed01" }}
              ></span>
            </button>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}
