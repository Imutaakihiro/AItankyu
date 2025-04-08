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
import AboutSection from "./sections/AboutSection/AboutSection";
import FeaturesSection from "./sections/FeatureSection/FeatureSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import { ScheduleSection } from "./sections/ScheduleSection/ScheduleSection";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Schedule Section */}
      <ScheduleSection />

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
