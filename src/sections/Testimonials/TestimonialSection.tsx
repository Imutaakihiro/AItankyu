import { motion } from "framer-motion";
import TestimonialCard from "../../components/TestimonialCard";

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 text-gray-900">
          リアルな声、集めました｜参加者の声
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TestimonialCard
            name="Yさん"
            department="情報工学部"
            year="4年"
            text="こんなサークルが欲しかった！このサークルがあれば、後悔なんて絶対しない"
            delay={0.2}
          />
          <TestimonialCard
            name="Kさん"
            department="工学部"
            year="3年"
            text="サークルにあったら、大学が楽しみになる！「自分でもイベント作っていいよ！」っていう自由さも好きです。"
            delay={0.4}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;
