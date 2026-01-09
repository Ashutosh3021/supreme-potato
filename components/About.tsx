'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-12 cinzel-decorative-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Sharp Edge
        </motion.h2>
        
        <motion.div
          className="bg-[#1a1a1a] rounded-xl p-8 border border-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm Ashutosh. First-year engineering student. <br /><br />
            
            I don't wait for permission to build. I don't make excuses about being "just a student." <br /><br />

            I write code that solves real problems. I train ML models that work. I ship projects while others are still planning. <br /><br />

            When I'm not debugging, I'm at the gym—because optimizing the body and optimizing code aren't that different. <br /><br />

            77 repositories. 4 production projects. 1 hackathon trophy. 2028 graduation date. <br /><br />

            But the numbers don't matter. The output does.
          </p>
          
          <motion.p 
            className="mt-8 text-lg text-[#00d9ff] italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            PS: I apply the same discipline to deadlifts and deployment pipelines.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;