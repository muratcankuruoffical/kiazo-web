import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Terms() {
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
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-slate-400 mb-8">Last updated: January 2025</p>

        <div className="prose prose-invert prose-slate max-w-none space-y-8 text-slate-300">
          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using the website of Kiazo Teknoloji ve Yazılım Ticaret Limited Şirketi
              ("Kiazo," "we," "our," or "us"), you agree to be bound by these Terms of Service and all
              applicable laws and regulations. If you do not agree with any of these terms, you are
              prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">2. Services Description</h2>
            <p>
              Kiazo provides software development services including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Web application development using Laravel, React, and Vue.js</li>
              <li>Mobile application development using Flutter and Swift</li>
              <li>AI and automation solutions</li>
              <li>Custom software solutions and consulting</li>
              <li>Software maintenance and support services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">3. Use License</h2>
            <h3 className="text-xl font-semibold text-slate-200 mb-3">3.1 Permitted Use</h3>
            <p>
              Permission is granted to temporarily access the materials (information or software) on Kiazo's
              website for personal, non-commercial transitory viewing only.
            </p>

            <h3 className="text-xl font-semibold text-slate-200 mb-3 mt-6">3.2 Restrictions</h3>
            <p>You may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or public display</li>
              <li>Attempt to decompile or reverse engineer any software on Kiazo's website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">4. Project Agreements</h2>
            <h3 className="text-xl font-semibold text-slate-200 mb-3">4.1 Service Contracts</h3>
            <p>
              All software development projects require a separate written agreement that specifies:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Project scope and deliverables</li>
              <li>Timeline and milestones</li>
              <li>Payment terms and pricing</li>
              <li>Intellectual property rights</li>
              <li>Support and maintenance terms</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-200 mb-3 mt-6">4.2 Payment Terms</h3>
            <p>
              Payment terms will be specified in individual project agreements. Generally:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>An initial deposit may be required to commence work</li>
              <li>Milestone-based payments may be established</li>
              <li>Final payment is due upon project completion and delivery</li>
              <li>Late payments may incur additional fees as specified in the contract</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">5. Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-slate-200 mb-3">5.1 Ownership</h3>
            <p>
              Unless otherwise agreed in writing, intellectual property rights for custom software developed
              by Kiazo will be transferred to the client upon full payment. Kiazo retains the right to use
              general knowledge, skills, and experience gained during the project.
            </p>

            <h3 className="text-xl font-semibold text-slate-200 mb-3 mt-6">5.2 Existing IP</h3>
            <p>
              Any pre-existing intellectual property, tools, frameworks, or libraries used by Kiazo remain
              the property of Kiazo or their respective owners and are licensed to the client for use within
              the project scope.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">6. Confidentiality</h2>
            <p>
              Both parties agree to maintain confidentiality regarding proprietary information shared during
              the course of any project. This obligation continues beyond the termination of the project
              unless otherwise specified in a separate Non-Disclosure Agreement (NDA).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">7. Warranties and Disclaimers</h2>
            <h3 className="text-xl font-semibold text-slate-200 mb-3">7.1 Service Warranty</h3>
            <p>
              Kiazo warrants that services will be performed in a professional and workmanlike manner in
              accordance with industry standards. Specific warranties for deliverables will be outlined in
              individual project agreements.
            </p>

            <h3 className="text-xl font-semibold text-slate-200 mb-3 mt-6">7.2 Disclaimer</h3>
            <p>
              The materials on Kiazo's website are provided on an 'as is' basis. Kiazo makes no warranties,
              expressed or implied, and hereby disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular
              purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">8. Limitation of Liability</h2>
            <p>
              In no event shall Kiazo or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Kiazo's website, even if Kiazo or an authorized representative
              has been notified orally or in writing of the possibility of such damage.
            </p>
            <p className="mt-3">
              Maximum liability under any project agreement shall not exceed the total fees paid by the client
              for that specific project, unless otherwise specified in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">9. Termination</h2>
            <p>
              Either party may terminate a project agreement with written notice if:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The other party breaches any material term of the agreement</li>
              <li>The other party becomes insolvent or enters bankruptcy proceedings</li>
              <li>Mutual agreement is reached between both parties</li>
            </ul>
            <p className="mt-3">
              Upon termination, the client shall pay for all work completed to date at the agreed-upon rates.
              Kiazo will deliver all completed work and transfer any agreed-upon intellectual property rights
              upon receipt of final payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">10. Support and Maintenance</h2>
            <p>
              Post-delivery support and maintenance services are available under separate agreements. Support
              may include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Bug fixes and technical support</li>
              <li>Software updates and enhancements</li>
              <li>Server maintenance and monitoring</li>
              <li>Security updates and patches</li>
            </ul>
            <p className="mt-3">
              Terms, pricing, and scope of support services will be defined in separate support agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">11. Governing Law</h2>
            <p>
              These terms and any separate agreements shall be governed by and construed in accordance with
              the laws of the Republic of Turkey. Any disputes arising from these terms or any project
              agreements shall be subject to the exclusive jurisdiction of the courts of Muğla, Turkey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">12. Changes to Terms</h2>
            <p>
              Kiazo reserves the right to revise these Terms of Service at any time without notice. By using
              this website, you agree to be bound by the current version of these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-100 mb-4">13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
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

export default Terms;
