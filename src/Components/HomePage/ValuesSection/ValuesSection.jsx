'use client';
import Container from '@/Components/Common/Container';
import { motion } from 'framer-motion';
import Image from 'next/image';

const values = [
  { title: 'Integrity', desc: 'Fair, honest, transparent, ethical, and legitimate.' },
  { title: 'Trust', desc: 'Build collaborative relationships based on trust.' },
  { title: 'Innovation', desc: 'Creativity and new technologies for smart solutions.' },
  { title: 'Collaboration', desc: 'Fostering unity and teamwork for growth.' },
  { title: 'Accountability', desc: 'Transparent, dependable, and measurable responsibility.' },
  { title: 'Sustainability', desc: 'Environmentally responsible and future-oriented decisions.' },
  { title: 'Commitment', desc: 'Dedication to promises and long-term partnerships.' },
  { title: 'Excellence', desc: 'Continuous improvement and outstanding performance.' },
];

export default function ValuesSection() {
  return (
    <section className="relative text-white py-8 md:py-14 flex flex-col items-start overflow-hidden">
      {/* Header */}
      <Container>
           <div className="mb-12">
          <h2 className="text-2xl mb-3 md:text-3xl main-text font-bold text-white">
          Our Values Define Us
        </h2>
          <p className="text-base lg:text-lg mb-8 font-light leading-normal">
          Gorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>

      {/* Circular container */}
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="hidden md:flex relative w-[540px] h-[540px] items-center justify-center">
          {/* Center Logo */}
          <div className="absolute z-10">
            <Image
              src="/assets/images/logos/logo.png"
              alt="Company Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Value leaves */}
          {values.map((value, i) => {
            const angle = (i * 360) / values.length;
            const radius = 205;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={i}
                className="absolute w-54 h-32 bg-gradient-to-br from-[#2b2f45] to-[#1a1e32]
                           text-center px-4 py-3 flex flex-col justify-start items-center
                           border border-gray-700/50 shadow-md transition-all duration-300"
                style={{
                  transform: `translate(${x}px, ${y}px) rotate(${angle - 90}deg)`,
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 100%, 0% 100%)',
                  borderRadius: '26px',
                }}
              >
                <div
                  className="flex flex-col items-center justify-center p-2"
                  style={{ transform: `rotate(-${angle +270}deg)` }}
                >
                  <h3 className="text-yellow-400 font-semibold text-sm mb-1 leading-tight">
                    {value.title}
                  </h3>
                  <p className="text-[11px] text-gray-300 leading-snug max-w-[130px]">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile stacked layout */}
        <div className="flex flex-col md:hidden space-y-4 w-80 mt-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#2b2f45] to-[#1a1e32] rounded-2xl p-4
                         border border-gray-700/50 shadow-md text-center"
            >
              <h3 className="text-yellow-400 font-semibold mb-1">{value.title}</h3>
              <p className="text-sm text-gray-300">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </Container>
    </section>
  );
}
