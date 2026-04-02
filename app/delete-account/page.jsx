export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[#f8faf5]">

      {/* Hero */}
      <section className="text-center px-6 py-20 bg-gradient-to-br from-[#fff7f7] via-white to-[#f5fae8] border-b border-[#e2e8d8]">
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

      <div className="max-w-3xl mx-auto px-5 pb-24">

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
              "Open Settings → Account",
              "Tap Delete Account",
              "Review details and confirm"
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 bg-[#77B900] text-white text-sm font-semibold rounded-full flex items-center justify-center">
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
    </main>
  );
}