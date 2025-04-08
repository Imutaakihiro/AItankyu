import { motion } from "framer-motion";

interface EventCardProps {
  season: string;
  fontColor: string;
  title: string[];
  description: string[];
  image: string;
}

function EventCard({
  season,
  fontColor,
  title,
  description,
  image,
}: EventCardProps) {
  const colorMap: { [key: string]: string } = {
    "pink-500": "pink-500",
    "blue-500": "blue-500",
    "orange-500": "orange-500",
    "blue-300": "blue-300",
    // 他の色も必要なら追加
  };

  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-start md:items-center pl-8 md:pl-0"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full md:w-1/2 md:pr-16 mb-6 md:mb-0">
        <h3
          className={`text-3xl md:text-4xl font-bold mb-4 md:text-right text-${colorMap[fontColor]}`}
        >
          {season}
        </h3>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {title.map((t, index) => (
              <div key={index}>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                  {t}
                </h4>
                <p className="text-base md:text-lg text-gray-700 mt-2">
                  {description[index]}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div
        className={`absolute left-3 md:left-1/2 top-0 md:top-1/2 w-6 h-6 bg-${colorMap[fontColor]} rounded-full transform md:-translate-x-1/2 md:-translate-y-1/2 shadow-lg z-10`}
      />
      <div className="w-full md:w-1/2 md:pl-16">
        <motion.div
          className="relative overflow-hidden rounded-xl shadow-xl"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={image}
            alt="夏のイベント"
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>
      </div>
    </motion.div>
  );
}
export default EventCard;
