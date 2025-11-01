'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -100px 0px' });

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  // Card animation with border
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  // Text animation
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  // Title animation
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-900/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {/* Top Section: Mission Card (Right) */}
        <div className="mb-16 sm:mb-20 md:mb-24 flex justify-end">
          <motion.div
            variants={cardVariants}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg"
          >
            <div className="relative p-6 sm:p-8  bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300">
              {/* Yellow corner decoration - Top Right */}
              <div className="absolute top-0 left-0 w-[73px] h-12 border-t-2 border-l-2 border-yellow-400" />
              
              {/* Yellow corner decoration - Bottom Right */}
              <div className="absolute bottom-0 right-0 w-12 h-[73px] border-b-2 border-r-2 border-yellow-400" />

              <motion.h3 variants={textVariants} className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Mission
              </motion.h3>
              <motion.p variants={textVariants} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Looking to launch or expand your business in Dubai or the UAE? ADL Business Solutions provides expert business setup, company formation, visa, and PRO support. We manage every requirement with precision, transparency, and care, empowering entrepreneurs and investors to start strong and scale confidently in the UAE's thriving market.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Middle Section: About Us (Center) */}
        <div className="mb-16 sm:mb-20 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.div variants={titleVariants} className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="text-blue-400 text-2xl sm:text-3xl">✦</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              About Us
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-4 sm:space-y-6">
            <motion.p variants={textVariants} className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
              ADL Business Solutions FZE redefines business setup in Dubai with expert-led company formation, visa, PRO, and Golden Visa services.
            </motion.p>

            <motion.p variants={textVariants} className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
              We go beyond paperwork, offering strategic guidance, compliance expertise, and personalized business solutions that empower growth. Whether you're launching a startup or expanding globally, ADL ensures your Dubai business journey is efficient, compliant, and built for long-term success through trusted industry experience and dedicated local support.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Section: Vision Card (Left) */}
        <div className="flex justify-start">
          <motion.div
            variants={cardVariants}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg"
          >
            <div className="relative p-6 sm:p-8  bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/70 transition-all duration-300">
              {/* Yellow corner decoration - Top Left */}
              <div className="absolute top-0 left-0 w-[73px] h-12 border-t-2 border-l-2 border-yellow-400" />
              
              {/* Yellow corner decoration - Bottom Left */}
              <div className="absolute bottom-0 right-0 w-12 h-[73px] border-b-2 border-r-2 border-yellow-400" />

              <motion.h3 variants={textVariants} className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Vision
              </motion.h3>
              <motion.p variants={textVariants} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                At ADL Business Solutions, our vision is to be the most trusted business setup partner in Dubai and across the UAE, known for integrity, innovation, and excellence. We aim to empower global entrepreneurs with strategic support, reliable processes, and long-term growth opportunities in the region's most dynamic business environment.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;