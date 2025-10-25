"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Cake, PartyPopper, Wind } from "lucide-react";

interface BirthdayCakeProps {
  onContinue: () => void;
}

export default function BirthdayCake({ onContinue }: BirthdayCakeProps) {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);
  const [blowing, setBlowing] = useState(false);

  const numCandles = 5;

  const handleBlowCandles = () => {
    setBlowing(true);
    setTimeout(() => {
      setCandlesLit(false);
      setBlowing(false);
      setShowCelebration(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFE4E1] via-[#F5E6D3] to-[#FFF8F0] relative overflow-hidden py-12 px-4">
      {/* Confetti */}
      {showCelebration && (
        <>
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-full"
              initial={{
                x: "50vw",
                y: "50vh",
                backgroundColor: [
                  "#D4A574",
                  "#ff6b9d",
                  "#c0c0ff",
                  "#ffed4e",
                  "#4ef4ff",
                ][i % 5],
              }}
              animate={{
                x: `${Math.random() * 100}vw`,
                y: `${Math.random() * 100}vh`,
                rotate: Math.random() * 720,
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
            />
          ))}
        </>
      )}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cake className="w-10 h-10 text-[#D4A574]" />
            <h1 className="font-script text-5xl md:text-7xl text-[#D4A574]">
              Make a Wish!
            </h1>
            <Cake className="w-10 h-10 text-[#D4A574]" />
          </div>
          <p className="font-serif text-lg md:text-xl text-[#8B7355]">
            {candlesLit
              ? "Get ready to blow out your candles!"
              : "Your wish has been made!"}
          </p>
        </motion.div>

        {/* Cake Container */}
        <div className="relative mx-auto max-w-md mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Candles */}
            <div className="flex justify-center gap-4 md:gap-6 mb-4 relative z-10">
              {[...Array(numCandles)].map((_, i) => (
                <div key={i} className="relative">
                  {/* Flame */}
                  <AnimatePresence>
                    {candlesLit && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: blowing ? [1, 0.5, 0] : [1, 1.2, 1],
                          opacity: blowing ? [1, 0.5, 0] : 1,
                          y: blowing ? [0, -10, -20] : 0,
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          duration: blowing ? 0.5 : 1.5,
                          repeat: blowing ? 0 : Infinity,
                          delay: i * 0.1,
                        }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 w-6 h-8"
                      >
                        <div className="w-full h-full bg-gradient-to-t from-orange-400 via-yellow-400 to-yellow-200 rounded-full blur-sm" />
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500 via-yellow-500 to-white rounded-full" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Candle stick */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                    className="w-3 h-12 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-full origin-bottom shadow-lg"
                  />
                </div>
              ))}
            </div>

            {/* Cake layers */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-2"
            >
              <div className="relative">
                <div className="h-20 bg-gradient-to-r from-pink-200 via-pink-300 to-pink-200 rounded-t-3xl border-4 border-white shadow-xl" />
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#D4A574] via-yellow-300 to-[#D4A574] rounded-t-3xl border-x-4 border-t-4 border-white" />
                <div className="absolute bottom-2 left-0 right-0 flex justify-around px-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-white rounded-full shadow-md" />
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="h-24 bg-gradient-to-r from-pink-300 via-pink-400 to-pink-300 border-4 border-white shadow-xl" />
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-yellow-300 via-[#D4A574] to-yellow-300 border-x-4 border-white" />
                <div className="absolute bottom-2 left-0 right-0 flex justify-around px-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-red-400 rounded-full shadow-md" />
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="h-28 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-400 rounded-b-3xl border-4 border-white shadow-2xl" />
                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[#D4A574] via-yellow-400 to-[#D4A574] border-x-4 border-white" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Cake className="w-16 h-16 text-white/30" />
                </div>
              </div>

              <div className="h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full border-4 border-white shadow-xl" />
            </motion.div>
          </motion.div>
        </div>

        {/* Buttons / Celebration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center space-y-6"
        >
          {candlesLit ? (
            <>
              <button
                onClick={handleBlowCandles}
                className="font-serif px-10 py-4 bg-gradient-to-r from-[#D4A574] to-[#C4956C] text-white rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2 mx-auto"
              >
                Blow Candles 🎂
              </button>
              {blowing && (
                <p className="text-[#8B7355] text-xl mt-4">
                  Blowing out the candles...
                </p>
              )}
            </>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-2 border-[#E8D4BA]">
                  <PartyPopper className="w-16 h-16 text-[#D4A574] mx-auto mb-4" />
                  <p className="font-script text-3xl md:text-4xl text-[#D4A574] mb-3">
                    Happy Birthday!
                  </p>
                  <p className="text-[#5D4E37] text-lg">
                    May all your wishes come true!
                  </p>
                </div>

                <button
                  onClick={onContinue}
                  className="font-serif px-10 py-4 bg-gradient-to-r from-[#D4A574] to-[#C4956C] text-white rounded-full text-lg md:text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white flex items-center gap-2 mx-auto"
                >
                  One More Surprise!
                  <PartyPopper className="w-5 h-5" />
                </button>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </div>
  );
}
