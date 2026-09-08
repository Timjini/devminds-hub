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
        className="p-8 font-display text-center text-5xl lg:text-7xl uppercase
        bg-clip-text text-transparent object-fill"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {text}
      </h1>
    </div>
  );
};

export default DecoText;
