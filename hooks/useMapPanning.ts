"use client";

import { useState, useCallback } from 'react';

interface TouchPosition {
  x: number;
  y: number;
}

interface Position {
  x: number;
  y: number;
}

const PAN_STEP = 1;
const MIN_PAN_X = -1000; // Límite izquierdo
const MAX_PAN_X = 1000;  // Límite derecho

export function useMapPanning() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [lastTouch, setLastTouch] = useState<TouchPosition>({ x: 0, y: 0 });

  const handleDrag = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    
    if (!lastTouch.x) {
      setLastTouch({ x: touch.clientX, y: touch.clientY });
      return;
    }

    const deltaX = touch.clientX - lastTouch.x;
    
    setPosition(prev => ({
      x: Math.max(MIN_PAN_X, Math.min(MAX_PAN_X, prev.x + deltaX * PAN_STEP)),
      y: 0
    }));

    setLastTouch({ x: touch.clientX, y: touch.clientY });
  }, [lastTouch]);

  const handleTouchEnd = useCallback(() => {
    setLastTouch({ x: 0, y: 0 });
  }, []);

  return {
    position,
    handleDrag,
    handleTouchEnd
  };
}