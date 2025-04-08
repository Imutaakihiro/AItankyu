"use client";

import { motion } from "framer-motion";
import EventCard from "../../components/EventCard";

export const EventsSection = () => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4" id="events-section">
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
  );
};
