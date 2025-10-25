"use client";

import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, PartyPopper } from 'lucide-react';
import { useEffect } from 'react';

interface Memory {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface MemoryTimelineProps {
  onContinue: () => void;
}

export default function MemoryTimeline({ onContinue }: MemoryTimelineProps) {
  const memories: Memory[] = [
    {
      year: "The Beginning",
      title: "When We First Met",
      description: "The moment everything changed and life became more beautiful",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      year: "Growing Together",
      title: "Our Adventures",
      description: "All the laughs, late-night talks, and unforgettable moments we've shared",
      icon: <Star className="w-5 h-5" />
    },
    {
      year: "Special Moments",
      title: "Memories We Treasure",
      description: "Every celebration, every milestone, every moment that made us smile",
      icon: <Heart className="w-5 h-5" />
    },
    {
      year: "Today",
      title: "Your Special Day",
      description: "Celebrating the amazing person you are and all the joy you bring!",
      icon: <PartyPopper className="w-5 h-5" />
    }
  ];

  // Auto-advance after all memories are shown
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     onContinue();
  //   }, memories.length * 300 + 4000); // Animation time + 4 seconds
  //   return () => clearTimeout(timer);
  // }, [onContinue, memories.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#F5E6D3] to-[#FFE4E1] relative overflow-hidden py-12 px-4">
      {/* Floating hearts */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float-up"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${10 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <Heart className="w-6 h-6 text-pink-400/40 fill-pink-400/40" />
        </div>
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-[#D4A574]" />
            <h1 className="font-script text-5xl md:text-7xl text-[#D4A574]">
              Memory Lane
            </h1>
            <Sparkles className="w-10 h-10 text-[#D4A574]" />
          </div>
          <p className="font-serif text-lg md:text-xl text-[#8B7355]">
            A journey through our beautiful moments together
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4A574] via-pink-300 to-[#D4A574]" />

          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`relative mb-12 md:mb-20 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-16' : 'md:ml-16'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 top-6 w-6 h-6 -ml-3 bg-white border-4 border-[#D4A574] rounded-full shadow-lg">
                  <Heart className="w-3 h-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-pink-400 fill-pink-400" />
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border-2 border-[#E8D4BA] hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <span className="inline-block font-script text-2xl text-[#D4A574] mb-2">
                    {memory.year}
                  </span>
                  <div className="flex items-center gap-2 justify-start mb-3">
                    <div className="text-[#D4A574]">{memory.icon}</div>
                    <h3 className="font-serif text-xl md:text-2xl text-[#5D4E37] font-semibold">
                      {memory.title}
                    </h3>
                  </div>
                  <p className="text-[#8B7355] leading-relaxed">
                    {memory.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: memories.length * 0.3 }}
          className="text-center mt-16"
        >
          <button
            onClick={onContinue}
            className="font-serif px-10 py-4 bg-gradient-to-r from-[#D4A574] to-[#C4956C] text-white rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2 mx-auto"
          >
            Continue The Journey
            <Sparkles className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}