const DynamicAccentBar = ({ mainColor }: { mainColor: string }) => {
  return (
    <>
      <div
        className="mt-6 w-1/3 h-0.5 rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse"
        style={{
          background: `linear-gradient(to right, transparent, ${mainColor}, transparent)`,
        }}
      />
    </>
  );
};

export default DynamicAccentBar;
