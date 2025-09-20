// components/BookingCTA.tsx
import Contact from "@/app/config/site.json"
export default function BookingCTA({ bookingCTA }: { bookingCTA?: { heading: string; text: string; ctas: { label: string; href: string }[] } }) {
  if (!bookingCTA) return null;
  return (
    <section className="py-12 bg-secondary text-white text-center">
      <h2 className="text-2xl font-bold mb-4">{bookingCTA.heading}</h2>
      <p className="mb-6">{bookingCTA.text}</p>
      <div className="flex justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-primary text-black font-semibold rounded shadow hover:brightness-110 transition-colors"
          >
           Request a Quote
          </a>
          <a
            href={`tel:${Contact.tel}`}
            className="px-6 py-3 bg-primary text-black font-semibold rounded shadow hover:brightness-110 transition-colors"
          >
           Book Now
          </a>
      </div>
    </section>
  );
}
