const PrivacyPolicy = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-gray-300">
            Last updated: December 29, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-12 space-y-10 text-gray-800 leading-relaxed">
        
        {/* Intro */}
        <div>
          <p>
            This Privacy Policy explains how <strong>Business Bureau</strong>
            (“we”, “our”, or “us”) collects, uses, stores, and protects your
            personal information when you use our website and services.
          </p>
          <p className="mt-4">
            If you have any questions, contact us at{" "}
            <a
              href="mailto:help.businessbureau@gmail.com"
              className="text-blue-600 hover:underline"
            >
              help.businessbureau@gmail.com
            </a>
            .
          </p>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Summary of Key Points
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We collect information you voluntarily provide to us.</li>
            <li>We do not process sensitive personal information.</li>
            <li>We do not collect information from third parties.</li>
            <li>Your data is used only to provide and improve our services.</li>
            <li>You have rights over your personal data.</li>
          </ul>
        </div>

        {/* Section 1 */}
        <div id="infocollect">
          <h2 className="text-2xl font-semibold mb-3">
            1. Information We Collect
          </h2>

          <h3 className="text-lg font-semibold mt-4">
            Personal Information You Provide
          </h3>
          <p className="mt-2">
            We may collect personal information such as:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">
            Information Collected Automatically
          </h3>
          <p className="mt-2">
            This includes IP address, browser type, device information,
            operating system, and usage data.
          </p>
        </div>

        {/* Section 2 */}
        <div id="infouse">
          <h2 className="text-2xl font-semibold mb-3">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To communicate with you</li>
            <li>To improve website performance</li>
            <li>For security and fraud prevention</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div id="whoshare">
          <h2 className="text-2xl font-semibold mb-3">
            3. Sharing Your Information
          </h2>
          <p>
            We do not sell your personal data. We may share information only
            with trusted service providers who assist us in operating our
            services.
          </p>
        </div>

        {/* Section 4 */}
        <div id="cookies">
          <h2 className="text-2xl font-semibold mb-3">
            4. Cookies & Tracking Technologies
          </h2>
          <p>
            We use cookies and similar technologies to improve user experience,
            analyze traffic, and ensure security.
          </p>
        </div>

        {/* Section 5 */}
        <div id="infosafe">
          <h2 className="text-2xl font-semibold mb-3">
            5. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data. However, no method of transmission over
            the Internet is 100% secure.
          </p>
        </div>

        {/* Section 6 */}
        <div id="privacyrights">
          <h2 className="text-2xl font-semibold mb-3">
            6. Your Privacy Rights
          </h2>
          <p>
            Depending on your location, you may have rights to access, update,
            or delete your personal data.
          </p>
        </div>

        {/* Contact */}
        <div id="contact" className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Contact Us
          </h2>
          <p>
            Business Bureau
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:help.businessbureau@gmail.com"
              className="text-blue-600 hover:underline"
            >
              help.businessbureau@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
