const TopGlow = () => {
  return (
    <>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-32 bg-red-600/10 blur-[100px]

      pointer-events-none"
      />

      <div
        className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[32px_32px]

        opacity-5 pointer-events-none"
      />
    </>
  );
};

export default TopGlow;
