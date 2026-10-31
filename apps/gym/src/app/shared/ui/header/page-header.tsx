import React, { ReactNode } from "react";
import Image from "next/image";
import { Lock, LucideIcon } from "lucide-react";

export interface PageHeaderProps {
  /** Main title of the header */
  title: ReactNode;
  /** Subtitle or description under the title */
  subtitle?: ReactNode;
  /** Badge text displayed at the top */
  badgeText?: ReactNode;
  /** Optional icon for the badge (defaults to Lock) */
  badgeIcon?: LucideIcon | ReactNode;
  /** URL string for a background image */
  backgroundImageUrl?: string;
  /** Dark overlay opacity for background image (e.g., "bg-black/60", "bg-black/40") */
  imageOverlayClass?: string;
  /** Custom background classes when no image is used (defaults to bg-stone-900) */
  bgClass?: string;
  /** Additional container classes to override padding or border styles */
  containerClass?: string;
  /** Custom max-width for the inner content (defaults to max-w-4xl) */
  contentMaxWidthClass?: string;
  /** Enable or disable radial glow effect */
  showRadialGlow?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badgeText,
  badgeIcon: BadgeIcon = Lock,
  backgroundImageUrl,
  imageOverlayClass = "bg-stone-950/70",
  bgClass = "bg-stone-900",
  containerClass = "py-12 px-4 sm:px-6 border-b border-stone-800",
  contentMaxWidthClass = "max-w-4xl",
  showRadialGlow = true,
}) => {
  const renderBadgeIcon = () => {
    if (!BadgeIcon) return null;
    if (typeof BadgeIcon === "function" || (typeof BadgeIcon === "object" && "render" in BadgeIcon)) {
      const IconComponent = BadgeIcon as LucideIcon;
      return <IconComponent className="w-3.5 h-3.5 text-brand-primary shrink-0" />;
    }
    return BadgeIcon;
  };

  return (
    <header
      className={`relative text-white overflow-hidden ${bgClass} ${containerClass}`}
    >
      {/* Background Image Layer (Optional) */}
      {backgroundImageUrl && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImageUrl}
            alt="Header Background"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Dark Overlay Layer for readability */}
          <div className={`absolute inset-0 ${imageOverlayClass}`} />
        </div>
      )}

      {/* Subtle Background Accent Glow */}
      {showRadialGlow && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent pointer-events-none z-0" />
      )}

      {/* Header Content */}
      <div
        className={`relative z-10 mx-auto text-center space-y-3 ${contentMaxWidthClass}`}
      >
        {badgeText && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800/80 backdrop-blur-md border border-stone-700 text-stone-300 font-mono text-xs uppercase tracking-wider">
            {renderBadgeIcon()}
            <span>{badgeText}</span>
          </div>
        )}

        <h1 className="font-aldrich text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="font-mono text-xs sm:text-sm text-stone-400 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
