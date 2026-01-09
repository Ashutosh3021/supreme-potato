'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Statement = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Matrix-style grid background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div 
              key={i} 
              className={`border border-gray-800 ${Math.random() > 0.7 ? 'bg-[#00d9ff]/10' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="z-10 flex flex-col items-center justify-center text-center space-y-12 max-w-4xl">
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: 30 }}
          animate={inView1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white cinzel-decorative-bold"
        >
          Most developers wait until graduation to build something real.
        </motion.div>

        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 30 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00d9ff] cinzel-decorative-bold"
        >
          I didn't.
        </motion.div>

        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: 30 }}
          animate={inView3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl lg:text-4xl font-medium text-white cinzel-decorative-bold"
        >
          77 repositories. 4 production-grade projects. 1 hackathon runner-up.
        </motion.div>

        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: 30 }}
          animate={inView4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white cinzel-decorative-bold"
        >
          And I'm just getting started.
        </motion.div>
      </div>
    </section>
  );
};

export default Statement;