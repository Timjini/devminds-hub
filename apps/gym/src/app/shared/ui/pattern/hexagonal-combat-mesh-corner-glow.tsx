const HexagonalCombatMeshCornerGlow = () => {
  return (
    <>
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/15 blur-[100px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.999 0l13.999 8.082v16.165L13.999 32.33 0 24.247V8.082L13.999 0zM0 40.412l13.999 8.083L27.998 40.412V24.247L13.999 32.33 0 24.247v16.165z' fill='%23ffffff' fill-opacity='1'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
};

export default HexagonalCombatMeshCornerGlow;
