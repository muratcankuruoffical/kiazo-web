import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you! We'll contact you at ${email}`);
    setEmail('');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const technologies = [
    { name: 'PHP', category: 'Backend', icon: '🐘' },
    { name: 'Laravel', category: 'Backend', icon: '⚡' },
    { name: 'Vue', category: 'Frontend', icon: '💚' },
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'Flutter', category: 'Mobile', icon: '📱' },
    { name: 'Swift', category: 'Mobile', icon: '🍎' },
  ];

  const capabilities = [
    {
      title: 'Web Applications',
      description: 'Modern dashboards, CRMs, and SaaS platforms built with cutting-edge technology.',
      icon: '🌐',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile Apps',
      description: 'Native iOS and Android applications with Flutter or Swift for seamless experiences.',
      icon: '📱',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI & Automation',
      description: 'Intelligent tools, chatbots, and workflow systems powered by modern AI.',
      icon: '🤖',
      gradient: 'from-violet-500 to-indigo-500'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Background gradient effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-600/20 to-blue-600/20 blur-3xl rounded-full" />
        </div>

        {/* Animated particles/dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto text-center z-10">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
          >
            We build{' '}
            <span className="text-gradient glow">intelligent</span>
            <br />
            digital products.
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Kiazo is a modern software studio crafting mobile and web applications using{' '}
            <span className="text-blue-400 font-semibold">Laravel</span>,{' '}
            <span className="text-green-400 font-semibold">Vue</span>,{' '}
            <span className="text-cyan-400 font-semibold">React</span>,{' '}
            <span className="text-purple-400 font-semibold">Flutter</span>, and{' '}
            <span className="text-orange-400 font-semibold">Swift</span>.
          </motion.p>

          <motion.div variants={fadeInUp}>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-3 bg-blue-400 rounded-full" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        id="technologies"
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Cutting-edge technologies we use to build exceptional products
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
            variants={staggerContainer}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:card-glow"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-lg mb-1">{tech.name}</h3>
                <p className="text-sm text-slate-500">{tech.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Capabilities Section */}
      <motion.section
        id="capabilities"
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16" variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              What We <span className="text-gradient">Build</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Transform your ideas into powerful digital solutions
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
            variants={staggerContainer}
          >
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative">
                  <div className={`text-5xl mb-4 inline-block p-4 bg-gradient-to-br ${capability.gradient} rounded-2xl`}>
                    {capability.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-slate-900/30 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12"
            variants={fadeInUp}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="text-gradient">Kiazo</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6">
              Kiazo is a creative software agency based in Turkey. We design and develop fast,
              scalable, and beautiful products tailored to your business needs. Our team combines
              technical expertise with creative vision to deliver solutions that drive growth and
              innovation.
            </p>
            <div className="text-sm text-slate-500 space-y-1">
              <p className="font-semibold text-slate-400">KİAZO TEKNOLOJİ VE YAZILIM TİCARET LİMİTED ŞİRKETİ</p>
              <p>AKARCA MAH. MUSTAFA KEMAL (TZL) BLV. NO: 173 B</p>
              <p>FETHİYE / MUĞLA, TURKEY</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeInUp}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Let's build something <span className="text-gradient">together</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Ready to start your next project? Get in touch with us today.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="mb-12"
            variants={fadeInUp}
          >
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                Submit
              </button>
            </div>
          </motion.form>

          <motion.div
            className="flex justify-center gap-6 mb-12"
            variants={fadeInUp}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-full flex items-center justify-center hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 px-4 text-center text-slate-500">
        <p>&copy; 2025 Kiazo.tr — All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
