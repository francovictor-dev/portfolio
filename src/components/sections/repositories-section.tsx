"use client";

import repositoriesMock from "@/mocks/repositories.mock.json";
import { AnimatePresence, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { memo, useState } from "react";

const RepositoriesSection = () => {
  const { push } = useRouter();
  const repositories = repositoriesMock as PublicRepository[];

  const renderProjectCards = () => {
    const justityType = (index: number) => {
      const isEven = index % 2 == 0;
      return isEven ? "justify-end" : "justify-start";
    };

    return repositories.map((item, index) => (
      <RepositoryCard item={item} key={index} />
    ));
  };

  return (
    <div id="repositories" className="flex flex-col gap-10 px-4">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-tr from-(--grad-orange-900) to-(--grad-orange-800) bg-clip-text text-transparent">
        REPOSITÓRIOS PUBLICOS
      </h1>
      <div className="grid grid-flow-row grid-cols-3 gap-8 place-items-center max-sm:grid-cols-1 overflow-hidden">
        {renderProjectCards()}
      </div>
    </div>
  );
};

export default RepositoriesSection;

const RepositoryCard = memo(({ item }: { item: PublicRepository }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.a
      key={item.title}
      className={`flex w-full p-4 text-white border-zinc-800 border-2 justify-center`}
      /*       initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }} */
      style={{ backgroundColor: "oklch(25.2% 0 0 / 0%)" }}
      whileInView={{ x: 0, opacity: 1 }}
      whileHover={{ backgroundColor: "oklch(25.2% 0 0 / 100%)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      href={item.href}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      target="_blank"
    >
      {!hover && (
        <AnimatePresence mode="wait">
          <motion.span
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {item.title}
          </motion.span>
        </AnimatePresence>
      )}

      {hover && (
        <AnimatePresence mode="wait">
          <motion.span
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {item.stacks.join(" - ")}
          </motion.span>
        </AnimatePresence>
      )}
    </motion.a>
  );
});
