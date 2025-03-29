import React from 'react';
import { Calendar, Users, Trophy, Heart, MapPin, Clock, Wallet, Bot, Instagram, Twitter, MessageCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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

          <button className="md:hidden">
            <Bot className="w-6 h-6" />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-gray-900"
            >
              AIで自由になった時間、<br />最高の思い出にしよう。
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-12"
            >
              ＼大学生活、もっと楽しくなる場所がここにある／
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
              >
                イベントに参加してみる
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium border-2 border-black hover:bg-gray-50 transition-colors"
              >
                まずは説明会へ
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
          <h2 className="text-3xl font-bold text-center mb-8">どんなサークル？｜AI時代の、リアルな青春を。</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              このサークルは、<br />
              <span className="font-bold">「AIを使って生まれた時間を全力で楽しもう！」</span> をコンセプトに誕生しました。
            </p>
            <p className="text-lg text-gray-600">
              AIの力で効率化された今、私たちが大事にしたいのは、<span className="font-bold">"人と人とのつながり"</span>。<br />
              スポーツ、季節イベント、文化活動まで、ジャンルを超えたリアルな体験を通じて、<br />
              <span className="font-bold">大学生活をもっと楽しく、もっと自由に。</span>
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
          <h2 className="text-3xl font-bold text-center mb-16">このサークル、ここが違う！｜5つのポイント</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="w-8 h-8" />}
              title="多ジャンル"
              description="スポーツも季節行事も文化系も！"
              delay={0.2}
            />
            <FeatureCard
              icon={<Wallet className="w-8 h-8" />}
              title="低コスト"
              description="年会費たったの1,500円"
              delay={0.4}
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8" />}
              title="自由参加"
              description="月2回ペース、掛け持ちOK"
              delay={0.6}
            />
            <FeatureCard
              icon={<Trophy className="w-8 h-8" />}
              title="全学部対象"
              description="学年・学部・大学関係なし"
              delay={0.8}
            />
            <FeatureCard
              icon={<Heart className="w-8 h-8" />}
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
          <h2 className="text-3xl font-bold text-center mb-16">毎月、新しい"楽しさ"に出会える。｜年間イベント</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="4月"
              description="お花見・新歓スポーツ大会"
              delay={0.2}
            />
            <EventCard
              title="5月"
              description="BBQ・フォトラリー"
              delay={0.4}
            />
            <EventCard
              title="6月"
              description="ミニ運動会・カラオケ大会"
              delay={0.6}
            />
            <EventCard
              title="8月"
              description="夏合宿（ビーチ・花火）"
              delay={0.8}
            />
            <EventCard
              title="10月"
              description="文化祭出店・打ち上げ"
              delay={1.0}
            />
            <EventCard
              title="12月"
              description="クリスマスパーティー・年越し企画"
              delay={1.2}
            />
            <EventCard
              title="2月"
              description="冬合宿（スノボ・温泉）"
              delay={1.4}
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
          <h2 className="text-3xl font-bold text-center mb-16">リアルな声、集めました｜参加者の声</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              name="Yさん"
              department="経済学部"
              year="2年"
              text="イベントが多くて、すぐに友達ができました。初参加のときから、安心して入れました！"
              delay={0.2}
            />
            <TestimonialCard
              name="Kさん"
              department="理工学部"
              year="1年"
              text="サークルに入ったおかげで、大学が楽しみになりました。「自分でもイベント作っていいよ！」っていう自由さも好きです。"
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
          <h2 className="text-3xl font-bold text-center mb-16">よくある質問｜不安もここで解消！</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <FAQCard
              question="途中入部できますか？"
              answer="いつでも大歓迎です！説明会 or DMでご連絡ください◎"
              delay={0.2}
            />
            <FAQCard
              question="忙しくても大丈夫？"
              answer="月2回ペースなので、他サークルやバイトとの両立OK！"
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
          <h2 className="text-3xl font-bold text-center mb-8">まずは、気軽に来てみて！｜参加方法はこちら</h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6 mb-12">
              <p className="text-lg font-bold">1. 説明会に参加</p>
              <p className="text-lg font-bold">2. オープンイベントに遊びに来る</p>
              <p className="text-lg font-bold">3. SNSからDMを送る</p>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              💬 LINEオープンチャット・Instagram・X（旧Twitter）で随時情報発信中！
            </p>
            <p className="text-lg font-bold text-gray-900">
              📅 4月・5月は新歓イベント盛りだくさん！
            </p>
            <p className="text-gray-600">
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
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="w-6 h-6" />
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
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function EventCard({ title, description, delay }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
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
          <p className="text-gray-600">{department} {year}</p>
        </div>
      </div>
      <p className="text-gray-600">{text}</p>
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
      <p className="text-gray-600">{answer}</p>
    </motion.div>
  );
}

export default App;