"use client";

import { motion } from "framer-motion";

const SectionHeader = () => {
  return (
    <div className="text-center mb-12">
      <motion.h3
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        AI勉強会
      </motion.h3>
      <motion.p
        className="text-lg text-gray-600 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        最新のAI技術を学び、実践的に活用する方法を身につけよう
      </motion.p>
    </div>
  );
};

export default SectionHeader;
