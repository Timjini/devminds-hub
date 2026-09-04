import React from "react";

type DecoTextProps = {
  // tag: React.HTMLAttributes<HTMLHeadingElement>;
  backgroundImg: string;
  text: string;
};

const DecoText: React.FC<DecoTextProps> = ({ backgroundImg, text }) => {
  return (
    <div>
      <h1
        className="py-4 font-display text-5xl lg:text-8xl uppercase tracking-wide bg-clip-text text-transparent object-fill object-bottom text-wrap max-w-sm lg:max-w-xl"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
       {text}
      </h1>
    </div>
  );
};

export default DecoText;
