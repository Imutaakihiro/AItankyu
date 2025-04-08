import { Users, Wallet, Calendar, Trophy, Heart } from "lucide-react";
import FeatureCard from "../FeatureCard";

const features = [
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "多ジャンル",
    description: "スポーツも季節行事も文化系も！",
    delay: 0.2,
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    icon: <Wallet className="w-12 h-12 text-green-600" />,
    title: "低コスト",
    description: "年会費たったの1,500円",
    delay: 0.4,
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: <Calendar className="w-12 h-12 text-purple-600" />,
    title: "自由参加",
    description: "月2回ペース、掛け持ちOK",
    delay: 0.6,
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: <Trophy className="w-12 h-12 text-yellow-600" />,
    title: "全学部対象",
    description: "学年・学部関係なし",
    delay: 0.8,
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: <Heart className="w-12 h-12 text-red-600" />,
    title: "企画参加OK",
    description: "メンバー発案イベントを積極採用！",
    delay: 1.0,
    gradient: "from-red-500/10 to-rose-500/10",
  },
];

const FeatureList: React.FC = () => {
  return (
    <div className="relative -mx-4 px-4">
      <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-2">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
            className="w-[85vw] max-w-[300px] flex-shrink-0 snap-center"
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
