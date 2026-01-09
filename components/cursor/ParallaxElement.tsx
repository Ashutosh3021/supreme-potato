'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // How much the element moves relative to cursor (0-1)
  className?: string;
  style?: React.CSSProperties;
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({ 
  children, 
  speed = 0.03, 
  className = '',
  style = {}
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [elementPosition, setElementPosition] = useState({ x: 0, y: 0 });
  
  // Use throttling to limit mousemove events
  const throttleTimeout = useRef<NodeJS.Timeout | null>(null);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttle the mouse movement
    if (throttleTimeout.current) {
      return;
    }
    
    throttleTimeout.current = setTimeout(() => {
      throttleTimeout.current = null;
    }, 16); // ~60fps
    
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const relativeX = e.clientX - centerX;
      const relativeY = e.clientY - centerY;
      
      setElementPosition({
        x: relativeX * speed,
        y: relativeY * speed
      });
    }
  }, [speed]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        transform: `translate(${elementPosition.x}px, ${elementPosition.y}px)`,
        willChange: 'transform',
        transition: 'transform 0.1s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxElement;