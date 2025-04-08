"use client";

import { motion } from "framer-motion";

export const SelectionSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto px-4 mb-16"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">
        あなたはどっちを満喫する？
      </h2>
      <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() =>
            document
              .getElementById("events-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <img
            src="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80"
            alt="イベント"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white">イベント</h3>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() =>
            document
              .getElementById("ai-section")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
            alt="AI"
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-4xl font-bold text-white">AI</h3>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
