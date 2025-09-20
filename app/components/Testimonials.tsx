'use client';

const testimonials = [
  {
    name: "Sarah M.",
    quote: "Absolutely the best limo service in Houston! Professional, punctual, and luxurious.",
    rating: 5,
  },
  {
    name: "James T.",
    quote: "Our wedding day was perfect thanks to their beautiful stretch limo and amazing driver.",
    rating: 5,
  },
  {
    name: "Priya S.",
    quote: "The party bus was spotless and so much fun. Highly recommend for any celebration!",
    rating: 5,
  },
  {
    name: "Michael B.",
    quote: "Corporate rides are always smooth and on time. My go-to for business travel.",
    rating: 5,
  },
];

export default function Testimonials({ className = "" }: { className?: string }) {
  return (
    <section className={`py-20 bg-gradient-to-br from-black/90 to-[#1a1a1a]/90 ${className}`} id="testimonials">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-white tracking-tight uppercase drop-shadow-lg">
          Client Testimonials
        </h2>
        <p className="text-center text-lg text-[var(--primary)]/90 mb-12 font-medium drop-shadow">Real feedback from our valued clients</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, idx) => (
            <div
              key={t.name}
              className="relative group bg-black/60 backdrop-blur-xl border border-[var(--primary)]/40 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_32px_8px_var(--primary)] hover:border-[var(--primary)]"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.17), 0 0 0 2px var(--primary-light)' }}
            >
              {/* Gold floating quote icon */}
              {/* <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[var(--primary)] via-[var(--primary-light)] to-[var(--primary)] text-black text-3xl font-bold px-3 py-0.5 rounded-full shadow-md z-10 border border-[var(--primary-light)]">
                “
              </span> */}
              <div className="flex mb-3 mt-2">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[var(--primary)] text-2xl drop-shadow">★</span>
                ))}
              </div>
              <p className="text-lg italic mb-4 text-white/90 font-medium drop-shadow-sm">{t.quote}</p>
              <div className="font-bold text-[var(--primary)] text-lg tracking-wide drop-shadow uppercase mt-2">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .group:hover {
          box-shadow: 0 0 32px 8px var(--primary), 0 8px 32px 0 var(--primary-light);
        }
      `}</style>
    </section>
  );
}
