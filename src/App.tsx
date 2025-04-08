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
import Footer from "./components/Footer";
import EventCard from "./components/EventCard";
import FAQCard from "./components/FAQCard";
import TestimonialCard from "./components/TestimonialCard";
import FeatureCard from "./components/FeatureCard";
import AboutSection from "./Section/AboutSection/AboutSection";
import FeaturesSection from "./Section/FeatureSection/FeatureSection";

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
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

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
            <EventCard
              season="Spring"
              fontColor="pink-500"
              title={["4月 新歓イベント", "5月 BBQ・アウトドア"]}
              description={[
                "桜の下で新しい出会いと思い出を",
                "自然の中で楽しむ青春時間",
              ]}
              image="https://images.unsplash.com/photo-1522383225653-ed111181a951"
            />
            {/* 夏 */}
            <EventCard
              season="Summer"
              fontColor="blue-500"
              title={["6月 交流会", "7-8月 夏合宿", "8月 サマーフェスティバル"]}
              description={[
                "歌って踊って仲間作り",
                "ビーチ・花火・最高の思い出作り",
                "音楽と光の饗宴",
              ]}
              image="https://images.unsplash.com/photo-1522383225653-ed111181a951"
            />
            {/* 秋 */}
            <EventCard
              season="Autumn"
              fontColor="orange-500"
              title={["9月 スポーツ大会", "10月 文化祭出店", "11月 紅葉狩り"]}
              description={[
                "汗を流して絆を深める",
                "みんなで創る最高の思い出",
                "秋の自然を満喫",
              ]}
              image="https://images.unsplash.com/photo-1506102383123-c8ef1e872756"
            />
            {/* 冬 */}
            <EventCard
              season="Winter"
              fontColor="blue-300"
              title={["12月 クリスマスパーティ", "1月 新年会", "2月 冬合宿"]}
              description={[
                "特別な季節の特別な思い出",
                "新しい年の始まりを祝う",
                "スノボ・温泉で心も体も温まる",
              ]}
              image="https://images.unsplash.com/photo-1517299321609-52687d1bc55a"
            />
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
      <Footer />
    </div>
  );
}

export default App;
