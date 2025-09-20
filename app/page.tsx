import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import { generateCanonicalMetadata } from "@/lib/seo";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import About from "./components/About";
import Footer from "./components/Footer";
import OurPromise from "./components/OurPromise";
import { Metadata } from "next";
import Fleet from "@/app/components/Fleet";
export async function generateMetadata() {
  return generateCanonicalMetadata({
    title: "Houston Limo & Luxury Transportation | 24 Hour Limo For You",
    description:
      "Travel in style across Houston with 24 Hour Limo For You. From airport transfers and corporate rides to weddings, proms, and sporting events, our luxury fleet ensures comfort and reliability. Book your ride online today for a seamless experience.",
  });
}

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <OurPromise />
        <Fleet />
        <Services />
        <About />
        <Testimonials />
        <Booking />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}
