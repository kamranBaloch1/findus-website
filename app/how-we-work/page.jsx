"use client";

import { motion } from "framer-motion";

// React Icons (replacing Lucide)
import { FaCheckCircle, FaShieldAlt, FaWallet, FaStar, FaVideo } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

export default function HowWeWork() {
  return (
    <main className="w-full font-inter bg-white">

      {/* HERO SECTION */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-green-50"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#77B900] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2"
          >
            How FindUs <span className="text-[#77B900]">Works</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed px-2"
          >
            A platform designed for real people and real work.
            <br className="hidden sm:block" />
            Connect, collaborate, and get things done.
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-14 shadow-sm">
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed text-center">
              FindUs connects people who need help with verified professionals who have the skills
              to solve it. Record your problem, receive offers from trusted experts nearby,
              and get the job done — efficiently and transparently.
            </p>
          </div>
        </div>
      </section>

      {/* FOR USERS */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#77B900] text-white rounded-full text-xs sm:text-sm font-semibold"
            >
              For Users
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Help is One Tap Away
            </h2>

            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              A seamless experience from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                step: "1",
                title: "Choose a Service",
                desc: "Find services customized to match what you’re looking for.",
                icon: FaCheckCircle,
                color: "from-emerald-500 to-[#77B900]",
              },
              {
                step: "2",
                title: "Record a Video",
                desc: "A few seconds clip helps professionals understand your problem clearly.",
                icon: FaVideo,
                color: "from-blue-500 to-cyan-500",
              },
              {
                step: "3",
                title: "Receive Offers",
                desc: "Verified professionals respond with prices, experience, and ratings.",
                icon: FaStar,
                color: "from-amber-500 to-orange-500",
              },
              {
                step: "4",
                title: "Choose the Best",
                desc: "Compare offers and select the expert that fits your budget and needs.",
                icon: MdTrendingUp,
                color: "from-purple-500 to-pink-500",
              },
              {
                step: "5",
                title: "Pay in Cash",
                desc: "Simple and familiar. Providers receive payment directly from you.",
                icon: FaWallet,
                color: "from-green-500 to-emerald-600",
              },
              {
                step: "6",
                title: "Rate & Review",
                desc: "Your feedback builds a safer, more trusted community for everyone.",
                icon: FaShieldAlt,
                color: "from-indigo-500 to-blue-600",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#77B900]/20"
              >
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-r ${item.color}`}></div>

                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${item.color} text-white mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-xl sm:text-2xl font-bold text-gray-300">0{item.step}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h3>
                </div>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR PROVIDERS */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#77B900] text-white rounded-full text-xs sm:text-sm font-semibold"
            >
              For Workers
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Earn With Your Skills
            </h2>

            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              A fair system built for Pakistan's workforce — no degrees required
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">

            {[
              { step: "1", title: "Verify Your Identity", desc: "CNIC, live selfie, and NADRA verification ensure safety for all. Once approved, your profile goes live." },
              { step: "2", title: "Receive Job Requests", desc: "Get job requests from users in your area. Watch the video and decide if you want to respond." },
              { step: "3", title: "Set Your Own Price", desc: "You control your rates — no interference or fixed pricing. Your experience and skill determine your worth." },
              { step: "4", title: "Earn Cash Directly", desc: "Users pay you in cash after the job. You receive 100% of the agreed amount — no deductions from earnings." },
              { step: "5", title: "Top-Up Wallet System", desc: "Commission is deducted from your wallet, not your job earnings. Start with a FREE 2000 PKR bonus!", highlight: true },
              { step: "6", title: "Grow Your Level", desc: "Progress from Starter → Pro → Expert. Higher ratings unlock better visibility and lower commission." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative bg-gradient-to-br ${
                  item.highlight ? "from-[#77B900]/5 to-emerald-50" : "from-white to-gray-50"
                } rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md border ${
                  item.highlight ? "border-[#77B900]/30" : "border-gray-200"
                }`}
              >
              

                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#77B900] text-white font-bold text-base sm:text-lg shadow-md">
                    {item.step}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 pt-1">{item.title}</h3>
                </div>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">{item.desc}</p>

                {/* Wallet System Details */}
                {item.step === "5" && (
                  <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm">
                      <h4 className="text-base sm:text-lg font-bold text-[#77B900] mb-3 sm:mb-4 flex items-center gap-2">
                        <div className="w-1 h-4 sm:h-5 bg-[#77B900] rounded-full"></div>
                        Commission Rates
                      </h4>

                      <div className="space-y-2 sm:space-y-3">
                        <div className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm sm:text-base font-semibold text-gray-900">Starter Level</span>
                          <span className="text-sm sm:text-base text-gray-700 font-medium">15% commission</span>
                        </div>

                        <div className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm sm:text-base font-semibold text-gray-900">Pro Level</span>
                          <span className="text-sm sm:text-base text-gray-700 font-medium">10% commission</span>
                        </div>

                        <div className="flex items-center justify-between p-2.5 sm:p-3 bg-gray-50 rounded-lg">
                          <span className="text-sm sm:text-base font-semibold text-gray-900">Expert Level</span>
                          <span className="text-sm sm:text-base text-gray-700 font-medium">8% commission</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-[#77B900] to-emerald-600 rounded-lg sm:rounded-xl p-4 sm:p-6 text-white shadow-lg">
                      <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 flex items-center gap-2">
                        <FaWallet className="w-4 h-4 sm:w-5 sm:h-5" />
                        Welcome Bonus
                      </h4>
                      <p className="text-sm sm:text-base text-emerald-50 leading-relaxed">
                        Every new worker gets a <span className="font-bold text-white">FREE 2,000 PKR</span>{" "}
                        top-up balance added automatically. Start working immediately without adding money!
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-200">
                      <h4 className="text-base sm:text-lg font-bold text-blue-900 mb-2">How It Works</h4>
                      <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                        Commission is deducted from your wallet, not your cash earnings.
                        Work freely and earn the full amount from customers. Top up when needed.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-[#77B900] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full"
          >
            <FaShieldAlt className="w-4 h-4 sm:w-5 sm:h-5 text-[#77B900]" />
            <span className="text-xs sm:text-sm font-semibold">Verified & Secure</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">Trust & Safety First</h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            Trust is the foundation of FindUs. Every provider undergoes identity verification,
            background checks, and continuous performance tracking to create a safe,
            reliable ecosystem for everyone.
          </p>
        </div>
      </section>

      {/* SUMMARY CTA */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-xl border border-gray-200"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Simple & Effortless
            </h2>

            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-700 mb-6 sm:mb-8">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 text-[#77B900] rounded-full">Record</span>
              <span className="text-gray-400">→</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full">Receive Offers</span>
              <span className="text-gray-400 hidden xs:inline">→</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-100 text-purple-700 rounded-full">Choose</span>
              <span className="text-gray-400 hidden xs:inline">→</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-100 text-amber-700 rounded-full">Get It Done</span>
              <span className="text-gray-400 hidden xs:inline">→</span>
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-700 rounded-full">Pay Cash</span>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              This is how everyday problems are solved — without confusion, without hassle,
              without compromise.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}