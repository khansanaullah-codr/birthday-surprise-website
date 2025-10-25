"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sparkles, Smile, Heart, Zap, Flower, Star, Palette, FlowerIcon, Award, Bird, Rainbow, Gift as GiftIcon, Laugh } from 'lucide-react';

const reasons = [
  { icon: Sparkles, text: "Your smile lights up every room you enter", color: "from-yellow-400 to-orange-400" },
  { icon: Heart, text: "Your kindness touches everyone around you", color: "from-pink-400 to-pink-500" },
  { icon: Zap, text: "Your determination inspires us all", color: "from-purple-400 to-purple-500" },
  { icon: Flower, text: "Your creativity knows no bounds", color: "from-green-400 to-emerald-400" },
  { icon: Laugh, text: "Your laugh is contagious and beautiful", color: "from-blue-400 to-cyan-400" },
  { icon: Palette, text: "Your unique perspective makes the world brighter", color: "from-indigo-400 to-purple-400" },
  { icon: FlowerIcon, text: "Your compassion makes everyone feel valued", color: "from-pink-300 to-rose-400" },
  { icon: Award, text: "Your strength in tough times is remarkable", color: "from-amber-400 to-orange-500" },
  { icon: Bird, text: "Your authenticity is refreshing and rare", color: "from-teal-400 to-cyan-500" },
  { icon: Rainbow, text: "Your positivity lifts everyone's spirits", color: "from-violet-400 to-purple-500" },
  { icon: Heart, text: "Your friendship is a precious gift", color: "from-red-400 to-pink-500" },
  { icon: Smile, text: "Your sense of humor brightens every day", color: "from-yellow-300 to-amber-400" },
];

interface ReasonsPageProps {
  onContinue: () => void;
}

export default function ReasonsPage({ onContinue }: ReasonsPageProps) {
  const [revealedCards, setRevealedCards] = useState<number[]>([]);

  // Auto-reveal cards one by one
useEffect(() => {
  if (revealedCards.length < reasons.length) {
    const timer = setTimeout(() => {
      setRevealedCards([...revealedCards, revealedCards.length]);
    }, 600);
    return () => clearTimeout(timer);
  }
}, [revealedCards]);

  const allRevealed = revealedCards.length === reasons.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE4E1] via-[#FFF8F0] to-[#F5E6D3] relative overflow-hidden py-12 px-4">
      {/* Sparkles background */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 3
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <Sparkles className="text-[#D4A574]" size={20} />
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-10 h-10 text-pink-400 fill-pink-400" />
            <h1 className="font-script text-5xl md:text-7xl text-[#D4A574]">
              Why You're Amazing!
            </h1>
            <Heart className="w-10 h-10 text-pink-400 fill-pink-400" />
          </div>
          <p className="font-serif text-lg md:text-xl text-[#8B7355] mb-4">
            Watch as each reason reveals itself...
          </p>
          <p className="text-[#8B7355] text-sm">
            {revealedCards.length} of {reasons.length} revealed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotateY: revealedCards.includes(index) ? 180 : 0
                }}
                transition={{ duration: 0.6, delay: index * 0.6 }}
                className="cursor-pointer [perspective:1000px]"
              >
                <div className="relative h-48">
                  <motion.div
                    className="w-full h-full relative [transform-style:preserve-3d]"
                    animate={{ rotateY: revealedCards.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Front of card */}
                    <div className={`absolute inset-0 [backface-visibility:hidden] bg-gradient-to-br ${reason.color} rounded-3xl shadow-xl border-2 border-white flex items-center justify-center`}>
                      <div className="text-center">
                        <GiftIcon className="w-16 h-16 text-white mx-auto mb-3" />
                        <p className="font-serif text-white text-lg">
                          Reason #{index + 1}
                        </p>
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border-2 border-[#E8D4BA] flex items-center justify-center p-6 [transform:rotateY(180deg)]">
                      <div className="text-center">
                        <Icon className={`w-10 h-10 mx-auto mb-3 text-[#D4A574]`} />
                        <p className="text-[#5D4E37] font-medium leading-relaxed">
                          {reason.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {allRevealed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="font-script text-3xl text-[#D4A574] mb-6 flex items-center justify-center gap-2">
              And there are so many more reasons!
              <Sparkles className="w-8 h-8" />
            </p>
            <button
              onClick={onContinue}
              className="font-serif px-10 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2 mx-auto"
            >
              More Surprises Await!
              <Star className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}