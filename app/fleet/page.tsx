
import FleetPage from "./FleetPage";
import { generateCanonicalMetadata } from "@/lib/seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnhancedBanner from "../components/EnhancedBanner";

export async function generateMetadata() {
  return generateCanonicalMetadata({
    title: "Premium Fleet in Houston | Houston Luxury Vehicle Fleet",
    description:
      "Travel in style across Houston with our luxury fleet. Choose from sedans, SUVs, limousines, Sprinter vans, and shuttle buses for corporate events, proms, or group outings.",
    canonical: "fleet",
  });
}

export default function FleetPageWrapper() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
       
        <FleetPage />
      </main>
      <Footer />
    </div>
  );
}
