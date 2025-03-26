import React from 'react';
import { Calendar, Users, Trophy, Heart, MapPin, Clock, Wallet, Camera, Music, Gamepad2, Bot, Sparkles, Code } from 'lucide-react';
import { motion } from 'framer-motion';

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay: number;
}

interface SeasonCardProps {
  title: string;
  months: string;
  events: string[];
  delay: number;
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
        >
          サークル活動プラットフォーム
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <ActivityCard
            icon={<Calendar className="w-8 h-8 text-purple-400" />}
            title="イベント管理"
            description="サークル活動のスケジュールを簡単に管理"
            delay={0.6}
          />
          <ActivityCard
            icon={<Users className="w-8 h-8 text-blue-400" />}
            title="メンバー管理"
            description="メンバー情報を効率的に管理"
            delay={0.8}
          />
          <ActivityCard
            icon={<Trophy className="w-8 h-8 text-yellow-400" />}
            title="実績管理"
            description="サークルの活動実績を記録"
            delay={1.0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <InfoCard
            icon={<MapPin className="w-6 h-6 text-green-400" />}
            title="活動場所"
            text="キャンパス内の専用スペース"
            delay={1.4}
          />
          <InfoCard
            icon={<Clock className="w-6 h-6 text-red-400" />}
            title="活動時間"
            text="平日 15:00-20:00"
            delay={1.6}
          />
          <InfoCard
            icon={<Wallet className="w-6 h-6 text-blue-400" />}
            title="会費"
            text="月額 1,000円"
            delay={1.8}
          />
          <InfoCard
            icon={<Heart className="w-6 h-6 text-pink-400" />}
            title="メンバー数"
            text="現在 50名"
            delay={2.0}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <SeasonCard
            title="春学期"
            months="4月-7月"
            events={[
              "新歓イベント",
              "定期ミーティング",
              "成果発表会"
            ]}
            delay={2.4}
          />
          <SeasonCard
            title="夏休み"
            months="8月-9月"
            events={[
              "サマーキャンプ",
              "外部イベント参加",
              "プロジェクト開発"
            ]}
            delay={2.6}
          />
          <SeasonCard
            title="秋学期"
            months="10月-1月"
            events={[
              "文化祭出展",
              "技術勉強会",
              "成果発表会"
            ]}
            delay={2.8}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function ActivityCard({ icon, title, description, delay }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-black/60 p-8 rounded-xl border border-gray-800 backdrop-blur-sm hover:bg-black/80 transition duration-300 text-white"
    >
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-3">{title}</h2>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
}

function InfoCard({ icon, title, text, delay }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-black/60 p-6 rounded-xl border border-gray-800 backdrop-blur-sm text-center text-white"
    >
      <div className="flex justify-center mb-3">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{text}</p>
    </motion.div>
  );
}

function SeasonCard({ title, months, events, delay }: SeasonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-black/60 p-6 rounded-xl border border-gray-800 backdrop-blur-sm text-white"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{months}</p>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            className="flex items-center text-gray-300"
          >
            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
            {event}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default App;