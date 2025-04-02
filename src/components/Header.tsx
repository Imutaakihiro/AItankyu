import { motion, AnimatePresence } from "framer-motion";
import logoAI from "../assets/logoAI.jpg";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center space-x-2"
        >
          <img
            src={logoAI}
            alt="AI探究会ロゴ"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-medium">AI探究会</span>
        </motion.div>

        {/* PC Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            className="text-gray-600 hover:text-black transition-colors"
          >
            サークル紹介
          </a>
          <a
            href="#features"
            className="text-gray-600 hover:text-black transition-colors"
          >
            特徴
          </a>
          <a
            href="#schedule"
            className="text-gray-600 hover:text-black transition-colors"
          >
            イベント
          </a>
          <a
            href="#faq"
            className="text-gray-600 hover:text-black transition-colors"
          >
            FAQ
          </a>
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            <a
              href="https://docs.google.com/forms/d/1cFeIUMvCSwXw9udi6DFEXim409TwzSn4Xoh9KkowJRs/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              入会はこちら！
            </a>
          </motion.button>
        </div>

        <button
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
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
                <a
                  href="https://docs.google.com/forms/d/1cFeIUMvCSwXw9udi6DFEXim409TwzSn4Xoh9KkowJRs/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  入会はこちら！
                </a>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
