"use client";

import { useState, useCallback } from 'react';
import { MAP_CONSTANTS } from '@/lib/constants/map';

export function useMapZoom() {
  const [zoom, setZoom] = useState(MAP_CONSTANTS.ZOOM.INITIAL);

  const zoomIn = useCallback(() => {
    setZoom(prev => Math.min(prev + MAP_CONSTANTS.ZOOM.STEP, MAP_CONSTANTS.ZOOM.MAX));
  }, []);

  const zoomOut = useCallback(() => {
    setZoom(prev => Math.max(prev - MAP_CONSTANTS.ZOOM.STEP, MAP_CONSTANTS.ZOOM.MIN));
  }, []);

  const canZoomIn = zoom < MAP_CONSTANTS.ZOOM.MAX;
  const canZoomOut = zoom > MAP_CONSTANTS.ZOOM.MIN;

  return {
    zoom,
    zoomIn,
    zoomOut,
    canZoomIn,
    canZoomOut
  };
}