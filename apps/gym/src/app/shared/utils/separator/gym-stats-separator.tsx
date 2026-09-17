export const GymStatsSeparator = () => {
  const stats = [
    { value: "04", label: "Disciplines" },
    { value: "15+", label: "Weekly Classes" },
    { value: "100%", label: "Certified Coaches" },
    { value: "Agadir", label: "Location" },
  ];

  return (
    <div className="w-full bg-stone-900/60 border-y border-stone-800/80 py-8 my-12 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <div className="text-2xl sm:text-3xl font-black font-aldrich text-stone-100 tracking-tight">
              <span className="text-red-600">{stat.value}</span>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-stone-400">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
