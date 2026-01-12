"use client";

import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-emerald-50 to-white px-6 md:px-12 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Privacy <span className="text-[#77B900]">Policy</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains how FindUs
            collects, uses, and protects your information across our platform.
          </p>
          <p className="text-sm text-gray-500 mt-3">
             Last updated: [13,January,2026] 
          </p>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-gray-200 rounded-3xl shadow-xl p-10 md:p-14"
        >
          <section className="space-y-10 text-gray-800 text-[17px] leading-relaxed">
            <p>
              FindUs is a service platform operating through two mobile
              applications: the FindUs User Application and the FindUs Partners
              Application. This Privacy Policy explains how FindUs collects,
              uses, stores, shares, and protects personal information when you
              use our platform and services.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                1. Information We Collect
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold">
                    1.1 Personal Information
                  </h3>
                  <p className="mt-2">
                    We may collect personal information such as full name,
                    phone number, profile details, service category,
                    experience information, and other account related data
                    provided by users and service providers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.2 Government Issued Identification and Verification (Partners)
                  </h3>
                  <p className="mt-2">
                    For service providers using the FindUs Partners
                    Application, we may collect government issued
                    identification details including CNIC number and or CNIC
                    images strictly for identity verification, compliance,
                    fraud prevention, and platform safety purposes.
                  </p>
                  <p className="mt-2 text-gray-600">
                    CNIC information is accessible only by authorized systems
                    and is never publicly displayed or shared with users.
                  </p>
                  <p className="mt-4">
                    As part of partner registration and verification, service
                    providers may also be required to record a short video of
                    themselves. This verification video is used solely for
                    identity confirmation, fraud prevention, and platform
                    safety. Verification videos are reviewed only by
                    authorized systems or personnel and are not shared with
                    users or made public.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.3 Location Information
                  </h3>
                  <p className="mt-2">
                    Location data is collected to show nearby service
                    providers, assign service requests, enable navigation,
                    and improve service accuracy. Location access is used
                    only while the app is active or when permission is
                    granted.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.4 Media, Camera, and Audio Data
                  </h3>
                  <p className="mt-2">
                    Users and partners may upload photos, videos, or audio
                    recordings including profile images, verification media,
                    and service related recordings.
                  </p>
                  <p className="mt-4">
                    In the FindUs User Application, users may record videos
                    to explain or demonstrate a service related problem.
                    These problem recording videos may be shared with nearby
                    service providers for the purpose of receiving accurate
                    service offers. Such videos are visible only to relevant
                    providers and are not made publicly accessible.
                  </p>
                  <p className="mt-4">
                    All uploaded media is used solely for service
                    fulfillment, verification, communication, dispute
                    handling, and platform safety.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.5 Device and Usage Information
                  </h3>
                  <p className="mt-2">
                    We automatically collect technical data such as device
                    type, operating system, app usage behavior, connectivity
                    status, and performance logs to maintain stability,
                    security, and service quality.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-semibold">
                    1.6 In-App Communication and Language Preferences
                  </h3>
                  <p className="mt-2">
                    FindUs provides an in-app chat feature that allows users
                    and service providers to communicate regarding service
                    requests. Messages and related metadata may be processed
                    and stored to enable communication, provide customer
                    support, resolve disputes, and maintain platform safety.
                  </p>
                  <p className="mt-4">
                    To facilitate service coordination, users and service
                    providers involved in a service request may view and
                    contact each other using their provided phone numbers.
                    Phone numbers are shared only between parties directly
                    involved in a service and are not made publicly visible.
                  </p>
                  <p className="mt-4">
                    Language preferences, such as English or Urdu selection,
                    may be used to personalize the app experience. Language
                    settings are stored securely and are not shared with
                    third parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                2. How We Use Information
              </h2>
              <p>
                We use collected information to operate the FindUs platform,
                verify service providers, connect users with partners, manage
                bookings, improve app performance, provide customer support,
                prevent fraud, and comply with legal obligations.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                3. Data Sharing and Disclosure
              </h2>
              <p>
                FindUs does not sell personal data. Sensitive information,
                including CNIC details and verification videos, is never
                shared with users or third parties except where required by
                law or regulatory authorities.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                4. Data Security
              </h2>
              <p>
                Sensitive data including identification details and
                verification media is protected using restricted access
                controls, secure storage practices, and encryption where
                applicable. While strong safeguards are applied, no system
                can guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                5. Data Retention
              </h2>
              <p>
                Personal and identification data is retained only for as
                long as necessary to fulfill verification, legal, and
                operational requirements, after which it is securely
                deleted or anonymized where applicable.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                6. User and Partner Rights
              </h2>
              <p>
                Users and partners may request access, correction, or
                deletion of their personal data, subject to applicable legal
                and regulatory obligations.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                7. Children’s Privacy
              </h2>
              <p>
                FindUs services are not intended for individuals under the
                age of 13. We do not knowingly collect personal data from
                children.
              </p>
            </div>

            {/* Section 8 */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4">
                8. Contact Information
              </h2>
              <p>
                <strong>Company:</strong> FindUs <br />
                <strong>Email:</strong> contact@findus.com.pk <br />
                <strong>Country:</strong> Pakistan
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
