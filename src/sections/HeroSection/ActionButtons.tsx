import { motion } from "framer-motion";

const ActionButtons: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="flex flex-col sm:flex-row gap-4 justify-center"
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors relative group"
    >
      <a
        href="https://docs.google.com/forms/d/1cFeIUMvCSwXw9udi6DFEXim409TwzSn4Xoh9KkowJRs/edit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-200"></div>
        <span className="relative">入会フォーム</span>
      </a>
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium border-2 border-black hover:bg-gray-50 transition-colors"
    >
      新入生勧誘へ
    </motion.button>
  </motion.div>
);

export default ActionButtons;
