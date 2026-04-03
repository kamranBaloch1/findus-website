"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-emerald-50 to-white px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Privacy <span className="text-[#77B900]">Policy</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how FindUs collects, uses, and protects your information.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Last updated: 3 March 2026
          </p>

          {/* Jump to Delete Account button */}
          <div className="mt-8">
            <a
              href="#delete-account"
              className="inline-flex items-center gap-2 bg-[#fff0f0] border border-[#fcc] text-[#c0392b] text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#ffe4e4] transition-colors"
            >
              <span className="w-2 h-2 bg-[#e74c3c] rounded-full"></span>
              Delete Your Account
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
            </a>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white border border-gray-200 rounded-3xl shadow-xl p-10 md:p-14">

          <section className="space-y-12 text-gray-800 text-[17px] leading-relaxed">

            {/* Intro */}
            <p>
              FindUs is a platform connecting users with service providers. This Privacy Policy explains how we collect, use, and protect your information.
            </p>

            {/* ================= SECTION 1 ================= */}
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>Personal information (name, phone, email)</li>
                <li>Profile and account data</li>
                <li>Location data (for service matching)</li>
                <li>Media uploads (images, videos)</li>
                <li>Communication data (calls, chat)</li>
              </ul>
            </div>

            {/* ================= SECTION 2 ================= */}
            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
              <ul className="ml-6 list-disc space-y-2">
                <li>Provide and improve services</li>
                <li>Connect users with service providers</li>
                <li>Enable communication and support</li>
                <li>Ensure safety and prevent fraud</li>
              </ul>
            </div>

            {/* ================= SECTION 3 ================= */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. Data Sharing</h2>
              <p>
                We do not sell personal data. Limited information is shared only to facilitate services or comply with legal requirements.
              </p>
            </div>

            {/* ================= SECTION 4 ================= */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p>
                We implement security measures to protect your data, but no system is completely secure.
              </p>
            </div>

            {/* ================= SECTION 5 ================= */}
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
              <p>
                Data is retained only as long as necessary for operations, legal requirements, and safety.
              </p>
            </div>

            {/* ================= SECTION 6 ================= */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. User Rights & Account Deletion</h2>

              {/* In-App Deletion */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-lg">Delete Your Account (In-App)</h3>
                <ul className="mt-3 ml-6 list-disc">
                  <li>Open FindUs app</li>
                  <li>Go to Profile</li>
                  <li>Open Settings</li>
                  <li>Tap Delete Account</li>
                  <li>Confirm deletion</li>
                </ul>
              </div>

              {/* What Happens */}
              <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-lg text-red-900">What happens after deletion</h3>
                <ul className="mt-3 ml-6 list-disc">
                  <li>Your account is permanently deactivated</li>
                  <li>You cannot log in again</li>
                  <li>Your profile becomes invisible</li>
                  <li>Active sessions are terminated</li>
                </ul>
              </div>

              {/* Data Retention */}
              <div className="mt-6">
                <h3 className="font-semibold text-lg">Data retention after deletion</h3>
                <p className="mt-2">
                  Some data may be retained for legal and compliance purposes such as transaction records.
                </p>
              </div>

              {/* External deletion (CRITICAL FIX) */}
              <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-green-900">
                  Request Account Deletion Without App Access
                </h3>

                <p className="mt-3">
                 If you are unable to access the app, you can request account deletion manually.
                </p>

                <div className="mt-4 bg-white border rounded-lg p-4">
                  <p><strong>Email:</strong> contact@findus.com.pk</p>
                  <p><strong>Subject:</strong> Delete My Account</p>
                  <p><strong>Include:</strong> Your registered phone number or email</p>
                </div>
              </div>

            </div>

            {/* ================= SECTION 7 ================= */}
            <div>
              <h2 className="text-2xl font-bold mb-4">7. Contact</h2>
              <p>
                Email: contact@findus.com.pk
              </p>
            </div>

          </section>
        </motion.div>

        {/* ================= DELETE ACCOUNT SECTION (merged from DeleteAccountPage) ================= */}
        <div id="delete-account" className="mt-16 scroll-mt-10">

          {/* Hero */}
          <section className="text-center px-6 py-20 bg-gradient-to-br from-[#fff7f7] via-white to-[#f5fae8] border border-[#e2e8d8] rounded-3xl">
            <div className="inline-flex items-center gap-2 bg-[#fff0f0] border border-[#fcc] text-[#c0392b] text-xs px-4 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-[#e74c3c] rounded-full"></span>
              Account Deletion
            </div>

            <h1 className="text-4xl font-semibold text-[#1a2e0f] mb-4">
              Delete Your <span className="text-[#e74c3c]">FindUs Account</span>
            </h1>

            <p className="text-[#5a6e4a] max-w-lg mx-auto text-sm leading-relaxed">
              This page explains how to permanently delete your FindUs account,
              what happens to your data, and your rights as a user or partner.
            </p>
          </section>

          <div className="max-w-3xl mx-auto pb-24">

            {/* Steps */}
            <section className="bg-white border border-[#dde8cc] rounded-2xl p-7 mt-8">
              <h2 className="text-base font-semibold text-[#1a2e0f] mb-2">
                How to delete your account
              </h2>

              <p className="text-sm text-[#7a8e6a] mb-6">
                Follow these steps inside the FindUs app
              </p>

              <div className="space-y-5">
                {[
                  "Open the FindUs app (User or Partner)",
                  "Go to your Profile",
                  "Open Settings",
                  "Tap Delete Account",
                  "Review details and confirm"
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-8 h-8 bg-[#77B900] text-white text-sm font-semibold rounded-full flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-sm text-[#3a4e2a]">{step}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* What Happens */}
            <section className="bg-white border border-[#dde8cc] rounded-2xl p-7 mt-6">
              <h2 className="text-base font-semibold text-[#1a2e0f] mb-2">
                What happens after deletion
              </h2>

              <p className="text-sm text-[#7a8e6a] mb-5">
                These changes take effect immediately
              </p>

              <ul className="space-y-3 text-sm text-[#3a4e2a]">
                <li>• Your account is permanently deactivated</li>
                <li>• You will no longer be able to log in</li>
                <li>• Your profile becomes invisible to others</li>
                <li>• Active sessions are terminated instantly</li>
                <li>• You cannot request or accept work</li>
              </ul>

              <div className="mt-5 bg-[#fff8ee] border border-[#f5c97a] border-l-4 border-l-[#f5c97a] rounded p-4 text-sm text-[#6b4a00]">
                <strong>Partners:</strong> Any remaining wallet balance will be forfeited.
                Partners: If you have remaining wallet balance, please contact support before deleting your account. Currently, withdrawals are not available in the app.
              </div>
            </section>

            {/* Data Retention */}
            <section className="bg-white border border-[#dde8cc] rounded-2xl p-7 mt-6">
              <h2 className="text-base font-semibold text-[#1a2e0f] mb-2">
                What happens to your data
              </h2>

              <p className="text-sm text-[#7a8e6a] mb-6">
                We retain some information for legal, safety, and compliance purposes
              </p>

              <div className="grid grid-cols-2 gap-4">

                <div className="border border-[#dde8cc] rounded-lg p-4">
                  <div className="text-xs font-semibold text-[#77B900] uppercase">Personal Info</div>
                  <div className="text-lg font-semibold text-[#1a2e0f]">90 days</div>
                  <div className="text-xs text-[#7a8e6a]">Then anonymised</div>
                </div>

                <div className="border border-[#dde8cc] rounded-lg p-4">
                  <div className="text-xs font-semibold text-[#77B900] uppercase">Transactions</div>
                  <div className="text-lg font-semibold text-[#1a2e0f]">7 years</div>
                  <div className="text-xs text-[#7a8e6a]">Legal requirement</div>
                </div>

                <div className="border border-[#dde8cc] rounded-lg p-4">
                  <div className="text-xs font-semibold text-[#77B900] uppercase">Verification (Partners)</div>
                  <div className="text-lg font-semibold text-[#1a2e0f]">2 years</div>
                  <div className="text-xs text-[#7a8e6a]">Compliance purposes</div>
                </div>

                <div className="border border-[#dde8cc] rounded-lg p-4">
                  <div className="text-xs font-semibold text-[#77B900] uppercase">Disputes</div>
                  <div className="text-lg font-semibold text-[#1a2e0f]">Case basis</div>
                  <div className="text-xs text-[#7a8e6a]">Legal handling</div>
                </div>

              </div>

              {/* Privacy */}
              <a
                href="https://findus.com.pk/privacy-policy"
                target="_blank"
                className="block mt-6 text-sm text-blue-600 underline"
              >
                Read our Privacy Policy →
              </a>
            </section>

            {/* Full Deletion */}
            <section className="bg-white border border-[#dde8cc] rounded-2xl p-7 mt-6 text-center">
              <h2 className="text-base font-semibold text-[#1a2e0f] mb-2">
                Request complete data deletion
              </h2>

              <p className="text-sm text-[#7a8e6a] mb-5">
                You can request full removal of your data (subject to legal limits)
              </p>

              <a
                href="mailto:contact@findus.com.pk?subject=Request%20for%20Complete%20Data%20Deletion"
                className="inline-block border border-[#c8dca0] rounded-lg px-5 py-3 text-sm text-[#77B900] hover:bg-[#f8faf5]"
              >
                contact@findus.com.pk
              </a>
            </section>

            <section className="bg-white border border-[#dde8cc] rounded-2xl p-7 mt-6">
              <h2 className="text-base font-semibold text-[#1a2e0f] mb-2">
                Account deletion request (without app access)
              </h2>

              <p className="text-sm text-[#7a8e6a] mb-4">
                If you are unable to access the FindUs app, you can request account deletion manually.
              </p>

              <div className="bg-[#f8faf5] border border-[#dde8cc] rounded-lg p-4 text-sm text-[#3a4e2a]">
                <p className="mb-2">
                  Send an email to:
                </p>

                <p className="font-semibold text-[#77B900] mb-3">
                  contact@findus.com.pk
                </p>

                <p className="mb-2">
                  <strong>Subject:</strong> Delete My Account
                </p>

                <p>
                  <strong>Include:</strong> Your registered phone number or email address
                </p>
              </div>
            </section>

          </div>
        </div>

      </div>
    </main>
  );
}