"use client";

import { motion } from 'framer-motion';
import { Heart, Sparkles, Star, Smile, TrendingUp, Plane, Zap, Award } from 'lucide-react';

interface FinalMessageProps {
  onBackToHome: () => void;
}

export default function FinalMessage({ onBackToHome }: FinalMessageProps) {
  const wishes = [
    { icon: Award, text: "Health" },
    { icon: Smile, text: "Happiness" },
    { icon: TrendingUp, text: "Success" },
    { icon: Plane, text: "Adventures" },
    { icon: Sparkles, text: "Dreams" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFE4E1] to-[#F5E6D3] relative overflow-hidden py-12 px-4">
      {/* Animated background elements */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {i % 5 === 0 && <Sparkles className="w-5 h-5 text-yellow-400/40" />}
          {i % 5 === 1 && <Heart className="w-5 h-5 text-pink-400/40 fill-pink-400/40" />}
          {i % 5 === 2 && <Star className="w-5 h-5 text-yellow-500/40" />}
          {i % 5 === 3 && <Smile className="w-5 h-5 text-orange-400/40" />}
          {i % 5 === 4 && <Zap className="w-5 h-5 text-purple-400/40" />}
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Main heart */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-8"
          >
            <Sparkles className="w-32 h-32 text-pink-400 fill-pink-400 mx-auto drop-shadow-2xl" />
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-10 h-10 text-pink-400 fill-pink-400" />
              <h1 className="font-script text-5xl md:text-7xl text-[#D4A574]">
                You Are Special Beyond Words!
              </h1>
              <Heart className="w-10 h-10 text-pink-400 fill-pink-400" />
            </div>
          </motion.div>

          {/* Message card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#E8D4BA] mb-8"
          >
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-1" />
                <p className="font-serif text-lg md:text-xl text-[#5D4E37] leading-relaxed">
                  Today is YOUR day, and you deserve all the happiness in the world!
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Star className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                <p className="font-serif text-lg md:text-xl text-[#5D4E37] leading-relaxed">
                  Thank you for being such an incredible person. Your presence makes everyone's feel happier!
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-pink-400 fill-pink-400 flex-shrink-0 mt-1" />
                <p className="font-serif text-lg md:text-xl text-[#5D4E37] leading-relaxed">
                  Keep shining, keep smiling, and never forget how special you are!
                </p>
              </div>

              <div className="border-t-2 border-[#E8D4BA] pt-6 mt-6">
                <div className="flex items-center justify-center gap-3">
                  <Sparkles className="w-8 h-8 text-[#D4A574]" />
                  <p className="font-script text-3xl md:text-4xl text-[#D4A574] text-center">
                    Here's to another amazing year ahead!
                  </p>
                  <Sparkles className="w-8 h-8 text-[#D4A574]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-6 md:p-8 shadow-xl border-2 border-white mb-8"
          >
            <p className="font-serif text-xl md:text-2xl text-[#5D4E37] italic mb-3">
              "Age is merely the number of years the world has been enjoying you!"
            </p>
            <div className="flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-[#8B7355]" />
              <p className="text-[#8B7355] text-sm">
                And we've been so blessed to have you!
              </p>
              <Star className="w-5 h-5 text-[#8B7355]" />
            </div>
          </motion.div>

          {/* Final wishes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="space-y-4 mb-10"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {wishes.map((wish, i) => {
                const Icon = wish.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.1, duration: 0.4 }}
                    className="bg-white px-5 py-2 rounded-full shadow-lg border-2 border-[#E8D4BA] text-[#5D4E37] font-medium flex items-center gap-2"
                  >
                    <Icon className="w-5 h-5 text-[#D4A574]" />
                    {wish.text}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Back button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <button
              onClick={onBackToHome}
              className="font-serif px-12 py-4 bg-gradient-to-r from-[#D4A574] via-pink-400 to-[#D4A574] text-white rounded-full text-lg md:text-xl shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 border-4 border-white flex items-center gap-3 mx-auto"
            >
              <Sparkles className="w-6 h-6" />
              Relive The Magic!
              <Sparkles className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="mt-8 flex items-center justify-center gap-2"
          >
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
            <p className="font-script text-2xl md:text-3xl text-[#8B7355]">
              With happiness and respect,
            </p>
            <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}