"use client";

import { useEffect, useState } from 'react';

interface FloatingElement {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  type: 'heart' | 'balloon';
  color: string;
}

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const heartColors = ['#FFB6C1', '#FF69B4', '#FF1493', '#FFC0CB', '#FFE4E1'];
    const balloonColors = ['#FFB6C1', '#FFE4B5', '#E6E6FA', '#B0E0E6', '#FFDAB9'];
    
    const newElements: FloatingElement[] = [];
    
    // Create 15 floating hearts and balloons
    for (let i = 0; i < 15; i++) {
      const isHeart = i % 2 === 0;
      newElements.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 12 + Math.random() * 8,
        size: 20 + Math.random() * 20,
        type: isHeart ? 'heart' : 'balloon',
        color: isHeart ? heartColors[Math.floor(Math.random() * heartColors.length)] : balloonColors[Math.floor(Math.random() * balloonColors.length)]
      });
    }
    
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute animate-float-up"
          style={{
            left: `${element.left}%`,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
            width: `${element.size}px`,
            height: `${element.size}px`,
            '--float-x': `${(Math.random() - 0.5) * 100}px`
          } as React.CSSProperties}
        >
          {element.type === 'heart' ? (
            <svg viewBox="0 0 24 24" fill={element.color} className="w-full h-full drop-shadow-lg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill={element.color} className="w-full h-full drop-shadow-lg">
              <ellipse cx="12" cy="10" rx="7" ry="9" />
              <path d="M12 19 L11 24 L13 24 Z" fill={element.color} opacity="0.8"/>
              <ellipse cx="9" cy="7" rx="2" ry="3" fill="white" opacity="0.3"/>
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}
