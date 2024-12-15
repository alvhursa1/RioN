"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface MapPointProps {
  id: string;
  cx: number;
  cy: number;
  number: number;
  title: string;
  description: string;
}

export function MapPoint({ id, cx, cy, number, title, description }: MapPointProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scale = isHovered ? 1.5 : 1;
  const transform = `scale(${scale})`;

  return (
    <>
      <g
        id={id}
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          transform: transform,
          transformOrigin: `${cx}px ${cy}px`,
          transition: 'all 0.2s ease-out',
          cursor: 'pointer'
        }}
      >
        <g>
          <circle
            className="fill-primary stroke-primary"
            cx={cx}
            cy={cy}
            r="35"
          />
          <rect
            className="fill-primary stroke-primary"
            x={cx - 1.23}
            y={cy + 35}
            width="2.46"
            height="40"
          />
        </g>
        <text
          className="fill-primary-foreground text-3xl font-bold"
          transform={`translate(${cx - (number >= 10 ? 16 : 8)} ${cy + 14})`}
        >
          <tspan x="0" y="0">{number}</tspan>
        </text>
      </g>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-none border-[#004141] border-[14px] bg-[#ffecc3] p-0">
          <div className="relative">
            <div 
              className="absolute -left-[14px] -top-[14px] w-24 h-24 rounded-full bg-[#004141] flex items-center justify-center"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <span className="text-white text-4xl font-bold">{number}.</span>
            </div>
            <div className="pt-6 px-6 pb-6">
              <DialogTitle className="text-2xl font-bold mb-4 mt-14">{title}</DialogTitle>
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}