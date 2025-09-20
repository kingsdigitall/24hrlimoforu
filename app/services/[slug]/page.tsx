import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';
import WhyChoose from '../../components/WhyChoose';
import { getServiceBySlug, services } from '../data';
import { generateCanonicalMetadata } from '@/lib/seo';
import site from '@/app/config/site.json';
import { headers } from 'next/headers';
import Faq from '../../components/Faq';
import BookingCTA from '@/app/components/BookingCTA';
import Fleet from '@/app/components/Fleet';
import FleetSection from '@/app/components/FleetSection';
import EnhancedBanner from '@/app/components/EnhancedBanner';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  const h = await headers();
  const host =
    h.get("x-forwarded-host") ||
    h.get("host") ||
    "localhost:3000";

  const proto =
    h.get("x-forwarded-proto") ||
    (host.includes("localhost") ? "http" : "https");

  const origin = `${proto}://${host}`;
  return {
    title: `${service.metaTitle} `,
    description: service.metaDescription,
    alternates: {
      canonical: origin + `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return notFound();

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <EnhancedBanner 
          title={service.title}
          subtitle="Premium Service"
          description={service.short}
          showCarousel={true}
        />

        {/* Service overview section */}
        <section className="py-16 bg-surface/40">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              {/* Left: Service content */}
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  About Our {service.title} Service
                </h2>
                <div className="space-y-4 text-white/90">
                  {service.content.map((paragraph, idx) => (
                    <p key={idx} className="text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Right: Service image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--primary)]">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    width={600} 
                    height={400} 
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet showcase */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center mb-12">
              Our Fleet for {service.title}
            </h2>
            <Fleet />
          </div>
        </section>

        {/* Why choose section */}
        <section className="py-16 bg-surface/40">
          <div className="max-w-7xl mx-auto px-4">
            <WhyChoose
              heading={`WHY CHOOSE ${service.title.toUpperCase()}?`}
              short={service.short}
              content={service.content}
              image={service.image}
              className="mt-0"
            />
          </div>
        </section>

        {/* Fleet section */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4">
            <FleetSection fleet={service.fleet}/>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-16 bg-surface/40">
          <div className="max-w-7xl mx-auto px-4">
            <BookingCTA bookingCTA={service.bookingCTA}/>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Faq faq={service.faq}/>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


