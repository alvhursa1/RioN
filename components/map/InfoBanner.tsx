"use client";

export function InfoBanner() {
  return (
    <div className="absolute top-0 left-6 bg-[#004141] p-4 max-w-[400px] z-10 rounded-b-xl">
      <p className="text-[#fefaf1] text-[1.125rem] leading-relaxed whitespace-nowrap">
        Haz click y descubre los puntos
        <br />
        iluminados dentro de la ciudad
      </p>
    </div>
  );
}