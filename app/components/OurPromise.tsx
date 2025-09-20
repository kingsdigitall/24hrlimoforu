import { FaShieldAlt, FaStar, FaClock, FaSmile, FaWifi } from "react-icons/fa";

const promises = [
  {
    icon: <FaSmile className="text-[var(--primary)] text-3xl mb-2 drop-shadow-lg" />,
    title: "Professional Chauffeurs",
    desc: "Our professionally trained and attired chauffeurs ensure timely, smooth, and comfortable rides in clean, well-maintained vehicles.",
  },
  {
    icon: <FaShieldAlt className="text-[var(--primary)] text-3xl mb-2 drop-shadow-lg" />,
    title: "Safety First",
    desc: "We carry full commercial insurance and a valid operating permit for your peace of mind.",
  },
  {
    icon: <FaClock className="text-[var(--primary)] text-3xl mb-2 drop-shadow-lg" />,
    title: "Real-Time Confirmations",
    desc: " Receive updates on driver arrival and passenger drop-offs.",
  },
  {
    icon: <FaStar className="text-[var(--primary)] text-3xl mb-2 drop-shadow-lg" />,
    title: "Luxurious Fleet",
    desc: "Our fleet is meticulously maintained, offering a variety of vehicles to suit your needs.",
  },
  {
    icon: <FaWifi className="text-[var(--primary)] text-3xl mb-2 drop-shadow-lg" />,
    title: "Complimentary Wi-Fi",
    desc: "Stay connected with free Wi-Fi in all our vehicles.",
  },
  {
    icon: <FaClock className="text-[var(--primary)] text-3xl mb-2 drop-shadow-lg" />,
    title: "24/7 Availability",
    desc: "We're always ready to provide reliable and luxurious transportation, any time of day or night.",
  },
];
export default function OurPromise({ className = "" }: { className?: string }) {
  return (
    <section
      className={`py-16 bg-gradient-to-br from-black/90 to-[#1a1a1a]/90 ${className}`}
      id="our-promise"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-center text-[var(--primary)] mb-2 tracking-tight uppercase drop-shadow-lg">
           Why Choose 24 Hour Limo For You?
          </h2>
          <span className="text-base text-white/80 font-medium mb-2">Your journey, our commitment to excellence</span>
          <span className="trusted-badge inline-block font-semibold px-4 py-1 rounded-full shadow border mb-2 text-xs tracking-wide">
            Trusted by 1000+ clients
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {promises.map((p, i) => (
            <div
              key={p.title}
              className="bg-white/10 backdrop-blur-xl border-2 border-[color:var(--primary)] rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-[color:var(--primary)]/40 transition-transform duration-300 group relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 opacity-10 text-[120px] pointer-events-none select-none text-[var(--primary)]">
                {p.icon}
              </div>
              <div className="z-10 relative flex flex-col items-center">
                {p.icon}
                <h3 className="text-xl font-semibold mb-2 mt-2 text-white group-hover:text-[var(--primary)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-white/80 text-base leading-relaxed font-medium">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <span className="luxury-badge flex items-center gap-2 px-6 py-2 rounded-full text-base font-bold shadow-lg border-2 border-[color:var(--primary-dark)]">
            <FaStar className="text-yellow-400 drop-shadow-md text-xl" />
            <span className="rating-text">4.9/5.0 Rated by Clients</span>
          </span>
        </div>
      </div>
    </section>
  );
}
