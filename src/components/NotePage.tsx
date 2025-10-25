"use client";

import { motion } from 'framer-motion';
import { Heart, Sparkles, Home } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NotePageProps {
  onBackToHome: () => void;
}

export default function NotePage({ onBackToHome }: NotePageProps) {
  const fullText = `Dear Birthday Star,

On this special day, I want to celebrate not just your birthday, but the wonderful person you are and all the joy you bring to everyone around you.

I feel incredibly blessed and happy knowing that your father is so supportive of you. Having such a strong pillar of support in your life is truly a gift, and it's beautiful to see how that love and encouragement helps you shine. His belief in you is well-placed because you are truly amazing!

As you step into this new year of your life, I want to wish you all the best for your bright future. May every dream you chase become a reality, and may every path you take lead to happiness and success. You have so much potential, and I know you're going to achieve incredible things!

Keep being the wonderful person you are, keep spreading joy, and never stop believing in yourself. The world is lucky to have you, and I'm lucky to celebrate this special day with you!`;

  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 20); // typing speed
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFE4E1] to-[#F5E6D3] py-12 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts in background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -50,
              opacity: 0.3
            }}
            animate={{ 
              y: (typeof window !== 'undefined' ? window.innerHeight : 1000) + 50,
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <Heart className="w-6 h-6 text-[#FFB6C1] fill-[#FFB6C1]" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Note paper effect */}
          <div className="bg-gradient-to-br from-[#FFFBF5] to-[#FFF8F0] rounded-lg shadow-2xl p-8 md:p-12 relative border-4 border-[#E8D4BA]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                transparent,
                transparent 31px,
                #E8D4BA 31px,
                #E8D4BA 32px
              )`
            }}
          >
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-[#D4A574] rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-[#D4A574] rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-[#D4A574] rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-[#D4A574] rounded-br-lg" />

            {/* Content */}
            <div className="relative bg-[#FFFBF5]/80 rounded-lg p-8">
              <div className="flex items-center justify-center gap-3 mb-8">
                <Sparkles className="w-8 h-8 text-[#FFB6C1]" />
                <h2 className="font-script text-5xl md:text-6xl font-bold text-[#D4A574] text-center">
                  A Special Note For You
                </h2>
                <Sparkles className="w-8 h-8 text-[#FFB6C1]" />
              </div>

              <div className="text-[#5D4E37] font-serif text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
                {displayedText}
                {currentIndex < fullText.length && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-0.5 h-6 bg-[#5D4E37] ml-1"
                  />
                )}
              </div>

              {currentIndex >= fullText.length && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 flex flex-col items-end mt-8"
                >
                  <p className="font-script text-2xl md:text-3xl text-[#D4A574]">
                    With happiness and best wishes,
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Heart className="w-6 h-6 text-[#FFB6C1] fill-[#FFB6C1]" />
                    <p className="font-script text-2xl md:text-3xl text-[#D4A574]">
                      by Sanaullah Khan
                    </p>
                    <Heart className="w-6 h-6 text-[#FFB6C1] fill-[#FFB6C1]" />
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Paper clip decoration */}
          <motion.div 
            className="absolute -top-6 right-12 w-16 h-24 bg-[#D4A574] rounded-full opacity-50"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ clipPath: 'ellipse(40% 45% at 50% 50%)' }}
          />
        </motion.div>

        {currentIndex >= fullText.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={onBackToHome}
              className="group relative px-10 py-5 bg-gradient-to-r from-[#D4A574] to-[#C49563] text-[#FFF8F0] rounded-full text-xl font-semibold shadow-2xl hover:shadow-[#D4A574]/50 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Home className="w-5 h-5" />
              <span className="relative z-10">Continue to Final Message</span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
