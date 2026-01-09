'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import withCursorInteraction from '@/components/cursor/withCursorInteraction';
import ParallaxElement from '@/components/cursor/ParallaxElement';

const Contact = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  // Create enhanced contact elements with cursor interaction
  const EnhancedContactCard = withCursorInteraction(motion.a, { cursorType: 'hover' });
  const EnhancedButton = withCursorInteraction(motion.a, { cursorType: 'hover' });

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 relative overflow-hidden">
      {/* Background particles with parallax effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {isClient && [...Array(20)].map((_, i) => (
          <ParallaxElement key={i} speed={0.01}>
            <motion.div
              className="absolute w-1 h-1 bg-[#00d9ff] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                willChange: 'transform, opacity',
              }}
              animate={
                isClient ? {
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                } : {}
              }
              transition={
                isClient ? {
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                } : {}
              }
            />
          </ParallaxElement>
        ))}
      </div>

      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ParallaxElement speed={0.01}>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6 cinzel-decorative-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Build Something
          </motion.h2>
        </ParallaxElement>
        
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether you're hiring, collaborating, or just curious about my work—reach out.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            { label: "Email", value: "ashutoshpatraybl@gmail.com", href: "mailto:ashutoshpatraybl@gmail.com" },
            { label: "Phone", value: "+91 8249912238", href: "tel:+918249912238" },
            { label: "GitHub", value: "github.com/Ashutosh3021", href: "https://github.com/Ashutosh3021" },
            { label: "LinkedIn", value: "linkedin.com/in/ashutosh-patra-14b258369", href: "https://linkedin.com/in/ashutosh-patra-14b258369" }
          ].map((contact, index) => (
            <EnhancedContactCard
              key={index}
              href={contact.href}
              className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-[#00d9ff] transition-colors text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <h3 className="text-lg font-semibold text-[#00d9ff] mb-2">{contact.label}</h3>
              <p className="text-white">{contact.value}</p>
            </EnhancedContactCard>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <EnhancedButton
            href="mailto:ashutoshpatraybl@gmail.com"
            className="px-8 py-4 bg-[#00d9ff] text-black font-bold rounded-lg hover:bg-[#00b3d4] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Email
          </EnhancedButton>
          <EnhancedButton
            href="/Ashutosh_Patra_Resume.pdf"
            className="px-8 py-4 border border-[#00d9ff] text-[#00d9ff] font-bold rounded-lg hover:bg-[#00d9ff]/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </EnhancedButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;