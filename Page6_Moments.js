
Action: file_editor create /app/frontend/src/pages/Page6_Moments.js --file-text "import { motion } from 'framer-motion';

const Page6_Moments = ({ onNext }) => {
  const moments = [
    { emoji: '☕', title: 'Morning Coffee Together', color: 'from-amber-100 to-orange-200' },
    { emoji: '🌅', title: 'Watching Sunsets', color: 'from-orange-100 to-pink-200' },
    { emoji: '🎬', title: 'Movie Nights', color: 'from-purple-100 to-pink-200' },
    { emoji: '🍕', title: 'Late Night Food Runs', color: 'from-yellow-100 to-red-200' },
    { emoji: '🚗', title: 'Road Trip Adventures', color: 'from-blue-100 to-cyan-200' },
    { emoji: '🎵', title: 'Dancing in the Kitchen', color: 'from-pink-100 to-rose-200' },
    { emoji: '🌟', title: 'Stargazing Together', color: 'from-indigo-100 to-purple-200' },
    { emoji: '💤', title: 'Lazy Sunday Mornings', color: 'from-rose-100 to-pink-200' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=\"min-h-screen px-4 py-16\"
      data-testid=\"page-6\"
    >
      <motion.h1
        className=\"font-playfair text-5xl sm:text-6xl font-bold text-rose-900 text-center mb-4\"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        ✨ Our Favorite Moments ✨
      </motion.h1>

      <motion.p
        className=\"text-center font-nunito text-rose-700 text-xl mb-12\"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Every little moment with you becomes a cherished memory 💕
      </motion.p>

      <div className=\"max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12\">
        {moments.map((moment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            data-testid={`moment-${index}`}
          >
            <motion.div
              className={`bg-gradient-to-br ${moment.color} rounded-3xl p-6 shadow-lg border-4 border-white h-full flex flex-col items-center justify-center text-center cursor-pointer`}
              animate={{ 
                rotateY: [0, 10, 0, -10, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                delay: index * 0.2
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <motion.div
                className=\"text-7xl mb-4\"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: index * 0.1
                }}
              >
                {moment.emoji}
              </motion.div>
              
              <h3 className=\"font-nunito text-lg font-bold text-rose-900\">
                {moment.title}
              </h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className=\"text-center max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-4 border-rose-200 mb-8\"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <p className=\"font-nunito text-xl text-rose-900 leading-relaxed\">
          It's not just the big moments that matter, it's all these little everyday moments that make
          our love story so special. Thank you for making ordinary days extraordinary! 💖
        </p>
      </motion.div>

      <motion.button
        onClick={onNext}
        className=\"mx-auto flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg shadow-xl\"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid=\"next-button\"
      >
        Let's Play a Game 🎮
      </motion.button>
    </motion.div>
  );
};

export default Page6_Moments;
"
Observation: Create successful: /app/frontend/src/pages/Page6_Moments.js
