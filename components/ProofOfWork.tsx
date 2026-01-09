'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Code, Package, GraduationCap } from 'lucide-react';

const ProofOfWork = () => {
  const [counts, setCounts] = useState({
    sih: 0,
    hackerrank: 0,
    leetcode: 0,
    github: 0,
    graduation: 0
  });

  const achievements = [
    { 
      icon: <Trophy className="w-12 h-12" />, 
      title: "SIH 2024 Runner-up", 
      description: "Smart India Hackathon 2024",
      target: 1,
      value: counts.sih,
      suffix: ""
    },
    { 
      icon: <Star className="w-12 h-12" />, 
      title: "5-Star Python (HackerRank)", 
      description: "Advanced Python proficiency",
      target: 5,
      value: counts.hackerrank,
      suffix: ""
    },
    { 
      icon: <Code className="w-12 h-12" />, 
      title: "70+ LeetCode Problems", 
      description: "Algorithm mastery",
      target: 70,
      value: counts.leetcode,
      suffix: ""
    },
    { 
      icon: <Package className="w-12 h-12" />, 
      title: "77 GitHub Repositories", 
      description: "Active development",
      target: 77,
      value: counts.github,
      suffix: ""
    },
    { 
      icon: <GraduationCap className="w-12 h-12" />, 
      title: "Graduating 2028", 
      description: "Engineering program",
      target: 2028,
      value: counts.graduation,
      suffix: ""
    }
  ];

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Animate each count individually
    timers.push(setTimeout(() => setCounts(prev => ({ ...prev, sih: 1 })), 300));
    timers.push(setTimeout(() => setCounts(prev => ({ ...prev, hackerrank: 5 })), 500));
    timers.push(setTimeout(() => setCounts(prev => ({ ...prev, leetcode: 70 })), 700));
    timers.push(setTimeout(() => setCounts(prev => ({ ...prev, github: 77 })), 900));
    timers.push(setTimeout(() => setCounts(prev => ({ ...prev, graduation: 2028 })), 1100));

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
      <motion.div 
        className="max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 cinzel-decorative-black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Proof of Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: '#00d9ff' }}
              style={{ willChange: 'transform, border-color' }}
            >
              <div className="mb-4">{achievement.icon}</div>
              <h3 className="text-2xl font-bold text-[#00d9ff] mb-2 cinzel-decorative-bold">
                {achievement.title}
              </h3>
              <p className="text-gray-400 mb-4">{achievement.description}</p>
              <div className="text-3xl font-bold text-white">
                {achievement.value}{achievement.suffix !== "" ? achievement.suffix : ""}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProofOfWork;