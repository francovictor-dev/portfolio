import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

type CardProps = {
  src: string;
  title: string;
};

const ProjectCard = ({ src, title }: CardProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleHover = (b: boolean) => setIsHover(b);

  return (
    <motion.div
      className="w-96 h-72 bg-[#2A2A2A] flex flex-col rounded-xl cursor-pointer overflow-hidden"
      onHoverStart={() => handleHover(true)}
      onHoverEnd={() => handleHover(false)}
    >
      <div className="h-[78%] flex bg-amber-200 overflow-hidden">
        <motion.div
          animate={isHover ? { scale: 1.25 } : { scale: 1 }}
          transition={{ ease: "circOut", duration: 0.8 }}
        >
          <Image
            src={src}
            alt=""
            style={{ objectFit: "cover", height: "100%" }}
            height={600}
            width={600}
            priority
          />
        </motion.div>
      </div>
      <div className=" rounded-b-xl p-4 flex flex-col justify-center ">
        <motion.label
          className="text-sm text-(--text-secondary-100) font-extrabold absolute"
          style={{ y: -12 }}
          animate={isHover ? { opacity: 1 } : { opacity: 0 }}
          transition={{ ease: "backOut", duration: 0.8 }}
        >
          VER DETALHES
        </motion.label>
        <motion.label
          className="text-lg text-primary font-extrabold"
          animate={isHover ? { y: 12 } : { y: 0 }}
          transition={{ ease: "backOut", duration: 1 }}
        >
          {title.toUpperCase()}
        </motion.label>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
