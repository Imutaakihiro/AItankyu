"use client";

import { motion } from "framer-motion";

type AICourseCardProps = {
  title: string;
  imageUrl: string;
  bgColor: string;
  courseContent: string[];
};

const AICourseCard = ({
  title,
  imageUrl,
  bgColor,
  courseContent,
}: AICourseCardProps) => {
  return (
    <motion.div
      className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${bgColor}-500/10 to-${bgColor}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div className="relative h-full">
        <div className="absolute inset-0">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          />
        </div>
        <div className="p-8 relative z-10">
          <div className="flex items-center mb-6">
            <div
              className={`w-12 h-12 bg-${bgColor}-100 rounded-xl flex items-center justify-center mr-4`}
            >
              <svg
                className={`w-6 h-6 text-${bgColor}-600`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-gray-900">{title}</h4>
          </div>
          <ul className="space-y-4">
            {courseContent.map((item, index) => (
              <li key={index} className="flex items-start group/item">
                <span
                  className={`flex-shrink-0 w-6 h-6 bg-${bgColor}-100 rounded-full flex items-center justify-center mr-3 mt-1 group-hover/item:bg-${bgColor}-200 transition-colors`}
                >
                  <svg
                    className={`w-4 h-4 text-${bgColor}-600`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-gray-700 group-hover:item:text-blue-600 transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AICourseCard;
