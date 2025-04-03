import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  department: string;
  year: string;
  text: string;
  delay: number;
}

function TestimonialCard({
  name,
  department,
  year,
  text,
  delay,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-700">
            {department} {year}
          </p>
        </div>
      </div>
      <p className="text-gray-700">{text}</p>
    </motion.div>
  );
}

export default TestimonialCard;
