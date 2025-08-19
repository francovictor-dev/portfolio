"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const HomeSection = () => {
  return (
    <main
      id="home"
      className="flex pr-[1rem]  pl-[1rem] flex-col pt-28 justify-center items-center gap-10 "
    >
      <motion.div
        className="w-52 h-52 p-1 rounded-full overflow-hidden bg-gradient-to-tr from-(--grad-orange-900) to-(--lilas) max-sm:w-[60%] max-sm:h-auto max-sm:aspect-square"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <Image
          className=" w-full h-full rounded-full  object-cover object-[25%_15%]"
          src={"/images/profile-image.jpeg"}
          alt="perfil"
          height={1599}
          width={899}
          priority
        />
      </motion.div>

      <motion.h1
        className="text-6xl text-primary font-extrabold w-2/5 text-center max-lg:w-[80%] max-sm:w-full max-sm:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
      >
        Olá! Me chamo Franco Victor Ribeiro e{" "}
        <span className="bg-gradient-to-tr from-(--grad-orange-900) to-(--lilas) bg-clip-text text-transparent">
          trabalho com sites e aplicativo móveis!
        </span>
      </motion.h1>

      <motion.label
        className="text-[18px] text-(--text-secondary-90) text-center w-2/5 max-lg:w-[80%] max-sm:w-full max-sm:font-light "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
      >
        Eu sou um desenvolvedor de software full-stack com mais de 3 anos de
        experiência profissional, especializado em desenvolvimento web e mobile.
        Minha especialidade está na criação de sistemas robustos com React.js.
      </motion.label>

      <motion.div
        className="flex gap-6 max-sm:flex-col max-sm:w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, type: "spring" }}
      >
        <a href="#footer">
          <Button variant={"default"}>Entrar em contato</Button>
        </a>
        <Link
          href="/docs/franco-victor-ribeiro-currículo.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant={"outline"}>Baixar Currículo</Button>
        </Link>
      </motion.div>
    </main>
  );
};

export default HomeSection;
