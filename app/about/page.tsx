import About from "../components/About";
import type { Metadata } from "next";
import Header from "../components/Header";
import content from "./content.json";
import { FiShield, FiClock, FiStar } from "react-icons/fi";
import { generateCanonicalMetadata } from "@/lib/seo";
import EnhancedBanner from "../components/EnhancedBanner";
import WhyChoose from "../components/WhyChoose";
import OurPromise from "../components/OurPromise";
import Footer from "../components/Footer";

export async function generateMetadata() {
  return generateCanonicalMetadata({
    title: "About 24 Hour Limo For You | Premium Limo & Luxury Transportation in Houston",
    description:
      "Learn more about 24 Hour Limo For You, Houston's trusted luxury transportation provider. Offering reliable, stylish limo services for airport transfers, events, weddings, and corporate travel. Discover our commitment to excellence.",
    canonical: "about",
  });
}

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <EnhancedBanner 
          title="About 24 Hour Limo For You"
          subtitle="Houston's Premium"
          description="Your Trusted Luxury Transportation Service in Houston"
          showCarousel={true}
        />
        
        {/* JSON-driven intro section */}
        <section className="py-16 bg-surface/40 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--primary)]/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[var(--primary)]/8 rounded-full blur-2xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative z-10 ">
            {/* Enhanced header with decorative elements */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-0.5 bg-[var(--primary)]"></div>
                <span className="text-[var(--primary)] text-sm font-semibold tracking-widest uppercase">About Us</span>
                <div className="w-12 h-0.5 bg-[var(--primary)]"></div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
                {content.heading}
              </h2>
              
              {content.subheading && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)]/10 border border-[var(--primary)]/20 rounded-full mb-6">
                  <span className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></span>
                  <p className="text-[var(--primary)]/90 tracking-wide uppercase text-sm font-semibold">
                    {content.subheading}
                  </p>
                </div>
              )}
              
              <div className="max-w-4xl mx-auto">
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  {content.intro}
                </p>
                
                {/* Decorative accent line */}
                <div className="w-24 h-1 bg-gradient-to-r from-[var(--primary)] to-transparent mx-auto mb-8"></div>
              </div>
            </div>

            {/* Enhanced story section with cards */}
            {content.story?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12 ">
                {content.story.map((s: string, i: number) => (
                  <div 
                    key={i} 
                    className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[var(--primary)]/30 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(251,255,0,0.1)]"
                  >
                    {/* Decorative corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[var(--primary)]/30 rounded-bl-2xl"></div>
                    
                    {/* Content with enhanced typography */}
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-[var(--primary)]/20 rounded-full flex items-center justify-center">
                          <span className="text-[var(--primary)] text-lg font-bold">
                            {i + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-white/90 text-base leading-relaxed font-medium">
                            {s}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                ))}
              </div>
            ) : null}

         

            {/* Bottom decorative accent */}
            <div className="flex justify-center mt-12">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent"></div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center mb-12">Why Choose Us</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {content.highlights?.map((h: any, i: number) => (
                <div key={h.title + i} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-6 flex gap-4 items-start hover:bg-black/40 transition-all duration-300 hover:border-[var(--primary)]/30">
                  <span className="text-primary inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                    {(h.icon === 'shield') && <FiShield className="w-6 h-6" />}
                    {(h.icon === 'clock') && <FiClock className="w-6 h-6" />}
                    {(h.icon === 'star') && <FiStar className="w-6 h-6" />}
                  </span>
                  <div>
                    <div className="text-white font-semibold text-lg">{h.title}</div>
                    <p className="text-gray-400 mt-2 leading-relaxed">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        {content.stats?.length ? (
          <section className="py-16 bg-surface/40">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center mb-12">Our Numbers</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {content.stats.map((s: any, i: number) => (
                  <div key={s.label + i} className="rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm p-6 text-center hover:bg-black/40 transition-all duration-300 hover:border-[var(--primary)]/30">
                    <div className="text-3xl sm:text-4xl font-extrabold text-[var(--primary)] mb-2">{s.value}</div>
                    <div className="text-sm text-gray-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}
        
        <OurPromise/>

        {/* CTA */}
        {content.cta && (
          <section className="py-16 bg-black/20">
            <div className="max-w-5xl mx-auto px-4 text-center">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-black/30 to-white/5 backdrop-blur-sm p-8 sm:p-12">
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">{content.cta.title}</h3>
                <p className="text-xl text-white/80 mb-8">{content.cta.subtitle}</p>
                <a 
                  href={content.cta.buttonHref} 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-lg hover:brightness-110 transition-all duration-200 hover:scale-105"
                >
                  {content.cta.buttonText}
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
