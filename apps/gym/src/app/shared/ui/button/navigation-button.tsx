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
    "primary": "flex flex-row items-center justify-center align-center px-6 py-3 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-linear-to-tl from-brand-primary to-brand-primary-light leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-110 hover:rotate-2 hover:bg-brand-primary-super-dark hover:text-brand-super-light hover:shadow-lg active:opacity-85",
    "secondary": "bg-stone-200 hover:bg-stone-300 font-black px-8 py-4 rounded-xl text-center transition-all border border-white/10 text-sm uppercase tracking-wider flex-1",
    "link": "inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase group-hover:text-gray-400 transition-colors duration-200"
  }

  const selectedStyle = styles[btnType] || styles.primary;

  return (
    <Link href={href} className={`${customClass} ${selectedStyle}`}>
      <span className="text-xs md:text-md font-montserrat">{label} {icon && <IconComponent iconName={icon} customClass="h-5 w-5" />}</span>
    </Link>
  );
};

export default NavigationButton;
