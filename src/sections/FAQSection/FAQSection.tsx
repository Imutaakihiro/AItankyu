import { motion } from "framer-motion";
import FAQCard from "../../components/FAQCard";

const FAQSection: React.FC = () => {
  return (
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
            question="Q：いつでも入部できますか？"
            answer="A：掛け持ちOK！無理なく自分のペースで参加できるので、他サークルとの両立も問題なし✨"
            delay={0.2}
          />
          <FAQCard
            question="Q：他のサークルと掛け持ちできますか？"
            answer="他サークルやバイトとの両立OK！,勉強会やイベントは絶えず開催します！参加できるときに参加しましょう！"
            delay={0.4}
          />
          <FAQCard
            question="Q：サークルの雰囲気は？"
            answer="A：明るくて和やかです！学部・学年を超えたフレンドリーな雰囲気で、初めてでもすぐに馴染めちゃいます🍒"
            delay={0.6}
          />
          <FAQCard
            question="Q：サークルについて質問したいです！"
            answer="A：公式LINEでお待ちしております！運営メンバーがランダムに答えていきます💭"
            delay={0.8}
          />
          <FAQCard
            question="Q：AI勉強に興味があるんですけど、初心者でも大丈夫ですか？"
            answer="A：もちろん大丈夫です！初心者向けの勉強会も定期的に開催しているので、AIが初めての人でも安心して参加できます✍"
            delay={1.0}
          />
          <FAQCard
            question="Q：活動頻度やイベント詳細は？"
            answer="A：月に4回程度開催予定です！もちろん自由参加！スケジュールはまだ未定ですので公式LINEをフォローしてお待ちください🍀"
            delay={1.2}
          />
          <FAQCard
            question="Q：入会手続きはどうすればいいですか？"
            answer="A：公式LINEから簡単に登録できます！新歓イベントから参加してみたい方も大歓迎です💓"
            delay={1.4}
          />
          <FAQCard
            question="Q：イベント企画をやってみたいけど不安です…。"
            answer="A：大丈夫！運営メンバーがサポートするので、一緒に楽しいイベントを作りましょう！やりたいことがあれば気軽に提案してください💡"
            delay={1.6}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
