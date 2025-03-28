import React from 'react';
import { Calendar, Users, Trophy, Heart, MapPin, Clock, Wallet, Bot } from 'lucide-react';
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-black rounded-lg"></div>
            <span className="text-xl font-medium">Circle</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-black transition-colors">機能</a>
            <a href="#info" className="text-gray-600 hover:text-black transition-colors">情報</a>
            <a href="#schedule" className="text-gray-600 hover:text-black transition-colors">スケジュール</a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              始める
            </motion.button>
          </div>

          <button className="md:hidden">
            <Bot className="w-6 h-6" />
          </button>
        </nav>
      </header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-4 pt-32 pb-24"
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
          >
            Leave it to Circle
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 mb-12"
          >
            サークル活動の管理と運営をシンプルに。思考と行動を繋ぐプラットフォームです。
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
          >
            始める
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <div id="features" className="bg-gray-50 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ActivityCard
              icon={<Calendar className="w-8 h-8" />}
              title="イベント管理"
              description="サークル活動のスケジュールを簡単に管理できます。"
              delay={0.2}
            />
            <ActivityCard
              icon={<Users className="w-8 h-8" />}
              title="メンバー管理"
              description="メンバー情報を効率的に管理できます。"
              delay={0.4}
            />
            <ActivityCard
              icon={<Trophy className="w-8 h-8" />}
              title="実績管理"
              description="サークルの活動実績を記録できます。"
              delay={0.6}
            />
          </div>
        </motion.div>
      </div>

      {/* Info Section */}
      <div id="info" className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InfoCard
              icon={<MapPin className="w-6 h-6" />}
              title="活動場所"
              text="キャンパス内の専用スペース"
              delay={0.2}
            />
            <InfoCard
              icon={<Clock className="w-6 h-6" />}
              title="活動時間"
              text="平日 15:00-20:00"
              delay={0.4}
            />
            <InfoCard
              icon={<Wallet className="w-6 h-6" />}
              title="会費"
              text="月額 1,000円"
              delay={0.6}
            />
            <InfoCard
              icon={<Heart className="w-6 h-6" />}
              title="メンバー数"
              text="現在 50名"
              delay={0.8}
            />
          </div>
        </motion.div>
      </div>

      {/* Schedule Section */}
      <div id="schedule" className="bg-gray-50 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">年間スケジュール</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SeasonCard
              title="春学期"
              months="4月-7月"
              events={[
                "新歓イベント",
                "定期ミーティング",
                "成果発表会"
              ]}
              delay={0.2}
            />
            <SeasonCard
              title="夏休み"
              months="8月-9月"
              events={[
                "サマーキャンプ",
                "外部イベント参加",
                "プロジェクト開発"
              ]}
              delay={0.4}
            />
            <SeasonCard
              title="秋学期"
              months="10月-1月"
              events={[
                "文化祭出展",
                "技術勉強会",
                "成果発表会"
              ]}
              delay={0.6}
            />
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900">サークル活動をもっと楽しく</h2>
          <p className="text-xl text-gray-600 mb-12">
            新しい形のサークル活動管理を始めましょう
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
          >
            無料で始める
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

function ActivityCard({ icon, title, description, delay }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function InfoCard({ icon, title, text, delay }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
}

function SeasonCard({ title, months, events, delay }: SeasonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-500 mb-6">{months}</p>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            className="flex items-center text-gray-600"
          >
            <span className="w-2 h-2 bg-black rounded-full mr-3"></span>
            {event}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default App;