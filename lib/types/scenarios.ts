export interface ChristmasScenario {
  id: string;
  title: string;
  description: string;
  location: {
    cx: number;
    cy: number;
  };
}

export type ScenarioId = 
  | "cathedral"
  | "giant-tree"
  | "christmas-market"
  | "city-hall"
  | "audiobook"
  | "water-market"
  | "garland-tunnel"
  | "tree-kiosk"
  | "clock-tunnel"
  | "nativity"
  | "belchite"
  | "ser-tree"
  | "santa";