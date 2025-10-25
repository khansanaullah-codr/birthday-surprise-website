"use client";

import { motion } from 'framer-motion';
import { Sparkles, Gift } from 'lucide-react';
import FloatingElements from './FloatingElements';
import { useState, useEffect } from 'react';

interface LandingPageProps {
  onOpenSurprise: () => void;
}

export default function LandingPage({ onOpenSurprise }: LandingPageProps) {
  const [countdown, setCountdown] = useState(5);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowMain(true);
      // Auto-advance after showing main content for 3 seconds
      const autoAdvanceTimer = setTimeout(() => {
        onOpenSurprise();
      }, 3000);
      return () => clearTimeout(autoAdvanceTimer);
    }
  }, [countdown, onOpenSurprise]);

  if (!showMain) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#FFF8F0] via-[#FFE4E1] to-[#F5E6D3]">
        <FloatingElements />
        <motion.div
          key={countdown}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 1] }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-[200px] md:text-[300px] font-bold text-[#D4A574] drop-shadow-2xl"
          >
            {countdown}
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#FFF8F0] via-[#FFE4E1] to-[#F5E6D3]">
      <FloatingElements />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1 
            className="font-script text-7xl md:text-9xl font-bold text-[#D4A574] mb-4"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Happy Birthday
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center justify-center gap-3"
          >
            <Sparkles className="w-8 h-8 text-[#FFB6C1]" />
            <p className="font-serif text-2xl md:text-4xl text-[#5D4E37]">
              Wishing you a wonderful day!
            </p>
            <Sparkles className="w-8 h-8 text-[#FFB6C1]" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.button
            onClick={onOpenSurprise}
            className="group relative px-12 py-6 bg-gradient-to-r from-[#D4A574] to-[#C49563] text-[#FFF8F0] rounded-full text-xl md:text-2xl font-semibold shadow-2xl hover:shadow-[#D4A574]/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <Gift className="w-6 h-6" />
              Open Your Surprise
            </span>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#E8D4BA] to-[#D4A574] opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-12"
        >
          <p className="font-script text-3xl text-[#8B7355]">
            Auto-starting your surprise journey...
          </p>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#FFE4E1] rounded-br-full opacity-30" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#F5E6D3] rounded-tl-full opacity-30" />
    </div>
  );
}