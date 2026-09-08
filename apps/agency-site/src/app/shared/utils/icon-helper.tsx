
import React from "react";
import * as Icons from "lucide-react";

interface IconProps {
  iconName: keyof typeof Icons;
  customClass?: string;
}

export function IconComponent(data: IconProps) {
  const LucideIcon = Icons[data.iconName] as React.ElementType;

  if (!LucideIcon) return null;

  return <LucideIcon className={`${data.customClass} w-4 h-4 inline-block ml-1`} />;
}
