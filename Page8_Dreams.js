
Action: file_editor create /app/frontend/src/pages/Page8_Dreams.js --file-text "import { motion } from 'framer-motion';

const Page8_Dreams = ({ onNext }) => {
  const dreams = [
    { emoji: '🏠', title: 'Our Home', desc: 'A cozy place filled with love and laughter' },
    { emoji: '✈️', title: 'Travel the World', desc: 'Creating memories in every corner of the globe' },
    { emoji: '👨‍👩‍👧‍👦', title: 'Our Family', desc: 'Building a beautiful life together' },
    { emoji: '🌅', title: 'Growing Old Together', desc: 'Still holding hands at 80' },
    { emoji: '🎨', title: 'Shared Hobbies', desc: 'Learning and growing together always' },
    { emoji: '🌟', title: 'Support Each Other', desc: 'Being there through thick and thin' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=\"min-h-screen px-4 py-16\"
      data-testid=\"page-8\"
    >
      <motion.h1
        className=\"font-playfair text-5xl sm:text-6xl font-bold text-rose-900 text-center mb-4\"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🌈 Our Future Together 💫
      </motion.h1>

      <motion.p
        className=\"text-center font-nunito text-rose-700 text-xl mb-12 max-w-2xl mx-auto\"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I dream of all the wonderful adventures we'll have together 💕
      </motion.p>

      <div className=\"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12\">
        {dreams.map((dream, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, type: 'spring' }}
            whileHover={{ 
              scale: 1.1,
              rotateY: 10,
              rotateX: 10,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
            data-testid={`dream-${index}`}
          >
            <motion.div
              className=\"bg-gradient-to-br from-white to-rose-50 rounded-3xl p-8 shadow-xl border-4 border-rose-200 h-full flex flex-col items-center text-center\"
              animate={{ 
                boxShadow: [
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  '0 25px 50px -12px rgba(244, 63, 94, 0.3)',
                  '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
            >
              <motion.div
                className=\"text-7xl mb-4\"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                {dream.emoji}
              </motion.div>

              <h3 className=\"font-playfair text-2xl font-bold text-rose-900 mb-3\">
                {dream.title}
              </h3>

              <p className=\"font-nunito text-rose-700 text-lg\">
                {dream.desc}
              </p>

              <motion.div
                className=\"mt-4 text-3xl\"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className=\"max-w-3xl mx-auto bg-gradient-to-br from-rose-100 to-pink-200 rounded-3xl p-10 shadow-2xl border-4 border-rose-300 mb-8\"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className=\"text-center\"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <h2 className=\"font-playfair text-3xl font-bold text-rose-900 mb-4\">
            💍 Forever Starts with You 💍
          </h2>
          <p className=\"font-nunito text-xl text-rose-800 leading-relaxed\">
            Every dream becomes more beautiful when I imagine you by my side. 
            Together, we can make all our dreams come true! 💕
          </p>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={onNext}
        className=\"mx-auto flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg shadow-xl\"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid=\"next-button\"
      >
        Discover Hidden Messages 💌
      </motion.button>
    </motion.div>
  );
};

export default Page8_Dreams;
"
Observation: Create successful: /app/frontend/src/pages/Page8_Dreams.js
