"use client";

import { motion } from "framer-motion";

export default function TermsAndConditionsPage() {
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
            Terms & <span className="text-[#77B900]">Conditions</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            These Terms & Conditions govern your use of the FindUs platform.
            Please read them carefully.
          </p>
          <p className="text-sm text-gray-500 mt-3">
            Last updated: [13,January,2026] 
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-gray-200 rounded-3xl shadow-xl p-10 md:p-14"
        >
          <section className="space-y-10 text-gray-800 text-[17px] leading-relaxed">
            <p>
              FindUs operates a two sided service platform through the FindUs
              User Application and the FindUs Partners Application. These Terms
              & Conditions apply to all users and service providers who access
              or use the platform.
            </p>

            <p>
              By using any FindUs application, you agree to be bound by these
              Terms & Conditions. If you do not agree, you should not use the
              platform.
            </p>

            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                1. Platform Role
              </h2>
              <p>
                FindUs operates as a technology platform that connects users
                with independent service providers. The platform helps users
                discover, communicate with, and coordinate services with
                providers in their area.
              </p>
              <p className="mt-4">
                While FindUs provides tools to support communication, booking,
                and transparency, the actual services are performed by
                independent providers. FindUs does not directly perform these
                services but takes reasonable steps to promote platform
                reliability, trust, and safety.
              </p>
            </div>

            {/* Trust & Safety */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                2. Trust & Safety
              </h2>
              <p>
                FindUs is committed to maintaining a safe and trustworthy
                platform for both users and service providers. We implement
                verification processes, platform rules, and monitoring
                mechanisms to reduce misuse and improve overall reliability.
              </p>
              <p className="mt-4">
                Service providers may be required to complete identity
                verification steps, including submission of identification
                details or verification videos. Users and providers are
                encouraged to communicate honestly and report suspicious,
                abusive, or inappropriate behavior.
              </p>
              <p className="mt-4">
                FindUs reviews reported issues and may take appropriate action,
                including warnings, temporary restrictions, or account
                suspension, to protect platform integrity.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                3. User Responsibilities
              </h2>
              <p>
                Users agree to provide accurate information, use the platform
                only for lawful purposes, and communicate respectfully with
                service providers. Users must not misuse the platform, submit
                misleading content, or engage in harmful behavior.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                4. Partner Responsibilities
              </h2>
              <p>
                Service providers are independent professionals responsible
                for the services they offer. Partners must provide accurate
                profile information, complete verification requirements, and
                comply with applicable laws and platform rules.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                5. Verification and Identity
              </h2>
              <p>
                Partners may be required to submit CNIC details and record a
                verification video during registration. This information is
                used solely for identity verification, fraud prevention, and
                platform safety. Failure to complete verification may limit
                access to platform features.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                6. Service Requests and Media
              </h2>
              <p>
                Users may upload photos or record videos to explain service
                related problems. Such content may be shared with nearby
                service providers to help them understand the request and
                respond accurately.
              </p>
              <p className="mt-4">
                Users are responsible for ensuring that uploaded content is
                accurate, lawful, and relevant to the service request.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                7. Payments and Commissions
              </h2>
              <p>
                Payments for services are typically made directly between users
                and service providers, often in cash. FindUs may charge service
                providers a commission or platform fee as disclosed within the
                Partners Application. Fee structures may change from time to
                time.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                8. Communication
              </h2>
              <p>
                FindUs provides in app chat and may allow phone contact between
                users and service providers for service coordination. All
                communication must remain respectful and service related.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                9. Cancellations and Disputes
              </h2>
              <p>
                Users and service providers are expected to act in good faith
                regarding service commitments. FindUs may review disputes and
                take reasonable action but does not guarantee dispute
                resolution outcomes.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                10. Account Suspension or Termination
              </h2>
              <p>
                FindUs reserves the right to suspend or terminate accounts that
                violate these Terms, misuse the platform, provide false
                information, or engage in harmful or fraudulent behavior.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                11. Limitation of Liability
              </h2>
              <p>
                To the extent permitted by law, FindUs shall not be liable for
                losses or damages arising from services provided by
                independent service providers or from use of the platform.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                12. Changes to These Terms
              </h2>
              <p>
                FindUs may update these Terms & Conditions from time to time.
                Continued use of the platform after updates constitutes
                acceptance of the revised terms.
              </p>
            </div>

            {/* 13 */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4">
                13. Contact Information
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
