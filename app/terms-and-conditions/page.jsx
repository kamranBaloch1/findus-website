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
            Last updated: 17 February 2026
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
              FindUs operates a two-sided service platform through the FindUs
              User Application and the FindUs Partners Application. These Terms
              & Conditions apply to all users and service providers who access
              or use the platform.
            </p>

            <p>
              By creating an account, downloading, accessing, or using any FindUs 
              application, you agree to be bound by these Terms & Conditions and our 
              Privacy Policy. If you do not agree with any part of these terms, you 
              must not use the platform.
            </p>

            {/* 1 - Platform Role */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                1. Platform Role and Nature of Services
              </h2>
              <p>
                FindUs operates as a technology platform that connects users
                with independent service providers. The platform helps users
                discover, communicate with, and coordinate services with
                providers in their area.
              </p>
              <p className="mt-4">
                <strong>Important:</strong> FindUs is a marketplace platform, not a service 
                provider. Service providers on the platform are independent contractors, 
                not employees or agents of FindUs. The actual services (repairs, maintenance, 
                cleaning, etc.) are performed by these independent providers.
              </p>
              <p className="mt-4">
                While FindUs provides tools to support communication, booking, payment 
                processing, and transparency, we do not directly perform services. FindUs 
                takes reasonable steps to promote platform reliability, trust, and safety 
                through verification processes and monitoring, but cannot guarantee the 
                quality, safety, or legality of services provided by independent contractors.
              </p>
            </div>

            {/* 2 - Trust & Safety */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4 text-blue-900">
                2. Trust, Safety & Verification
              </h2>
              <p className="text-gray-800">
                FindUs is committed to maintaining a safe and trustworthy
                platform for both users and service providers. We implement
                verification processes, platform rules, and monitoring
                mechanisms to reduce misuse and improve overall reliability.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
                2.1 Partner Verification (FindUs Partners Application)
              </h3>
              <p className="text-gray-800">
                Service providers may be required to complete identity
                verification steps, including:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc text-gray-800">
                <li>Submission of government-issued identification (CNIC) details and images, 
                including information extracted from the CNIC such as full name, address, and 
                date of birth/age</li>
                <li>Recording and uploading a verification video</li>
                <li>Facial recognition verification using on-device processing to match 
                identification documents</li>
                <li>Providing accurate contact information and professional credentials</li>
              </ul>
              <p className="mt-4 text-gray-800">
                Verification data is used solely for identity confirmation, fraud prevention, 
                and platform safety. Failure to complete verification requirements may limit 
                or prevent access to platform features.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-blue-900">
                2.2 Reporting and Platform Integrity
              </h3>
              <p className="text-gray-800">
                Users and providers are expected to communicate honestly and report suspicious,
                abusive, fraudulent, or inappropriate behavior. FindUs reviews reported issues 
                and may take appropriate action, including:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc text-gray-800">
                <li>Issuing warnings or notices</li>
                <li>Temporary account restrictions</li>
                <li>Permanent account suspension or termination</li>
                <li>Referral to law enforcement where applicable</li>
              </ul>
            </div>

            {/* 3 - User Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                3. User Responsibilities
              </h2>
              <p>
                Users of the FindUs User Application agree to:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Provide accurate and up-to-date account information</li>
                <li>Use the platform only for lawful purposes</li>
                <li>Communicate respectfully and professionally with service providers</li>
                <li>Not misuse the platform or attempt to circumvent security measures</li>
                <li>Not submit false, misleading, or inappropriate content</li>
                <li>Pay agreed-upon fees for services rendered</li>
                <li>Not engage in harmful, abusive, or fraudulent behavior</li>
                <li>Comply with all applicable local laws and regulations</li>
              </ul>
              <p className="mt-4">
                Users must be at least 18 years old to use FindUs services. By using the 
                platform, you represent that you meet this age requirement.
              </p>
            </div>

            {/* 4 - Partner Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                4. Partner Responsibilities
              </h2>
              <p>
                Service providers using the FindUs Partners Application agree to:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Provide accurate profile information and professional credentials</li>
                <li>Complete all required verification steps, including identity verification</li>
                <li>Maintain professional standards when providing services</li>
                <li>Respond promptly to service requests</li>
                <li>Provide honest and competitive pricing</li>
                <li>Comply with all applicable laws, regulations, and licensing requirements</li>
                <li>Maintain appropriate insurance coverage where required by law</li>
                <li>Report platform issues or concerns through proper channels</li>
              </ul>
              <p className="mt-4">
                <strong>Independent Contractor Status:</strong> Service providers are independent 
                contractors and not employees, agents, or partners of FindUs. Providers are 
                solely responsible for their own taxes, insurance, licensing, and legal compliance.
              </p>
            </div>

            {/* 5 - Location Services */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4 text-amber-900">
                5. Location Services and Background Access
              </h2>
              <p className="text-gray-800">
                FindUs uses location services to connect users with nearby service providers 
                and enable accurate service delivery.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-amber-900">
                5.1 Background Location (Partners Only)
              </h3>
              <p className="text-gray-800">
                The FindUs Partners Application may collect location data in the background 
                when service providers mark themselves as "available" for work. This allows:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc text-gray-800">
                <li>Real-time assignment of nearby service requests</li>
                <li>Accurate navigation during active service delivery</li>
                <li>Platform efficiency and service quality monitoring</li>
              </ul>
              <p className="mt-4 font-medium text-gray-800">
                Partners can control background location access through device settings or 
                by changing their availability status within the app.
              </p>
            </div>

            {/* 6 - Service Requests and Media */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                6. Service Requests and Media Content
              </h2>
              <p>
                Users may upload photos or record videos to explain or demonstrate 
                service-related problems. Such content may be shared with nearby
                service providers to help them understand the request and respond 
                with accurate service offers.
              </p>
              <p className="mt-4">
                By uploading content, you represent and warrant that:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>You own or have rights to the uploaded content</li>
                <li>The content is accurate, lawful, and relevant to the service request</li>
                <li>The content does not violate any third-party rights</li>
                <li>The content does not contain harmful, offensive, or inappropriate material</li>
              </ul>
              <p className="mt-4">
                FindUs reserves the right to remove content that violates these terms or 
                is deemed inappropriate.
              </p>
            </div>

            {/* 7 - Payments and Commissions */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                7. Payments, Wallet, and Commission Structure
              </h2>
              
              <h3 className="text-xl font-semibold mt-4 mb-3">
                7.1 Payment for Services
              </h3>
              <p>
                Payments for services are typically made directly between users
                and service providers, often in cash or through mutually agreed 
                payment methods. FindUs does not control or process these direct 
                payments and is not responsible for payment disputes between users 
                and providers.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                7.2 Partner Wallet System
              </h3>
              <p>
                The FindUs Partners Application includes a wallet-based system. Partners 
                may be required to maintain a minimum wallet balance to receive new service 
                requests. Wallet top-ups can be made through supported third-party payment 
                services.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                7.3 Platform Commission
              </h3>
              <p>
                FindUs charges service providers a platform commission or service fee for 
                each completed job. Commission amounts are:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Deducted automatically from the partner's wallet balance</li>
                <li>Disclosed within the FindUs Partners Application</li>
                <li>Subject to change with reasonable notice to partners</li>
              </ul>
              <p className="mt-4">
                By using the Partners Application, service providers agree to the commission 
                structure as displayed in the app.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                7.4 Third-Party Payment Processors
              </h3>
              <p>
                Wallet top-ups are processed through certified third-party payment providers. 
                FindUs does not store full payment credentials. Use of payment services is 
                subject to the terms and privacy policies of those providers.
              </p>
            </div>

            {/* 8 - Communication */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                8. Communication and Contact Sharing
              </h2>
              <p>
                FindUs provides in-app chat functionality and may allow phone contact 
                between users and service providers for service coordination purposes.
              </p>
              <p className="mt-4">
                By accepting a service request, both parties consent to sharing their 
                phone numbers with each other for the duration of the service engagement.
              </p>
              <p className="mt-4">
                All communication must:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Remain respectful and professional</li>
                <li>Be directly related to service coordination</li>
                <li>Not include harassment, threats, or inappropriate content</li>
                <li>Not be used for spam, solicitation, or unauthorized marketing</li>
              </ul>
              <p className="mt-4">
                FindUs may monitor communications to ensure compliance with these terms 
                and maintain platform safety.
              </p>
            </div>

            {/* 9 - Cancellations and Disputes */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                9. Cancellations, Disputes, and Resolution
              </h2>
              
              <h3 className="text-xl font-semibold mt-4 mb-3">
                9.1 Cancellations
              </h3>
              <p>
                Users and service providers may cancel service requests in accordance 
                with the cancellation policies displayed in the respective applications. 
                Repeated or abusive cancellations may result in account restrictions.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                9.2 Disputes
              </h3>
              <p>
                Users and service providers are expected to act in good faith
                regarding service commitments. In the event of a dispute:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Parties should first attempt to resolve the matter directly</li>
                <li>Disputes can be reported through the in-app support system</li>
                <li>FindUs may review evidence and communications</li>
                <li>FindUs may take action including mediation, warnings, or account restrictions</li>
              </ul>
              <p className="mt-4 font-medium">
                FindUs does not guarantee specific dispute resolution outcomes and is not 
                liable for losses arising from disputes between users and service providers.
              </p>
            </div>

            {/* 10 - Account Management - UPDATED */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4 text-red-900">
                10. Account Suspension, Termination, and Deletion
              </h2>
              
              <h3 className="text-xl font-semibold mt-4 mb-3 text-red-900">
                10.1 Suspension or Termination by FindUs
              </h3>
              <p className="text-gray-800">
                FindUs reserves the right to suspend or terminate accounts that:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc text-gray-800">
                <li>Violate these Terms & Conditions</li>
                <li>Misuse the platform or engage in fraudulent behavior</li>
                <li>Provide false or misleading information</li>
                <li>Engage in harmful, abusive, or illegal activities</li>
                <li>Repeatedly fail to fulfill service commitments</li>
                <li>Receive multiple credible complaints</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-red-900">
                10.2 Account Deletion by Users
              </h3>
              <p className="text-gray-800">
                Users and service providers may delete their accounts at any time using 
                the "Delete Account" option in the Profile or Settings section of the respective application.
              </p>
              
              <div className="mt-4 bg-white border border-orange-300 rounded-lg p-4">
                <p className="font-medium text-gray-900 mb-2">
                  What Happens When You Delete Your Account:
                </p>
                <ul className="space-y-2 ml-6 list-disc text-gray-800">
                  <li><strong>Immediate deactivation:</strong> Your account will be deactivated 
                  immediately and you will no longer be able to log in or access FindUs services</li>
                  <li><strong>Profile removal:</strong> Your profile will become invisible to other 
                  users and service providers</li>
                  <li><strong>Service termination:</strong> You will not be able to create new service 
                  requests or accept work</li>
                  <li><strong>Active sessions:</strong> All active sessions will be terminated and you 
                  will be logged out</li>
                  <li><strong>Wallet balance (Partners):</strong> Any remaining wallet balance will be 
                  forfeited unless withdrawn prior to deletion</li>
                </ul>
              </div>

              <div className="mt-4 bg-white border border-red-300 rounded-lg p-4">
                <p className="font-medium text-gray-900 mb-2">
                  Data Retention After Account Deletion:
                </p>
                <p className="text-gray-800 mb-3">
                  For fraud prevention, legal compliance, and platform security, certain information 
                  is retained after account deletion:
                </p>
                <ul className="space-y-2 ml-6 list-disc text-gray-800">
                  <li><strong>Transaction records:</strong> Retained for 7 years as required by tax 
                  and financial regulations</li>
                  <li><strong>Service history:</strong> Completed service requests and work records 
                  retained for fraud prevention and dispute resolution</li>
                  <li><strong>Communications:</strong> Messages related to disputes or investigations 
                  may be retained for legal purposes</li>
                  <li><strong>Verification data (Partners):</strong> CNIC and verification videos 
                  retained for 2 years for compliance</li>
                </ul>
                <p className="mt-3 text-sm font-medium text-gray-800">
                  Personally identifiable information (name, email, phone, address) is anonymized 
                  after 90 days, while transaction records are retained as required by law.
                </p>
              </div>

              <div className="mt-4 bg-blue-50 border border-blue-300 rounded-lg p-4">
                <p className="font-medium text-blue-900 mb-2">
                  Why We Retain Data:
                </p>
                <ul className="space-y-1 ml-6 list-disc text-gray-800">
                  <li>Prevent fraud, abuse, and malicious activity on the platform</li>
                  <li>Resolve disputes between users and service providers</li>
                  <li>Comply with tax, financial, and regulatory requirements</li>
                  <li>Respond to legal requests from law enforcement or authorities</li>
                  <li>Maintain platform security and protect other users</li>
                </ul>
              </div>

              <p className="mt-4 text-sm text-gray-700">
                For more information about data retention and your rights, please refer to our{" "}
                <a href="/privacy-policy" className="text-blue-700 hover:underline font-medium">
                  Privacy Policy
                </a>. To request complete data deletion (subject to legal requirements), contact 
                us at <strong>contact@findus.com.pk</strong>.
              </p>
            </div>

            {/* 11 - Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                11. Intellectual Property Rights
              </h2>
              <p>
                All intellectual property rights in the FindUs platform, including logos, 
                trademarks, app design, software code, and content (excluding user-generated 
                content), are owned by or licensed to FIND US (PRIVATE) LIMITED.
              </p>
              <p className="mt-4">
                You may not:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Copy, modify, or distribute FindUs software or content</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Use FindUs trademarks or branding without written permission</li>
                <li>Create derivative works based on the platform</li>
              </ul>
            </div>

            {/* 12 - Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                12. Limitation of Liability and Disclaimers
              </h2>
              <p>
                To the maximum extent permitted by applicable law:
              </p>
              <ul className="mt-3 space-y-3 ml-6 list-disc">
                <li>
                  <strong>Service Quality:</strong> FindUs does not guarantee the quality, 
                  safety, legality, or reliability of services provided by independent service 
                  providers. FindUs is not responsible for any damages, injuries, or losses 
                  arising from services performed by providers.
                </li>
                <li>
                  <strong>Platform Availability:</strong> FindUs does not guarantee uninterrupted 
                  or error-free platform operation. The platform is provided "as is" without 
                  warranties of any kind.
                </li>
                <li>
                  <strong>Third-Party Services:</strong> FindUs is not responsible for the 
                  operation, security, or policies of third-party services integrated into 
                  the platform (payment processors, mapping services, etc.).
                </li>
                <li>
                  <strong>User Conduct:</strong> FindUs is not liable for actions, conduct, 
                  or content of users or service providers on the platform.
                </li>
                <li>
                  <strong>Financial Limits:</strong> FindUs's total liability for any claim 
                  shall not exceed the fees paid by the claiming party in the 12 months 
                  preceding the claim.
                </li>
              </ul>
            </div>

            {/* 13 - Privacy and Data Protection */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                13. Privacy and Data Protection
              </h2>
              <p>
                Your use of FindUs is also governed by our Privacy Policy, which explains 
                how we collect, use, store, and protect your personal information.
              </p>
              <p className="mt-4">
                By using FindUs, you consent to our data practices as described in the 
                Privacy Policy. Key points include:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Collection of location data (including background location for Partners)</li>
                <li>Use of facial recognition for Partner verification</li>
                <li>Sharing of contact information between users and providers</li>
                <li>Data retention periods and deletion procedures</li>
              </ul>
              <p className="mt-4">
                Please review our full Privacy Policy at{" "}
                <a href="/privacy-policy" className="text-[#77B900] hover:underline font-medium">
                  findus.com.pk/privacy-policy
                </a>
              </p>
            </div>

            {/* 14 - Indemnification */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                14. Indemnification
              </h2>
              <p>
                You agree to indemnify, defend, and hold harmless FindUs, its officers, 
                directors, employees, and affiliates from any claims, damages, losses, 
                liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Your violation of these Terms & Conditions</li>
                <li>Your use or misuse of the platform</li>
                <li>Services you provide or receive through the platform</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you upload or share</li>
              </ul>
            </div>

            {/* 15 - Governing Law */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                15. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms & Conditions are governed by the laws of Pakistan. Any disputes 
                arising from these terms or use of the platform shall be subject to the 
                exclusive jurisdiction of the courts of Karachi, Pakistan.
              </p>
            </div>

            {/* 16 - Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                16. Changes to These Terms
              </h2>
              <p>
                FindUs may update these Terms & Conditions from time to time to reflect 
                changes in our practices, services, or legal requirements. When we make 
                material changes, we will:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Update the "Last updated" date at the top of this page</li>
                <li>Notify you through in-app notifications</li>
                <li>Send an email to your registered email address (for significant changes)</li>
              </ul>
              <p className="mt-4">
                Your continued use of FindUs services after changes are published constitutes 
                acceptance of the revised terms. If you do not agree to the updated terms, 
                you must stop using the platform and may delete your account.
              </p>
            </div>

            {/* 17 - Severability */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                17. Severability
              </h2>
              <p>
                If any provision of these Terms & Conditions is found to be invalid or 
                unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* 18 - Contact Information */}
            <div className="border-t pt-8 bg-gray-50 -mx-10 -mb-10 md:-mx-14 md:-mb-14 px-10 md:px-14 py-10 md:py-14 rounded-b-3xl">
              <h2 className="text-2xl font-bold mb-4">
                18. Contact Information
              </h2>
              <p className="mb-4">
                If you have questions, concerns, or need assistance regarding these Terms & 
                Conditions, please contact us:
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="mb-2">
                  <strong>Company:</strong> FIND US (PRIVATE) LIMITED
                </p>
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contact@findus.com.pk" className="text-[#77B900] hover:underline">
                    contact@findus.com.pk
                  </a>
                </p>
                <p className="mb-2">
                  <strong>Country:</strong> Pakistan
                </p>
                <p>
                  <strong>Address:</strong> Gulshan-e-Iqbal, Karachi East, Sindh, Pakistan
                </p>
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                By using FindUs, you acknowledge that you have read, understood, and agree 
                to be bound by these Terms & Conditions.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}