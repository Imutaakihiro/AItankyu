import React, { useState } from 'react';
import { Calendar, Users, Trophy, Heart, MapPin, Clock, Wallet, Bot, Instagram, Twitter, MessageCircle, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-black rounded-lg"></div>
            <span className="text-xl font-medium">AIサークル</span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-black transition-colors">サークル紹介</a>
            <a href="#features" className="text-gray-600 hover:text-black transition-colors">特徴</a>
            <a href="#schedule" className="text-gray-600 hover:text-black transition-colors">イベント</a>
            <a href="#faq" className="text-gray-600 hover:text-black transition-colors">FAQ</a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              説明会に参加
            </motion.button>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-4">
                <a 
                  href="#about" 
                  className="block text-gray-600 hover:text-black transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  サークル紹介
                </a>
                <a 
                  href="#features" 
                  className="block text-gray-600 hover:text-black transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  特徴
                </a>
                <a 
                  href="#schedule" 
                  className="block text-gray-600 hover:text-black transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  イベント
                </a>
                <a 
                  href="#faq" 
                  className="block text-gray-600 hover:text-black transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  説明会に参加
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* AI Animation Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 animate-gradient opacity-20"></div>
          <div className="absolute inset-0 opacity-50">
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
                    Math.random() * 100 + "%"
                  ],
                  y: [
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%",
                    Math.random() * 100 + "%"
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
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4 relative"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight"
            >
              AIで自由になった時間、<br className="hidden sm:block" />最高の思い出にしよう。
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
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-20 group-hover:opacity-50 transition duration-200"></div>
                <span className="relative">入会フォーム</span>
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
      <section id="about" className="py-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">どんなサークル？<br />AI時代の、リアルな青春を。</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              このサークルは、<br className="hidden sm:block" />
              <span className="font-bold text-gray-900">「AIを使って生まれた時間を全力で楽しもう！」</span> をコンセプトに誕生しました。
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              AIの力で効率化された今、私たちが大事にしたいのは、<span className="font-bold text-gray-900">"人と人とのつながり"</span>。<br className="hidden sm:block" />
              スポーツ、季節イベント、文化活動まで、ジャンルを超えたリアルな体験を通じて、<br className="hidden sm:block" />
              <span className="font-bold text-gray-900">大学生活をもっと楽しく、もっと自由に。</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 text-gray-900">このサークル、ここが違う！<br />5つのポイント</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-12 h-12 text-blue-600" />}
              title="多ジャンル"
              description="スポーツも季節行事も文化系も！"
              delay={0.2}
            />
            <FeatureCard
              icon={<Wallet className="w-12 h-12 text-green-600" />}
              title="低コスト"
              description="年会費たったの1,500円"
              delay={0.4}
            />
            <FeatureCard
              icon={<Calendar className="w-12 h-12 text-purple-600" />}
              title="自由参加"
              description="月2回ペース、掛け持ちOK"
              delay={0.6}
            />
            <FeatureCard
              icon={<Trophy className="w-12 h-12 text-yellow-600" />}
              title="全学部対象"
              description="学年・学部・関係なし"
              delay={0.8}
            />
            <FeatureCard
              icon={<Heart className="w-12 h-12 text-red-600" />}
              title="企画参加OK"
              description="メンバー発案イベントもどんどん採用！"
              delay={1.0}
            />
          </div>
        </motion.div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 text-gray-900">新しい"楽しさ"に出会える。<br />年間イベント</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="4月"
              description="お花見・新歓スポーツ大会"
              delay={0.2}
              image="https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <EventCard
              title="5月"
              description="BBQ・アウトドア企画"
              delay={0.4}
              image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <EventCard
              title="6月"
              description="カラオケ大会・交流会"
              delay={0.6}
              image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <EventCard
              title="8月"
              description="夏合宿（ビーチ・花火）"
              delay={0.8}
              image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <EventCard
              title="10月"
              description="文化祭出店・打ち上げ"
              delay={1.0}
              image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <EventCard
              title="12月"
              description="クリスマスパーティー・年越し企画"
              delay={1.2}
              image="https://images.unsplash.com/photo-1543589077-47d81606c1bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
            <EventCard
              title="2月"
              description="冬合宿（スノボ・温泉）"
              delay={1.4}
              image="https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
          <p className="text-center text-gray-600 mt-8">
            🎉 その他、映画鑑賞・ボルダリング・遊園地企画なども！
          </p>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 text-gray-900">リアルな声、集めました｜参加者の声</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-16 text-gray-900">よくある質問｜不安もここで解消！</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">まずは、気軽に来てみて！｜参加方法はこちら</h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6 mb-12">
              <p className="text-base sm:text-lg font-bold text-gray-900">新入生勧誘のブースに参加</p>
              <p className="text-base sm:text-lg font-bold text-gray-900">運営の先輩に話しかけてみる</p>
              <p className="text-base sm:text-lg font-bold text-gray-900">公式LINEやInstagramからDMを送る</p>
            </div>
            <p className="text-base sm:text-lg text-gray-700 mb-8">
              💬 公式LINE・Instagramで随時情報発信中！
            </p>
            <p className="text-base sm:text-lg font-bold text-gray-900">
              📅 4月・5月は新歓イベント盛りだくさん！
            </p>
            <p className="text-gray-700">
              （お花見・BBQ・スポーツ大会など）
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg"></div>
                <span className="text-xl font-medium">AIサークル</span>
              </div>
              <p className="text-gray-400">© 2024 AIサークル</p>
            </div>
            <div className="flex space-x-8">
              <a 
                href="https://line.me/ti/p/@your-line-id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.064-.022.134-.032.2-.032.211 0 .391.09.51.25l2.444 3.317V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.63.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.158 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/your-instagram-id" 
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

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 relative overflow-hidden group"
    >
      <div className="flex flex-col items-center text-center relative z-10">
        <div className="mb-6 p-4 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 text-gray-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

function TestimonialCard({ name, department, year, text, delay }: TestimonialCardProps) {
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
          <p className="text-gray-700">{department} {year}</p>
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