const TermsAndCondition = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold">Terms & Conditions</h1>
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
            These Terms and Conditions ("Terms") govern your use of the website
            operated by <strong>Business Bureau</strong> ("we", "our", or "us").
            By accessing or using our website, you agree to be bound by these
            Terms. If you do not agree, please do not use our services.
          </p>
        </div>

        {/* Use of Website */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            1. Use of the Website
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You must be at least 18 years old to use this website.</li>
            <li>You agree to use the website only for lawful purposes.</li>
            <li>You shall not misuse, hack, or attempt to disrupt our services.</li>
          </ul>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            2. Content & Intellectual Property
          </h2>
          <p>
            All content on this website, including text, graphics, logos,
            videos, and software, is the property of Business Bureau or its
            content partners and is protected by applicable copyright and
            intellectual property laws.
          </p>
          <p className="mt-2">
            You may not reproduce, distribute, or modify any content without
            prior written permission.
          </p>
        </div>

        {/* User Submissions */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            3. User Submissions
          </h2>
          <p>
            If you submit content (such as forms, messages, or inquiries), you
            grant us the right to use that content to respond to your request
            and improve our services.
          </p>
          <p className="mt-2">
            You are responsible for ensuring that your submissions do not
            violate any laws or third-party rights.
          </p>
        </div>

        {/* Third Party */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            4. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for the content, policies, or practices of any
            third-party sites.
          </p>
        </div>

        {/* Disclaimer */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            5. Disclaimer
          </h2>
          <p>
            The website and its content are provided on an "as is" and "as
            available" basis. We make no warranties, expressed or implied,
            regarding accuracy, reliability, or availability.
          </p>
        </div>

        {/* Limitation */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Business Bureau shall not be
            liable for any indirect, incidental, or consequential damages
            arising from your use of the website.
          </p>
        </div>

        {/* Termination */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            7. Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate access to our website
            at any time without notice if you violate these Terms.
          </p>
        </div>

        {/* Governing Law */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            8. Governing Law
          </h2>
          <p>
            These Terms shall be governed and interpreted in accordance with
            the laws of India, without regard to its conflict of law provisions.
          </p>
        </div>

        {/* Changes */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            9. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            website after changes means you accept the updated Terms.
          </p>
        </div>

        {/* Contact */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Contact Us
          </h2>
          <p>
            If you have any questions about these Terms, contact us at:
          </p>
          <p className="mt-1">
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

export default TermsAndCondition;
