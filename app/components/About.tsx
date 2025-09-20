import Image from "next/image";
import { FiShield, FiClock, FiStar } from "react-icons/fi";
import site from "@/app/config/site.json";

export default function About({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative py-12 md:py-20 lg:py-28 w-full bg-[url('/about_section.jpg')] bg-cover bg-center overflow-hidden ${className}`}
      id="about"
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-6 relative h-[280px] sm:h-[320px] md:h-[420px]">
            <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 z-20 rounded-full px-3 py-1 sm:px-5 sm:py-2 bg-white text-[#bfa800] font-semibold text-sm sm:text-base border-2 border-[#bfa800] shadow">
              15+ Years of Excellence
            </div>
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-[color:var(--primary)] shadow-2xl bg-foreground/5">
              <Image
                src="/feet/black-chrysler-limousine.jpg"
                alt="LimoLux Signature Fleet"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-32 h-20 sm:w-56 sm:h-36 rounded-xl overflow-hidden border-2 sm:border-4 border-[color:var(--primary)] shadow-xl bg-foreground/10">
              <Image
                src="/fleet3.jpg"
                alt="Executive Interior"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              About  
              <span className="ml-3 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">24 Hour Limo</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
            At 24 Hour Limo For You, we are committed to delivering the safest, 24/7 available and luxurious limousine service in Houston. Our dedication to excellence ensures that every ride is an exceptional experience.
            </p>

            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-1 rounded-full p-2 sm:p-3 bg-foreground/10 border border-[color:var(--primary)] text-[color:var(--primary)]">
                  <FiShield size={16} className="sm:w-5 sm:h-5" />
                </span>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Professional & Vetted Chauffeurs</div>
                  <p className="text-white/80 text-sm sm:text-base">Trained, courteous, and focused on your safety and comfort.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 rounded-full p-2 sm:p-3 bg-foreground/10 border border-[color:var(--primary)] text-[color:var(--primary)]">
                  <FiStar size={16} className="sm:w-5 sm:h-5" />
                </span>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Luxury Fleet, Impeccably Maintained</div>
                  <p className="text-white/80 text-sm sm:text-base">From executive sedans to party buses—cleaned and detailed before every ride.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1 rounded-full p-2 sm:p-3 bg-foreground/10 border border-[color:var(--primary)] text-[color:var(--primary)]">
                  <FiClock size={16} className="sm:w-5 sm:h-5" />
                </span>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">On-Time, Every Time</div>
                  <p className="text-white/80 text-sm sm:text-base">24/7 availability with real-time tracking and reliable scheduling.</p>
                </div>
              </li>
            </ul>

            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4 text-center">
              <div className="backdrop-blur bg-foreground/5 border border-foreground/20 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">15+</div>
                <div className="text-white/80 text-xs sm:text-sm">Years</div>
              </div>
              <div className="backdrop-blur bg-foreground/5 border border-foreground/20 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">1,000+</div>
                <div className="text-white/80 text-xs sm:text-sm">Happy Clients</div>
              </div>
              <div className="backdrop-blur bg-foreground/5 border border-foreground/20 rounded-lg sm:rounded-xl p-2 sm:p-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)] bg-clip-text text-transparent">4.9★</div>
                <div className="text-white/80 text-xs sm:text-sm">Avg. Rating</div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="/fleet"
                className="relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[var(--primary)] text-black font-bold text-base sm:text-lg shadow-xl border-2 border-[color:var(--primary)] hover:bg-[var(--primary-light)] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40"
              >
                Explore Fleet
              </a>
              <a
                href={`tel:${site.tel}`} 
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-foreground/10 text-white font-semibold text-base sm:text-lg border-2 border-[color:var(--primary)] hover:bg-foreground/20 transition-all duration-200"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}