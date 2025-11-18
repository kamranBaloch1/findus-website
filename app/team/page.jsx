"use client";

import { motion } from "framer-motion";
import { FaUserTie, FaHeart, FaHandshake, FaBullseye } from "react-icons/fa";

const team = [
  {
    name: "Kamran Baluch",
    role: "Co-Founder & Product Developer",
    img: "/kamran.jpeg",
    bio: "Building modern digital solutions that empower everyday people. Leads the product vision, development, and future roadmap of FindUs.",
  },
  {
    name: "Shahban Rashid",
    role: "Co-Founder & Product Designer",
    img: "/shahban.jpg",
    bio: "Designing clean, intuitive experiences with purpose. Shapes how FindUs feels — simple, modern, and built for real-world use.",
  },
];

export default function TeamPage() {
  return (
    <main className="w-full font-inter bg-white">

      {/* HERO SECTION */}
      <section className="relative w-full py-20 md:py-32 px-5 md:px-12 overflow-hidden">
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50"></div>

        {/* Floating blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-5 w-48 h-48 md:w-72 md:h-72 bg-[#77B900] rounded-full blur-[90px]"></div>
          <div className="absolute bottom-10 right-5 w-64 h-64 md:w-96 md:h-96 bg-emerald-300 rounded-full blur-[110px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-[#77B900] rounded-full text-xs md:text-sm font-semibold"
          >
            Meet the Founders
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
          >
            The People Behind <span className="text-[#77B900]">FindUs</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-600 leading-relaxed"
          >
            A dedicated team with a massive mission — transforming how Pakistan finds trustworthy help.
          </motion.p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="w-full py-16 md:py-20 px-5 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl p-8 md:p-10 shadow-md hover:shadow-xl border border-gray-100 hover:border-[#77B900]/30 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 rounded-t-3xl bg-gradient-to-r from-[#77B900] to-emerald-500"></div>

              <div className="flex flex-col items-center text-center">
                
                {/* Avatar */}
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 overflow-hidden shadow-lg mb-5 md:mb-6 group-hover:scale-105 transition-transform duration-300">
                  {member.img ? (
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <FaUserTie className="w-10 h-10 text-gray-500 mx-auto mt-10" />
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#77B900] mt-1 md:mt-2 text-base md:text-lg font-semibold">{member.role}</p>

                <p className="mt-3 md:mt-4 text-gray-600 leading-relaxed max-w-md text-sm md:text-base">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* STORY SECTION */}
      <section className="w-full py-16 md:py-20 px-5 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6"
          >
            Our Story
          </motion.h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto px-1">
            FindUs began with a simple realization: in Pakistan, finding trusted workers depends on luck.
            People needed reliability — workers needed stability. We decided to build a platform that offers both.

            <br /><br />

            With a passion for design and technology, we committed to building a product that feels modern,
            solves real problems, and empowers both users and workers.
          </p>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="w-full py-16 md:py-20 px-5 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">Our Values</h2>
          <p className="text-gray-600 text-base md:text-lg">
            What drives every decision we make
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Trust */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <FaHandshake className="w-9 h-9 md:w-10 md:h-10 text-[#77B900] mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Trust</h3>
            <p className="text-gray-600 text-sm md:text-base">Every decision we make prioritizes safety and transparency.</p>
          </motion.div>

          {/* Reliability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <FaBullseye className="w-9 h-9 md:w-10 md:h-10 text-[#77B900] mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Reliability</h3>
            <p className="text-gray-600 text-sm md:text-base">We focus on quality, consistency, and delivering what matters.</p>
          </motion.div>

          {/* Empathy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
          >
            <FaHeart className="w-9 h-9 md:w-10 md:h-10 text-[#77B900] mb-4 mx-auto" />
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Care</h3>
            <p className="text-gray-600 text-sm md:text-base">We build with empathy — for users, workers, and communities.</p>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
