import React from "react";

const AboutContent: React.FC = () => {
  return (
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
          <span className="font-bold text-gray-900">"人と人とのつながり"</span>
          。<br className="hidden sm:block" />
          スポーツ、季節イベント、文化活動まで、ジャンルを超えたリアルな体験を通じて、
          <br className="hidden sm:block" />
          <span className="font-bold text-gray-900">
            大学生活をもっと楽しく、もっと自由に。
          </span>
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
