"use client";

import { MenuIcon } from "lucide-react";
import { motion, MotionStyle, Variants } from "motion/react";

import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

type LinkType = {
  text: string;
  href: string;
  id: number;
};

const TopNavBar = () => {
  const [onHover, setOnHover] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const pathname = usePathname();

  const isHome = pathname == "/";

  const links: LinkType[] = [
    {
      id: 0,
      text: "Home",
      href: isHome ? "#home" : "/#home",
    },
    {
      id: 1,
      text: "Projetos",
      href: isHome ? "#projects" : "/#projects",
    },
    {
      id: 2,
      text: "Experiências",
      href: isHome ? "#experiences" : "/#experiences",
    },
    {
      id: 3,
      text: "Contatos",
      href: isHome ? "#footer" : "/#footer",
    },
  ];

  const handleHoverStart = (index: number) => {
    return setOnHover((e) => e.map((x, i) => i == index));
  };

  const handleHoverEnd = () => {
    return setOnHover((e) => e.map(() => false));
  };

  const renderLinks = () => {
    return links.map((item, index) => (
      <motion.a
        key={item.id}
        href={item.href}
        className="font-semibold lg:text-lg sm:text-sm max-sm:hidden"
        variants={animation}
        style={{ color: "var(--text-secondary-90" }}
        initial={"initial"}
        whileHover={"hover"}
        onHoverStart={() => handleHoverStart(index)}
        onHoverEnd={() => handleHoverEnd()}
      >
        {item.text}

        <motion.div
          style={style}
          variants={barAnimation}
          animate={onHover[index] ? "hover" : "initial"}
        />
      </motion.a>
    ));
  };

  const renderButton = () => {
    return (
      <Sheet>
        <SheetTrigger>
          <motion.div
            className="hidden p-2 border-primary border-2 rounded-xl max-sm:flex"
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.6 }}
          >
            <MenuIcon color={"#FFF"} />
          </motion.div>
        </SheetTrigger>
        <SheetContent style={{ width: "50%" }}>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>

          {links.map((item, index) => (
            <SheetClose key={index}>
              <motion.a
                key={item.id}
                href={item.href}
                className=""
                variants={animation}
                style={{ color: "var(--text-secondary-90" }}
              >
                {item.text}
              </motion.a>
            </SheetClose>
          ))}
        </SheetContent>
      </Sheet>
    );
  };

  return (
    <div className="w-full h-20 z-50 fixed px-4 bg-navbar flex justify-center items-center lg:gap-15 sm:gap-8 max-sm:justify-end">
      {renderLinks()}
      {renderButton()}
    </div>
  );
};

export default TopNavBar;

const style: MotionStyle = {
  marginTop: -2,
  translateY: 10,
  translateX: "-50%",
  marginLeft: "50%",
  height: 2,
  borderRadius: 999,
  background: "#fff",
};

const animation: Variants = {
  initial: {
    color: `#AAA`,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  hover: {
    color: "#FFF",
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

const barAnimation: Variants = {
  initial: {
    width: "0%",
    opacity: 0,

    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
  hover: {
    width: "100%",
    opacity: 1,
    //translateX: "-100%",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 1,
    },
  },
};
