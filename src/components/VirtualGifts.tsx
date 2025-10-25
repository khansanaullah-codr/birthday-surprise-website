"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Gift, Heart, Star, Sparkles, Target, Rainbow, Zap, Flower2 } from 'lucide-react';

interface GiftBox {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  message: string;
  title: string;
}

const gifts: GiftBox[] = [
  {
    id: 1,
    icon: Heart,
    color: "from-pink-400 to-pink-500",
    title: "Love & Happiness",
    message: "May your days be filled with endless love and joy!"
  },
  {
    id: 2,
    icon: Star,
    color: "from-yellow-400 to-orange-400",
    title: "Dreams Come True",
    message: "May all your dreams and wishes come true this year!"
  },
  {
    id: 3,
    icon: Target,
    color: "from-purple-400 to-pink-400",
    title: "Success & Achievement",
    message: "May you achieve everything you set your mind to!"
  },
  {
    id: 4,
    icon: Rainbow,
    color: "from-blue-400 to-cyan-400",
    title: "Beautiful Adventures",
    message: "May life bring you exciting adventures and wonderful experiences!"
  },
  {
    id: 5,
    icon: Sparkles,
    color: "from-indigo-400 to-purple-400",
    title: "Magic & Wonder",
    message: "May every day bring you magical moments and beautiful surprises!"
  },
  {
    id: 6,
    icon: Flower2,
    color: "from-teal-400 to-emerald-400",
    title: "Growth & Transformation",
    message: "May you continue to grow into the amazing person you're meant to be!"
  }
];

interface VirtualGiftsProps {
  onContinue: () => void;
}

export default function VirtualGifts({ onContinue }: VirtualGiftsProps) {
  const [openedGifts, setOpenedGifts] = useState<number[]>([]);
  const [currentGift, setCurrentGift] = useState<GiftBox | null>(null);

  // Auto-open gifts one by one
useEffect(() => {
  if (openedGifts.length < gifts.length) {
    const timer = setTimeout(() => {
      const nextGift = gifts[openedGifts.length];
      setOpenedGifts([...openedGifts, nextGift.id]);
      setCurrentGift(nextGift);
    }, openedGifts.length === 0 ? 1000 : 2500);
    return () => clearTimeout(timer);
  }
}, [openedGifts]);


  // Auto-close modal after showing
  useEffect(() => {
    if (currentGift) {
      const timer = setTimeout(() => {
        setCurrentGift(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentGift]);

  const closeModal = () => {
    setCurrentGift(null);
  };

  const allOpened = openedGifts.length === gifts.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5E6D3] via-[#FFE4E1] to-[#FFF8F0] relative overflow-hidden py-12 px-4">
      {/* Floating decorations */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {i % 4 === 0 && <Gift className="w-6 h-6 text-[#D4A574]/40" />}
          {i % 4 === 1 && <Sparkles className="w-6 h-6 text-pink-400/40" />}
          {i % 4 === 2 && <Star className="w-6 h-6 text-yellow-400/40" />}
          {i % 4 === 3 && <Heart className="w-6 h-6 text-pink-400/40" />}
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
            <Gift className="w-10 h-10 text-[#D4A574]" />
            <h1 className="font-script text-5xl md:text-7xl text-[#D4A574]">
              Virtual Gift Box
            </h1>
            <Gift className="w-10 h-10 text-[#D4A574]" />
          </div>
          <p className="font-serif text-lg md:text-xl text-[#8B7355] mb-4">
            Watch as each gift opens with a special wish for you!
          </p>
          <div className="flex items-center justify-center gap-2 text-[#8B7355]">
            <Gift className="w-5 h-5" />
            <span>{openedGifts.length} of {gifts.length} gifts opened</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {gifts.map((gift, index) => {
            const Icon = gift.icon;
            return (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className={`aspect-square rounded-3xl bg-gradient-to-br ${gift.color} shadow-2xl border-4 border-white flex items-center justify-center relative overflow-hidden`}
                >
                  {openedGifts.includes(gift.id) ? (
                    <motion.div
                      initial={{ scale: 0, rotate: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-white"
                    >
                      <Icon className="w-16 h-16 md:w-20 md:h-20" />
                    </motion.div>
                  ) : (
                    <motion.div
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-center"
                    >
                      <Gift className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-2" />
                      <p className="text-white font-semibold text-sm md:text-base">
                        Opening...
                      </p>
                    </motion.div>
                  )}
                  
                  {/* Sparkle effect when opened */}
                  {openedGifts.includes(gift.id) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Star className="w-full h-full text-white/30" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {allOpened && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#E8D4BA] mb-8">
              <Heart className="w-16 h-16 text-pink-400 fill-pink-400 mx-auto mb-4" />
              <p className="font-serif text-xl md:text-2xl text-[#5D4E37] mb-4">
                All gifts opened!
              </p>
              <p className="text-[#8B7355]">
                These are all the wishes from the bottom of my heart for you!
              </p>
            </div>
            
            <button
              onClick={onContinue}
              className="font-serif px-10 py-4 bg-gradient-to-r from-[#D4A574] to-[#C4956C] text-white rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2 mx-auto"
            >
              Continue to Next Surprise
              <Sparkles className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Gift Modal */}
      <AnimatePresence>
        {currentGift && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-[#E8D4BA] max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                  className="text-[#D4A574] mb-4 flex justify-center"
                >
                  {currentGift.icon && <currentGift.icon className="w-20 h-20" />}
                </motion.div>
                <h3 className="font-script text-3xl md:text-4xl text-[#D4A574] mb-4">
                  {currentGift.title}
                </h3>
                <p className="font-serif text-lg text-[#5D4E37] mb-6 leading-relaxed">
                  {currentGift.message}
                </p>
                <button
                  onClick={closeModal}
                  className="px-8 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  Thank You!
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}