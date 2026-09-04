import { MorphicUlProps } from "@/app/e-guide-solutions/entities/feature/types";
import Image from "next/image";

const MorphicUl: React.FC<MorphicUlProps> = ({ features }) => {
  return (
    <div className="w-full max-w-xl bg-linear-to-b from-brand-primary-light to-brand-primary backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
      <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-6 text-center text-white tracking-wide">
        Key Features
      </h3>
      <ul className="flex flex-col gap-6">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10"
          >
            <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full shadow-md">
              <Image
                loading="eager"
                height={50}
                width={50}
                alt={feature.title}
                src={feature.icon}
                className="object-contain h-8 w-8"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="font-clashDisplay text-lg font-semibold text-white">
                {feature.title}
              </h4>
              <p className="text-sm text-white/80 leading-relaxed mt-1">
                {feature.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MorphicUl;
