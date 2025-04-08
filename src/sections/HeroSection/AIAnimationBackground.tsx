import { motion } from "framer-motion";
import logoAI from "../../assets/logoAI.png"; // ロゴのパスを変更

const AIAnimationBackground: React.FC = () => (
  <div className="absolute inset-0">
    {/* ロゴ背景 */}
    <div className="absolute inset-0 flex items-center justify-center -translate-y-20">
      <div className="relative w-[800px] h-[800px]">
        <img
          src={logoAI}
          alt="AI探究会ロゴ"
          className="w-full h-full object-contain opacity-15"
        />
      </div>
    </div>

    {/* グラデーション背景 */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-gradient opacity-5"></div>

    {/* パーティクルエフェクト */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random(),
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            y: [
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
              Math.random() * 100 + "%",
            ],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>

    {/* グリッドパターン */}
    <svg className="absolute inset-0 w-full h-full">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

export default AIAnimationBackground;
