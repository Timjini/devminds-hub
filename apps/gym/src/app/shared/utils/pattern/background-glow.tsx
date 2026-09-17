export const BackgroundGlow = () => {
  return (
    <>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-87.5 bg-brand-primary/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[32px_32px] opacity-5 pointer-events-none" />
    </>
  );
};
