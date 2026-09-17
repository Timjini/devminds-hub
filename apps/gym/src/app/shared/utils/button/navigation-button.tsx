import * as Icons from "lucide-react";
import Link from "next/link";
import React from "react";
import { IconComponent } from "../../utils/icon-helper";

interface NavigationButtonProps {
  label: string;
  href: string;
  icon?: keyof typeof Icons;
  customClass?: string;
  btnType: "primary" | "secondary" | "link";
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
  label,
  href,
  icon,
  customClass,
  btnType,
}) => {
  const styles = {
    primary:
      "flex flex-row mx-auto bg-brand-primary px-12 text-white box-border border border-transparent transition delay-150 duration-300  ease-in-out hover:bg-red-700 hover:scale-105 hover:cursor-pointer focus:ring-4 focus:ring-stone-800 shadow-lg py-2.5 focus:outline-none",
    secondary:
      "bg-stone-200 hover:bg-stone-300 font-black px-8 py-4 rounded-xl text-center transition-all border border-white/10 text-sm uppercase tracking-wider flex-1",
    link: "inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase group-hover:text-gray-400 transition-colors duration-200",
  };

  const selectedStyle = styles[btnType] || styles.primary;

  return (
    <Link href={href} className={`${customClass} ${selectedStyle}`}>
      <span className="uppercase kbm-pixel-font text-center">
        {label}{" "}
        {icon && <IconComponent iconName={icon} customClass="h-5 w-5" />}
      </span>
    </Link>
  );
};

export default NavigationButton;
