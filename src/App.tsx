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
import TestimonialSection from "./sections/TestimonialsSection/TestimonialSection";
import FAQSection from "./sections/FAQSection/FAQSection";
import JoinSection from "./sections/JoinSection/JoinSection";

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
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Join Section */}
      <JoinSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
