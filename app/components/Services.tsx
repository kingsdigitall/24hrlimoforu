'use client';

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Airport Transportation",
    link: "/services/airport-transportation",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Luxury%20Sedan3.jpg?updatedAt=1755857552376", 
    description:
      "Our airport transportation service guarantees reliable, stress-free transfers to and from Houston Intercontinental Airport (IAH) and William P. Hobby Airport (HOU). We track flights to ensure timely pickups and drop-offs, so you can count on us for punctual and dependable service. With a variety of vehicles to choose from, we provide comfort and convenience every time you fly in or out of Houston.",
  },
  {
    title: "Corporate Ground Transportation",
    link: "/services/corporate-transportation",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/27%20Passenger%20Corporate%20Shuttle%20Bus.jpg?updatedAt=1755857557927",
    description:
      "For business professionals, our corporate transportation service offers reliable, timely, and luxurious rides to meetings, conferences, and corporate events. Our fleet includes executive sedans and spacious vans, perfect for both solo travelers and groups. Enjoy professional service from our experienced chauffeurs, ensuring your business travel is efficient and stress-free.",
  },
  {
    title: "Cruise Transportation",
    link: "/services/cruise-transportation",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/SUVs%20&%20Vans.jpg?updatedAt=1755857566060",
    description:
      "Begin and end your cruise experience stress-free with our cruise transportation services. We offer comfortable, reliable rides to and from the Houston cruise terminals. Say goodbye to parking and traffic worries, and let our professional chauffeurs ensure you travel in comfort and arrive on time for your departure or after your return.",
  },
  {
    title: "Prom & Homecoming School Events",
    link: "/services/prom-homecoming-transportation",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/18%20Passenger%20Party%20Bus2.png?updatedAt=1755857555014",
    description:
      "Make your prom or homecoming unforgettable with our luxurious limousine service. Choose from a variety of stylish vehicles to enjoy the night in comfort. Our professional chauffeurs ensure you arrive in style, while fully stocked bars and modern amenities keep the fun going. We cater to both small and large groups, making every moment memorable.",
  },
  {
    title: "Sporting Event Transportation",
    link: "/services/sporting-event-transportation",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/18%20Passenger%20Party%20Bus1.png?updatedAt=1755857554969",
    description:
      "Travel to your favorite sporting events in style with our transportation services. Whether it’s a Houston Astros game, Rockets match, or another major event, we provide safe and convenient transportation for groups of any size. Skip the parking hassle and let our chauffeurs handle everything, so you can focus on enjoying the game.",
  },
  {
    title: "Weddings – Bachelor / Bachelorette, Getaway Car",
    link: "/services/wedding-transportation",
    image: "https://ik.imagekit.io/h7rza8886p/24%20hour%20Limo%20Rental/Mercedes%20Executive%20Shuttle%20Van.jpg?updatedAt=1755857560773",
    description:
      "Celebrate your special day with our wedding limousine services. We offer elegant transportation for bachelor/bachelorette parties, the wedding party and the getaway car. Choose from a variety of luxury vehicles, and let our chauffeurs take care of the details so you can focus on making memories. We ensure punctuality, style and comfort on your big day.",
  }
];


export default function Services({ className = "" }: { className?: string }) {
  return (
    <section className={`py-16 bg-gradient-to-br from-black/90 to-[#1a1a1a]/90 text-white ${className}`} id="services">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--primary)] drop-shadow-lg">HOUSTON LIMO SERVICES</h2>
        <div className="flex flex-col gap-1">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="md:w-1/2 w-full flex items-center justify-center">
                <div className="relative w-full h-64 md:h-80 rounded-2xl shadow-2xl overflow-hidden border-4 border-[var(--primary)] bg-black/30">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full flex flex-col justify-center">
                <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 mb-4">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[var(--primary)] drop-shadow">{service.title}</h3>
                  <p className="mb-6 text-lg leading-relaxed text-white/90">{service.description}</p>
                    <Link href={service.link}>
                  <button className="relative inline-block px-8 py-3 rounded-full bg-transparent text-[color:var(--primary)] font-semibold text-lg shadow-xl border-2 border-[color:var(--primary)] overflow-hidden button-shine hover:bg-[color:var(--primary)] hover:text-primary-foreground hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[color:var(--primary)]/40 w-fit">
                   <span className="relative z-10">LEARN MORE</span>
                    <span className="shine" />
                  </button>
                   </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
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
      `}</style>
    </section>
  );
}
