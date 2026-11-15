import React from 'react';
import Link, { LinkProps } from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface NavButtonProps extends Omit<LinkProps, 'className'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode | null;
  iconPosition?: 'left' | 'right';
  fullWidthOnMobile?: boolean;
  cursorLabel?: string;
  className?: string;
}

const VARIANT_CLASSES: Record<NonNullable<NavButtonProps['variant']>, string> = {
  primary:
    'bg-black text-white border-2 border-black hover:bg-brand-accent hover:text-black',
  secondary:
    'bg-white text-black border-2 border-black hover:bg-black hover:text-white',
};

const SIZE_CLASSES: Record<NonNullable<NavButtonProps['size']>, string> = {
  sm: 'px-5 py-2.5 text-xs md:text-sm tracking-widest gap-2',
  md: 'px-6 py-4 text-xs sm:text-sm tracking-widest gap-2.5',
  lg: 'px-8 py-5 text-base sm:text-lg tracking-wider gap-3',
};

export const NavButton: React.FC<NavButtonProps> = ({
  href,
  children,
  variant = 'primary',
  size = 'lg',
  icon = <ArrowRight className="w-5 h-5 stroke-[2.5] transition-transform duration-150 group-hover:translate-x-1" />,
  iconPosition = 'right',
  fullWidthOnMobile = true,
  cursorLabel,
  className = '',
  ...linkProps
}) => {
  const widthClass = fullWidthOnMobile ? 'w-full sm:w-auto' : 'w-auto';

  return (
    <Link
      href={href}
      data-cursor={cursorLabel}
      className={`group inline-flex items-center justify-center font-black uppercase transition-colors duration-150 cursor-pointer select-none ${widthClass} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`}
      {...linkProps}
    >
      {icon && iconPosition === 'left' && icon}
      <span>{children}</span>
      {icon && iconPosition === 'right' && icon}
    </Link>
  );
};


// USAGE
//
// BASIC
//
// <NavButton href="/pages/start-setup">
//   START A PROJECT
// </NavButton>
//
// PRE SELECTED QUERE
//
// <NavButton
//   href={{ pathname: '/pages/start-setup', query: { purpose: 'CRM INTEGRATION' } }}
//   cursorLabel="DEPLOY"
// >
//   DEPLOY THIS STACK
// </NavButton>

// NO icon
// <NavButton href="/pages/start-setup" size="sm" icon={null} fullWidthOnMobile={false}>
//   START A PROJECT
// </NavButton>
