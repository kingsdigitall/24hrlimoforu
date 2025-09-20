import { FiPhone, FiMail, FiMapPin, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";
import site from "@/app/config/site.json";

type ContactProps = {
  className?: string;
  phone?: string;
  email?: string;
  address?: string;
};

export default function Contact({ 
  className = "", 
  phone = site.No, 
  email = site.mail, 
  address = site.address 
}: ContactProps) {
  return (
    <section className={`py-20 bg-surface ${className}`} id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 luxury-badge mb-4">
            <span className="rating-text">Available 24/7</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Contact Us</h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-primary/80" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="space-y-5 text-gray-300">
            <div className="flex items-start gap-3">
              <span className=" h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                <FiPhone size={20} className="mt-2 ml-2"/>
              </span>
              <div>
                <div className="text-sm uppercase tracking-wide text-gray-400">Phone</div>
                <a href={`tel:${phone}`} className="text-lg font-semibold text-white hover:text-primary transition">{phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className=" h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                <FiMail size={20} className="mt-2 ml-2" />
              </span>
              <div>
                <div className="text-sm uppercase tracking-wide text-gray-400">Email</div>
                <a href={`mailto:${email}`} className="text-lg font-semibold text-white hover:text-primary transition">{email}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className=" h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                <FiMapPin size={20} className="mt-2 ml-2"/>
              </span>
              <div>
                <div className="text-sm uppercase tracking-wide text-gray-400">Address</div>
                <div className="text-lg font-semibold text-white">{address}</div>
              </div>
            </div>
            <div className="w-full h-40 sm:h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-black/20 to-white/5 flex items-center justify-center text-gray-400">
              <div className="inline-flex items-center gap-2">
                <FiMapPin className="opacity-70" />
                <span>[Map Placeholder]</span>
              </div>
            </div>
          </div>
          <form className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur p-6 md:p-8 flex flex-col gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
            <label className="sr-only" htmlFor="contact-name">Full name</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <FiUser size={18} />
              </div>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Full name"
                autoComplete="name"
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary/60 transition"
              />
            </div>

            <label className="sr-only" htmlFor="contact-email">Email address</label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                <FiMail size={18} />
              </div>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Email address"
                autoComplete="email"
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary/60 transition"
              />
            </div>

            <label className="sr-only" htmlFor="contact-message">Message</label>
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-3 pl-4 text-gray-400">
                <FiMessageSquare size={18} />
              </div>
              <textarea
                id="contact-message"
                name="message"
                placeholder="How can we help you?"
                rows={5}
                required
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-primary/30 focus:border-primary/60 transition"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg shadow-black/30 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-primary/40 transition w-full md:w-auto"
            >
              <FiSend />
              <span>Send Message</span>
            </button>
            <p className="text-xs text-gray-400 text-center">We typically respond within 10 minutes.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
