'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TechnicalArsenal = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "SQL", level: 80 },
        { name: "Supabase", level: 75 },
        { name: "NoSQL", level: 80 },
      ]
    },
    {
      category: "ML/AI",
      skills: [
        { name: "Python", level: 95 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Pandas", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "OpenCV", level: 75 },
      ]
    },
    {
      category: "Problem Solving",
      skills: [
        { name: "70+ LeetCode", level: 70 },
        { name: "5 Star Python (HackerRank)", level: 100 },
        { name: "DSA in Java", level: 75 },
      ]
    }
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 cinzel-decorative-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-[#00d9ff] mb-6 cinzel-decorative-bold">{category.category}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="group"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#00d9ff]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 + catIndex * 0.1 + skillIndex * 0.05 }}
                        style={{ willChange: 'width' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center text-xl text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Currently: Mastering DSA in Java. Next: System Design.
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalArsenal;