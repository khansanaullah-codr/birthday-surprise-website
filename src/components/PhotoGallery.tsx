"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface PhotoGalleryProps {
  onContinue: () => void;
}

export default function PhotoGallery({ onContinue }: PhotoGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);

  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
      caption: 'Beautiful Moments'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800&q=80',
      caption: 'Celebrating You'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
      caption: 'Special Day'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80',
      caption: 'Happy Times'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
      caption: 'Cherished Memories'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      caption: 'Joyful Moments'
    }
  ];

  useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = (prev + 1) % photos.length;
          if (nextIndex === 0) {
            setCycleCount(c => c + 1);
          }
          return nextIndex;
        });
      }, 2500);
      return () => clearInterval(timer);
    }
  }, [autoPlay, photos.length]);

  // Auto-advance after completing one full cycle
  useEffect(() => {
    if (cycleCount >= 1) {
      const timer = setTimeout(() => {
        onContinue();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [cycleCount, onContinue]);

  const nextPhoto = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FFFBF5] to-[#F5E6D3] py-12 px-4 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#D4A574] rounded-full" />
        <div className="absolute bottom-20 right-20 w-40 h-40 border-4 border-[#FFB6C1] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-10 h-10 text-[#D4A574]" />
            <h2 className="font-script text-6xl md:text-7xl font-bold text-[#D4A574]">
              Precious Memories
            </h2>
            <Heart className="w-10 h-10 text-[#FFB6C1]" />
          </div>
          <p className="font-serif text-xl text-[#8B7355]">
            A collection of beautiful moments to celebrate you
          </p>
        </motion.div>

        {/* Auto-sliding carousel */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 300, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                exit={{ x: -300, opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full bg-white p-6">
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={photos[currentIndex].url}
                      alt={photos[currentIndex].caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-script text-center text-3xl text-[#5D4E37] mt-4">
                    {photos[currentIndex].caption}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-[#D4A574]" />
          </button>
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-[#D4A574]" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setAutoPlay(false);
                  setCurrentIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-[#D4A574] w-8' : 'bg-[#E8D4BA]'
                }`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <motion.button
            onClick={onContinue}
            className="group relative px-10 py-5 bg-gradient-to-r from-[#D4A574] to-[#C49563] text-[#FFF8F0] rounded-full text-xl font-semibold shadow-2xl hover:shadow-[#D4A574]/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Continue to Next Surprise
              <Heart className="w-5 h-5" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}