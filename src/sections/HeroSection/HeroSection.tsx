import AIAnimationBackground from "./AIAnimationBackground";
import HeroContent from "./HeroContent";

const HeroSection: React.FC = () => (
  <section className="pt-32 pb-24 relative overflow-hidden">
    <AIAnimationBackground />
    <HeroContent />
  </section>
);

export default HeroSection;
