'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import withCursorInteraction from '@/components/cursor/withCursorInteraction';

const WantMore = () => {
  const [showModal, setShowModal] = useState(false);

  // Create enhanced button with cursor interaction
  const EnhancedButton = withCursorInteraction(motion.button, { cursorType: 'hover' });
  const EnhancedFilterButton = withCursorInteraction(({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) => (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  ), { cursorType: 'hover' });

  // Mock data for GitHub repositories
  const repositories = [
    { name: "AI Heart Health Tracker", description: "Predicting heart disease from symptoms using ML", stars: 42, language: "Python" },
    { name: "AI Form Corrector", description: "Real-time exercise form analysis using computer vision", stars: 38, language: "Python" },
    { name: "Traffic Violence Detector", description: "Automated traffic violation detection", stars: 35, language: "Python" },
    { name: "Digital Footprint Tracker", description: "Mapping digital presence and security vulnerabilities", stars: 29, language: "Python" },
    { name: "Portfolio Website", description: "Interactive portfolio with cinematic design", stars: 25, language: "TypeScript" },
    { name: "Task Automation Bot", description: "Automating daily tasks with Python scripts", stars: 22, language: "Python" },
    { name: "Data Visualization Dashboard", description: "Real-time data analytics dashboard", stars: 19, language: "JavaScript" },
    { name: "E-commerce Backend", description: "Full-featured e-commerce API", stars: 18, language: "Node.js" },
  ];

  const [filteredRepos, setFilteredRepos] = useState(repositories);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterRepos = (filter: string) => {
    setActiveFilter(filter);
    let filtered;
    
    switch(filter) {
      case 'all':
        filtered = repositories;
        break;
      case 'python':
        filtered = repositories.filter(repo => repo.language === 'Python');
        break;
      case 'javascript':
        filtered = repositories.filter(repo => repo.language === 'JavaScript');
        break;
      case 'typescript':
        filtered = repositories.filter(repo => repo.language === 'TypeScript');
        break;
      case 'popular':
        filtered = [...repositories].sort((a, b) => b.stars - a.stars);
        break;
      default:
        filtered = repositories;
    }
    
    setFilteredRepos(filtered);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Those are the highlights. There are <span className="text-[#00d9ff]">73 more</span> where those came from.
        </motion.h2>
        
        <EnhancedButton
          className="px-8 py-4 bg-[#00d9ff] text-black font-bold text-lg rounded-lg hover:bg-[#00b3d4] transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={() => setShowModal(true)}
        >
          Explore All Projects →
        </EnhancedButton>
      </div>

      {/* Modal */}
      {showModal && (
        <motion.div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowModal(false)}
        >
          <motion.div 
            className="bg-[#1a1a1a] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">All Projects</h3>
              <button 
                className="text-gray-400 hover:text-white text-2xl"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
            </div>
            
            <div className="p-6">
              {/* Filters */}
              <div className="flex flex-wrap gap-3 mb-6">
                {['all', 'python', 'javascript', 'typescript', 'popular'].map((filter) => (
                  <EnhancedFilterButton
                    key={filter}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      activeFilter === filter
                        ? 'bg-[#00d9ff] text-black'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                    onClick={() => filterRepos(filter)}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </EnhancedFilterButton>
                ))}
              </div>
              
              {/* Repository list */}
              <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                {filteredRepos.map((repo, index) => (
                  <motion.div
                    key={index}
                    className="p-4 bg-gray-800 rounded-lg border border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-white">{repo.name}</h4>
                        <p className="text-gray-300 mt-1">{repo.description}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-400">{repo.language}</span>
                        <div className="flex items-center text-gray-400">
                          <span className="mr-1">★</span> {repo.stars}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default WantMore;