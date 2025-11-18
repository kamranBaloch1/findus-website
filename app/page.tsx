"use client";

import Image from "next/image";
import ServiceCategories from "@/components/ServiceCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full font-inter bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 pt-28 pb-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 font-inter">
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">

          {/* LEFT — TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#77B900] leading-tight mb-4 sm:mb-6">
              Hire trusted professionals.
              <br />
              Fast, easy, local.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-[#3E4A25] leading-relaxed mb-6 sm:mb-8 max-w-xl">
              FindUs connects you with trusted local service experts. Quick
              booking, reliable service, and transparent pricing.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
              {["✓ Verified Professionals", "✓ Fast & Secure Booking", "✓ Local & Reliable"].map(
                (text, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 bg-white shadow-sm rounded-full border border-gray-200 text-[#77B900] text-xs sm:text-sm font-medium"
                  >
                    {text}
                  </div>
                )
              )}
            </div>

            <div className="flex gap-4 flex-wrap">
              <Link href="/how-we-work">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 sm:px-7 py-3 bg-[#77B900] text-white font-semibold rounded-xl shadow-md hover:bg-[#5C8D00] transition text-sm sm:text-base"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[480px] md:max-w-[650px] lg:max-w-[750px] mx-auto">
              <Image
                src="/hero_img.png"
                alt="FindUs Professionals"
                width={750}
                height={750}
                className="object-contain w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceCategories />

      {/* ================= HOW IT WORKS ================= */}
      <section className="w-full py-20 sm:py-24 px-6 sm:px-8 md:px-12 bg-[#F8F9FB] font-inter">
        <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#77B900] mb-4">
            How It Works
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl mx-auto">
            Simple 4-step process to get professional help fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-10 md:gap-8 max-w-6xl mx-auto">
          {[
            { number: 1, title: "Search Services", desc: "Find the service you need in your area." },
            { number: 2, title: "Book Instantly", desc: "Schedule a professional in just a few clicks." },
            { number: 3, title: "Enjoy Services", desc: "Receive service at your doorstep." },
            { number: 4, title: "Review & Repeat", desc: "Rate your experience and book again." }
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#77B900]/20 text-[#77B900] rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl mb-4">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <WhyChooseUs />

      {/* ================= OUR PROMISE ================= */}
      <section className="w-full py-20 sm:py-24 px-6 sm:px-8 md:px-12 bg-[#F8F9FB] font-inter">
        <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#77B900] mb-4">
            Why FindUs Matters
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            FindUs connects you with verified professionals quickly and reliably.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto">
          {[
            { icon: "🌟", title: "Trusted Professionals", text: "All service providers are carefully verified." },
            { icon: "⚡", title: "Fast & Easy Booking", text: "Schedule services in minutes." },
            { icon: "🤝", title: "Reliable & Local", text: "Connect with professionals in your neighborhood." }
          ].map((card, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#77B900] mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="w-full py-20 sm:py-24 px-6 sm:px-8 md:px-12 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#77B900] mb-4">
          Experience Trusted Services with FindUs
        </h2>
        <p className="text-gray-700 mb-8 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
          Verified professionals in your neighborhood—fast, reliable, and secure.
        </p>

        <Link href="/how-we-work">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-8 sm:px-10 py-3.5 bg-[#77B900] text-white font-semibold rounded-xl shadow-md hover:bg-[#5C8D00] transition text-sm sm:text-base"
          >
            How We Work
          </motion.button>
        </Link>
      </section>

    </main>
  );
}
