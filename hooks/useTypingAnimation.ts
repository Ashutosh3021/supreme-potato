import { useState, useEffect, useCallback } from 'react';

const useTypingAnimation = (text: string, speed: number = 100) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timerId = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      // Cleanup function
      return () => clearTimeout(timerId);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  // Reset function to restart animation
  const reset = useCallback(() => {
    setCurrentText('');
    setCurrentIndex(0);
    setIsComplete(false);
  }, []);

  return { currentText, isComplete, reset };
};

export default useTypingAnimation;