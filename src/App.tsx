import React from 'react';
import { Play, Globe, Menu, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-black rounded-lg"></div>
            <span className="text-xl font-medium">manus</span>
          </motion.div>

          {/* Navigation */}
          <NavigationMenu.Root className="hidden md:flex items-center space-x-12">
            <NavigationMenu.Item>
              <NavigationMenu.Link className="text-gray-600 hover:text-black transition-colors">
                プロダクト
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link className="text-gray-600 hover:text-black transition-colors">
                使用例
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link className="text-gray-600 hover:text-black transition-colors">
                テーマ
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link className="text-gray-600 hover:text-black transition-colors">
                価格
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.Root>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center text-gray-600 hover:text-black transition-colors">
                <Globe className="w-5 h-5 mr-1" />
                <span>日本語</span>
              </DropdownMenu.Trigger>
            </DropdownMenu.Root>

            {/* Start Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              始める
            </motion.button>

            {/* Mobile Menu */}
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-serif mb-8"
          >
            Leave it to Manus
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-12 leading-relaxed"
          >
            Manusは、思考と行動を繋ぐ汎用AIエージェントです。単に考えるだけでなく、結果を提供します。
            Manusは、仕事や生活のさまざまなタスクに秀でており、あなたが休んでいる間にすべてを完了させます。
          </motion.p>

          {/* Video Thumbnail */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative aspect-video mb-12 rounded-2xl overflow-hidden bg-gray-100"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-black rounded-full flex items-center justify-center"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.02 }}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors"
          >
            Manus を試す
          </motion.button>
        </motion.div>
      </section>

      {/* Use Case Section */}
      <section className="py-24 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4"
        >
          <h2 className="text-3xl font-medium text-center mb-4">ユースケースギャラリー</h2>
          <p className="text-gray-600 text-center mb-16">
            ステップバイステップのリプレイを通じて、Manusが実世界のタスクをどのように処理するかを学びましょう。
          </p>

          {/* Use Case Cards */}
          <div className="space-y-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-2">ユースケース {index}</h3>
                    <p className="text-gray-600">
                      Manusがどのようにタスクを処理するかのステップバイステップの例です。
                    </p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;