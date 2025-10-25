"use client";

import { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import PhotoGallery from '@/components/PhotoGallery';
import MemoryTimeline from '@/components/MemoryTimeline';
import ReasonsPage from '@/components/ReasonsPage';
import VirtualGifts from '@/components/VirtualGifts';
import BirthdayCake from '@/components/BirthdayCake';
import NotePage from '@/components/NotePage';
import FinalMessage from '@/components/FinalMessage';

type PageView = 'landing' | 'gallery' | 'memoryTimeline' | 'reasons' | 'gifts' | 'cake' | 'note' | 'final';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageView>('landing');

  return (
    <>
      {currentPage === 'landing' && (
        <LandingPage onOpenSurprise={() => setCurrentPage('gallery')} />
      )}
      {currentPage === 'gallery' && (
        <PhotoGallery onContinue={() => setCurrentPage('memoryTimeline')} />
      )}
      {currentPage === 'memoryTimeline' && (
        <MemoryTimeline onContinue={() => setCurrentPage('reasons')} />
      )}
      {currentPage === 'reasons' && (
        <ReasonsPage onContinue={() => setCurrentPage('gifts')} />
      )}
      {currentPage === 'gifts' && (
        <VirtualGifts onContinue={() => setCurrentPage('cake')} />
      )}
      {currentPage === 'cake' && (
        <BirthdayCake onContinue={() => setCurrentPage('note')} />
      )}
      {currentPage === 'note' && (
        <NotePage onBackToHome={() => setCurrentPage('final')} />
      )}
      {currentPage === 'final' && (
        <FinalMessage onBackToHome={() => setCurrentPage('landing')} />
      )}
    </>
  );
}