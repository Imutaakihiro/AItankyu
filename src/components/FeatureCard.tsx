import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradient: string;
  className: string;
}

function FeatureCard({
  icon,
  title,
  description,
  delay,
  gradient,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-br ${gradient} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all relative overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-white opacity-90 transition-opacity duration-300 group-hover:opacity-80" />

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="mb-4 p-3 rounded-xl bg-white/80 w-fit mx-auto shadow-sm group-hover:shadow transition-all duration-300"
        >
          {icon}
        </motion.div>

        <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
          {title}
        </h3>

        <p className="text-gray-700 leading-relaxed text-center text-sm">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;
