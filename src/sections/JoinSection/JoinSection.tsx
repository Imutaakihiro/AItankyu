import { motion } from "framer-motion";

const JoinSection: React.FC = () => {
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">
          まずは、気軽に来てみて！｜参加方法はこちら
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <p className="text-base sm:text-lg font-bold text-gray-900">
              新入生勧誘のブースに参加
            </p>
            <p className="text-base sm:text-lg font-bold text-gray-900">
              運営の先輩に話しかけてみる
            </p>
            <p className="text-base sm:text-lg font-bold text-gray-900">
              公式LINEやInstagramからDMを送る
            </p>
          </div>
          <p className="text-base sm:text-lg text-gray-700 mb-8">
            💬 公式LINE・Instagramで随時情報発信中！
          </p>
          <p className="text-base sm:text-lg font-bold text-gray-900">
            📅 4月・5月は新歓イベント盛りだくさん！
          </p>
          <p className="text-gray-700">（お花見・BBQ・スポーツ大会など）</p>
        </div>
      </motion.div>
    </section>
  );
};

export default JoinSection;
