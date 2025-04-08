import React from "react";
import { motion } from "framer-motion";

type Props = {
  bottom?: boolean;
};

const WaveLines: React.FC<Props> = ({ bottom = false }) => {
  return (
    <>
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[200%] h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 25%, transparent 50%, transparent 100%)",
            ...(bottom
              ? { bottom: `${15 + i * 10}%` }
              : { top: `${15 + i * 10}%` }),
            left: "-50%",
          }}
          animate={{ x: ["0%", "50%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5 + (bottom ? 2 : 0),
          }}
        />
      ))}
    </>
  );
};

export default WaveLines;
