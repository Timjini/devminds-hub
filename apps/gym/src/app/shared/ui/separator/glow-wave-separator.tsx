export const GlowWaveSeparator = () => {
  return (
    <div className="relative w-full h-24 my-8 flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="w-96 h-1 bg-linear-to-r from-transparent via-red-600 to-transparent shadow-[0_0_40px_10px_rgba(220,38,38,0.6)]" />
      <div className="absolute w-full h-px bg-linear-to-r from-transparent via-stone-800 to-transparent" />
    </div>
  );
};
