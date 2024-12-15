"use client";

import { Plus, Minus } from 'lucide-react';

interface ZoomControlsProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  canZoomIn: boolean;
  canZoomOut: boolean;
}

export function ZoomControls({ onZoomIn, onZoomOut, canZoomIn, canZoomOut }: ZoomControlsProps) {
  return (
    <div className="fixed bottom-8 right-4 flex flex-col gap-2 z-50">
      <button
        onClick={onZoomIn}
        disabled={!canZoomIn}
        className={`bg-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center transition-colors
          ${canZoomIn 
            ? 'hover:bg-gray-50 active:bg-gray-100' 
            : 'opacity-50 cursor-not-allowed'}`}
        aria-label="Zoom in"
      >
        <Plus className="w-6 h-6 text-gray-700" />
      </button>
      <button
        onClick={onZoomOut}
        disabled={!canZoomOut}
        className={`bg-white rounded-full w-10 h-10 shadow-lg flex items-center justify-center transition-colors
          ${canZoomOut 
            ? 'hover:bg-gray-50 active:bg-gray-100' 
            : 'opacity-50 cursor-not-allowed'}`}
        aria-label="Zoom out"
      >
        <Minus className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
}