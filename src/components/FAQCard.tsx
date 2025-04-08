import { motion } from "framer-motion";

interface FAQCardProps {
  question: string;
  answer: string;
  delay: number;
}

function FAQCard({ question, answer, delay }: FAQCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-2xl shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{question}</h3>
      <p className="text-gray-700">{answer}</p>
    </motion.div>
  );
}

export default FAQCard;
