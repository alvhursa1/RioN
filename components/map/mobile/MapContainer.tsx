"use client";

import { MAP_CONSTANTS } from '@/lib/constants/map';
import { useMapPanning } from '@/hooks/useMapPanning';

interface MapContainerProps {
  children: React.ReactNode;
}

export function MapContainer({ children }: MapContainerProps) {
  const { position, handleDrag, handleTouchEnd } = useMapPanning();

  return (
    <div 
      className="w-full h-full relative overflow-x-auto overflow-y-hidden touch-pan-x"
      onTouchMove={handleDrag}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="w-full h-full transition-transform duration-200 ease-out"
        style={{
          transform: `scale(${MAP_CONSTANTS.ZOOM.INITIAL}) translateX(${position.x}px)`,
          transformOrigin: 'center center',
          touchAction: 'pan-x'
        }}
      >
        {children}
      </div>
    </div>
  );
}