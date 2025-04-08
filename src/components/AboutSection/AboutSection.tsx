import React from "react";
import BackgroundEffects from "./BackgroundEffects";
import AboutContent from "./AboutContent";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <BackgroundEffects />
      <div className="relative z-10">
        <AboutContent />
      </div>
    </section>
  );
};

export default AboutSection;
