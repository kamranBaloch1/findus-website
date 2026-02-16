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
                    we collect government issued identification details,
                    including CNIC number, CNIC images, and information extracted 
                    from the CNIC such as full name, address, and date of birth/age, 
                    strictly for identity verification, fraud prevention, compliance, 
                    and platform safety.
                  </p>
                  <p className="mt-4 text-gray-600">
                    CNIC information and extracted personal details are accessible 
                    only by authorized systems and are never publicly displayed or 
                    shared with users.
                  </p>
                  <p className="mt-4">
                    As part of partner registration, service providers may also
                    be required to record a short verification video. This video
                    is used solely for identity confirmation and platform
                    safety. Verification videos are not shared with users or
                    made public.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-blue-900">
                    1.3.1 Facial Recognition and Biometric Verification (Partners)
                  </h3>
                  <p className="mt-3 text-gray-800">
                    For identity verification purposes, the FindUs Partners Application 
                    uses facial recognition technology to:
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-800 ml-6 list-disc">
                    <li>Verify that the person in the verification video matches their 
                    submitted identification document</li>
                    <li>Prevent fraud and ensure platform safety</li>
                    <li>Confirm partner identity during the registration process</li>
                  </ul>
                  <p className="mt-4 font-medium text-gray-800">
                    Facial recognition data is processed on-device using Google ML Kit 
                    technology and is not stored permanently. Only verification results 
                    (pass/fail) are retained for compliance purposes. Raw biometric data 
                    is deleted immediately after processing.
                  </p>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-amber-900">
                    1.4 Location Information
                  </h3>
                  <p className="mt-3 text-gray-800">
                    Location data is collected to show nearby service providers,
                    assign service requests, enable navigation, and improve
                    service accuracy.
                  </p>
                  <p className="mt-4 font-bold text-amber-900">
                    BACKGROUND LOCATION (FindUs Partners Application):
                  </p>
                  <p className="mt-2 text-gray-800">
                    For service providers using the FindUs Partners Application, 
                    location may be collected in the background when partners are 
                    actively available for service requests, even when the app is 
                    not in the foreground. This allows us to:
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-800 ml-6 list-disc">
                    <li>Assign nearby service requests to available partners in real-time</li>
                    <li>Enable accurate real-time navigation during active service delivery</li>
                    <li>Update partner availability status and location on the platform</li>
                    <li>Provide users with accurate estimated arrival times</li>
                  </ul>
                  <p className="mt-4 font-medium text-gray-800">
                    Background location is collected only when partners have marked 
                    themselves as "available" for work. Partners can control background 
                    location access through device settings or by toggling their 
                    availability status in the app.
                  </p>
                  <p className="mt-4 text-gray-800">
                    For the FindUs User Application, location is collected primarily 
                    when the app is in use to find nearby service providers and enable 
                    service requests.
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
                    payment services, which may include mobile wallet providers, 
                    payment gateways, and other certified payment processors available 
                    in Pakistan. FindUs does not store users' full payment credentials 
                    or sensitive financial information. Payment processing is handled 
                    securely by the respective payment service providers in accordance 
                    with their own privacy policies and applicable financial regulations.
                  </p>
                  <p className="mt-4">
                    As part of our commission-based business model, FindUs
                    deducts a service commission from a partner's wallet balance
                    for completed jobs. Wallet balances, top-up history, and
                    commission deductions may be recorded and stored for
                    transaction tracking, support, dispute resolution, and legal
                    compliance.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.9 Bluetooth Connectivity (Partners)
                  </h3>
                  <p className="mt-2">
                    The FindUs Partners Application may request Bluetooth access for 
                    connectivity features and enhanced location accuracy when available. 
                    Bluetooth is used to improve location services and is not used to 
                    collect data from other devices.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">
                    1.10 Audio and Call Features
                  </h3>
                  <p className="mt-2">
                    Both applications may modify audio settings and access microphone 
                    to:
                  </p>
                  <ul className="mt-3 space-y-2 ml-6 list-disc">
                    <li>Enable in-app voice calls between users and service providers</li>
                    <li>Optimize call quality during service coordination</li>
                    <li>Manage notification sounds and app audio</li>
                    <li>Support real-time communication during service delivery</li>
                  </ul>
                  <p className="mt-4">
                    We use Agora RTC Engine for real-time voice and video communication 
                    between users and partners during service requests. Call data is 
                    transmitted securely and is not recorded or stored by FindUs unless 
                    required for dispute resolution.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-green-900">
                    1.11 Third-Party Services and SDKs
                  </h3>
                  <p className="mt-3 text-gray-800">
                    FindUs integrates the following third-party services, each operating 
                    under its own privacy policy:
                  </p>
                  <ul className="mt-4 space-y-3 text-gray-800">
                    <li><strong>Google Maps Platform:</strong> For mapping, geocoding, and location services</li>
                    <li><strong>Google Sign-In:</strong> For authentication services</li>
                    <li><strong>Google ML Kit:</strong> For on-device text recognition and facial verification (Partners only)</li>
                    <li><strong>Firebase Cloud Messaging:</strong> For push notifications and real-time updates</li>
                    <li><strong>Agora RTC Engine:</strong> For voice and video calls between users and partners</li>
                    <li><strong>Supabase:</strong> For backend database and authentication services</li>
                    <li><strong>Payment Processors:</strong> Certified third-party payment providers for wallet 
                    top-ups (Partners only), which may include mobile wallet services and payment gateways 
                    operating in Pakistan</li>
                  </ul>
                  <p className="mt-4 font-medium text-gray-800">
                    We recommend reviewing the privacy policies of these third-party 
                    services to understand how they handle your data. The specific payment 
                    providers available may vary and will be displayed within the app.
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
              <p className="mt-4">
                Specifically, information is used for:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Account creation, authentication, and profile management</li>
                <li>Identity verification and fraud prevention (Partners)</li>
                <li>Matching users with nearby available service providers</li>
                <li>Enabling real-time communication and navigation</li>
                <li>Processing service requests and managing bookings</li>
                <li>Facilitating payments and wallet transactions</li>
                <li>Sending notifications about service updates and platform changes</li>
                <li>Providing customer support and resolving disputes</li>
                <li>Improving app features and user experience</li>
                <li>Ensuring platform safety and security</li>
                <li>Complying with legal and regulatory obligations</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                3. Data Sharing and Disclosure
              </h2>
              <p>
                FindUs does not sell personal data. Sensitive information,
                including CNIC details, verification videos, and biometric verification 
                results, is not shared with users or third parties except where required 
                by law or regulatory authorities.
              </p>
              <p className="mt-4">
                We may share limited information in the following circumstances:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li><strong>Between Users and Partners:</strong> Name, phone number, 
                location, and service request details are shared to facilitate service delivery</li>
                <li><strong>With Third-Party Services:</strong> As described in Section 1.11, 
                certain data is shared with service providers who assist in platform operations</li>
                <li><strong>For Legal Compliance:</strong> We may disclose information when 
                required by law, court order, or government request</li>
                <li><strong>For Safety and Security:</strong> Information may be shared to 
                prevent fraud, protect user safety, or enforce our terms of service</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p>
                We apply reasonable technical and organizational safeguards,
                including encryption, restricted access controls, and secure storage 
                practices, to protect personal information from unauthorized access, 
                alteration, disclosure, or destruction.
              </p>
              <p className="mt-4">
                Security measures include:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>Data encryption in transit and at rest</li>
                <li>Access controls and authentication requirements</li>
                <li>Regular security audits and monitoring</li>
                <li>Secure payment processing through certified third-party providers</li>
                <li>On-device processing for sensitive biometric data</li>
              </ul>
              <p className="mt-4">
                While we implement strong security measures, no system can guarantee 
                absolute security. We encourage users to maintain the security of their 
                account credentials.
              </p>
            </div>

            {/* Section 5 */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4 text-purple-900">
                5. Data Retention
              </h2>
              <p className="text-gray-800">
                Personal information is retained only for as long as necessary to 
                fulfill operational, legal, and verification requirements. Specific 
                retention periods include:
              </p>
              <ul className="mt-4 space-y-3 text-gray-800">
                <li><strong>Account Information:</strong> Retained while account is active, 
                plus 90 days after deletion request to allow for account recovery</li>
                <li><strong>CNIC and Verification Videos:</strong> Retained for 2 years 
                for compliance and fraud prevention purposes, then securely deleted</li>
                <li><strong>Biometric Verification Data:</strong> Processed on-device and 
                deleted immediately; only verification results retained</li>
                <li><strong>Location Data:</strong> Retained for 90 days for service quality 
                and support purposes</li>
                <li><strong>Transaction Records:</strong> Retained for 7 years for financial 
                compliance and tax purposes</li>
                <li><strong>Chat Messages:</strong> Retained for 1 year or until account 
                deletion, whichever comes first</li>
                <li><strong>Service Request History:</strong> Retained while account is active 
                for reference and support</li>
              </ul>
              <p className="mt-4 font-medium text-gray-800">
                After the retention period expires, data is securely deleted or anonymized 
                such that it cannot be linked back to individual users.
              </p>
            </div>

            {/* Section 6 - UPDATED */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                6. User and Partner Rights
              </h2>
              <p>
                Users and partners can manage their personal data directly within the 
                FindUs applications and have the following rights:
              </p>
              
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">In-App Data Management:</h3>
                  <ul className="mt-2 space-y-2 ml-6 list-disc">
                    <li><strong>Access:</strong> View your personal data in the Account Settings section</li>
                    <li><strong>Correction:</strong> Update or edit your information directly in your Profile section</li>
                    <li><strong>Account Deletion:</strong> Delete your account using the 
                    "Delete Account" option available in Profile Settings</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-lg text-red-900">When You Delete Your Account:</h3>
                  <p className="mt-2 text-gray-800">
                    When you request account deletion through the in-app feature:
                  </p>
                  <ul className="mt-3 space-y-2 ml-6 list-disc text-gray-800">
                    <li><strong>Your account will be immediately deactivated</strong> and you will no longer 
                    be able to log in or access FindUs services</li>
                    <li>Your profile will become invisible to other users and service providers</li>
                    <li>You will not be able to create new service requests or accept work</li>
                    <li>Active sessions will be terminated and you will be logged out</li>
                  </ul>
                  <p className="mt-3 font-medium text-red-900">
                    Account deletion is immediate and cannot be reversed by you. Please ensure you want to 
                    deactivate your account before proceeding.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-lg text-orange-900">Data Retention After Account Deletion:</h3>
                  <p className="mt-2 text-gray-800">
                    For fraud prevention, legal compliance, and platform security, certain information 
                    is retained after account deletion:
                  </p>
                  
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">Information Retained:</p>
                      <ul className="mt-2 space-y-1 ml-6 list-disc text-gray-800">
                        <li>Transaction records and payment history (required by law for 7 years)</li>
                        <li>Service request history and completed work records</li>
                        <li>Communications related to disputes or investigations</li>
                        <li>Data necessary to prevent fraud and maintain platform security</li>
                        <li>Records required for tax, audit, and regulatory compliance</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">Retention Timeline:</p>
                      <ul className="mt-2 space-y-1 ml-6 list-disc text-gray-800">
                        <li><strong>0-90 days:</strong> Full data retained for account recovery and investigation purposes</li>
                        <li><strong>After 90 days:</strong> Personally identifiable information (name, email, phone, address) 
                        is anonymized</li>
                        <li><strong>7 years:</strong> Transaction records and financial data retained for legal compliance</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">Why We Retain This Data:</p>
                      <ul className="mt-2 space-y-1 ml-6 list-disc text-gray-800">
                        <li>Prevent fraud, abuse, and malicious activity on the platform</li>
                        <li>Resolve disputes between users and service providers</li>
                        <li>Comply with tax, financial, and regulatory requirements</li>
                        <li>Respond to legal requests from law enforcement or authorities</li>
                        <li>Maintain platform security and protect other users</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Complete Data Deletion Request:</h3>
                  <p className="mt-2">
                    If you wish to request complete deletion of all your data (subject to legal requirements), 
                    please contact us at <strong>contact@findus.com.pk</strong> with the subject line 
                    "Request for Complete Data Deletion".
                  </p>
                  <p className="mt-2">
                    We will review your request and delete all data except what we are legally required to retain. 
                    We will respond to your request within 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Additional Rights:</h3>
                  <ul className="mt-2 space-y-2 ml-6 list-disc">
                    <li><strong>Data Portability:</strong> Request a copy of your data in a 
                    structured format by contacting us at contact@findus.com.pk</li>
                    <li><strong>Objection:</strong> Object to certain data processing activities 
                    by contacting our support team</li>
                    <li><strong>Account Recovery:</strong> Within 90 days of deletion, you may contact 
                    support to request account restoration. After 90 days, personal data is anonymized 
                    and recovery is not possible.</li>
                    <li><strong>Support:</strong> For assistance with any data-related requests, 
                    contact us at <strong>contact@findus.com.pk</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p>
                FindUs services are not intended for individuals under the age
                of 13. We do not knowingly collect personal information from
                children. If we become aware that a child under 13 has provided 
                us with personal information, we will take steps to delete such 
                information promptly.
              </p>
              <p className="mt-4">
                Parents or guardians who believe their child has provided personal 
                information to FindUs should contact us immediately at 
                <strong> contact@findus.com.pk</strong>.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4 text-indigo-900">
                8. Prominent In-App Disclosures
              </h2>
              <p className="text-gray-800">
                Before requesting access to sensitive permissions such as location, 
                camera, microphone, or identification documents, FindUs displays 
                clear in-app explanations that inform you of:
              </p>
              <ul className="mt-4 space-y-2 text-gray-800 ml-6 list-disc">
                <li>What specific data will be collected</li>
                <li>Why the permission is needed for the service to function</li>
                <li>How the collected data will be used</li>
                <li>Whether the data will be shared and with whom</li>
              </ul>
              <p className="mt-4 font-medium text-gray-800">
                You must grant explicit permission before any sensitive data is accessed. 
                You can modify or revoke permissions at any time through your device settings.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold mb-4">
                9. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes 
                in our practices, services, or legal requirements. When we make significant 
                changes, we will notify you through:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>In-app notifications</li>
                <li>Email to your registered email address</li>
                <li>Prominent notice on our website</li>
              </ul>
              <p className="mt-4">
                Your continued use of FindUs services after such modifications constitutes 
                your acknowledgment and acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* Section 10 - Contact */}
            <div className="border-t pt-8 bg-gray-50 -mx-10 -mb-10 md:-mx-14 md:-mb-14 px-10 md:px-14 py-10 md:py-14 rounded-b-3xl">
              <h2 className="text-2xl font-bold mb-4">
                10. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy 
                Policy or our data practices, please contact us:
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="mb-2">
                  <strong>Company:</strong> FIND US (PRIVATE) LIMITED
                </p>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:contact@findus.com.pk" className="text-[#77B900] hover:underline">contact@findus.com.pk</a>
                </p>
                <p className="mb-2">
                  <strong>Country:</strong> Pakistan
                </p>
                <p>
                  <strong>Address:</strong> Gulshan-e-Iqbal, Karachi East, Sindh,
                  Pakistan
                </p>
              </div>
              <p className="mt-6 text-gray-600 text-sm">
                We are committed to protecting your privacy and will respond to all 
                inquiries within a reasonable timeframe.
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </main>
  );
}