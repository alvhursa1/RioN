"use client";

import { useState, useEffect } from 'react';
import { Map } from 'lucide-react';

export function MapHelpMessage() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleInteraction = () => {
      setIsVisible(false);
    };

    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('mousedown', handleInteraction);

    return () => {
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('mousedown', handleInteraction);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-[#004141] text-[#fefaf1] px-8 py-4 rounded-xl shadow-lg z-50 flex items-center gap-3 min-w-[280px]">
      <Map className="w-5 h-5 flex-shrink-0" />
      <p className="text-sm font-medium">
        Navega por el mapa para descubrir puntos de interés
      </p>
    </div>
  );
}