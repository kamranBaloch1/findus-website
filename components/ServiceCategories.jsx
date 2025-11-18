"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// Service categories
const serviceCategories = [
  {
    title: "Home Repair & Maintenance",
    services: [
      { name: "Electrician", img: "/home_repair_maintenance/electrician.png" },
      { name: "Plumber", img: "/home_repair_maintenance/plumber.png" },
      { name: "TV Installation", img: "/home_repair_maintenance/tv_installation.png" },
      { name: "Fan Installation", img: "/home_repair_maintenance/fan_installation.png" },
      { name: "Light Fitting", img: "/home_repair_maintenance/light_fitting.png" },
      { name: "Wall Painting", img: "/home_repair_maintenance/wall_painting.png" },
      { name: "Door Repair & Installation", img: "/home_repair_maintenance/door_repair_installation.png" },
      { name: "CCTV Installation", img: "/home_repair_maintenance/cctv_installation.png" },
      { name: "Bathroom / Washroom Fittings", img: "/home_repair_maintenance/bathroom_washroom_fitting.png" },
      { name: "Curtain/Parda Rod Fitting", img: "/home_repair_maintenance/curtain_fitting.png" },
      { name: "Handyman General Fixing", img: "/home_repair_maintenance/handyman_general_fixing.png" },
      { name: "Gas Fitting Service", img: "/home_repair_maintenance/gas_fitting_services.png" },
      { name: "Carpenter Service", img: "/home_repair_maintenance/carpenter_services.png" },
      { name: "Internet/WiFi Technician", img: "/home_repair_maintenance/internet_wifi_technician.png" },
    ]
  },
  {
    title: "Appliances & Cooling",
    services: [
      { name: "AC Installation & Repair", img: "/appliances_cooling/4.png" },
      { name: "Fridge Repair", img: "/appliances_cooling/2.png" },
      { name: "Washing Machine Repair", img: "/appliances_cooling/3.png" },
      { name: "Geyser Installation & Repair", img: "/appliances_cooling/6.png" },
      { name: "Microwave Repair", img: "/appliances_cooling/7.png" },
      { name: "Solar Panel Installation", img: "/appliances_cooling/1.png" },
      { name: "UPS/Inverter Service", img: "/appliances_cooling/8.png" },
    ]
  },
  {
    title: "Cleaning & Hygiene",
    services: [
      { name: "Sofa Cleaning", img: "/cleaning_hygiene/4.png" },
      { name: "Carpet & Mattress Cleaning", img: "/cleaning_hygiene/6.png" },
      { name: "Full Home Cleaning", img: "/cleaning_hygiene/8.png" },
      { name: "Bathroom Deep Cleaning", img: "/cleaning_hygiene/5.png" },
      { name: "Kitchen Deep Cleaning", img: "/cleaning_hygiene/2.png" },
      { name: "Water Tank Cleaning", img: "/cleaning_hygiene/3.png" },
      { name: "Pest Control", img: "/cleaning_hygiene/9.png" },
    ]
  }
];

function ServiceCarousel({ category }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const itemsPerView = { mobile: 2, sm: 3, md: 4, lg: 5 };

  const getItemsToShow = () => {
    if (typeof window === "undefined") return 5;
    if (window.innerWidth < 480) return itemsPerView.mobile;
    if (window.innerWidth < 640) return itemsPerView.sm;
    if (window.innerWidth < 768) return itemsPerView.md;
    return itemsPerView.lg;
  };

  const [itemsShow, setItemsShow] = useState(getItemsToShow());

  useEffect(() => {
    const handleResize = () => setItemsShow(getItemsToShow());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, category.services.length - itemsShow);

  // Auto-slide
  useEffect(() => {
    if (!isPaused && maxIndex > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <div
      className="relative mb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Category Header */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#77B900] flex items-center gap-3">
          <span className="w-2 h-7 bg-[#77B900] rounded-full"></span>
          {category.title}
        </h3>
        <p className="text-gray-600 ml-5 text-sm sm:text-base">
          Professional and reliable services at your doorstep
        </p>
      </motion.div>

      {/* Buttons */}
      {maxIndex > 0 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-[#77B900] p-3 rounded-full shadow-lg hover:bg-[#77B900] hover:text-white transition-all"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-[#77B900] p-3 rounded-full shadow-lg hover:bg-[#77B900] hover:text-white transition-all"
          >
            ▶
          </button>
        </>
      )}

      {/* Slider */}
      <div className="overflow-hidden px-6 sm:px-10">
        <motion.div
          className="flex gap-4 sm:gap-6"
          animate={{ x: `-${currentIndex * (100 / itemsShow)}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            width: `${(category.services.length / itemsShow) * 100}%`,
          }}
        >
          {category.services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden flex-shrink-0 p-3"
              style={{
                width: `${100 / itemsShow}%`,
              }}
            >
              <div className="relative w-full h-40 sm:h-48">
                <Image
                  src={service.img}
                  alt={service.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h4 className="text-base sm:text-lg font-bold text-[#77B900] mt-3">
                {service.name}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Fast & reliable service
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function ServiceCategories() {
  return (
    <section className="w-full py-20 sm:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#F8F9FB] to-white font-inter">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <div className="inline-block bg-[#77B900]/10 text-[#77B900] px-5 py-2 rounded-full text-sm font-semibold mb-4">
          ✨ Premium Services
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#77B900] mb-4">
          Professional Services Near You
        </h2>

        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mx-auto">
          Explore our wide range of trusted services to make your home hassle-free,
          fast, and reliable.
        </p>
      </motion.div>

      {/* Carousels */}
      <div className="max-w-7xl mx-auto">
        {serviceCategories.map((category, index) => (
          <ServiceCarousel key={index} category={category} />
        ))}
      </div>
    </section>
  );
}
