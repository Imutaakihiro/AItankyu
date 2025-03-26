import React from 'react';
import { Calendar, Users, Trophy, Heart, MapPin, Clock, Wallet, Camera, Music, Gamepad2, Bot, Sparkles, Code } from 'lucide-react';

interface ActivityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

interface SeasonCardProps {
  title: string;
  months: string;
  events: string[];
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-gray-900/50 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="flex justify-center mb-6">
            <Bot className="w-20 h-20 text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">AI探究会</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">「AIを使って生まれた時間を全力で楽しもう！」</p>
          <button className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
            入会する
          </button>
        </div>
      </header>

      {/* About Section with Image */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.2'
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">活動内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ActivityCard
              icon={<Trophy className="w-8 h-8" />}
              title="スポーツイベント"
              description="運動会、ボウリング大会など、体を動かして楽しむイベントを定期的に開催"
            />
            <ActivityCard
              icon={<Camera className="w-8 h-8" />}
              title="季節イベント"
              description="お花見、BBQ、クリスマスパーティーなど、季節に合わせた楽しいイベント"
            />
            <ActivityCard
              icon={<Users className="w-8 h-8" />}
              title="交流会"
              description="カラオケ大会、ゲーム大会など、メンバー同士の絆を深める機会"
            />
          </div>
        </div>
      </section>

      {/* Info Section with Image */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.1'
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">基本情報</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InfoCard icon={<Calendar />} title="設立予定" text="2025年4月" />
            <InfoCard icon={<MapPin />} title="活動場所" text="大学内施設" />
            <InfoCard icon={<Clock />} title="活動頻度" text="月2回" />
            <InfoCard icon={<Wallet />} title="部費" text="年1,500円" />
          </div>
        </div>
      </section>

      {/* Schedule Section with Image */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.1'
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">年間スケジュール</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SeasonCard
              title="春学期"
              months="4月〜7月"
              events={["お花見", "BBQ", "ミニ運動会"]}
            />
            <SeasonCard
              title="夏休み"
              months="8月〜9月"
              events={["夏合宿", "ビーチスポーツ", "花火大会"]}
            />
            <SeasonCard
              title="秋学期"
              months="10月〜1月"
              events={["大学祭", "スポーツ大会", "クリスマス会"]}
            />
            <SeasonCard
              title="春休み"
              months="2月〜3月"
              events={["冬合宿", "卒業生送別会", "新年度準備"]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Contact Us</h3>
            <p className="mb-4 text-gray-400">お問い合わせはこちらから</p>
            <button className="bg-white text-black hover:bg-gray-200 font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105">
              お問い合わせ
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ActivityCard({ icon, title, description }: ActivityCardProps) {
  return (
    <div className="bg-black/60 p-8 rounded-xl border border-gray-800 backdrop-blur-sm hover:bg-black/80 transition duration-300 text-white">
      <div className="text-white mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function InfoCard({ icon, title, text }: InfoCardProps) {
  return (
    <div className="bg-black/60 p-6 rounded-xl border border-gray-800 backdrop-blur-sm text-center text-white">
      <div className="text-white mb-4 flex justify-center">{icon}</div>
      <h3 className="font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{text}</p>
    </div>
  );
}

function SeasonCard({ title, months, events }: SeasonCardProps) {
  return (
    <div className="bg-black/60 p-6 rounded-xl border border-gray-800 backdrop-blur-sm text-white">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{months}</p>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            {event}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;