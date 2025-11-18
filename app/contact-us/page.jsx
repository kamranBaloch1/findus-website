// Updated ContactPage without form — replaced with alternative CTA section
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-white font-inter">
      {/* HEADER */}
      <section className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden bg-gradient-to-br from-emerald-50 to-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#77B900] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
          >
            Get in <span className="text-[#77B900]">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mt-4 leading-relaxed"
          >
            A dedicated team with a massive mission — transforming how Pakistan
            finds trustworthy help.
            <br />
            Reach out anytime — we’re here to support you.
          </motion.p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT SIDE: CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Contact Info Box */}
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-md rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-[#77B900]">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-lg font-semibold text-gray-900">
                      contact@findus.com.pk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Box */}
            <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-md rounded-3xl p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Follow Us
              </h2>
              <p className="text-gray-600 mb-6">
                Stay updated with new features, news, and announcements.
              </p>

              <div className="flex items-center gap-4">
                <Link
                 href="https://www.facebook.com/share/1JjgKzMbyK/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#77B900] text-white "
                >
                  <FaFacebook className="w-5 h-5" />
                </Link>
                <Link
                href=""
                  target="_blank"
                  rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#77B900] text-white "
                >
                  <FaInstagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/finduspk/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                 className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#77B900] text-white "
                >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: REPLACEMENT FOR FORM */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-md p-10 space-y-8 text-center flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Want to Reach Out?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              You can contact us directly anytime via email or message us on our
              social media platforms. Our team responds within 24 hours.
            </p>

            <div className="mt-6">
              <a
                href="mailto:support@findus.pk"
                className="inline-block px-8 py-4 bg-[#77B900] text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-[#6aad00] transition"
              >
                Email Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="w-full py-20 px-6 md:px-12 bg-white text-center text-black relative overflow-hidden shadow-2xl rounded-2xl">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#77B900] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-700 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">
            Here to Help, Every Step of the Way
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg leading-relaxed">
            Whether you're exploring services or offering your expertise, our
            team is ready to support you with guidance, answers, and real
            solutions.
          </p>
        </div>
      </section>
    </main>
  );
}
