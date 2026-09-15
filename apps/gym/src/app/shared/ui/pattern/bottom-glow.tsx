const BottomGlow = () => {
  return (
    <>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-40 bg-primary-brand/10 blur-[90px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 20px)`,
        }}
      />
    </>
  );
};

export default BottomGlow;
