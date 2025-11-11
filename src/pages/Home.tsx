import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
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
    {
      name: 'PHP',
      category: 'Backend',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.01 10.49c-.08.68-.26 1.28-.49 1.78-.29.58-.67 1.04-1.14 1.35-.48.32-1.07.48-1.77.48H2.14l.79-3.62h1.47c.55 0 .99.14 1.31.43.32.29.51.68.54 1.17a2.37 2.37 0 0 1-.24 1.41m1.52-3.16c-.37-.58-.88-1.02-1.53-1.32-.65-.3-1.43-.45-2.35-.45H0l-2.35 10.73h2.47l.82-3.75h1.56c1.02 0 1.93-.18 2.71-.54.78-.36 1.44-.86 1.98-1.5.54-.65.93-1.41 1.18-2.28.25-.87.32-1.79.21-2.75-.12-.96-.42-1.76-.94-2.39M17.01 10.49c-.08.68-.26 1.28-.49 1.78-.29.58-.67 1.04-1.14 1.35-.48.32-1.07.48-1.77.48h-1.46l.79-3.62h1.47c.55 0 .99.14 1.31.43.32.29.51.68.54 1.17a2.37 2.37 0 0 1-.24 1.41m1.52-3.16c-.37-.58-.88-1.02-1.53-1.32-.65-.3-1.43-.45-2.35-.45H10l-2.35 10.73h2.47l.82-3.75h1.56c1.02 0 1.93-.18 2.71-.54.78-.36 1.44-.86 1.98-1.5.54-.65.93-1.41 1.18-2.28.25-.87.32-1.79.21-2.75-.12-.96-.42-1.76-.94-2.39M24 15.68h-2.47l1.14-5.21c.07-.32.05-.59-.06-.8-.11-.21-.32-.32-.63-.32h-1.52l-1.5 6.85h-2.47l2.35-10.73h2.47l-.79 3.6h1.52c.85 0 1.47.28 1.87.84.4.56.53 1.27.39 2.12L24 15.68z"/>
        </svg>
      )
    },
    {
      name: 'Laravel',
      category: 'Backend',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.039-.01-.012-.021-.023-.028-.037h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"/>
        </svg>
      )
    },
    {
      name: 'Vue',
      category: 'Frontend',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"/>
        </svg>
      )
    },
    {
      name: 'React',
      category: 'Frontend',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        </svg>
      )
    },
    {
      name: 'Flutter',
      category: 'Mobile',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
        </svg>
      )
    },
    {
      name: 'Swift',
      category: 'Mobile',
      icon: (
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.002-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 7.235 0 7.522 0 7.808v8.382c0 .287 0 .575.002.862.002.24.002.482.01.724.014.525.043 1.053.136 1.574.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.246.973.4 1.5.496.52.092 1.048.121 1.575.135.242.007.483.009.725.01.285.004.573.004.86.004h8.98c.288 0 .575 0 .86-.002.243 0 .484-.002.724-.01a8.972 8.972 0 0 0 1.576-.136 5.483 5.483 0 0 0 1.5-.495 5.03 5.03 0 0 0 2.204-2.203c.245-.48.4-.973.496-1.5.092-.521.12-1.05.135-1.575.008-.242.01-.483.01-.724.003-.287.003-.574.003-.862V7.81c0-.287 0-.575-.002-.862a28.467 28.467 0 0 0-.01-.724 8.98 8.98 0 0 0-.136-1.576 5.484 5.484 0 0 0-.495-1.5A5.04 5.04 0 0 0 21.15.645a5.493 5.493 0 0 0-1.5-.495 9.05 9.05 0 0 0-1.575-.136 37.967 37.967 0 0 0-.724-.01C16.765 0 16.477 0 16.19 0H7.508zm11.776 21.003h.002c.03 0 .06-.003.09-.003.226-.005.45-.012.675-.023.486-.024.965-.08 1.43-.214a3.89 3.89 0 0 0 1.07-.35 3.56 3.56 0 0 0 1.555-1.555c.138-.287.246-.592.322-.907.098-.4.148-.81.178-1.225.012-.163.019-.327.024-.49.007-.23.007-.461.007-.692V7.832c0-.23 0-.461-.007-.692a10.19 10.19 0 0 0-.024-.49 5.128 5.128 0 0 0-.178-1.225 3.757 3.757 0 0 0-.322-.907 3.565 3.565 0 0 0-1.555-1.555 3.89 3.89 0 0 0-1.07-.35 7.473 7.473 0 0 0-1.43-.214c-.225-.011-.45-.018-.675-.023-.03 0-.06-.003-.09-.003h-.002-8.97-.003c-.03 0-.06.003-.09.003-.224.005-.449.012-.674.023-.486.024-.965.08-1.43.214a3.89 3.89 0 0 0-1.07.35 3.562 3.562 0 0 0-1.555 1.555 3.758 3.758 0 0 0-.322.907 5.128 5.128 0 0 0-.178 1.225c-.012.163-.019.327-.024.49-.007.23-.007.461-.007.692v8.716c0 .23 0 .461.007.692.005.163.012.327.024.49.03.415.08.825.178 1.225.076.315.184.62.322.907a3.562 3.562 0 0 0 1.555 1.555c.287.138.592.246.907.322.4.098.81.148 1.225.178.163.012.327.019.49.024.23.007.461.007.692.007h8.97z"/>
        </svg>
      )
    },
  ];

  const capabilities = [
    {
      title: 'Web Applications',
      description: 'Modern dashboards, CRMs, and SaaS platforms built with cutting-edge technology.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile Apps',
      description: 'Native iOS and Android applications with Flutter or Swift for seamless experiences.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      ),
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'AI & Automation',
      description: 'Intelligent tools, chatbots, and workflow systems powered by modern AI.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
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
                <div className="text-slate-400 mb-3 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300 flex justify-center">
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
                  <div className={`text-slate-400 group-hover:text-white mb-4 inline-flex p-4 bg-slate-800/50 rounded-2xl border border-slate-700 group-hover:border-slate-600 transition-all duration-300`}>
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
              aria-label="LinkedIn"
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
              aria-label="GitHub"
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
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">Kiazo.tr</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Modern software studio crafting intelligent digital solutions.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-slate-300 mb-4">Contact</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>
                  <a href="tel:+905302347546" className="hover:text-blue-400 transition-colors">
                    +90 530 234 75 46
                  </a>
                </p>
                <p>
                  <a href="mailto:info@kiazo.tr" className="hover:text-blue-400 transition-colors">
                    info@kiazo.tr
                  </a>
                </p>
                <p className="text-xs pt-2">
                  AKARCA MAH. MUSTAFA KEMAL BLV. NO: 173 B<br />
                  FETHİYE / MUĞLA, TURKEY
                </p>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-slate-300 mb-4">Legal</h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p>
                  <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link to="/terms" className="hover:text-blue-400 transition-colors">
                    Terms of Service
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
            <p>&copy; 2025 Kiazo Teknoloji ve Yazılım Ticaret Limited Şirketi — All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
