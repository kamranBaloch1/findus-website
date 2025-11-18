"use client";

import {
  FaUserCheck,
  FaBolt,
  FaHeadset,
  FaDollarSign,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Verified Professionals",
      desc: "Every professional is vetted and certified.",
      icon: <FaUserCheck className="text-3xl sm:text-4xl text-[#77B900] mx-auto mb-3 sm:mb-4" />,
    },
    {
      title: "Fast Booking",
      desc: "Book a professional in minutes.",
      icon: <FaBolt className="text-3xl sm:text-4xl text-[#77B900] mx-auto mb-3 sm:mb-4" />,
    },
    {
      title: "Customer Support",
      desc: "We are here to help whenever you need us.",
      icon: <FaHeadset className="text-3xl sm:text-4xl text-[#77B900] mx-auto mb-3 sm:mb-4" />,
    },
    {
      title: "Transparent Pricing",
      desc: "No hidden fees or surprise charges.",
      icon: <FaDollarSign className="text-3xl sm:text-4xl text-[#77B900] mx-auto mb-3 sm:mb-4" />,
    },
    {
      title: "24/7 Availability",
      desc: "Book services anytime, anywhere.",
      icon: <FaClock className="text-3xl sm:text-4xl text-[#77B900] mx-auto mb-3 sm:mb-4" />,
    },
    {
      title: "Insurance & Guarantee",
      desc: "All services come with quality assurance.",
      icon: <FaShieldAlt className="text-3xl sm:text-4xl text-[#77B900] mx-auto mb-3 sm:mb-4" />,
    },
  ];

  return (
    <section className="w-full font-inter py-20 sm:py-24 px-5 sm:px-8 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#77B900] mb-3 sm:mb-4">
          Why Choose FindUs?
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
          Trusted by thousands for fast, reliable, and verified home services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {points.map((point, idx) => (
          <div
            key={idx}
            className="p-6 bg-[#F8F9FB] rounded-2xl shadow text-center hover:shadow-md transition-all md:hover:scale-[1.03]"
          >
            {point.icon}
            <h3 className="text-lg sm:text-xl font-semibold text-[#77B900] mb-2">
              {point.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{point.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
