export default function Home() {
  return (
    <main className="min-h-screen w-screen bg-[#FFECC3] overflow-hidden">
      <div className="h-[100vh] w-[100vw] px-[2%] flex items-center justify-center">
        {/* @ts-expect-error Async Server Component */}
        <InteractiveMap />
        {/* @ts-expect-error Async Server Component */}
        <MapMobile />
      </div>
    </main>
  );
}

import { InteractiveMap } from '@/components/map/InteractiveMap';
import { MapMobile } from '@/components/map/mobile/MapMobile';