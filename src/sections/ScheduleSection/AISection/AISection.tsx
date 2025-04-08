"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import AICourseCard from "./AICourseCard";

export const AISection = () => {
  return (
    <motion.div
      className="mt-16 md:mt-24 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="ai-section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYuMjUgMzUuMjVhMy43NSAzLjc1IDAgMTEtNy41IDAgMy43NSAzLjc1IDAgMDE3LjUgMHptLTE1IDBhMy43NSAzLjc1IDAgMTEtNy41IDAgMy43NSAzLjc1IDAgMDE3LjUgMHptMzAgMGEzLjc1IDMuNzUgMCAxMS03LjUgMCAzLjc1IDMuNzUgMCAwMTcuNSAweiIgZmlsbD0iI2U1ZTdlYiIgZmlsbC1vcGFjaXR5PSIuNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <SectionHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AICourseCard
            title="AI活用基礎講座"
            imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            bgColor="blue"
            courseContent={[
              "ChatGPTの使い方マスター",
              "Notionで第二の脳を作る",
              "AIアプリ開発入門",
            ]}
          />
          <AICourseCard
            title="実践的なAI活用"
            imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            bgColor="purple"
            courseContent={[
              "レポート・課題でのAI活用法",
              "AIでパワーポイント作成",
              "AIデザインツール活用",
            ]}
          />
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-xl font-bold text-gray-900 mb-4">
            したいことがあればみんなで学ぼう！
          </p>
          <p className="text-sm text-gray-600">
            ※イベントは予告なく変更になる場合があります
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
