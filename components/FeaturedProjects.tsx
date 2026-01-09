'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { Trophy, Heart } from 'lucide-react';

const FeaturedProjects = () => {
  return (
    <div className="py-20">
      {/* Project 1: AI Heart Health Tracker - Visualization on LEFT */}
      <div className="min-h-screen flex flex-col justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Visualization */}
            <div className="flex justify-center order-first lg:order-first">
              <div className="relative w-64 h-64">
                {/* Animated heart visualization */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  style={{ willChange: 'transform' }}
                >
                  <Heart className="w-32 h-32 text-[#ff0040]" />
                </motion.div>
                {/* Data points pulsing around */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-[#00d9ff] rounded-full"
                    style={{
                      left: `${50 + 30 * Math.cos(i * 45 * Math.PI / 180)}%`,
                      top: `${50 + 30 * Math.sin(i * 45 * Math.PI / 180)}%`,
                    }}
                    animate={{ scale: [0.5, 1.5, 0.5], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6 order-last lg:order-last">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cinzel-decorative-bold">AI Heart Health Tracker</h2>
                <p className="text-xl text-gray-300 cinzel-decorative-regular">Predicting heart disease from symptoms using Random Forest ML models</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">THE PROBLEM:</h3>
                  <p className="text-gray-300">Heart disease detection requires expensive tests and specialist visits.</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">THE SOLUTION:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Kaggle dataset processing with Pandas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Random Forest classification model</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Wizard-form symptom collection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Gemini AI chatbot for health advice</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Real-time prediction engine</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">TECH STACK:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Pandas
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Scikit-learn
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      React
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Gemini API
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">IMPACT:</h3>
                  <p className="text-gray-300">Accessible preliminary heart health assessment. No clinic required.</p>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a 
                    href="#" 
                    className="px-6 py-3 bg-[#00d9ff] text-black font-semibold rounded-lg hover:bg-[#00b3d4] transition-colors"
                  >
                    View Project →
                  </a>
                  <a 
                    href="#" 
                    className="px-6 py-3 border border-[#00d9ff] text-[#00d9ff] font-semibold rounded-lg hover:bg-[#00d9ff]/10 transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2: AI Form Corrector - Visualization on RIGHT */}
      <div className="min-h-screen flex flex-col justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-6 order-first lg:order-first">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cinzel-decorative-bold">AI Form Corrector</h2>
                <p className="text-xl text-gray-300 cinzel-decorative-regular">Real-time exercise form analysis using computer vision</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">THE PROBLEM:</h3>
                  <p className="text-gray-300">Personal trainers cost ₹5000+/month. Injury from bad form costs more.</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">THE SOLUTION:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">OpenCV real-time video processing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Pose estimation and angle calculation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Form scoring algorithm (0-100)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Instant feedback system</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Works on live camera or recorded videos</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">TECH STACK:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      OpenCV
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      TensorFlow
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      MediaPipe
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">IMPACT:</h3>
                  <p className="text-gray-300">Cut personal training costs. Prevent injuries. Train smarter.</p>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a 
                    href="#" 
                    className="px-6 py-3 bg-[#00d9ff] text-black font-semibold rounded-lg hover:bg-[#00b3d4] transition-colors"
                  >
                    View Project →
                  </a>
                  <a 
                    href="#" 
                    className="px-6 py-3 border border-[#00d9ff] text-[#00d9ff] font-semibold rounded-lg hover:bg-[#00d9ff]/10 transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side - Visualization */}
            <div className="flex justify-center order-last lg:order-last">
              <div className="relative w-64 h-64">
                {/* Skeleton tracking visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Body outline */}
                    <circle cx="100" cy="60" r="20" stroke="#00d9ff" strokeWidth="2" fill="none" />
                    <line x1="100" y1="80" x2="100" y2="130" stroke="#00d9ff" strokeWidth="2" />
                    <line x1="100" y1="130" x2="70" y2="170" stroke="#00d9ff" strokeWidth="2" />
                    <line x1="100" y1="130" x2="130" y2="170" stroke="#00d9ff" strokeWidth="2" />
                    <line x1="100" y1="100" x2="70" y2="120" stroke="#00d9ff" strokeWidth="2" />
                    <line x1="100" y1="100" x2="130" y2="120" stroke="#00d9ff" strokeWidth="2" />
                    
                    {/* Joints */}
                    <circle cx="100" cy="60" r="5" fill="#ff0040" />
                    <circle cx="100" cy="130" r="5" fill="#ff0040" />
                    <circle cx="70" cy="170" r="5" fill="#ff0040" />
                    <circle cx="130" cy="170" r="5" fill="#ff0040" />
                    <circle cx="70" cy="120" r="5" fill="#ff0040" />
                    <circle cx="130" cy="120" r="5" fill="#ff0040" />
                  </svg>
                </div>
                {/* Score counter */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 text-center text-4xl font-bold text-[#00d9ff]"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  style={{ willChange: 'transform' }}
                >
                  92/100
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 3: AI Traffic Violence Detector - Visualization on LEFT */}
      <div className="min-h-screen flex flex-col justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Visualization */}
            <div className="flex justify-center order-first lg:order-first">
              <div className="relative w-64 h-64 bg-[#1a1a1a] rounded-xl overflow-hidden border border-[#00d9ff]/30">
                {/* Video feed simulation with detection boxes */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="w-40 h-40 bg-gray-800 rounded relative">
                    {/* Detection box 1 */}
                    <motion.div
                      className="absolute border-2 border-[#ff0040] rounded"
                      initial={{ x: -20, y: -20 }}
                      animate={{ x: 20, y: 30 }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      style={{ width: 60, height: 60, willChange: 'transform' }}
                    >
                      <div className="absolute -top-6 left-0 text-[#ff0040] text-xs bg-black px-1">SPEEDING</div>
                    </motion.div>
                    
                    {/* Detection box 2 */}
                    <motion.div
                      className="absolute border-2 border-[#00d9ff] rounded"
                      initial={{ x: 60, y: 60 }}
                      animate={{ x: 40, y: 20 }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                      style={{ width: 50, height: 50, willChange: 'transform' }}
                    >
                      <div className="absolute -top-6 left-0 text-[#00d9ff] text-xs bg-black px-1">NO HELMET</div>
                    </motion.div>
                  </div>
                </div>
                {/* Trophy badge */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ willChange: 'transform' }}
                >
                  <Trophy className="w-8 h-8 text-[#00d9ff]" />
                </motion.div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6 order-last lg:order-last">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cinzel-decorative-bold">AI Traffic Violence Detector</h2>
                <p className="text-xl text-gray-300 cinzel-decorative-regular">Automated traffic violation detection from crowd-sourced videos</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">THE PROBLEM:</h3>
                  <p className="text-gray-300">Not every street has CCTV. Violations go unnoticed.</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">THE SOLUTION:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Volunteer video uploads</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Multi-violation detection (speeding, no helmet, etc.)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Automated screenshot + timestamp capture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">CSV/JSON export for RTO action</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Scalable architecture</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">TECH STACK:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      OpenCV
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      TensorFlow
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      YOLO
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Node.js
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">IMPACT:</h3>
                  <p className="text-gray-300">Smart India Hackathon 2024 Runner-up. Solving real civic problems with AI.</p>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a 
                    href="#" 
                    className="px-6 py-3 bg-[#00d9ff] text-black font-semibold rounded-lg hover:bg-[#00b3d4] transition-colors"
                  >
                    View Project →
                  </a>
                  <a 
                    href="#" 
                    className="px-6 py-3 border border-[#00d9ff] text-[#00d9ff] font-semibold rounded-lg hover:bg-[#00d9ff]/10 transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 4: Digital Footprint Tracker - Visualization on RIGHT */}
      <div className="min-h-screen flex flex-col justify-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <div className="space-y-6 order-first lg:order-first">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 cinzel-decorative-bold">Digital Footprint Tracker</h2>
                <p className="text-xl text-gray-300 cinzel-decorative-regular">Mapping your digital presence and security vulnerabilities</p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">THE PROBLEM:</h3>
                  <p className="text-gray-300">Developers accidentally expose .env files and credentials.</p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">THE SOLUTION:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Multi-platform social media analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">GitHub repository scanning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Leaked credential detection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Visual footprint mapping</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">Security alert system</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">TECH STACK:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Python
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      GitHub API
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Social Media APIs
                    </span>
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm">
                      Data Visualization
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">IMPACT:</h3>
                  <p className="text-gray-300">Found exposed credentials across 30+ repositories in testing. Prevention before exploitation.</p>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a 
                    href="#" 
                    className="px-6 py-3 bg-[#00d9ff] text-black font-semibold rounded-lg hover:bg-[#00b3d4] transition-colors"
                  >
                    View Project →
                  </a>
                  <a 
                    href="#" 
                    className="px-6 py-3 border border-[#00d9ff] text-[#00d9ff] font-semibold rounded-lg hover:bg-[#00d9ff]/10 transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right side - Visualization */}
            <div className="flex justify-center order-last lg:order-last">
              <div className="relative w-64 h-64">
                {/* Network graph visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Center node */}
                  <div className="absolute w-12 h-12 bg-[#00d9ff] rounded-full flex items-center justify-center text-black font-bold text-sm">
                    ME
                  </div>
                  
                  {/* Connected nodes */}
                  {['GH', 'FB', 'TW', 'IG', 'LI'].map((platform, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white text-xs"
                      initial={{ 
                        x: 100 * Math.cos(i * 72 * Math.PI / 180),
                        y: 100 * Math.sin(i * 72 * Math.PI / 180)
                      }}
                      animate={{ 
                        x: [null, 100 * Math.cos(i * 72 * Math.PI / 180)],
                        y: [null, 100 * Math.sin(i * 72 * Math.PI / 180)]
                      }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      style={{ willChange: 'transform' }}
                    >
                      {platform}
                    </motion.div>
                  ))}
                  
                  {/* Connecting lines */}
                  {['GH', 'FB', 'TW', 'IG', 'LI'].map((_, i) => (
                    <div
                      key={`line-${i}`}
                      className="absolute w-0.5 bg-gray-600 origin-bottom"
                      style={{
                        transform: `rotate(${i * 72}deg) translateY(-50px)`,
                        height: '50px',
                      }}
                    />
                  ))}
                  
                  {/* Alert notification */}
                  <motion.div
                    className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-[#ff0040] text-white text-xs px-2 py-1 rounded"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ willChange: 'transform' }}
                  >
                    ALERT!
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;