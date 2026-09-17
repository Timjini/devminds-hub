import Image from "next/image";
import React from "react";
import NavigationButton from "../button/navigation-button";
import DynamicAccentBar from "../decorations/dynamic-accent-bar";
import DynamicThreeDots from "../decorations/dynamic-three-dots";
import RotatingItem from "../decorations/rotating-item";

interface IconCardProps {
  icon?: React.ReactNode;
  imageUrl?: string;
  bgColor?: string;
  textColor?: string;
  mainColor?: string;
  accentColor?: string;
  topic?: string;
  title?: string;
  description?: string;
  onClick?: () => void;
  navigationLink?: string;
}

const IconCard = ({
  icon,
  imageUrl,
  bgColor,
  textColor = "white",
  mainColor = "#22c55e",
  accentColor = "#4ade80",
  topic,
  title,
  description,
  onClick,
  navigationLink,
}: IconCardProps) => {
  const hexToRgba = (color: string, opacity: number) => {
    if (color.startsWith("#")) {
      let c = color.substring(1);
      if (c.length === 3)
        c = c
          .split("")
          .map((x) => x + x)
          .join("");
      const num = parseInt(c, 16);
      return `rgba(${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}, ${opacity})`;
    }
    return color;
  };

  const mainColorAlpha05 = hexToRgba(mainColor, 0.05);
  const mainColorAlpha10 = hexToRgba(mainColor, 0.1);
  const mainColorAlpha20 = hexToRgba(mainColor, 0.2);
  const mainColorAlpha40 = hexToRgba(mainColor, 0.4);

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:-rotate-1 z-50"
    >
      <div
        className="text-white rounded-3xl border shadow-2xl duration-700 z-10 relative backdrop-blur-xl overflow-hidden hover:shadow-3xl w-87.5"
        style={{
          background: bgColor ?? "linear-gradient(#0F0F0F, #0B0B0B)",
          borderColor: mainColorAlpha20,
          boxShadow: `0 25px 50px -12px ${mainColorAlpha10}`,
        }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to top right, ${mainColorAlpha05}, ${hexToRgba(accentColor, 0.1)})`,
            }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700 animate-bounce delay-500"
            style={{
              background: `linear-gradient(to top right, ${mainColorAlpha10}, transparent)`,
            }}
          />
          <div
            className="absolute top-10 left-10 w-16 h-16 rounded-full blur-xl animate-ping"
            style={{ backgroundColor: mainColorAlpha05 }}
          />
          <div
            className="absolute bottom-16 right-16 w-12 h-12 rounded-full blur-lg animate-ping delay-1000"
            style={{ backgroundColor: mainColorAlpha05 }}
          />
          <div
            className="absolute inset-0 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"
            style={{
              background: `linear-gradient(to right, transparent, ${mainColorAlpha05}, transparent)`,
            }}
          />
        </div>

        <div className="p-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div
                className="absolute inset-0 rounded-full border-2 animate-ping"
                style={{ borderColor: mainColorAlpha20 }}
              />
              <div
                className="absolute inset-0 rounded-full border animate-pulse delay-500"
                style={{ borderColor: mainColorAlpha10 }}
              />
              <div
                className="p-6 rounded-full backdrop-blur-lg border bg-linear-to-br from-black/80 to-gray-900/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500"
                style={{ borderColor: mainColorAlpha20 }}
              >
                <RotatingItem mainColor={mainColor}>
                  {icon ? (
                    icon
                  ) : (
                    <Image
                      loading="eager"
                      src={imageUrl || "/assets/img/tickets_placeholder.png"}
                      height={400}
                      width={400}
                      alt="icon"
                      className="w-18 h-18 rounded-full"
                    />
                  )}
                </RotatingItem>
              </div>
            </div>

            <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
              <p
                className="font-display text-3xl font-bold bg-clip-text text-transparent uppercase"
                style={{
                  backgroundImage: `linear-gradient(to right, ${accentColor}, ${mainColor}, ${accentColor})`,
                }}
              >
                {topic}
              </p>
            </div>

            <div className="space-y-2 max-w-sm" style={{ color: textColor }}>
              {title && (
                <p className="font-semibold text-base transform group-hover:scale-105 transition-transform duration-300">
                  {title}
                </p>
              )}
              {description && (
                <p className="text-sm leading-relaxed transform transition-colors duration-300">
                  {description}
                </p>
              )}
            </div>

            <DynamicAccentBar mainColor={mainColor} />

            <DynamicThreeDots mainColor={mainColor} />
          </div>
          <div className="block md:hidden mt-6 mx-auto">
            <NavigationButton
            label="Discover Now"
            href={navigationLink || ""}
            btnType="primary"
            />
          </div>
        </div>

        <div
          className="absolute top-0 left-0 w-20 h-20 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to bottom right, ${mainColorAlpha10}, transparent)`,
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(to top left, ${mainColorAlpha10}, transparent)`,
          }}
        />
      </div>
    </div>
  );
};

export default IconCard;
