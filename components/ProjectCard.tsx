'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  solution: string[];
  techStack: string[];
  impact: string;
  projectLink?: string;
  githubLink?: string;
  children: React.ReactNode; // For custom visualizations
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  problem,
  solution,
  techStack,
  impact,
  projectLink,
  githubLink,
  children
}) => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Visualization */}
          <div className="flex justify-center">
            {children}
          </div>
          
          {/* Right side - Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
              <p className="text-xl text-gray-300">{description}</p>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">THE PROBLEM:</h3>
                <p className="text-gray-300">{problem}</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">THE SOLUTION:</h3>
                <ul className="space-y-2">
                  {solution.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#00d9ff] mr-2">•</span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">TECH STACK:</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-[#1a1a1a] text-[#00d9ff] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#00d9ff] mb-3">IMPACT:</h3>
                <p className="text-gray-300">{impact}</p>
              </div>
              
              <div className="flex gap-4 pt-4">
                {projectLink && (
                  <a 
                    href={projectLink} 
                    className="px-6 py-3 bg-[#00d9ff] text-black font-semibold rounded-lg hover:bg-[#00b3d4] transition-colors"
                  >
                    View Project →
                  </a>
                )}
                {githubLink && (
                  <a 
                    href={githubLink} 
                    className="px-6 py-3 border border-[#00d9ff] text-[#00d9ff] font-semibold rounded-lg hover:bg-[#00d9ff]/10 transition-colors"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;