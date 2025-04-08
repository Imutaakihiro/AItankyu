import React from "react";
import { motion } from "framer-motion";

const EnergyPulse: React.FC = () => {
  return (
    <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2">
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{ scale: [1, 2], opacity: [0.2, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay: i * 1.5,
          }}
        >
          <div className="w-[150px] h-[150px] border border-black/10 rounded-full" />
        </motion.div>
      ))}
    </div>
  );
};

export default EnergyPulse;
