"use client";

import { motion } from "framer-motion";

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
      {children}
    </h3>
  );
}

function Para({ children }: { children: React.ReactNode }) {
  return <p className="text-[17px] leading-relaxed text-gray-800">{children}</p>;
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="ml-6 list-disc space-y-2 text-[17px] leading-relaxed text-gray-800">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function InfoCard({
  title,
  children,
  tone = "default",
}: {
  title: string;
  children: React.ReactNode;
  tone?: "default" | "amber" | "blue" | "red" | "green";
}) {
  const styles = {
    default: "bg-white border border-gray-200",
    amber: "bg-amber-50 border border-amber-200",
    blue: "bg-blue-50 border border-blue-200",
    red: "bg-red-50 border border-red-200",
    green: "bg-green-50 border border-green-200",
  };

  return (
    <div className={`rounded-2xl p-6 ${styles[tone]}`}>
      <h4 className="text-lg font-semibold text-gray-900 mb-3">{title}</h4>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white px-6 md:px-12 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d9ebbb] bg-[#f7fbef] px-4 py-1.5 text-sm text-[#4c6f00] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#77B900]" />
            FindUs User App + FindUs Partner App
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Privacy <span className="text-[#77B900]">Policy</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-5 leading-relaxed">
            This Privacy Policy explains in detail how FindUs collects, uses,
            stores, shares, protects, retains, and deletes information when you
            use the FindUs platform, including the FindUs User Application and
            the FindUs Partner Application.
          </p>

          <p className="text-sm text-gray-500 mt-4">
            Last updated: 20 April 2026
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#table-of-contents"
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Jump to sections
            </a>

            <a
              href="#account-deletion"
              className="inline-flex items-center rounded-full border border-[#ffd1d1] bg-[#fff5f5] px-5 py-2.5 text-sm font-medium text-[#b42318] hover:bg-[#ffeded] transition-colors"
            >
              Account deletion
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-white border border-gray-200 rounded-[32px] shadow-xl overflow-hidden"
        >
          <div className="px-8 md:px-14 py-10 md:py-14 border-b border-gray-100 bg-gradient-to-r from-white to-emerald-50/50">
            <SectionTitle>Important Summary</SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
              <InfoCard title="What FindUs is" tone="green">
                <Para>
                  FindUs is a technology platform that connects users who need
                  home or local services with independent service providers who
                  offer those services.
                </Para>
                <Para>
                  The platform includes separate experiences for customers and
                  partners, and this policy applies to both unless a section
                  clearly states that it applies only to one side.
                </Para>
              </InfoCard>

              <InfoCard title="What this policy covers" tone="blue">
                <Para>
                  This policy explains what information we collect, why we
                  collect it, how it is used, when it is shared, how long it is
                  kept, and what rights you may have regarding your information.
                </Para>
                <Para>
                  It also explains background location, verification, media,
                  communications, wallet-related information, account deletion,
                  and third-party integrations.
                </Para>
              </InfoCard>
            </div>
          </div>

          <div className="px-8 md:px-14 py-10 md:py-14 space-y-14">
            <section id="table-of-contents" className="scroll-mt-24">
              <SectionTitle>Table of Contents</SectionTitle>
              <div className="grid md:grid-cols-2 gap-4 text-[16px] text-gray-800">
                <div className="space-y-2">
                  <p>1. Scope of This Privacy Policy</p>
                  <p>2. Who We Are</p>
                  <p>3. Definitions</p>
                  <p>4. Categories of Information We Collect</p>
                  <p>5. Information We Collect from Users</p>
                  <p>6. Information We Collect from Partners</p>
                  <p>7. Verification and Trust Information</p>
                  <p>8. Location Data and Mapping Information</p>
                  <p>9. Background Location and Foreground Services</p>
                  <p>10. Media, Uploads, and Request Content</p>
                  <p>11. Communications and Contact Information</p>
                  <p>12. Payments, Wallet, and Transaction Information</p>
                </div>
                <div className="space-y-2">
                  <p>13. How We Use Information</p>
                  <p>14. Legal and Safety Reasons for Processing</p>
                  <p>15. When We Share Information</p>
                  <p>16. Third-Party Services</p>
                  <p>17. Data Security</p>
                  <p>18. Data Retention</p>
                  <p>19. Account Deletion and Anonymisation</p>
                  <p>20. Your Rights and Choices</p>
                  <p>21. Children and Age Restrictions</p>
                  <p>22. International and Local Compliance</p>
                  <p>23. Changes to This Policy</p>
                  <p>24. Contact Information</p>
                </div>
              </div>
            </section>

            <section>
              <SectionTitle>1. Scope of This Privacy Policy</SectionTitle>

              <Para>
                This Privacy Policy applies to all use of the FindUs platform,
                including the FindUs User Application, the FindUs Partner
                Application, our website pages that relate to these services,
                and any related support, trust, safety, or account management
                process that involves personal information.
              </Para>

              <Para>
                This policy covers information collected directly from you,
                information collected automatically from your device or app
                activity, information created during your use of the platform,
                and information received from third-party services that support
                account verification, payment flows, communications, analytics,
                location services, or safety functions.
              </Para>

              <Para>
                If you use FindUs as a customer requesting services, some
                sections apply mainly to you. If you use FindUs as an
                independent service provider or partner, some sections apply
                especially to you because the Partner App includes additional
                operational, safety, and verification functions.
              </Para>

              <Para>
                If a section applies only to one side of the platform, we state
                that clearly. Otherwise, it should be read as applying to both
                users and partners.
              </Para>
            </section>

            <section>
              <SectionTitle>2. Who We Are</SectionTitle>

              <Para>
                FindUs is operated by <strong>FIND US (PRIVATE) LIMITED</strong>.
                We provide a marketplace technology platform that helps connect
                people who need services with independent service providers who
                may accept and complete those services.
              </Para>

              <Para>
                In this Privacy Policy, references to “FindUs”, “we”, “our”, or
                “us” mean FIND US (PRIVATE) LIMITED and its authorised platform,
                support, and trust-and-safety operations as relevant to the
                services offered through the FindUs platform.
              </Para>

              <InfoCard title="Core platform role" tone="green">
                <Para>
                  FindUs acts as a technology platform and coordination layer. We
                  build the product, operate the systems, support trust and
                  safety, facilitate communication and workflow tools, and
                  maintain the digital environment used by both sides of the
                  marketplace.
                </Para>
              </InfoCard>
            </section>

            <section>
              <SectionTitle>3. Definitions</SectionTitle>

              <SubTitle>3.1 “User”</SubTitle>
              <Para>
                A “User” is a customer or customer-side account holder who uses
                the FindUs User Application to request, browse, coordinate, or
                receive services.
              </Para>

              <SubTitle>3.2 “Partner”</SubTitle>
              <Para>
                A “Partner” is an independent service provider who uses the
                FindUs Partner Application to view requests, send offers, manage
                availability, communicate with users, navigate to jobs, and
                complete work.
              </Para>

              <SubTitle>3.3 “Personal Information”</SubTitle>
              <Para>
                Personal Information means any information that identifies you,
                relates to you, can reasonably be linked to you, or can be used
                to distinguish your account, profile, device, or activities from
                others.
              </Para>

              <SubTitle>3.4 “Processing”</SubTitle>
              <Para>
                Processing includes collecting, recording, storing, structuring,
                organising, using, analysing, disclosing, deleting,
                anonymising, or otherwise handling information.
              </Para>

              <SubTitle>3.5 “Background Location”</SubTitle>
              <Para>
                Background Location means location data collected when the app is
                not actively open on screen, including when it is minimised,
                running in the background, or when the device screen is locked,
                subject to device permissions and the operational state of the
                Partner App.
              </Para>
            </section>

            <section>
              <SectionTitle>4. Categories of Information We Collect</SectionTitle>

              <Para>
                We collect different categories of information depending on how
                you use FindUs, which side of the marketplace you use, what
                permissions you enable, what features you access, and what
                information is required for trust, safety, compliance,
                communication, or platform operations.
              </Para>

              <Bullets
                items={[
                  <>Identity and account information</>,
                  <>Contact information</>,
                  <>Profile information</>,
                  <>Verification and trust information</>,
                  <>Location and mapping information</>,
                  <>Media and uploaded content</>,
                  <>Communication data</>,
                  <>Payment and wallet-related information</>,
                  <>Device, diagnostics, and technical information</>,
                  <>Support, complaint, and dispute information</>,
                  <>Security, moderation, and platform integrity information</>,
                ]}
              />
            </section>

            <section>
              <SectionTitle>5. Information We Collect from Users</SectionTitle>

              <SubTitle>5.1 Basic account information</SubTitle>
              <Para>
                When you create or use a User account, we may collect your name,
                phone number, and any other basic details required to establish
                and maintain your account.
              </Para>

              <SubTitle>5.2 Optional profile information</SubTitle>
              <Para>
                You may choose to provide additional profile details, such as a
                profile image, email address, or other account preferences. Some
                profile fields may be optional while others may become necessary
                for support, security, or dispute handling.
              </Para>

              <SubTitle>5.3 Service request information</SubTitle>
              <Para>
                When you create a request, we collect information related to that
                request, including the selected category, service need,
                descriptive text, attached media, and location details needed to
                help providers understand and respond to the request.
              </Para>

              <SubTitle>5.4 User location data</SubTitle>
              <Para>
                We collect location information from users where needed to place
                service requests accurately, show nearby providers, improve
                matching quality, support arrival tracking, and help ensure the
                right provider reaches the right destination.
              </Para>

              <SubTitle>5.5 Ratings, reviews, and feedback</SubTitle>
              <Para>
                After a service or interaction, we may collect ratings, reviews,
                complaints, reports, or other feedback that helps us evaluate
                platform quality, detect misuse, improve safety, and support
                dispute review.
              </Para>

              <InfoCard title="User-side examples" tone="blue">
                <Bullets
                  items={[
                    <>Name and phone number used to register the account</>,
                    <>Current or request-specific service location</>,
                    <>Problem photos or videos uploaded to explain a job</>,
                    <>Chat messages with a provider during an active request</>,
                    <>Reports or complaints submitted after a cancellation or dispute</>,
                  ]}
                />
              </InfoCard>
            </section>

            <section>
              <SectionTitle>6. Information We Collect from Partners</SectionTitle>

              <SubTitle>6.1 Partner registration information</SubTitle>
              <Para>
                When you register as a partner, we may collect your name, phone
                number, professional category information, language preferences,
                and other onboarding details required to create and operate your
                partner account.
              </Para>

              <SubTitle>6.2 Professional and profile information</SubTitle>
              <Para>
                We may collect your service categories, work-related experience,
                completed jobs count, ratings, visibility status, and profile
                information displayed to users inside the platform where relevant.
              </Para>

              <SubTitle>6.3 Availability and operational data</SubTitle>
              <Para>
                The Partner App creates operational data as you use the platform,
                including online status, request views, offer submissions, active
                job status, start-work timing, route progress, job completion
                markers, and commission-related events.
              </Para>

              <SubTitle>6.4 Wallet-related partner data</SubTitle>
              <Para>
                If the platform uses a wallet or balance system for partners, we
                may store balance state, deductions, top-up records, commission
                records, earning-related history, operational restrictions tied
                to balance thresholds, and support interactions related to
                wallet-related issues.
              </Para>

              <SubTitle>6.5 Performance and trust signals</SubTitle>
              <Para>
                To maintain platform reliability and safety, we may collect
                information regarding cancellations, reports, abusive behaviour,
                suspected misuse, repeated failed commitments, quality complaints,
                or conduct that affects trust and operational quality on the
                platform.
              </Para>

              <InfoCard title="Partner-side examples" tone="amber">
                <Bullets
                  items={[
                    <>Online and offline status changes</>,
                    <>Location movement while available or during an active job</>,
                    <>Offer amount submitted on a user request</>,
                    <>Job completion and commission deduction history</>,
                    <>Support tickets, investigations, or compliance-related review notes</>,
                  ]}
                />
              </InfoCard>
            </section>

            <section>
              <SectionTitle>7. Verification and Trust Information</SectionTitle>

              <SubTitle>7.1 Why verification exists</SubTitle>
              <Para>
                The FindUs platform includes trust and safety systems intended to
                reduce fraud, misrepresentation, impersonation, abuse, and other
                harmful behaviour. Verification is especially important on the
                Partner side because partners may physically travel to customers,
                enter customer locations, and represent themselves as trusted
                service providers.
              </Para>

              <SubTitle>7.2 CNIC and identity information</SubTitle>
              <Para>
                Partners may be required to submit government-issued
                identification information, including CNIC images and details
                extracted from those images such as name, address, and date of
                birth where relevant to the platform’s verification flow.
              </Para>

              <SubTitle>7.3 Verification video and face checks</SubTitle>
              <Para>
                Partners may also be required to record and upload a live
                verification video or perform a face-matching step as part of the
                identity verification process. These steps are intended to help
                ensure that the person creating or using the account matches the
                identity being presented during onboarding.
              </Para>

              <SubTitle>7.4 How trust information is used</SubTitle>
              <Bullets
                items={[
                  <>Identity confirmation</>,
                  <>Fraud prevention</>,
                  <>Risk review and platform integrity checks</>,
                  <>Handling complaints, law enforcement requests, or disputes where legally necessary</>,
                  <>Reducing fake accounts, impersonation, or misuse</>,
                ]}
              />

              <SubTitle>7.5 Limiting access to sensitive verification data</SubTitle>
              <Para>
                Verification-related data is handled with restricted access and is
                not displayed publicly in the way ordinary profile details may be.
                We limit access to teams, systems, or authorised service partners
                who require it for verification, support, safety, or compliance
                functions.
              </Para>

              <InfoCard title="Important note" tone="red">
                <Para>
                  Verification does not guarantee that every interaction will be
                  risk-free. It is part of a wider safety framework intended to
                  improve trust and reduce misuse.
                </Para>
              </InfoCard>
            </section>

            <section>
              <SectionTitle>8. Location Data and Mapping Information</SectionTitle>

              <SubTitle>8.1 Why location matters on FindUs</SubTitle>
              <Para>
                FindUs is a location-dependent service. Accurate location data is
                essential to help users create service requests, help partners
                discover relevant nearby work, support route guidance, provide
                ETA visibility, reduce failed arrivals, and make the marketplace
                function in real time.
              </Para>

              <SubTitle>8.2 User-side location use</SubTitle>
              <Para>
                On the User side, location may be used to pinpoint the service
                destination, show the user on a map, match nearby partners, and
                enable tracking once a provider has accepted a request.
              </Para>

              <SubTitle>8.3 Partner-side location use</SubTitle>
              <Para>
                On the Partner side, precise location may be used to determine
                service availability in relevant areas, to show nearby jobs, to
                guide the partner to the service location, to confirm movement and
                route progress on active jobs, and to support trust and safety
                investigations where needed.
              </Para>

              <SubTitle>8.4 Mapping and route-related information</SubTitle>
              <Para>
                We may process mapping-related information such as source and
                destination coordinates, route progress, approximate ETA, and
                active travel context in order to make service delivery more
                predictable, transparent, and reliable.
              </Para>
            </section>

            <section>
              <SectionTitle>9. Background Location and Foreground Services</SectionTitle>

              <InfoCard title="Applies mainly to the FindUs Partner App" tone="amber">
                <Para>
                  This section is especially important for partners because the
                  Partner App may continue collecting precise location data while
                  the app is not actively open on screen, provided the partner is
                  marked as available and relevant device permissions have been
                  granted.
                </Para>
              </InfoCard>

              <SubTitle>9.1 When background location may be collected</SubTitle>
              <Para>
                The Partner App may collect location data in the background when
                the partner has turned themselves online, is awaiting requests, is
                actively heading to a user, or is in an active job state where
                ongoing location updates are operationally necessary.
              </Para>

              <SubTitle>9.2 Why background location is needed</SubTitle>
              <Bullets
                items={[
                  <>Real-time visibility of nearby available providers</>,
                  <>Reliable request assignment and matching logic</>,
                  <>Accurate arrival tracking and ETA updates</>,
                  <>Operational continuity when the app is minimised or the device is locked</>,
                  <>Reducing missed requests and unreliable online states</>,
                ]}
              />

              <SubTitle>9.3 Foreground service and persistent notification</SubTitle>
              <Para>
                On supported Android devices, background location may be
                delivered through a foreground service that keeps the system aware
                that active location processing is taking place. When this is
                active, the device may show a persistent notification informing
                the partner that FindUs is running online or tracking activity.
              </Para>

              <SubTitle>9.4 What happens when a partner goes offline</SubTitle>
              <Para>
                When a partner manually goes offline, signs out, loses required
                permissions, or otherwise exits the relevant online state, the
                location collection flow linked to background availability should
                stop according to the app’s operational logic, subject to device
                behaviour and pending task handling.
              </Para>

              <SubTitle>9.5 Battery, device restrictions, and manufacturer behavior</SubTitle>
              <Para>
                Some Android manufacturers apply aggressive battery management,
                auto-start restrictions, or background process limits. To improve
                reliability, the Partner App may request battery optimisation
                exemption or guide the partner toward relevant settings. These
                device behaviours may affect how background services operate.
              </Para>

              <SubTitle>9.6 Why this section matters for transparency</SubTitle>
              <Para>
                Because background location is highly important and sensitive, we
                state clearly that partners may have their precise location
                collected even when the app is not open on screen, if they have
                intentionally placed themselves online or are in an active service
                state that requires continued operational tracking.
              </Para>
            </section>

            <section>
              <SectionTitle>10. Media, Uploads, and Request Content</SectionTitle>

              <SubTitle>10.1 Problem images and videos</SubTitle>
              <Para>
                Users may upload photos or videos to show the issue they need
                solved. This content helps partners better understand the nature
                of the work before sending an offer or arriving at the location.
              </Para>

              <SubTitle>10.2 Verification media</SubTitle>
              <Para>
                Partners may upload verification videos, profile images, identity
                documents, or other onboarding materials where required for trust
                and safety review.
              </Para>

              <SubTitle>10.3 How media may be used</SubTitle>
              <Bullets
                items={[
                  <>Explaining service requests to nearby providers</>,
                  <>Supporting more accurate quotes or offer decisions</>,
                  <>Assisting moderation, complaints, or fraud review</>,
                  <>Documenting onboarding and verification processes</>,
                  <>Improving support and dispute handling</>,
                ]}
              />

              <SubTitle>10.4 Your responsibilities when uploading content</SubTitle>
              <Para>
                You should upload only content that is relevant, lawful, and safe
                to share for the intended service purpose. You should not upload
                content you do not have the right to share, or content that is
                abusive, deceptive, or violates another person’s rights.
              </Para>

              <SubTitle>10.5 Moderation and removal</SubTitle>
              <Para>
                We may review, restrict, or remove content that violates our
                terms, safety expectations, applicable law, or platform rules.
                This may happen automatically, manually, or during complaints or
                investigations.
              </Para>
            </section>

            <section>
              <SectionTitle>11. Communications and Contact Information</SectionTitle>

              <SubTitle>11.1 In-app communication</SubTitle>
              <Para>
                FindUs may support in-app chat, call functionality, alerts,
                service notifications, and operational updates that allow users
                and partners to coordinate service delivery.
              </Para>

              <SubTitle>11.2 Contact sharing during service coordination</SubTitle>
              <Para>
                In some service states, limited contact information may be shared
                between the relevant user and partner to support coordination,
                arrival, timing, problem clarification, or work completion.
              </Para>

              <SubTitle>11.3 Message and call-related information</SubTitle>
              <Para>
                We may process communication-related data such as sender and
                receiver account identity, timestamps, communication status, and
                limited metadata needed for platform operations, safety review, or
                support. Unless clearly stated otherwise, references to call data
                should not be interpreted as meaning we routinely store call audio
                recordings.
              </Para>

              <SubTitle>11.4 Safety and conduct monitoring</SubTitle>
              <Para>
                Communication features may be subject to moderation, review, or
                investigation where necessary to enforce platform rules, respond
                to reports, prevent harassment, detect fraud, or protect users and
                partners from abuse.
              </Para>
            </section>

            <section>
              <SectionTitle>12. Payments, Wallet, and Transaction Information</SectionTitle>

              <SubTitle>12.1 Direct service payment context</SubTitle>
              <Para>
                Depending on the product flow, service payments may happen outside
                the app, such as cash settlement directly between the user and the
                partner, while certain platform-related charges, balances, or
                commission flows may be tracked digitally.
              </Para>

              <SubTitle>12.2 Partner wallet and commission-related records</SubTitle>
              <Para>
                If the Partner App includes a wallet, top-up, or commission
                system, we may collect and store wallet balance state, deductions,
                top-up references, transaction statuses, commission-related
                calculations, restrictions triggered by insufficient balance, and
                related support activity.
              </Para>

              <SubTitle>12.3 Why financial or quasi-financial records are kept</SubTitle>
              <Bullets
                items={[
                  <>Accurate partner account operation</>,
                  <>Commission accounting and dispute handling</>,
                  <>Fraud prevention and misuse detection</>,
                  <>Support for reconciliation or complaint review</>,
                  <>Compliance with tax, financial, or corporate recordkeeping duties where applicable</>,
                ]}
              />

              <SubTitle>12.4 Third-party payment processors</SubTitle>
              <Para>
                If a top-up or payment-related action uses a third-party payment
                service, that provider may process transaction information under
                its own terms and privacy rules. We do not treat external payment
                processors as merely cosmetic integrations. They may have their
                own independent obligations and systems.
              </Para>

              <SubTitle>12.5 Sensitive payment credentials</SubTitle>
              <Para>
                FindUs does not seek to unnecessarily collect highly sensitive
                payment credentials that are not needed for the platform’s chosen
                flow. Where third-party processors are used, those providers may
                manage sensitive payment elements within their own secured
                environments.
              </Para>
            </section>

            <section>
              <SectionTitle>13. How We Use Information</SectionTitle>

              <Para>
                We use information to operate, maintain, improve, secure, and
                support the FindUs platform. Our use of information depends on
                the type of data involved and the feature or workflow that
                requires it.
              </Para>

              <Bullets
                items={[
                  <>To create and manage accounts</>,
                  <>To authenticate users and partners</>,
                  <>To verify partner identity and reduce fraud</>,
                  <>To match service requests with relevant providers</>,
                  <>To display maps, routes, ETA, and tracking views</>,
                  <>To enable offers, acceptance, and job workflows</>,
                  <>To support calls, chat, and service coordination</>,
                  <>To maintain quality, trust, and operational reliability</>,
                  <>To investigate complaints, reports, or suspicious activity</>,
                  <>To enforce our Terms and platform rules</>,
                  <>To provide support and respond to deletion requests</>,
                  <>To improve product performance, reliability, and user experience</>,
                  <>To comply with legal, financial, safety, or regulatory obligations</>,
                ]}
              />

              <SubTitle>13.1 Product improvement and operational analytics</SubTitle>
              <Para>
                We may analyse service patterns, feature usage, error states,
                request success or failure points, response times, and behaviour
                trends to improve app performance, user experience, marketplace
                quality, and trust systems.
              </Para>

              <SubTitle>13.2 Abuse prevention and safety intelligence</SubTitle>
              <Para>
                Some information is used specifically to identify spam, fake
                accounts, payment misuse, coordinated fraud, repeated
                cancellations, account cycling, suspicious route behaviour,
                manipulated workflows, or other activity that threatens the
                integrity of the platform.
              </Para>
            </section>

            <section>
              <SectionTitle>14. Legal and Safety Reasons for Processing</SectionTitle>

              <Para>
                In addition to core product operation, we may process information
                because doing so is necessary for fraud prevention, law
                enforcement cooperation where legally required, dispute handling,
                trust-and-safety review, compliance obligations, corporate
                recordkeeping, and platform defence against misuse.
              </Para>

              <SubTitle>14.1 Examples of safety-related processing</SubTitle>
              <Bullets
                items={[
                  <>Reviewing reports submitted by users or partners</>,
                  <>Investigating suspicious account patterns</>,
                  <>Retaining records connected to serious disputes or abuse claims</>,
                  <>Assessing repeated violation behaviour</>,
                  <>Responding to lawful requests from authorities where legally required</>,
                ]}
              />

              <SubTitle>14.2 Why retention may continue after deletion</SubTitle>
              <Para>
                Even after an account is deleted, some information may need to be
                kept for a period of time if it relates to unresolved disputes,
                fraud prevention, law enforcement requests, tax or financial
                recordkeeping, regulatory expectations, or platform security.
              </Para>
            </section>

            <section>
              <SectionTitle>15. When We Share Information</SectionTitle>

              <Para>
                We do not sell your personal information as a product. However,
                we do share limited information in specific situations where
                sharing is necessary for the operation, security, support, or
                legal compliance of the platform.
              </Para>

              <SubTitle>15.1 Sharing between users and partners</SubTitle>
              <Para>
                Certain information must flow between the two sides of the
                marketplace so the service can work. For example, request content,
                service location, limited profile context, contact details in
                relevant states, and service coordination information may be made
                visible where necessary to complete the workflow.
              </Para>

              <SubTitle>15.2 Sharing with vendors and infrastructure providers</SubTitle>
              <Para>
                We may share data with trusted service providers who support
                infrastructure, storage, maps, communications, analytics, wallet
                operations, hosting, verification, support, or security functions.
              </Para>

              <SubTitle>15.3 Sharing for legal or safety reasons</SubTitle>
              <Para>
                We may disclose information where required by law, legal process,
                court order, regulator request, or where necessary to investigate
                fraud, prevent harm, protect the platform, or defend legal rights.
              </Para>

              <SubTitle>15.4 Sharing in corporate events</SubTitle>
              <Para>
                If FindUs undergoes a corporate transaction such as restructuring,
                merger, acquisition, investment diligence, or asset transfer,
                relevant information may be disclosed as part of that process
                subject to appropriate legal safeguards and confidentiality.
              </Para>
            </section>

            <section>
              <SectionTitle>16. Third-Party Services</SectionTitle>

              <Para>
                FindUs may rely on third-party services to operate important parts
                of the platform. These integrations are not all identical. Some
                provide infrastructure, some provide communications, some support
                maps or location, and some may support payments or verification.
              </Para>

              <SubTitle>16.1 Examples of third-party categories</SubTitle>
              <Bullets
                items={[
                  <>Cloud database and backend infrastructure providers</>,
                  <>Map and location service providers</>,
                  <>Voice and communication technology providers</>,
                  <>Payment and wallet support providers</>,
                  <>Crash, diagnostics, and reliability service providers</>,
                  <>Authentication or messaging support providers</>,
                ]}
              />

              <SubTitle>16.2 Independent privacy practices</SubTitle>
              <Para>
                Third-party providers may process data under their own privacy
                policies, contractual terms, and security practices. Where those
                providers directly receive or process information, their own
                documentation may also apply.
              </Para>

              <SubTitle>16.3 Limiting third-party access</SubTitle>
              <Para>
                We aim to work with providers that are relevant, operationally
                necessary, and reasonable for the needs of the platform. We do not
                treat third-party access casually, especially where identity,
                location, wallet, or communication data is involved.
              </Para>
            </section>

            <section>
              <SectionTitle>17. Data Security</SectionTitle>

              <SubTitle>17.1 Security approach</SubTitle>
              <Para>
                We use reasonable technical, organisational, and administrative
                measures designed to protect data against unauthorised access,
                loss, misuse, disclosure, alteration, or destruction.
              </Para>

              <SubTitle>17.2 Examples of security measures</SubTitle>
              <Bullets
                items={[
                  <>Access controls and role-based restrictions</>,
                  <>Secure transport or encrypted transmission where appropriate</>,
                  <>Controlled storage environments</>,
                  <>Operational monitoring and support review processes</>,
                  <>Restricted handling of verification and compliance-related information</>,
                ]}
              />

              <SubTitle>17.3 No absolute guarantee</SubTitle>
              <Para>
                No digital system can be guaranteed to be completely secure. While
                we take security seriously and implement practical protections,
                users and partners should also protect their devices, credentials,
                and communication practices.
              </Para>

              <SubTitle>17.4 Device-side responsibility</SubTitle>
              <Para>
                You are responsible for maintaining the security of the phone,
                operating system, SIM, passwords, verification access, and other
                device-level controls through which your FindUs account may be
                accessed.
              </Para>
            </section>

            <section>
              <SectionTitle>18. Data Retention</SectionTitle>

              <Para>
                We retain information only for as long as reasonably necessary for
                the purposes described in this policy, unless a longer retention
                period is required or justified by law, corporate obligations,
                fraud prevention, support needs, or dispute handling.
              </Para>

              <SubTitle>18.1 Retention depends on category</SubTitle>
              <Para>
                Different categories of information may be retained for different
                periods because not all information serves the same purpose.
                Identity records, support messages, location traces, transaction
                records, and verification materials do not all have the same
                retention logic.
              </Para>

              <div className="grid md:grid-cols-2 gap-5 mt-6">
                <InfoCard title="Examples of retention logic" tone="green">
                  <Bullets
                    items={[
                      <>Basic account information may be retained while the account is active</>,
                      <>Support and complaint data may be retained while an issue is under review</>,
                      <>Transaction and commission-related records may be retained longer for accounting and dispute purposes</>,
                      <>Verification-related records may be retained to protect platform integrity and support compliance</>,
                    ]}
                  />
                </InfoCard>

                <InfoCard title="Why longer retention may happen" tone="amber">
                  <Bullets
                    items={[
                      <>Fraud prevention</>,
                      <>Repeat-abuse detection</>,
                      <>Legal requests</>,
                      <>Tax or financial obligations</>,
                      <>Serious complaints or trust-and-safety investigations</>,
                    ]}
                  />
                </InfoCard>
              </div>

              <SubTitle>18.2 Deleted accounts are not always instant full erasure</SubTitle>
              <Para>
                Deleting an account generally means the account is deactivated and
                removed from active marketplace use. However, some underlying
                records may continue to be retained for a limited or legally
                required period for safety, financial, compliance, or support
                reasons.
              </Para>
            </section>

            <section id="account-deletion" className="scroll-mt-24">
              <SectionTitle>19. Account Deletion and Anonymisation</SectionTitle>

              <SubTitle>19.1 Deleting your account inside the app</SubTitle>
              <Para>
                Users and partners may be able to request account deletion from
                the relevant profile or settings area of the app. Once confirmed,
                the account should be deactivated from normal platform use.
              </Para>

              <InfoCard title="Typical in-app deletion steps" tone="red">
                <Bullets
                  items={[
                    <>Open the FindUs app</>,
                    <>Go to Profile</>,
                    <>Open Settings</>,
                    <>Tap Delete Account</>,
                    <>Review the consequences and confirm deletion</>,
                  ]}
                />
              </InfoCard>

              <SubTitle>19.2 What happens after deletion</SubTitle>
              <Bullets
                items={[
                  <>Your account is deactivated from active use</>,
                  <>You can no longer log in using that deleted account state</>,
                  <>Your profile becomes unavailable for ordinary marketplace interaction</>,
                  <>You may no longer create requests or accept jobs using that account</>,
                  <>Active sessions may be terminated</>,
                  <>Operational services tied to the active account state may stop</>,
                ]}
              />

              <SubTitle>19.3 Partner-specific deletion effects</SubTitle>
              <Para>
                If you are a partner, account deletion may also affect your online
                state, active job flow, foreground tracking state, wallet-related
                visibility, and any open platform restrictions or support cases.
                Deleting an account does not automatically erase records that must
                be preserved for financial, dispute, fraud, or compliance reasons.
              </Para>

              <SubTitle>19.4 Anonymisation and retained records</SubTitle>
              <Para>
                Where possible and appropriate, certain records may later be
                anonymised or de-linked from directly identifying information.
                However, some records may need to remain linked for a period of
                time where doing so is necessary for law, security, dispute, or
                financial recordkeeping.
              </Para>

              <SubTitle>19.5 Requesting deletion without app access</SubTitle>
              <Para>
                If you cannot access the app but want your account deleted, you
                may contact support using the contact details listed at the end of
                this page and provide enough information for us to identify your
                account safely.
              </Para>

              <InfoCard title="Deletion without app access" tone="blue">
                <Para>
                  Email: <strong>contact@findus.com.pk</strong>
                </Para>
                <Para>
                  Suggested subject: <strong>Delete My FindUs Account</strong>
                </Para>
                <Para>
                  Include your registered phone number and any additional account
                  identifying details needed for safe verification.
                </Para>
              </InfoCard>
            </section>

            <section>
              <SectionTitle>20. Your Rights and Choices</SectionTitle>

              <SubTitle>20.1 Access and correction</SubTitle>
              <Para>
                You may request access to certain information associated with your
                account and may request correction of inaccurate or outdated
                information, subject to verification and any lawful limitations.
              </Para>

              <SubTitle>20.2 Permission controls</SubTitle>
              <Para>
                Some information collection depends on device permissions such as
                location, camera, microphone, photos, or notifications. You may
                be able to manage these permissions through your device settings,
                although disabling certain permissions may reduce or break parts
                of the service.
              </Para>

              <SubTitle>20.3 Marketing and non-essential communication controls</SubTitle>
              <Para>
                Where applicable, you may have options to limit certain
                non-essential communications. However, important service,
                security, legal, and account messages may still be sent where
                necessary.
              </Para>

              <SubTitle>20.4 Limits on rights</SubTitle>
              <Para>
                Requests related to access, correction, restriction, or deletion
                may be limited where we need to retain records for lawful
                compliance, fraud prevention, platform security, accounting,
                unresolved disputes, or protection of others.
              </Para>
            </section>

            <section>
              <SectionTitle>21. Children and Age Restrictions</SectionTitle>

              <Para>
                FindUs is not intended for children. Users and partners must meet
                the minimum age requirements stated in our Terms and any
                applicable laws. If we discover that an account is being used in
                violation of age requirements, we may restrict, suspend, or delete
                that account and take related safety measures.
              </Para>

              <Para>
                If you believe a child or underage person has provided personal
                information to FindUs in a way that violates our rules or the law,
                please contact us so the matter can be reviewed.
              </Para>
            </section>

            <section>
              <SectionTitle>22. International and Local Compliance</SectionTitle>

              <Para>
                FindUs operates in a legal environment that may require
                compliance with local corporate, consumer, platform, fraud, and
                law-enforcement-related obligations. Our data practices may also
                be shaped by the technical and contractual expectations of app
                stores, payment providers, infrastructure providers, and support
                or trust systems.
              </Para>

              <Para>
                We aim to present transparent information about what the platform
                actually does, especially where sensitive areas are involved such
                as identity verification, precise location, background location,
                communication features, and financial or wallet-related records.
              </Para>
            </section>

            <section>
              <SectionTitle>23. Changes to This Policy</SectionTitle>

              <Para>
                We may update this Privacy Policy from time to time to reflect
                changes in our services, features, operational practices, legal
                requirements, trust-and-safety processes, or third-party
                integrations.
              </Para>

              <Para>
                When material changes are made, we may update the date at the top
                of this page, publish the revised text on the relevant page, and
                where appropriate provide notice through the app, website, email,
                or another reasonable communication channel.
              </Para>

              <Para>
                Your continued use of FindUs after updated terms are published may
                indicate acceptance of the revised policy to the extent permitted
                by applicable law. If you do not agree with a material change, you
                should stop using the service and may request deletion of your
                account.
              </Para>
            </section>

            <section>
              <SectionTitle>24. Contact Information</SectionTitle>

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                <div className="space-y-3 text-[17px] text-gray-800">
                  <p>
                    <strong>Company:</strong> FIND US (PRIVATE) LIMITED
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:contact@findus.com.pk"
                      className="text-[#77B900] font-medium hover:underline"
                    >
                      contact@findus.com.pk
                    </a>
                  </p>
                  <p>
                    <strong>Country:</strong> Pakistan
                  </p>
                  <p>
                    <strong>Service:</strong> FindUs User App and FindUs Partner App
                  </p>
                </div>
              </div>

              <Para>
                If you have questions about this Privacy Policy, want to request
                account deletion without app access, need support regarding your
                information, or want to report a privacy-related concern, please
                contact us using the details above.
              </Para>
            </section>

            <section className="rounded-3xl border border-[#dfecc3] bg-[#f8fbf2] p-6 md:p-8">
              <SectionTitle>Final Notice</SectionTitle>
              <Para>
                By creating an account, accessing the platform, or using the
                FindUs User App or FindUs Partner App, you acknowledge that you
                have read and understood this Privacy Policy and that your
                information may be processed as described here.
              </Para>

              <Para>
                This policy should be read together with the FindUs Terms &
                Conditions because both documents work together. The Terms explain
                the rules of platform use, while this Privacy Policy explains how
                information is handled across those platform activities.
              </Para>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}