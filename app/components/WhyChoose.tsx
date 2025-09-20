'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import site from "@/app/config/site.json";

type WhyChooseProps = {
  heading: string; // already formatted heading text
  short: string;
  content: string[];
  image: string;
  ctaHref?: string;
  ctaText?: string;
  className?: string;
};

export default function WhyChoose({ heading, short, content, image, ctaHref = `'/booking'`, ctaText = 'Get An Instant Quote & Book Ride', className = '' }: WhyChooseProps) {
  return (
    <section className={`relative flex items-center min-h-[420px] sm:min-h-[520px] text-white overflow-hidden ${className}`}>
      {/* Right half: image only */}
      <div className="absolute inset-y-0 right-0 w-1/2">
        <Image src={image} alt={heading} fill priority className="object-cover object-center" />
      </div>
      {/* Left half: solid black with fade into image */}
      <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black via-black/90 to-transparent" />

      <div className="relative z-10 w-full">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide uppercase text-[var(--primary)]">{heading}</h2>
          <div className="h-[2px] w-56 bg-[var(--primary)] mt-3 mb-6" />

          <div className="space-y-4 text-white/90 max-w-3xl">
            {content.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg leading-relaxed">{paragraph}</p>
            ))}
          </div>
          <Link
            href={`tel:${site.tel}`}
            className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-md bg-[color:var(--primary)] text-black font-semibold shadow-lg hover:brightness-110 transition-colors"
          >
            <FaCheckCircle />
            <span>{ctaText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}


