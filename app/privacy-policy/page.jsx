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
            Last updated: 13 January 2026
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-gray-200 rounded-3xl shadow-xl p-10 md:p-14"
        >
          <section className="space-y-12 text-gray-800 text-[17px] leading-relaxed">
            <p>
              FindUs is a technology platform operating through two mobile
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
                    We may collect personal information such as your full name,
                    phone number, email address, profile details, service
                    preferences, and other account-related information provided
                    by users and service providers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.2 Google Sign-In Information
                  </h3>
                  <p className="mt-2">
                    FindUs allows users and service providers to sign in using
                    Google authentication. When you choose to sign in with
                    Google, we may receive certain information from your Google
                    account such as your name, email address, and profile
                    picture.
                  </p>
                  <p className="mt-4">
                    This information is used only for account creation,
                    authentication, and profile display purposes. FindUs does
                    not receive or store your Google account password and does
                    not access any other Google account data beyond what you
                    explicitly authorize.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.3 Government Issued Identification and Verification
                    (Partners)
                  </h3>
                  <p className="mt-2">
                    For service providers using the FindUs Partners Application,
                    we may collect government issued identification details,
                    including CNIC number and or CNIC images, strictly for
                    identity verification, fraud prevention, compliance, and
                    platform safety.
                  </p>
                  <p className="mt-4 text-gray-600">
                    CNIC information is accessible only by authorized systems
                    and is never publicly displayed or shared with users.
                  </p>
                  <p className="mt-4">
                    As part of partner registration, service providers may also
                    be required to record a short verification video. This video
                    is used solely for identity confirmation and platform
                    safety. Verification videos are not shared with users or
                    made public.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.4 Location Information
                  </h3>
                  <p className="mt-2">
                    Location data is collected to show nearby service providers,
                    assign service requests, enable navigation, and improve
                    service accuracy. Location access is used only while the app
                    is active or when permission is granted.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.5 Media, Camera, and Audio Data
                  </h3>
                  <p className="mt-2">
                    Users and partners may upload photos, videos, or audio
                    recordings, including profile images, verification media,
                    and service-related recordings.
                  </p>
                  <p className="mt-4">
                    In the FindUs User Application, users may record videos to
                    explain or demonstrate a service-related problem. These
                    videos may be shared with nearby service providers for the
                    purpose of receiving accurate service offers. Such videos
                    are visible only to relevant providers and are not publicly
                    accessible.
                  </p>
                  <p className="mt-4">
                    All uploaded media is used solely for service fulfillment,
                    verification, communication, dispute handling, and platform
                    safety.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.6 Device and Usage Information
                  </h3>
                  <p className="mt-2">
                    We automatically collect technical information such as
                    device type, operating system, app usage behavior,
                    connectivity status, and performance logs to maintain
                    stability, security, and service quality.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-semibold">
                    1.7 In-App Communication and Language Preferences
                  </h3>
                  <p className="mt-2">
                    FindUs provides in-app chat functionality that allows users
                    and service providers to communicate regarding service
                    requests. Messages and related metadata may be stored to
                    enable communication, provide customer support, resolve
                    disputes, and maintain platform safety.
                  </p>
                  <p className="mt-4">
                    Users and service providers involved in a service request
                    may view and contact each other using their provided phone
                    numbers. Phone numbers are shared only between parties
                    directly involved in a service.
                  </p>
                  <p className="mt-4">
                    Language preferences, such as English or Urdu selection, may
                    be stored to personalize the app experience and are not
                    shared with third parties.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    1.8 Payments, Wallet, and Commission Information (Partners)
                  </h3>
                  <p className="mt-2">
                    FindUs provides a wallet-based system for service providers
                    using the FindUs Partners Application. Partners may be
                    required to top up their account balance in order to receive
                    new service requests.
                  </p>
                  <p className="mt-4">
                    Top-ups may be completed through supported third-party
                    payment services, such as EasyPaisa. FindUs does not store
                    users’ full payment credentials. Payment processing is
                    handled securely by the respective payment service providers
                    in accordance with their own privacy policies.
                  </p>
                  <p className="mt-4">
                    As part of our commission-based business model, FindUs
                    deducts a service commission from a partner’s wallet balance
                    for completed jobs. Wallet balances, top-up history, and
                    commission deductions may be recorded and stored for
                    transaction tracking, support, dispute resolution, and legal
                    compliance.
                  </p>
                  <p className="mt-4">
                    Other third-party services may be used for payments,
                    analytics, or notifications, and are governed by their
                    respective privacy policies.
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
                including CNIC details and verification videos, is not shared
                with users or third parties except where required by law or
                regulatory authorities.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p>
                We apply reasonable technical and organizational safeguards,
                including restricted access and secure storage practices, to
                protect personal information. While strong measures are used, no
                system can guarantee absolute security.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Data Retention</h2>
              <p>
                Personal and identification data is retained only for as long as
                necessary to fulfill operational, legal, and verification
                requirements, after which it is securely deleted or anonymized.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                6. User and Partner Rights
              </h2>
              <p>
                Users and partners may request access, correction, or deletion
                of their personal information by contacting us at
                contact@findus.com.pk , subject to applicable legal and
                regulatory obligations.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">7. Children’s Privacy</h2>
              <p>
                FindUs services are not intended for individuals under the age
                of 13. We do not knowingly collect personal information from
                children.
              </p>
            </div>

            {/* Section 8 */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4">
                8. Contact Information
              </h2>
              <p>
                <strong>Company:</strong> FIND US (PRIVATE) LIMITED <br />
                <strong>Email:</strong> contact@findus.com.pk <br />
                <strong>Country:</strong> Pakistan
                <strong>Address:</strong> Gulshan-e-Iqbal, Karachi East, Sindh,
                Pakistan
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
