'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import useTypingAnimation from '@/hooks/useTypingAnimation';
import ParallaxElement from '@/components/cursor/ParallaxElement';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [showName, setShowName] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showStatement, setShowStatement] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  const { currentText: initText, isComplete: initComplete } = useTypingAnimation('> initializing ashutosh_patra.exe', 80);
  const { currentText: nameText, isComplete: nameComplete } = useTypingAnimation('ASHUTOSH PATRA', 40);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    if (initComplete) {
      const timer = setTimeout(() => setShowName(true), 500);
      return () => clearTimeout(timer);
    }
  }, [initComplete]);

  useEffect(() => {
    if (nameComplete) {
      const timer = setTimeout(() => setShowSubtitle(true), 500);
      return () => clearTimeout(timer);
    }
  }, [nameComplete]);

  useEffect(() => {
    if (showSubtitle) {
      const timer = setTimeout(() => setShowStatement(true), 1000);
    }
  }, [showSubtitle]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Floating particles with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        {typeof window !== 'undefined' && [...Array(15)].map((_, i) => (
          <ParallaxElement key={i} speed={0.02}>
            <motion.div
              className="absolute w-1 h-1 bg-[#00d9ff] rounded-full"
              initial={{ 
                x: dimensions.width ? Math.random() * dimensions.width : 0, 
                y: dimensions.height ? Math.random() * dimensions.height : 0 
              }}
              animate={{
                x: [null, dimensions.width ? Math.random() * dimensions.width : 0],
                y: [null, dimensions.height ? Math.random() * dimensions.height : 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                willChange: 'transform',
              }}
            />
          </ParallaxElement>
        ))}
      </div>

      <div className="z-10 flex flex-col items-center justify-center text-center space-y-8">
        {/* Terminal-style initialization */}
        <motion.div 
          className="text-[#00d9ff] font-mono text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ willChange: 'opacity' }}
        >
          {initText}
          {!initComplete && <span className="ml-1 terminal-cursor">|</span>}
        </motion.div>

        {/* Name with parallax effect */}
        {showName && (
          <ParallaxElement speed={0.01}>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white cinzel-decorative-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ willChange: 'opacity, transform' }}
            >
              {nameText}
            </motion.h1>
          </ParallaxElement>
        )}

        {/* Subtitle with parallax effect */}
        {showSubtitle && (
          <ParallaxElement speed={0.015}>
            <motion.h2 
              className="text-2xl md:text-3xl text-[#00d9ff] font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ willChange: 'opacity' }}
            >
              Full-Stack Developer & ML Engineer
            </motion.h2>
          </ParallaxElement>
        )}

        {/* Statement with parallax effect */}
        {showStatement && (
          <ParallaxElement speed={0.01}>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ willChange: 'opacity' }}
            >
              "First-year student. Senior-level output. Zero excuses."
            </motion.p>
          </ParallaxElement>
        )}

        {/* Scroll indicator with parallax effect */}
        {showStatement && (
          <ParallaxElement speed={0.02}>
            <motion.div 
              className="mt-16 text-gray-400 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <span className="mb-2">See what I've built</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-[#00d9ff]"
                style={{ willChange: 'transform' }}
              >
                <ChevronDown className="w-8 h-8 mx-auto" />
              </motion.div>
            </motion.div>
          </ParallaxElement>
        )}
      </div>
    </section>
  );
};

export default Hero;