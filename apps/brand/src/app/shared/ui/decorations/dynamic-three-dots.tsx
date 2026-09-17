const DynamicThreeDots = ({mainColor} :{mainColor: string}) => {
  return (
    <div className="flex space-x-2 mt-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
      <div
        className="w-2 h-2 rounded-full animate-bounce"
        style={{ backgroundColor: mainColor }}
      />
      <div
        className="w-2 h-2 rounded-full animate-bounce delay-100"
        style={{ backgroundColor: mainColor }}
      />
      <div
        className="w-2 h-2 rounded-full animate-bounce delay-200"
        style={{ backgroundColor: mainColor }}
      />
    </div>
  );
};

export default DynamicThreeDots;
