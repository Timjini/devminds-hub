import Image from "next/image";
import Link from "next/link";

interface BrandProps {
  logo: string;
  name: string;
  customClass: string;
}

const AppLogo = () => {
  const brand: BrandProps = {
    logo: "https://pub-56989421c96a4a83a6c1e963a31939e6.r2.dev/maroko-ekspert-media/home/maroko-ekspert-background.png",
    name: "Maroko Ekspert",
    customClass: "rounded-full",
  };

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative p-1 rounded-full transition-transform duration-300 group-hover:scale-105">
        <Image
          src={brand.logo}
          alt={brand.name}
          width={200}
          height={200}
          className={` ${brand.customClass} block h-18 w-auto object-contain drop-shadow-md`}
          priority
        />
      </div>
    </Link>
  );
};

export default AppLogo;
