Now let me create the remaining 6 pages:
Action: file_editor create /app/frontend/src/pages/Page5_PhotoGallery.js --file-text "import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Page5_PhotoGallery = ({ onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1660675865775-15b4a15d1a68?w=800',
      caption: '🌹 Every moment with you is precious',
      emoji: '💕'
    },
    {
      url: 'https://images.unsplash.com/photo-1692131775496-d32216823eee?w=800',
      caption: '💐 My forever love',
      emoji: '💖'
    },
    {
      url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800',
      caption: '🌸 Together is my favorite place',
      emoji: '💗'
    },
    {
      url: 'https://images.unsplash.com/photo-1487530903081-9e0e3c7b4f6b?w=800',
      caption: '🦋 You make my heart flutter',
      emoji: '💝'
    },
  ];

  const nextPhoto = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=\"min-h-screen px-4 py-16 flex flex-col items-center justify-center\"
      data-testid=\"page-5\"
    >
      <motion.h1
        className=\"font-playfair text-5xl sm:text-6xl font-bold text-rose-900 text-center mb-12\"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        📸 Our Beautiful Memories 💕
      </motion.h1>

      <div className=\"relative max-w-4xl w-full\">
        {/* 3D Gallery Container */}
        <div className=\"relative h-[500px] flex items-center justify-center perspective-2000\">
          <AnimatePresence mode=\"wait\">
            <motion.div
              key={currentIndex}
              className=\"relative\"
              initial={{ rotateY: 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Polaroid frame with 3D effect */}
              <motion.div
                className=\"bg-white p-6 shadow-2xl\"
                animate={{ 
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ scale: 1.05, z: 50 }}
              >
                <img
                  src={photos[currentIndex].url}
                  alt={photos[currentIndex].caption}
                  className=\"w-full h-80 object-cover rounded-lg\"
                />
                
                <div className=\"mt-6 text-center\">
                  <motion.div
                    className=\"text-5xl mb-2\"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {photos[currentIndex].emoji}
                  </motion.div>
                  <p className=\"font-nunito text-rose-900 text-xl font-semibold\">
                    {photos[currentIndex].caption}
                  </p>
                </div>
              </motion.div>

              {/* Floating heart decorations */}
              <motion.div
                className=\"absolute -top-8 -right-8 text-6xl\"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ❤️
              </motion.div>

              <motion.div
                className=\"absolute -bottom-8 -left-8 text-6xl\"
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💖
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <motion.button
          onClick={prevPhoto}
          className=\"absolute left-4 top-1/2 -translate-y-1/2 bg-rose-500 text-white p-4 rounded-full shadow-xl\"
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          data-testid=\"prev-photo\"
        >
          <ChevronLeft size={32} />
        </motion.button>

        <motion.button
          onClick={nextPhoto}
          className=\"absolute right-4 top-1/2 -translate-y-1/2 bg-rose-500 text-white p-4 rounded-full shadow-xl\"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          data-testid=\"next-photo\"
        >
          <ChevronRight size={32} />
        </motion.button>

        {/* Photo indicator dots */}
        <div className=\"flex justify-center gap-3 mt-8\">
          {photos.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? 'bg-rose-600' : 'bg-rose-300'
              }`}
              whileHover={{ scale: 1.5 }}
              animate={currentIndex === index ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ))}
        </div>
      </div>

      <motion.button
        onClick={onNext}
        className=\"mt-12 flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg shadow-xl\"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        data-testid=\"next-button\"
      >
        Continue Journey 💫
      </motion.button>
    </motion.div>
  );
};

export default Page5_PhotoGallery;
"
Observation: Create successful: /app/frontend/src/pages/Page5_PhotoGallery.js
