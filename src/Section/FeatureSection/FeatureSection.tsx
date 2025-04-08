import { motion } from "framer-motion";
import FeatureList from "./FeatureList";
import FeatureIndicator from "./FeatureIndicator";

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">
          このサークル、ここが違う！
          <br />
          5つのポイント
        </h2>
        <FeatureList />
        <FeatureIndicator />
      </motion.div>
    </section>
  );
};

export default FeaturesSection;
