import { motion } from "framer-motion";
import ActionButtons from "./ActionButtons";

const HeroContent: React.FC = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="max-w-7xl mx-auto px-4 relative z-10"
  >
    <div className="text-center max-w-3xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight"
      >
        AIで自由になった時間
        <br className="hidden sm:block" />
        最高の思い出にしよう。
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative mb-12"
      >
        <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
          大学生活、もっと楽しくなる場所がここにある
        </p>
      </motion.div>
      <ActionButtons />
    </div>
  </motion.div>
);

export default HeroContent;
