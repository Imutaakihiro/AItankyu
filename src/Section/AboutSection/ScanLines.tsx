import React from "react";
import { motion } from "framer-motion";

const ScanLines: React.FC = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-[50px]"
          style={{
            background:
              "linear-gradient(180deg, transparent, rgba(0,0,0,0.05), transparent)",
            bottom: "10%",
          }}
          initial={{ y: "-100%" }}
          animate={{ y: ["0%", "100%"] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

export default ScanLines;
