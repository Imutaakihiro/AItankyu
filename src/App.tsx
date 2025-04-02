import React, { useState } from "react";
import {
  Calendar,
  Users,
  Trophy,
  Heart,
  Wallet,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoAI from "./assets/logoAI.jpg";
import Header from "./components/Header";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  gradient: string;
  className: string;
}

interface EventCardProps {
  title: string;
  description: string;
  delay: number;
  image: string;
}

interface TestimonialCardProps {
  name: string;
  department: string;
  year: string;
  text: string;
  delay: number;
}

interface FAQCardProps {
  question: string;
  answer: string;
  delay: number;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* AI Animation Background */}
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
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4 relative z-10"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight"
            >
              AIで自由になった時間
              <br className="hidden sm:block" />
              最高の思い出にしよう。
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mb-12"
            >
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
                大学生活、もっと楽しくなる場所がここにある
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors relative group"
              >
                <a
                  href="https://docs.google.com/forms/d/1cFeIUMvCSwXw9udi6DFEXim409TwzSn4Xoh9KkowJRs/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-200"></div>
                  <span className="relative">入会フォーム</span>
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium border-2 border-black hover:bg-gray-50 transition-colors"
              >
                新入生勧誘へ
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        {/* 背景 */}
        <div className="absolute inset-0 bg-gray-50">
          <div className="absolute inset-0 overflow-hidden">
            {/* デジタルウェーブライン - 上部と下部に配置 */}
            {/* 上部のライン */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`top-${i}`}
                className="absolute w-[200%] h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 25%, transparent 50%, transparent 100%)",
                  top: `${15 + i * 10}%`, // 上部に配置
                  left: "-50%",
                }}
                animate={{
                  x: ["0%", "50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.5,
                }}
              />
            ))}
            {/* 下部のライン */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={`bottom-${i}`}
                className="absolute w-[200%] h-[2px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 25%, transparent 50%, transparent 100%)",
                  bottom: `${15 + i * 10}%`, // 下部に配置
                  left: "-50%",
                }}
                animate={{
                  x: ["0%", "50%"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.5 + 2, // 上部とは異なるタイミング
                }}
              />
            ))}

            {/* エネルギーパルス - 下部に配置 */}
            <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 2],
                    opacity: [0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 1.5,
                  }}
                >
                  <div className="w-[150px] h-[150px] border border-black/10 rounded-full" />
                </motion.div>
              ))}
            </div>

            {/* スキャンライン - 上部と下部のみ */}
            <div className="absolute inset-0">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-full h-[50px]"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, rgba(0,0,0,0.05), transparent)",
                    bottom: "10%",
                  }}
                  initial={{
                    y: "-100%",
                  }}
                  animate={{
                    y: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 2,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">
              どんなサークル？
              <br />
              AI時代の、リアルな青春を。
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-lg text-gray-700 mb-8">
                このサークルは、
                <br className="hidden sm:block" />
                <span className="font-bold text-gray-900">
                  「AIを使って生まれた時間を全力で楽しもう！」
                </span>{" "}
                をコンセプトに誕生しました。
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                AIの力で効率化された今、私たちが大事にしたいのは、
                <span className="font-bold text-gray-900">
                  "人と人とのつながり"
                </span>
                。<br className="hidden sm:block" />
                スポーツ、季節イベント、文化活動まで、ジャンルを超えたリアルな体験を通じて、
                <br className="hidden sm:block" />
                <span className="font-bold text-gray-900">
                  大学生活をもっと楽しく、もっと自由に。
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
          {/* スクロール可能なコンテナ */}
          <div className="relative -mx-4 px-4">
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar pb-2">
              <FeatureCard
                icon={<Users className="w-12 h-12 text-blue-600" />}
                title="多ジャンル"
                description="スポーツも季節行事も文化系も！"
                delay={0.2}
                gradient="from-blue-500/10 to-purple-500/10"
                className="w-[85vw] max-w-[300px] flex-shrink-0 snap-center"
              />
              <FeatureCard
                icon={<Wallet className="w-12 h-12 text-green-600" />}
                title="低コスト"
                description="年会費たったの1,500円"
                delay={0.4}
                gradient="from-green-500/10 to-emerald-500/10"
                className="w-[85vw] max-w-[300px] flex-shrink-0 snap-center"
              />
              <FeatureCard
                icon={<Calendar className="w-12 h-12 text-purple-600" />}
                title="自由参加"
                description="月2回ペース、掛け持ちOK"
                delay={0.6}
                gradient="from-purple-500/10 to-pink-500/10"
                className="w-[85vw] max-w-[300px] flex-shrink-0 snap-center"
              />
              <FeatureCard
                icon={<Trophy className="w-12 h-12 text-yellow-600" />}
                title="全学部対象"
                description="学年・学部関係なし"
                delay={0.8}
                gradient="from-yellow-500/10 to-orange-500/10"
                className="w-[85vw] max-w-[300px] flex-shrink-0 snap-center"
              />
              <FeatureCard
                icon={<Heart className="w-12 h-12 text-red-600" />}
                title="企画参加OK"
                description="メンバー発案イベントを積極採用！"
                delay={1.0}
                gradient="from-red-500/10 to-rose-500/10"
                className="w-[85vw] max-w-[300px] flex-shrink-0 snap-center"
              />
            </div>
            {/* スクロールインジケーター */}
            <div className="mt-4 flex justify-center gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Schedule Section */}
      <section
        id="schedule"
        className="py-24 bg-white relative overflow-hidden"
      >
        {/* 選択セクション */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">
            あなたはどっちを満喫する？
          </h2>
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() =>
                document
                  .getElementById("events-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <img
                src="https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=800&q=80"
                alt="イベント"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white">イベント</h3>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() =>
                document
                  .getElementById("ai-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
                alt="AI"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white">AI</h3>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 既存のイベントセクション */}

        <div
          className="relative z-10 max-w-7xl mx-auto px-4"
          id="events-section"
        >
          <div className="text-center mb-12">
            <motion.h3
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              イベント
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              全力で楽しもう！もっと自由に、もっと楽しく。
            </motion.p>
          </div>

          <div className="space-y-16 md:space-y-32">
            {/* 春（既存） */}
            <motion.div
              className="relative flex flex-col md:flex-row items-start md:items-center pl-8 md:pl-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2 md:pr-16 mb-6 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold text-pink-500 mb-4 md:text-right">
                  Spring
                </h3>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        4月 新歓イベント
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        桜の下で新しい出会いと思い出を
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        5月 BBQ・アウトドア
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        自然の中で楽しむ青春時間
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute left-3 md:left-1/2 top-0 md:top-1/2 w-6 h-6 bg-pink-500 rounded-full transform md:-translate-x-1/2 md:-translate-y-1/2 shadow-lg z-10" />
              <div className="w-full md:w-1/2 md:pl-16">
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-xl"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1522383225653-ed111181a951"
                    alt="春のイベント"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* 夏 */}
            <motion.div
              className="relative flex flex-col md:flex-row items-start md:items-center pl-8 md:pl-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2 md:pr-16 mb-6 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4 md:text-right">
                  Summer
                </h3>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        6月 交流会
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        歌って踊って仲間作り
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        7-8月 夏合宿
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        ビーチ・花火・最高の思い出作り
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        8月 サマーフェスティバル
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        音楽と光の饗宴
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute left-3 md:left-1/2 top-0 md:top-1/2 w-6 h-6 bg-blue-500 rounded-full transform md:-translate-x-1/2 md:-translate-y-1/2 shadow-lg z-10" />
              <div className="w-full md:w-1/2 md:pl-16">
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-xl"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                    alt="夏のイベント"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* 秋 */}
            <motion.div
              className="relative flex flex-col md:flex-row items-start md:items-center pl-8 md:pl-0"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2 md:pr-16 mb-6 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4 md:text-right">
                  Autumn
                </h3>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        9月 スポーツ大会
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        汗を流して絆を深める
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        10月 文化祭出店
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        みんなで創る最高の思い出
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        11月 紅葉狩り
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        秋の自然を満喫
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute left-3 md:left-1/2 top-0 md:top-1/2 w-6 h-6 bg-orange-500 rounded-full transform md:-translate-x-1/2 md:-translate-y-1/2 shadow-lg z-10" />
              <div className="w-full md:w-1/2 md:pl-16">
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-xl"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1506102383123-c8ef1e872756"
                    alt="秋のイベント"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>

            {/* 冬 */}
            <motion.div
              className="relative flex flex-col md:flex-row items-start md:items-center pl-8 md:pl-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-full md:w-1/2 md:pr-16 mb-6 md:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4 md:text-right">
                  Winter
                </h3>
                <div className="bg-white shadow-lg rounded-lg p-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-4"
                  >
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        12月 クリスマスパーティ
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        特別な季節の特別な思い出
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        1月 新年会
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        新しい年の始まりを祝う
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-gray-900">
                        2月 冬合宿
                      </h4>
                      <p className="text-base md:text-lg text-gray-700 mt-2">
                        スノボ・温泉で心も体も温まる
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute left-3 md:left-1/2 top-0 md:top-1/2 w-6 h-6 bg-blue-300 rounded-full transform md:-translate-x-1/2 md:-translate-y-1/2 shadow-lg z-10" />
              <div className="w-full md:w-1/2 md:pl-16">
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-xl"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1517299321609-52687d1bc55a"
                    alt="冬のイベント"
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 追加イベント情報 */}
        <motion.div
          className="mt-16 md:mt-24 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="ai-section"
        >
          {/* 背景エフェクト */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYuMjUgMzUuMjVhMy43NSAzLjc1IDAgMTEtNy41IDAgMy43NSAzLjc1IDAgMDE3LjUgMHptLTE1IDBhMy43NSAzLjc1IDAgMTEtNy41IDAgMy43NSAzLjc1IDAgMDE3LjUgMHptMzAgMGEzLjc1IDMuNzUgMCAxMS03LjUgMCAzLjc1IDMuNzUgMCAwMTcuNSAweiIgZmlsbD0iI2U1ZTdlYiIgZmlsbC1vcGFjaXR5PSIuNSIvPjwvZz48L3N2Zz4=')] opacity-20" />
          </div>

          {/* メインコンテンツ */}
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h3
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                AI勉強会
              </motion.h3>
              <motion.p
                className="text-lg text-gray-600 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                最新のAI技術を学び、実践的に活用する方法を身につけよう
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* AI活用基礎講座 */}
              <motion.div
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                      alt="AI活用基礎講座"
                      className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">
                        AI活用基礎講座
                      </h4>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start group/item">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 group-hover/item:bg-blue-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700 group-hover/item:text-blue-600 transition-colors">
                          ChatGPTの使い方マスター
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 group-hover/item:bg-blue-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700 group-hover/item:text-blue-600 transition-colors">
                          Notionで第二の脳を作る
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 group-hover/item:bg-blue-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700 group-hover/item:text-blue-600 transition-colors">
                          AIアプリ開発入門
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* 実践的なAI活用 */}
              <motion.div
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative h-full">
                  <div className="absolute inset-0">
                    <img
                      src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                      alt="実践的なAI活用"
                      className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    />
                  </div>
                  <div className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                        <svg
                          className="w-6 h-6 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900">
                        実践的なAI活用
                      </h4>
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start group/item">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1 group-hover/item:bg-purple-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700 group-hover/item:text-purple-600 transition-colors">
                          レポート・課題でのAI活用法
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1 group-hover/item:bg-purple-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700 group-hover/item:text-purple-600 transition-colors">
                          AIでパワーポイント作成
                        </span>
                      </li>
                      <li className="flex items-start group/item">
                        <span className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1 group-hover/item:bg-purple-200 transition-colors">
                          <svg
                            className="w-4 h-4 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700 group-hover/item:text-purple-600 transition-colors">
                          AIデザインツール活用
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-xl font-bold text-gray-900 mb-4">
                したいことがあればみんなで学ぼう！
              </p>
              <p className="text-sm text-gray-600">
                ※イベントは予告なく変更になる場合があります
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
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

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 text-gray-900">
            よくある質問｜不安もここで解消！
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <FAQCard
              question="入部できますか？"
              answer="いつでも大歓迎です！公式LINEやInstagramでご連絡ください◎"
              delay={0.2}
            />
            <FAQCard
              question="忙しくても大丈夫？"
              answer="他サークルやバイトとの両立OK！,勉強会やイベントは絶えず開催します！参加できるときに参加しましょう！"
              delay={0.4}
            />
            <FAQCard
              question="友達がいないのが不安です…"
              answer="イベントはチーム制＆交流メインなので、自然と友達ができます！"
              delay={0.6}
            />
            <FAQCard
              question="掛け持ちしてもいいの？"
              answer="もちろんOK！実際に掛け持ちしている人もたくさんいます！"
              delay={0.8}
            />
          </div>
        </motion.div>
      </section>

      {/* Join Section */}
      <section className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">
            まずは、気軽に来てみて！｜参加方法はこちら
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6 mb-12">
              <p className="text-base sm:text-lg font-bold text-gray-900">
                新入生勧誘のブースに参加
              </p>
              <p className="text-base sm:text-lg font-bold text-gray-900">
                運営の先輩に話しかけてみる
              </p>
              <p className="text-base sm:text-lg font-bold text-gray-900">
                公式LINEやInstagramからDMを送る
              </p>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              💬 公式LINE・Instagramで随時情報発信中！
            </p>
            <p className="text-base sm:text-lg font-bold text-gray-900">
              📅 4月・5月は新歓イベント盛りだくさん！
            </p>
            <p className="text-gray-700">（お花見・BBQ・スポーツ大会など）</p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src={logoAI}
                  alt="AI探究会ロゴ"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-medium">AI探究会</span>
              </div>
              <p className="text-gray-400">© 2024 AI探究会</p>
            </div>
            <div className="flex space-x-8">
              <a
                href="https://lin.ee/oLszKWc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.365 9.863c.349 0 .63.285.631.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.022.134-.032.2-.032.211 0 .391.09.51.25l2.444 3.317V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.63.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.158 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/fit_ai.tankyu/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
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

function EventCard({ title, description, delay, image }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
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

export default App;
