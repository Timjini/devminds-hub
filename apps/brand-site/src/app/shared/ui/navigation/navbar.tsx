"use client";
import { navLinks } from "@/data/main";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useState } from "react";
import AppLogo from "../app-logo";
import NavigationButton from "../button/navigation-button";
import FlatLinkList from "../list/flat-link-list";

const Navbar: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 60);

    if (latest > previous && latest > 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={` fixed top-0 left-0 z-50 w-full font-sans transition-all duration-500 ${
        isScrolled ? "h-20  shadow-xl backdrop-blur-md" : "h-24"
      }`}
    >
      <div className=" relative mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex justify-start items-center h-full">
          <AppLogo />
        </div>

        <div className="item-center hidden lg:block">
          <FlatLinkList list={navLinks} />
        </div>

        <div className="flex justify-end items-center gap-4">
          <div className="hidden lg:block">
            <NavigationButton
              href="/pages/contact"
              label="Contact"
              icon={undefined}
              btnType="primary"
            />
          </div>
          {/* <ThemeChanger /> */}
        </div>
      </div>

      {!isScrolled && (
        <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
      )}
    </motion.nav>
  );
};

export default Navbar;
