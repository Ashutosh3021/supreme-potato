'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

const CustomCursor = () => {
  const { cursorType } = useCursor();
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ id: number; x: number; y: number; size: number }>>([]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  
  // Use requestAnimationFrame for smooth cursor movement
  const animationRef = useRef<number>(0);
  const previousTimeRef = useRef<number>(0);
  
  // Optimized mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const now = performance.now();
    
    // Throttle updates to avoid excessive calls
    if (now - previousTimeRef.current > 16) { // ~60fps
      setMousePosition({ x: e.clientX, y: e.clientY });
      previousTimeRef.current = now;
      
      // Update trail with new position
      setTrail(prevTrail => {
        const newTrail = [...prevTrail, { id: Date.now(), x: e.clientX, y: e.clientY, size: Math.random() * 3 + 2 }];
        // Limit trail to last 10 elements to prevent performance issues
        return newTrail.slice(-10);
      });
    }
  }, []);

  const handleMouseDown = useCallback(() => setIsMouseDown(true), []);
  const handleMouseUp = useCallback(() => setIsMouseDown(false), []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp]);

  // Clean up trail periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(-8)); // Keep only the most recent 8 items
    }, 500); // Clean up every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Trail particles - optimized */}
      <AnimatePresence>
        {trail.map((point) => (
          <motion.div
            key={point.id}
            className="fixed rounded-full bg-[#00d9ff] pointer-events-none z-50"
            style={{
              left: point.x,
              top: point.y,
              width: point.size,
              height: point.size,
              transform: 'translate(-50%, -50%)',
              willChange: 'transform, opacity',
            }}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        ))}
      </AnimatePresence>

      {/* Main cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-6 h-6 rounded-full border-2 border-[#00d9ff] pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 15px rgba(0, 217, 255, 0.7)',
          willChange: 'transform',
        }}
        animate={{
          scale: isMouseDown ? 0.8 : 1,
          backgroundColor: cursorType === 'hover' ? 'rgba(0, 217, 255, 0.3)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      />
    </>
  );
};

export default CustomCursor;