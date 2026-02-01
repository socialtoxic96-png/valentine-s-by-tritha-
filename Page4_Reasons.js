
Action: file_editor create /app/frontend/src/pages/Page4_Reasons.js --file-text "import { motion } from 'framer-motion';
import { useState } from 'react';

const Page4_Reasons = ({ onNext }) => {
  const [flippedCards, setFlippedCards] = useState([]);

  const reasons = [
    { emoji: '😊', front: 'Your Smile', back: 'Your smile lights up my entire world and makes everything better' },
    { emoji: '💫', front: 'Your Magic', back: 'You make every ordinary moment feel extraordinary and magical' },
    { emoji: '🌟', front: 'Your Kindness', back: 'Your warmth and kindness inspire me to be a better person every day' },
    { emoji: '🎁', front: 'Being Together', back: 'Every moment spent with you is the greatest gift of all' },
    { emoji: '💖', front: 'Understanding', back: 'You understand me like no one else ever has or will' },
    { emoji: '🎵', front: 'Your Laugh', back: 'Your laughter is my favorite sound in the entire universe' },
    { emoji: '✨', front: 'Your Support', back: 'You believe in me even when I doubt myself' },
    { emoji: '🌈', front: 'Your Energy', back: 'You bring color and joy into every single day' },
    { emoji: '🦋', front: 'The Butterflies', back: 'You still give me butterflies every time I see you' },
  ];

  const toggleCard = (index) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=\"min-h-screen px-4 py-16\"
      data-testid=\"page-4\"
    >
      <motion.h1
        className=\"font-playfair text-5xl sm:text-6xl font-bold text-rose-900 text-center mb-4\"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
      >
        💝 Reasons I Love You 💝
      </motion.h1>

      <motion.p
        className=\"text-center font-nunito text-rose-700 text-xl mb-12\"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Click each card to reveal why you're so special ✨
      </motion.p>

      <div className=\"max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12\">
        {reasons.map((reason, index) => {
          const isFlipped = flippedCards.includes(index);

          return (
            <motion.div
              key={index}
              className=\"relative h-64 cursor-pointer perspective-1000\"
              onClick={() => toggleCard(index)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              data-testid={`reason-card-${index}`}
            >
              <motion.div
                className=\"relative w-full h-full\"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front */}
                <div
                  className=\"absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-200 rounded-3xl p-6 shadow-xl border-4 border-rose-300 flex flex-col items-center justify-center backface-hidden\"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <motion.div
                    className=\"text-7xl mb-4\"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {reason.emoji}
                  </motion.div>
                  <h3 className=\"font-playfair text-2xl font-bold text-rose-900 text-center\">
                    {reason.front}
                  </h3>
                  <p className=\"font-nunito text-rose-600 text-sm mt-2\">Tap to reveal</p>
                </div>

                {/* Back */}
                <div
                  className=\"absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl p-6 shadow-xl border-4 border-rose-700 flex items-center justify-center backface-hidden\"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <p className=\"font-nunito text-white text-center text-lg leading-relaxed\">
                    {reason.back}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      <motion.button
        onClick={onNext}
        className=\"mx-auto flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg shadow-xl\"
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        data-testid=\"next-button\"
      >
        More Love Ahead 💕
      </motion.button>
    </motion.div>
  );
};

export default Page4_Reasons;
"
Observation: Create successful: /app/frontend/src/pages/Page4_Reasons.js
