import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gradient">
            Kiazo.tr
          </Link>
          <Link
            to="/"
            className="text-slate-400 hover:text-slate-200 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-slate-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">1. Introduction</h2>
            <p>
              Welcome to Kiazo Teknoloji ve Yazılım Ticaret Limited Şirketi ("Kiazo," "we," "our," or "us").
              We are committed to protecting your personal information and your right to privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-slate-200 mb-3">2.1 Personal Information</h3>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Contact us through our website contact form</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Request information about our services</li>
              <li>Engage with us on social media platforms</li>
            </ul>
            <p className="mt-3">This information may include:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and business information</li>
              <li>Project requirements and preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-200 mb-3 mt-6">2.2 Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect certain information about your device, including:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>IP address and browser type</li>
              <li>Operating system and device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referring website and search terms used</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you information about our services and updates</li>
              <li>To improve our website and services</li>
              <li>To analyze website usage and trends</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">4. Data Sharing and Disclosure</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our website and conducting our business</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our company</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. However, no method
              of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">6. Your Rights (KVKK Compliance)</h2>
            <p>Under Turkish Personal Data Protection Law (KVKK), you have the following rights:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Right to learn whether your personal data is being processed</li>
              <li>Right to request information if your data has been processed</li>
              <li>Right to learn the purpose of processing and whether it is used accordingly</li>
              <li>Right to know third parties to whom your data is transferred</li>
              <li>Right to request correction of incomplete or inaccurate data</li>
              <li>Right to request deletion or destruction of your data</li>
              <li>Right to object to processing of your data</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">7. Cookies and Tracking Technologies</h2>
            <p>
              We may use cookies and similar tracking technologies to track activity on our website and store
              certain information. You can instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices or content of these third-party sites. We encourage you to read the privacy policies
              of any third-party websites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">9. Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect
              personal information from children. If you believe we have collected information from a child,
              please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">10. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than Turkey. We ensure
              that appropriate safeguards are in place to protect your personal information in accordance with
              this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting
              the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:</p>
            <div className="mt-4 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
              <p className="font-semibold text-slate-100">KİAZO TEKNOLOJİ VE YAZILIM TİCARET LİMİTED ŞİRKETİ</p>
              <p className="mt-2">Address: AKARCA MAH. MUSTAFA KEMAL (TZL) BLV. NO: 173 B</p>
              <p>FETHİYE / MUĞLA, TURKEY</p>
              <p className="mt-2">Phone: <a href="tel:+905302347546" className="text-blue-400 hover:text-blue-300">+90 530 234 75 46</a></p>
              <p>Email: <a href="mailto:info@kiazo.tr" className="text-blue-400 hover:text-blue-300">info@kiazo.tr</a></p>
            </div>
          </section>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 text-center text-slate-500 mt-16">
        <p>&copy; 2025 Kiazo.tr — All rights reserved</p>
      </footer>
    </div>
  );
}

export default Privacy;
