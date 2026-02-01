
Action: file_editor create /app/frontend/src/pages/Page2_LoveLetter.js --file-text "import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Page2_LoveLetter = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100 }}
      className=\"flex items-center justify-center min-h-screen px-4 py-12\"
      data-testid=\"page-2\"
    >
      <div className=\"max-w-3xl\">
        <motion.div
          className=\"relative\"
          initial={{ rotateY: -90 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.div
            className=\"bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-8 border-rose-100\"
            whileHover={{ scale: 1.02 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.h1
              className=\"font-playfair text-4xl sm:text-5xl font-bold text-rose-900 mb-8 text-center\"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💖 To My Beautiful Love 💖
            </motion.h1>

            <motion.div
              className=\"space-y-6 text-lg text-rose-900 font-nunito leading-relaxed\"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className=\"text-xl\">
                From the moment I met you, my world transformed into something magical ✨
              </p>
              
              <p>
                Every moment with you feels like a beautiful dream. You are my sunshine ☀️ on cloudy days,
                my anchor ⚓ in stormy seas, and my greatest adventure 🗺️.
              </p>

              <p>
                Your smile lights up my entire universe 🌟, and your laugh is the most beautiful melody 🎵
                I've ever heard. Being with you makes me believe in magic 🪄.
              </p>

              <p className=\"text-center text-2xl font-bold pt-4\">
                I fall more in love with you every single day 💕
              </p>

              <div className=\"flex justify-center gap-3 pt-6\">
                {['❤️', '💕', '💖', '💗', '💝'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    className=\"text-3xl\"
                    animate={{ 
                      scale: [1, 1.3, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 1, 
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 3D floating hearts decoration */}
          <motion.div
            className=\"absolute -top-8 -right-8 text-6xl\"
            animate={{ 
              rotateY: [0, 360],
              y: [0, -20, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            💝
          </motion.div>

          <motion.div
            className=\"absolute -bottom-8 -left-8 text-6xl\"
            animate={{ 
              rotateY: [360, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            🌹
          </motion.div>
        </motion.div>

        <motion.button
          onClick={onNext}
          className=\"mt-12 mx-auto flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg shadow-xl hover:shadow-2xl\"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          data-testid=\"next-button\"
        >
          Continue <ChevronDown className=\"animate-bounce\" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Page2_LoveLetter;
"
Observation: Create successful: /app/frontend/src/pages/Page2_LoveLetter.js
