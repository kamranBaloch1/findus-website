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
            Last updated: 3 March 2026
          </p>
        </motion.div>

        {/* Content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white border border-gray-200 rounded-3xl shadow-xl p-10 md:p-14"
        >
          <section className="space-y-12 text-gray-800 text-[17px] leading-relaxed">

            <p>
              FindUs is a technology platform operating through two mobile
              applications: the <strong>FindUs User Application</strong> and the{" "}
              <strong>FindUs Partners Application</strong>. This Privacy Policy
              explains how FindUs collects, uses, stores, shares, and protects
              personal information when you use our platform and services.
            </p>

            {/* ── Section 1 ── */}
            <div>
              <h2 className="text-2xl font-bold mb-6">1. Information We Collect</h2>
              <div className="space-y-8">

                {/* 1.1 */}
                <div>
                  <h3 className="text-xl font-semibold">1.1 Personal Information</h3>
                  <p className="mt-2">
                    We may collect personal information such as your full name, phone number,
                    email address, profile details, service preferences, and other
                    account-related information provided by users and service providers.
                  </p>
                </div>

                {/* 1.2 */}
                <div>
                  <h3 className="text-xl font-semibold">1.2 Google Sign-In Information</h3>
                  <p className="mt-2">
                    FindUs allows users and service providers to sign in using Google
                    authentication. When you choose to sign in with Google, we may receive
                    your name, email address, and profile picture from your Google account.
                  </p>
                  <p className="mt-4">
                    This information is used only for account creation, authentication, and
                    profile display. FindUs does not receive or store your Google account
                    password and does not access any Google account data beyond what you
                    explicitly authorise.
                  </p>
                </div>

                {/* 1.3 */}
                <div>
                  <h3 className="text-xl font-semibold">
                    1.3 Government-Issued Identification and Verification (Partners)
                  </h3>
                  <p className="mt-2">
                    For service providers using the FindUs Partners Application, we collect
                    government-issued identification details including CNIC number, CNIC
                    images, and information extracted from the CNIC such as full name,
                    address, and date of birth, strictly for identity verification, fraud
                    prevention, compliance, and platform safety.
                  </p>
                  <p className="mt-4 text-gray-600">
                    CNIC information and extracted personal details are accessible only by
                    authorised systems and are never publicly displayed or shared with users.
                  </p>
                  <p className="mt-4">
                    Service providers may also be required to record a short verification
                    video used solely for identity confirmation and platform safety.
                    Verification videos are not shared with users or made public.
                  </p>
                </div>

                {/* 1.3.1 */}
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-blue-900">
                    1.3.1 Facial Recognition and Biometric Verification (Partners)
                  </h3>
                  <p className="mt-3 text-gray-800">
                    For identity verification, the FindUs Partners Application uses facial
                    recognition technology to verify that the person in the verification
                    video matches their submitted identification document, prevent fraud, and
                    confirm partner identity during registration.
                  </p>
                  <p className="mt-4 font-medium text-gray-800">
                    Facial recognition data is processed on-device using Google ML Kit and
                    is not stored permanently. Only verification results (pass/fail) are
                    retained for compliance. Raw biometric data is deleted immediately after
                    processing.
                  </p>
                </div>

                {/* 1.4 — Background Location */}
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-amber-900">
                    1.4 Location Information
                  </h3>
                  <p className="mt-3 text-gray-800">
                    Location data is collected to show nearby service providers, assign
                    service requests, enable navigation, and improve service accuracy. The
                    app collects <strong>precise location</strong> (GPS-level accuracy) via
                    the device's fine location sensor.
                  </p>
                  <p className="mt-4 font-bold text-amber-900">
                    BACKGROUND LOCATION — FindUs Partners Application:
                  </p>
                  <p className="mt-2 text-gray-800">
                    The FindUs Partners Application collects location data{" "}
                    <strong>in the background</strong> — including when the app is
                    minimised, the screen is locked, or the app has been removed from the
                    recent apps list — whenever a partner has marked themselves as{" "}
                    <strong>"available"</strong> for service requests. This allows us to:
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-800 ml-6 list-disc">
                    <li>Assign nearby service requests to available partners in real-time</li>
                    <li>Enable accurate real-time navigation during active service delivery</li>
                    <li>Update partner availability status and location on the platform</li>
                    <li>Provide users with accurate estimated arrival times</li>
                  </ul>
                  <p className="mt-4 text-gray-800">
                    Background location is implemented using a{" "}
                    <strong>native Android foreground service</strong>. A persistent
                    notification is displayed in the device status bar at all times while
                    background location is active. This notification cannot be dismissed
                    while the service is running and serves as a continuous visible indicator
                    that location data is being collected.
                  </p>
                  <p className="mt-4 font-medium text-gray-800">
                    Background location is collected <strong>only</strong> when a partner
                    has explicitly tapped "Go Online". Partners can stop background location
                    at any time by tapping "Go Offline", which immediately stops the service
                    and dismisses the notification.
                  </p>
                  <p className="mt-4 text-gray-800">
                    For the FindUs User Application, location is collected only when the app
                    is in use to find nearby service providers and enable service requests.
                  </p>
                </div>

                {/* 1.4.1 — Foreground Service */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-green-900">
                    1.4.1 Android Foreground Service Disclosure
                  </h3>
                  <p className="mt-3 text-gray-800">
                    The FindUs Partners Application uses an{" "}
                    <strong>Android Foreground Service</strong> of type{" "}
                    <code className="bg-green-100 px-1.5 py-0.5 rounded text-sm font-mono">
                      FOREGROUND_SERVICE_TYPE_LOCATION
                    </code>{" "}
                    to deliver continuous background location tracking in compliance with
                    Android's background execution policies and Google Play's foreground
                    service requirements.
                  </p>
                  <p className="mt-4 text-gray-800">The foreground service:</p>
                  <ul className="mt-3 space-y-2 text-gray-800 ml-6 list-disc">
                    <li>
                      Runs in a <strong>separate Android process</strong> so that location
                      updates continue even if the main app is terminated by the user or
                      operating system — the same architecture used by Uber, InDrive, and
                      other ride-hailing applications
                    </li>
                    <li>
                      Displays a <strong>mandatory persistent notification</strong> showing
                      "FindUs Partner Online" and the time of the last location update while
                      active
                    </li>
                    <li>
                      Is started <strong>only</strong> when the partner explicitly taps
                      "Go Online" and stops immediately when they tap "Go Offline"
                    </li>
                    <li>
                      Sends precise location updates approximately every{" "}
                      <strong>15 seconds</strong> or after the partner moves{" "}
                      <strong>30 metres</strong>, whichever occurs first
                    </li>
                    <li>
                      Uses a <strong>WAKE_LOCK</strong> to prevent the processor from
                      sleeping while location updates are being transmitted, ensuring
                      reliable delivery when the screen is off
                    </li>
                    <li>
                      Automatically stops and sets the partner to offline if network
                      connectivity is lost for an extended period or the authentication
                      session expires
                    </li>
                  </ul>
                  <p className="mt-4 font-medium text-gray-800">
                    Partners can verify whether the foreground service is active at any time
                    by checking for the persistent "FindUs Partner Online" notification in
                    their device status bar.
                  </p>
                </div>

                {/* 1.4.2 — Battery */}
                <div>
                  <h3 className="text-xl font-semibold">
                    1.4.2 Battery Optimisation Exemption
                  </h3>
                  <p className="mt-2">
                    To ensure reliable background location delivery, the FindUs Partners
                    Application requests that Android exempt it from battery optimisation
                    (the "Allow app to always run in background" permission). This request
                    is presented as a native system dialog the first time a partner goes
                    online.
                  </p>
                  <p className="mt-4">
                    Granting this exemption is <strong>optional</strong>. Without it,
                    Android may suspend the foreground service on certain devices, causing
                    gaps in location updates. Partners may revoke this exemption at any time
                    through{" "}
                    <em>Device Settings → Apps → FindUs Partners → Battery</em>.
                  </p>
                  <p className="mt-4">
                    On devices manufactured by Xiaomi, Oppo, Vivo, or Realme, the app
                    additionally guides partners to grant autostart permission through the
                    manufacturer-specific settings screen, as these devices apply additional
                    process restrictions beyond standard Android battery management.
                  </p>
                </div>

                {/* 1.4.3 — Boot */}
                <div>
                  <h3 className="text-xl font-semibold">
                    1.4.3 Receive Boot Completed Permission
                  </h3>
                  <p className="mt-2">
                    The FindUs Partners Application declares the{" "}
                    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                      RECEIVE_BOOT_COMPLETED
                    </code>{" "}
                    permission to register a Boot Receiver component which:
                  </p>
                  <ul className="mt-3 space-y-2 ml-6 list-disc">
                    <li>
                      Allows the app to appear in manufacturer-specific autostart settings
                      screens (Xiaomi MIUI, Oppo ColorOS, Vivo OriginOS, Realme UI) so
                      partners can grant autostart permission manually
                    </li>
                    <li>
                      Enables the app to detect when the device has rebooted so the
                      partner's previous online state can be restored when they next open
                      the app
                    </li>
                  </ul>
                  <p className="mt-4">
                    The Boot Receiver does <strong>not</strong> automatically start the
                    location service on device boot without user interaction. The partner
                    must open the app before any location collection resumes.
                  </p>
                </div>

                {/* 1.5 — Media */}
                <div>
                  <h3 className="text-xl font-semibold">1.5 Media and Camera Data</h3>
                  <p className="mt-2">
                    Users and partners may upload photos and videos including profile
                    images, verification media, and service-related recordings. The app
                    requests access to the device camera, media images, and media videos to
                    enable these features.
                  </p>
                  <p className="mt-4">
                    The app may save images and media files directly to the device's photo
                    gallery using the{" "}
                    <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                      WRITE_EXTERNAL_STORAGE
                    </code>{" "}
                    permission (on Android 9 and below) or scoped media storage (Android 10
                    and above). This is used when partners or users save service-related
                    images or receipts to their device.
                  </p>
                  <p className="mt-4">
                    In the FindUs User Application, users may record videos to explain or
                    demonstrate a service-related problem. These videos may be shared with
                    nearby service providers for the purpose of receiving accurate service
                    offers and are not publicly accessible.
                  </p>
                  <p className="mt-4">
                    All uploaded media is used solely for service fulfilment, verification,
                    communication, dispute handling, and platform safety.
                  </p>
                </div>

                {/* 1.6 — Device */}
                <div>
                  <h3 className="text-xl font-semibold">1.6 Device and Usage Information</h3>
                  <p className="mt-2">
                    We automatically collect technical information such as device type,
                    device manufacturer, operating system version, app version, app usage
                    behaviour, connectivity status, and performance logs to maintain
                    stability, security, and service quality. Device manufacturer
                    information is used locally to provide appropriate battery optimisation
                    guidance on Xiaomi, Oppo, Vivo, and Realme devices.
                  </p>
                </div>

                {/* 1.7 — Communication */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-semibold">
                    1.7 In-App Communication and Language Preferences
                  </h3>
                  <p className="mt-2">
                    FindUs provides in-app chat and calling functionality that allows users
                    and service providers to communicate regarding service requests. Messages
                    and related metadata may be stored to enable communication, provide
                    customer support, resolve disputes, and maintain platform safety.
                  </p>
                  <p className="mt-4">
                    Users and service providers involved in a service request may view and
                    contact each other using their provided phone numbers. Phone numbers are
                    shared only between parties directly involved in a service.
                  </p>
                  <p className="mt-4">
                    Language preferences such as English or Urdu selection may be stored to
                    personalise the app experience and are not shared with third parties.
                  </p>
                </div>

                {/* 1.8 — Payments */}
                <div>
                  <h3 className="text-xl font-semibold">
                    1.8 Payments, Wallet, and Commission Information (Partners)
                  </h3>
                  <p className="mt-2">
                    FindUs provides a wallet-based system for service providers. Partners
                    may be required to top up their account balance to receive new service
                    requests.
                  </p>
                  <p className="mt-4">
                    Top-ups may be completed through supported third-party payment services
                    including <strong>JazzCash</strong> and other certified mobile wallet
                    providers and payment gateways available in Pakistan. FindUs does not
                    store users' full payment credentials, JazzCash account numbers, PINs,
                    or any sensitive financial information. Payment processing is handled
                    securely by the respective payment service providers in accordance with
                    their own privacy policies and applicable financial regulations.
                  </p>
                  <p className="mt-4">
                    FindUs deducts a service commission from a partner's wallet balance for
                    completed jobs. Wallet balances, top-up history, and commission
                    deductions may be recorded and stored for transaction tracking, support,
                    dispute resolution, and legal compliance.
                  </p>
                </div>

                {/* 1.9 — Bluetooth */}
                <div>
                  <h3 className="text-xl font-semibold">1.9 Bluetooth Connectivity</h3>
                  <p className="mt-2">
                    The FindUs Partners Application may request Bluetooth access for
                    connectivity features and enhanced location accuracy. Bluetooth is used
                    to improve location services and is not used to collect data from other
                    devices.
                  </p>
                </div>

                {/* 1.10 — Audio */}
                <div>
                  <h3 className="text-xl font-semibold">1.10 Audio and Call Features</h3>
                  <p className="mt-2">
                    Both applications may modify audio settings and access the microphone to
                    enable in-app voice calls, optimise call quality during service
                    coordination, manage notification sounds, and support real-time
                    communication during service delivery.
                  </p>
                  <p className="mt-4">
                    We use Agora RTC Engine for real-time voice and video communication.
                    Call data is transmitted securely and is not recorded or stored by
                    FindUs unless required for dispute resolution.
                  </p>
                </div>

                {/* 1.11 — Third-Party SDKs — UPDATED */}
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-green-900">
                    1.11 Third-Party Services and SDKs
                  </h3>
                  <p className="mt-3 text-gray-800">
                    FindUs integrates the following third-party services and libraries, each
                    operating under its own privacy policy. As the developer, FindUs is
                    responsible for ensuring all third-party code complies with Google Play
                    Developer Programme policies.
                  </p>
                  <ul className="mt-4 space-y-3 text-gray-800">
                    <li>
                      <strong>Google Maps Platform:</strong> For mapping, geocoding,
                      address lookup, and location-based services. Coordinate and address
                      data is transmitted to Google servers for processing.
                    </li>
                    <li>
                      <strong>Google Geocoding API:</strong> For converting GPS coordinates
                      to human-readable addresses and vice versa when displaying service
                      locations. Coordinate data is transmitted to Google servers.
                    </li>
                    <li>
                      <strong>Google Sign-In:</strong> For authentication services.
                    </li>
                    <li>
                      <strong>Google ML Kit — Text Recognition:</strong> For on-device
                      extraction of text from CNIC and identification documents (Partners
                      only). Processing occurs entirely on-device; no data is sent to Google
                      servers.
                    </li>
                    <li>
                      <strong>Google ML Kit — Face Detection:</strong> For on-device facial
                      verification during partner registration (Partners only). Processing
                      occurs entirely on-device; no data is sent to Google servers.
                    </li>
                    <li>
                      <strong>Google ML Kit — Entity Extraction:</strong> For on-device
                      extraction and interpretation of structured information from text
                      content within the app. Processing occurs entirely on-device.
                    </li>
                    <li>
                      <strong>Google Play Services — Fused Location Provider:</strong> Used
                      by the Partners foreground service for battery-efficient, high-accuracy
                      native location updates while online.
                    </li>
                    <li>
                      <strong>Firebase Cloud Messaging:</strong> For push notifications and
                      real-time service request alerts. Device tokens are transmitted to
                      Google Firebase servers.
                    </li>
                    <li>
                      <strong>Firebase Cloud Functions:</strong> For server-side processing
                      of certain platform operations including notifications and data
                      validation. Data processed by Cloud Functions is handled by Google
                      Firebase infrastructure.
                    </li>
                    <li>
                      <strong>Agora RTC Engine:</strong> For real-time voice and video calls
                      between users and partners during service requests. Audio and video
                      streams are transmitted through Agora's servers.
                    </li>
                    <li>
                      <strong>Supabase:</strong> For backend database storage, real-time
                      data synchronisation, and authentication services. User data is stored
                      on Supabase-managed servers.
                    </li>
                    <li>
                      <strong>Location Plugin (flutter location):</strong> A secondary
                      location library used for on-demand location lookups within the app.
                      Uses the device's fine location sensor. Location data is processed
                      locally and transmitted to FindUs servers only as part of service
                      request matching and navigation features.
                    </li>
                    <li>
                      <strong>JazzCash:</strong> A mobile wallet and payment service
                      operated by Jazz (Mobilink Microfinance Bank Limited) and used by
                      partners to top up their FindUs wallet balance. When a partner
                      initiates a top-up via JazzCash, payment details are handled directly
                      by JazzCash and are subject to{" "}
                      <a
                        href="https://www.jazzcash.com.pk/privacy-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#77B900] hover:underline"
                      >
                        JazzCash's Privacy Policy
                      </a>
                      . FindUs does not store JazzCash account numbers, PINs, or any
                      sensitive payment credentials.
                    </li>
                    <li>
                      <strong>Other Payment Processors:</strong> Additional certified
                      third-party payment providers may be available for wallet top-ups,
                      including other mobile wallet services and payment gateways operating
                      in Pakistan. The specific providers available will be displayed within
                      the app at the time of top-up.
                    </li>
                    <li>
                      <strong>WebView (webview_flutter):</strong> Used to display certain
                      in-app web content such as terms, help pages, or payment provider
                      interfaces. When a WebView is open, the content is loaded from the
                      respective third-party website and is subject to that website's own
                      privacy policy.
                    </li>
                  </ul>
                  <p className="mt-4 font-medium text-gray-800">
                    We recommend reviewing the privacy policies of these third-party
                    services to understand how they handle your data.
                  </p>
                </div>

              </div>
            </div>

            {/* ── Section 2 ── */}
            <div>
              <h2 className="text-2xl font-bold mb-4">2. How We Use Information</h2>
              <p>
                We use collected information to operate the FindUs platform, verify service
                providers, connect users with partners, manage bookings, improve app
                performance, provide customer support, prevent fraud, and comply with legal
                obligations. Specifically:
              </p>
              <ul className="mt-4 space-y-2 ml-6 list-disc">
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

            {/* ── Section 3 ── */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. Data Sharing and Disclosure</h2>
              <p>
                FindUs does not sell personal data. Sensitive information including CNIC
                details, verification videos, and biometric verification results is not
                shared with users or third parties except where required by law or
                regulatory authorities.
              </p>
              <p className="mt-4">
                We may share limited information in the following circumstances:
              </p>
              <ul className="mt-3 space-y-2 ml-6 list-disc">
                <li>
                  <strong>Between Users and Partners:</strong> Name, phone number, location,
                  and service request details are shared to facilitate service delivery
                </li>
                <li>
                  <strong>With Third-Party Services:</strong> As described in Section 1.11,
                  certain data is shared with service providers who assist in platform
                  operations
                </li>
                <li>
                  <strong>For Legal Compliance:</strong> We may disclose information when
                  required by law, court order, or government request
                </li>
                <li>
                  <strong>For Safety and Security:</strong> Information may be shared to
                  prevent fraud, protect user safety, or enforce our terms of service
                </li>
              </ul>
            </div>

            {/* ── Section 4 ── */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p>
                We apply reasonable technical and organisational safeguards including
                encryption, restricted access controls, and secure storage practices to
                protect personal information from unauthorised access, alteration,
                disclosure, or destruction.
              </p>
              <ul className="mt-4 space-y-2 ml-6 list-disc">
                <li>Data encryption in transit and at rest</li>
                <li>Access controls and authentication requirements</li>
                <li>Regular security audits and monitoring</li>
                <li>Secure payment processing through certified third-party providers</li>
                <li>On-device processing for sensitive biometric data via Google ML Kit</li>
                <li>Encrypted local storage for sensitive credentials on-device</li>
              </ul>
              <p className="mt-4">
                While we implement strong security measures, no system can guarantee
                absolute security. We encourage users to maintain the security of their
                account credentials.
              </p>
            </div>

            {/* ── Section 5 ── */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4 text-purple-900">5. Data Retention</h2>
              <p className="text-gray-800">
                Personal information is retained only for as long as necessary to fulfil
                operational, legal, and verification requirements.
              </p>
              <ul className="mt-4 space-y-3 text-gray-800">
                <li><strong>Account Information:</strong> Retained while account is active, plus 90 days after deletion request</li>
                <li><strong>CNIC and Verification Videos:</strong> Retained for 2 years for compliance and fraud prevention, then securely deleted</li>
                <li><strong>Biometric Verification Data:</strong> Processed on-device and deleted immediately; only verification results retained</li>
                <li><strong>Location Data:</strong> Retained for 90 days for service quality and support</li>
                <li><strong>Transaction Records:</strong> Retained for 7 years for financial compliance and tax purposes</li>
                <li><strong>Chat Messages:</strong> Retained for 1 year or until account deletion, whichever comes first</li>
                <li><strong>Service Request History:</strong> Retained while account is active</li>
              </ul>
              <p className="mt-4 font-medium text-gray-800">
                After the retention period expires, data is securely deleted or anonymised
                such that it cannot be linked back to individual users.
              </p>
            </div>

            {/* ── Section 6 ── */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. User and Partner Rights</h2>
              <p>
                Users and partners can manage their personal data directly within the FindUs
                applications and have the following rights:
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="font-semibold text-lg">In-App Data Management:</h3>
                  <ul className="mt-2 space-y-2 ml-6 list-disc">
                    <li><strong>Access:</strong> View your personal data in Account Settings</li>
                    <li><strong>Correction:</strong> Update or edit your information in your Profile section</li>
                    <li><strong>Account Deletion:</strong> Delete your account using the "Delete Account" option in Profile Settings</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-lg text-red-900">When You Delete Your Account:</h3>
                  <ul className="mt-3 space-y-2 ml-6 list-disc text-gray-800">
                    <li>Your account will be immediately deactivated</li>
                    <li>Your profile will become invisible to other users and service providers</li>
                    <li>You will not be able to create service requests or accept work</li>
                    <li>Active sessions will be terminated and you will be logged out</li>
                    <li>Any active background location foreground service will be stopped immediately</li>
                  </ul>
                  <p className="mt-3 font-medium text-red-900">
                    Account deletion is immediate and cannot be reversed by you.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-lg text-orange-900">Data Retention After Account Deletion:</h3>
                  <p className="mt-2 text-gray-800">
                    For fraud prevention, legal compliance, and platform security, certain
                    information is retained after account deletion:
                  </p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">Information Retained:</p>
                      <ul className="mt-2 space-y-1 ml-6 list-disc text-gray-800">
                        <li>Transaction records and payment history (required by law for 7 years)</li>
                        <li>Service request history and completed work records</li>
                        <li>Communications related to disputes or investigations</li>
                        <li>Records required for tax, audit, and regulatory compliance</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Retention Timeline:</p>
                      <ul className="mt-2 space-y-1 ml-6 list-disc text-gray-800">
                        <li><strong>0–90 days:</strong> Full data retained for account recovery and investigation</li>
                        <li><strong>After 90 days:</strong> Personally identifiable information is anonymised</li>
                        <li><strong>7 years:</strong> Transaction and financial records retained for legal compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Complete Data Deletion Request:</h3>
                  <p className="mt-2">
                    To request complete deletion of all your data (subject to legal
                    requirements), contact us at{" "}
                    <strong>contact@findus.com.pk</strong> with the subject line{" "}
                    <em>"Request for Complete Data Deletion"</em>. We will respond within
                    30 days.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Additional Rights:</h3>
                  <ul className="mt-2 space-y-2 ml-6 list-disc">
                    <li><strong>Data Portability:</strong> Request a copy of your data by contacting contact@findus.com.pk</li>
                    <li><strong>Objection:</strong> Object to certain data processing activities by contacting support</li>
                    <li><strong>Account Recovery:</strong> Within 90 days of deletion you may contact support to request restoration</li>
                    <li>
                      <strong>Location Control:</strong> Stop background location at any time
                      by tapping "Go Offline" in the app, or revoke location permission via{" "}
                      <em>Device Settings → Apps → FindUs Partners → Permissions</em>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── Section 7 ── */}
            <div>
              <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
              <p>
                FindUs services are not intended for individuals under the age of 13. We do
                not knowingly collect personal information from children. If we become aware
                that a child under 13 has provided us with personal information, we will
                take steps to delete such information promptly.
              </p>
              <p className="mt-4">
                Parents or guardians who believe their child has provided personal
                information to FindUs should contact us immediately at{" "}
                <strong>contact@findus.com.pk</strong>.
              </p>
            </div>

            {/* ── Section 8 — In-App Disclosures ── */}
            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
              <h2 className="text-2xl font-bold mb-4 text-indigo-900">
                8. Prominent In-App Disclosures
              </h2>
              <p className="text-gray-800">
                Before requesting access to sensitive permissions such as location, camera,
                microphone, or identification documents, FindUs displays clear in-app
                explanations informing you of what data will be collected, why the
                permission is needed, how the data will be used, and whether it will be
                shared.
              </p>
              <p className="mt-4 font-medium text-gray-800">
                You must grant explicit permission before any sensitive data is accessed.
                Permissions can be modified or revoked at any time through your device
                settings.
              </p>
              <p className="mt-4 text-gray-800">
                For background location specifically, the persistent "FindUs Partner Online"
                notification in the device status bar serves as a continuous real-time
                indicator that the foreground service is active and location data is being
                collected. This notification is always visible and cannot be hidden or
                dismissed while background location is active.
              </p>
            </div>

            {/* ── Section 9 ── */}
            <div>
              <h2 className="text-2xl font-bold mb-4">9. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy to reflect changes in our practices,
                services, or legal requirements. When we make significant changes, we will
                notify you through in-app notifications, email to your registered address,
                and a prominent notice on our website.
              </p>
              <p className="mt-4">
                Your continued use of FindUs services after such modifications constitutes
                your acknowledgment and acceptance of the updated Privacy Policy.
              </p>
            </div>

            {/* ── Section 10 — Contact ── */}
            <div className="border-t pt-8 bg-gray-50 -mx-10 -mb-10 md:-mx-14 md:-mb-14 px-10 md:px-14 py-10 md:py-14 rounded-b-3xl">
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy
                Policy or our data practices, please contact us:
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="mb-2"><strong>Company:</strong> FIND US (PRIVATE) LIMITED</p>
                <p className="mb-2">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:contact@findus.com.pk" className="text-[#77B900] hover:underline">
                    contact@findus.com.pk
                  </a>
                </p>
                <p className="mb-2"><strong>Country:</strong> Pakistan</p>
                <p><strong>Address:</strong> Gulshan-e-Iqbal, Karachi East, Sindh, Pakistan</p>
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