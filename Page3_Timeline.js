
Action: file_editor create /app/frontend/src/pages/Page3_Timeline.js --file-text "import { motion } from 'framer-motion';
import { Calendar, Heart, Star, Sparkles } from 'lucide-react';

const Page3_Timeline = ({ onNext }) => {
  const timeline = [
    { date: 'First Day', emoji: '👋', icon: Star, title: 'We Met', desc: 'The day that changed everything' },
    { date: 'First Date', emoji: '🥰', icon: Heart, title: 'Falling for You', desc: 'I knew you were special' },
    { date: 'First Kiss', emoji: '💋', icon: Sparkles, title: 'Pure Magic', desc: 'Time stood still' },
    { date: 'Together', emoji: '💑', icon: Heart, title: 'Official', desc: 'Best decision ever' },
    { date: 'Today', emoji: '🎉', icon: Sparkles, title: 'Still Falling', desc: 'More in love than ever' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, x: -100 }}
      className=\"min-h-screen px-4 py-16\"
      data-testid=\"page-3\"
    >
      <motion.h1
        className=\"font-playfair text-5xl sm:text-6xl font-bold text-rose-900 text-center mb-16\"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📅 Our Love Story Timeline 💕
      </motion.h1>

      <div className=\"max-w-4xl mx-auto relative\">
        {/* Timeline line */}
        <div className=\"absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-rose-300 via-pink-400 to-rose-500 hidden md:block\" />

        <div className=\"space-y-12\">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                data-testid={`timeline-item-${index}`}
              >
                {/* Content card */}
                <motion.div
                  className={`flex-1 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} text-center md:text-inherit`}
                  whileHover={{ scale: 1.05 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    className=\"bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-4 border-rose-200 inline-block\"
                    animate={{ rotateY: [0, 5, 0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className=\"flex items-center gap-3 mb-2 justify-center md:justify-start\">
                      <Calendar className=\"text-rose-600\" size={20} />
                      <span className=\"font-nunito font-semibold text-rose-700\">{item.date}</span>
                    </div>
                    
                    <div className=\"text-5xl my-3\">{item.emoji}</div>
                    
                    <h3 className=\"font-playfair text-2xl font-bold text-rose-900 mb-2\">
                      {item.title}
                    </h3>
                    <p className=\"font-nunito text-rose-700\">{item.desc}</p>
                  </motion.div>
                </motion.div>

                {/* Center icon */}
                <motion.div
                  className=\"absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg hidden md:flex\"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 3, repeat: Infinity, ease: 'linear' },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Icon className=\"text-white\" size={32} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <motion.button
        onClick={onNext}
        className=\"mt-16 mx-auto flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg shadow-xl\"
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        data-testid=\"next-button\"
      >
        Next Chapter 💕
      </motion.button>
    </motion.div>
  );
};

export default Page3_Timeline;
"
Observation: Create successful: /app/frontend/src/pages/Page3_Timeline.js
