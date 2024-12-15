"use client";

import { MapPoint } from '@/components/map/shared/MapPoint';
import { BaseMap } from '@/components/map/shared/BaseMap';
import { InfoBanner } from './InfoBanner';
import { christmasScenarios } from '@/lib/data/scenarios';
import '@/styles/map.css';

export function InteractiveMap() {
  return (
    <div className="w-full h-full relative hidden md:block">
      <InfoBanner />
      <svg
        viewBox="0 0 3262.05 1714.95"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <BaseMap />
        {christmasScenarios.map((scenario, index) => (
          <MapPoint
            key={scenario.id}
            id={scenario.id}
            cx={scenario.location.cx}
            cy={scenario.location.cy}
            number={index + 1}
            title={scenario.title}
            description={scenario.description}
          />
        ))}
      </svg>
    </div>
  );
}