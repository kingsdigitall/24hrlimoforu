"use client";

import { useState, useMemo } from "react";
import Contact from "@/app/config/site.json"
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import fleetContent from "./content.json";
import EnhancedBanner from "../components/EnhancedBanner";

type Vehicle = {
  id: string;
  name: string;
  description: string;
  image: string;
  capacity: string;
  features: string[];
  category: string;
};

type Category = {
  id: string;
  name: string;
  description: string;
};

export default function FleetPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const { vehicles, categories, hero, cta, features } = fleetContent;

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle: Vehicle) => {
      const matchesCategory = selectedCategory === "all" || vehicle.category === selectedCategory;
      const matchesSearch = vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           vehicle.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [vehicles, selectedCategory, searchQuery]);

  const handleVehicleClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const closeModal = () => {
    setSelectedVehicle(null);
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      {/* <Header /> */}
      
      <main className="f1 flex flex-col">
      <EnhancedBanner 
          title="Our Premium Fleet"
          subtitle="Luxury Vehicles"
          description="Choose from our extensive collection of luxury vehicles for any occasion"
          showCarousel={true}
        />

        {/* Search and Filter Section */}
        <section className="py-8 md:py-12 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-center justify-between">
              {/* Search */}
              <div className="flex-1 w-full lg:max-w-md">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 md:px-6 py-3 md:py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 backdrop-blur-xl focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent"
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 md:gap-3 w-full lg:w-auto justify-center lg:justify-end">
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-200 text-sm md:text-base ${
                    selectedCategory === "all"
                      ? "bg-[color:var(--primary)] text-black shadow-lg"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                  }`}
                >
                  All Vehicles
                </button>
                {categories.map((category: Category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all duration-200 text-sm md:text-base ${
                      selectedCategory === category.id
                        ? "bg-[color:var(--primary)] text-black shadow-lg"
                        : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Grid */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#232526] via-[#414345] to-[#FFD70011]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredVehicles.map((vehicle: Vehicle, index: number) => (
                <div
                  key={vehicle.id}
                  onClick={() => handleVehicleClick(vehicle)}
                  className="group bg-black/60 backdrop-blur-xl border border-[color:var(--primary)]/40 rounded-3xl shadow-2xl p-4 md:p-6 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_8px_var(--primary)] hover:border-[color:var(--primary)]"
                >
                  <div className="relative mb-4 md:mb-6">
                    <div className="w-full h-40 md:h-48 relative rounded-2xl overflow-hidden shadow-lg border-4 border-[color:var(--primary)] bg-black/30">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-gradient-to-r from-[color:var(--primary)] via-[color:var(--primary-light)] to-[color:var(--primary)] text-black text-xs font-bold px-2 md:px-3 py-1 rounded-full shadow-md">
                      #{index + 1}
                    </div>
                    <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/70 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full">
                      {vehicle.capacity}
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-3 text-white leading-tight uppercase tracking-wide">
                    {vehicle.name}
                  </h3>
                  
                  <p className="text-white/90 text-sm md:text-base mb-3 md:mb-4 ">
                    {vehicle.description}
                  </p>
                  
    {/* <div className="text-[color:var(--primary)] font-semibold text-sm">
                    Click to learn more →
                  </div> */}
                </div>
              ))}
            </div>
            
            {filteredVehicles.length === 0 && (
              <div className="text-center py-12 md:py-16">
                <div className="text-white/60 text-lg md:text-xl mb-4">No vehicles found</div>
                <button
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearchQuery("");
                  }}
                  className="px-6 md:px-8 py-3 bg-[color:var(--primary)] text-black font-semibold rounded-full hover:brightness-110 transition-all duration-200"
                >
                  View All Vehicles
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-white/5 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Fleet?</h2>
              <p className="text-white/80 text-base md:text-lg max-w-3xl mx-auto">
                Experience the highest standards of luxury transportation with our premium fleet
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[color:var(--primary)] rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {feature.icon === "shield" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      )}
                      {feature.icon === "clock" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                      {feature.icon === "star" && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976-2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      )}
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/80 text-sm md:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--primary-light)]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6">
              {cta.title}
            </h2>
            <p className="text-black/80 text-lg md:text-xl mb-6 md:mb-8">
              {cta.subtitle}
            </p>
            <a
             href={`tel:${Contact.tel}`}
              className="inline-block  px-8 md:px-12 py-3 md:py-4 bg-black text-white font-bold text-base md:text-lg rounded-full shadow-xl hover:bg-gray-800 transition-all duration-200"
            >
              {cta.buttonText}
            </a>
          </div>
        </section>
      </main>

      {/* <Footer /> */}

      {/* Vehicle Detail Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/90 border border-[color:var(--primary)]/40 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 md:p-6">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white pr-4">{selectedVehicle.name}</h2>
                <button
                  onClick={closeModal}
                  className="text-white/60 hover:text-white text-2xl p-2 hover:bg-white/10 rounded-full transition-colors flex-shrink-0"
                >
                  ×
                </button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                <div className="relative h-60 md:h-80 rounded-2xl overflow-hidden border-4 border-[color:var(--primary)]">
                  <Image
                    src={selectedVehicle.image}
                    alt={selectedVehicle.name}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[color:var(--primary)] mb-2">Capacity</h3>
                    <p className="text-white/90">{selectedVehicle.capacity}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[color:var(--primary)] mb-2">Description</h3>
                    <p className="text-white/90">{selectedVehicle.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[color:var(--primary)] mb-2">Features</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedVehicle.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 md:px-3 py-1 md:py-2 bg-white/10 text-white/80 rounded-full border border-white/20 text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <a
                    href={`tel:${Contact.tel}`}
                    className="inline-block w-full text-center px-6 md:px-8 py-3 md:py-4 bg-[color:var(--primary)] text-black font-bold rounded-full hover:brightness-110 transition-all duration-200"
                  >
                    Book This Vehicle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
