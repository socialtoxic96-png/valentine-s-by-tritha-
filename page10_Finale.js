
Action: file_editor create /app/frontend/src/pages/Page10_Finale.js --file-text "import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Heart } from 'lucide-react';

const Page10_Finale = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowFireworks(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Fireworks particles
  const fireworks = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 60 + 20,
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className=\"min-h-screen px-4 py-16 flex flex-col items-center justify-center relative overflow-hidden\"
      data-testid=\"page-10\"
    >
      {/* Fireworks effect */}
      {showFireworks && (
        <div className=\"fixed inset-0 pointer-events-none\">
          {fireworks.map((fw) => (
            <motion.div
              key={fw.id}
              className=\"absolute\"
              style={{ 
                left: `${fw.x}%`, 
                top: `${fw.y}%`,
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 2, 3],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: fw.delay,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <div className=\"relative\">
                {Array.from({ length: 8 }, (_, i) => (
                  <motion.div
                    key={i}
                    className=\"absolute w-2 h-2 bg-rose-500 rounded-full\"
                    animate={{
                      x: Math.cos((i * Math.PI) / 4) * 50,
                      y: Math.sin((i * Math.PI) / 4) * 50,
                    }}
                    transition={{ duration: 1 }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Main content */}
      <motion.div
        className=\"relative z-10 text-center max-w-4xl\"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 1 }}
      >
        {/* Floating hearts around title */}
        <div className=\"relative inline-block mb-8\">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className=\"absolute text-4xl\"
              style={{
                left: `${Math.cos((i * Math.PI) / 4) * 120}px`,
                top: `${Math.sin((i * Math.PI) / 4) * 120}px`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                rotate: 360,
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              💖
            </motion.div>
          ))}

          <motion.h1
            className=\"font-playfair text-6xl sm:text-7xl lg:text-8xl font-bold text-rose-900 relative\"
            animate={{
              textShadow: [
                '0 0 20px rgba(244, 63, 94, 0.5)',
                '0 0 40px rgba(244, 63, 94, 0.8)',
                '0 0 20px rgba(244, 63, 94, 0.5)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Happy Valentine's Day!
          </motion.h1>
        </div>

        {/* Sparkles decoration */}
        <motion.div
          className=\"flex justify-center gap-4 mb-8\"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              <Sparkles className=\"text-amber-400\" size={40} />
            </motion.div>
          ))}
        </motion.div>

        {/* Main message card */}
        <motion.div
          className=\"bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-8 border-rose-200 mb-8\"
          initial={{ rotateY: -90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <h2 className=\"font-playfair text-4xl font-bold text-rose-900 mb-6\">
              💝 You Are My Everything 💝
            </h2>
          </motion.div>

          <div className=\"space-y-6 font-nunito text-xl text-rose-800 leading-relaxed\">
            <p>
              Thank you for being the most amazing, beautiful, caring, and wonderful person in my life. ✨
            </p>

            <p>
              Every day with you is a gift, and I'm grateful for every moment we share together. 💕
            </p>

            <p>
              You make my world brighter, my days happier, and my heart fuller. 🌟
            </p>

            <p className=\"text-2xl font-bold text-rose-900 pt-4\">
              I love you more than words can express! ❤️
            </p>
          </div>

          {/* Animated hearts */}
          <div className=\"flex justify-center gap-4 mt-8\">
            {['❤️', '💕', '💖', '💗', '💝', '💞', '💓'].map((heart, i) => (
              <motion.span
                key={i}
                className=\"text-4xl\"
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.15,
                  repeat: Infinity,
                }}
              >
                {heart}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Final emoji celebration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className=\"text-8xl\"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className=\"inline-block\"
          >
            💑
          </motion.span>
          {' '}
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className=\"inline-block\"
          >
            💖
          </motion.span>
          {' '}
          <motion.span
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className=\"inline-block\"
          >
            💑
          </motion.span>
        </motion.div>

        <motion.p
          className=\"font-nunito text-rose-700 text-2xl mt-8\"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Forever yours 💕
        </motion.p>
      </motion.div>

      {/* Floating emojis in background */}
      <div className=\"fixed inset-0 pointer-events-none\">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className=\"absolute text-4xl\"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-10%',
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [(Math.random() - 0.5) * 100],
              rotate: [0, 360],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          >
            {['💖', '💕', '💗', '💝', '💞', '🌹', '✨'][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Page10_Finale;
"
Observation: Create successful: /app/frontend/src/pages/Page10_Finale.js
