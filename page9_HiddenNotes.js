
Action: file_editor create /app/frontend/src/pages/Page9_HiddenNotes.js --file-text "import { motion } from 'framer-motion';
import { useState } from 'react';
import { Gift, Lock, Unlock } from 'lucide-react';

const Page9_HiddenNotes = ({ onNext }) => {
  const [revealedNotes, setRevealedNotes] = useState([]);

  const notes = [
    { 
      emoji: '💖', 
      locked: 'Secret Message #1',
      unlocked: 'You make my heart skip a beat every single time I see you',
      position: 'top-20 left-20'
    },
    { 
      emoji: '🌟', 
      locked: 'Hidden Treasure #2',
      unlocked: 'Your presence lights up even my darkest days',
      position: 'top-40 right-32'
    },
    { 
      emoji: '💫', 
      locked: 'Love Note #3',
      unlocked: 'I fall in love with you more every single day',
      position: 'bottom-40 left-40'
    },
    { 
      emoji: '✨', 
      locked: 'Mystery Box #4',
      unlocked: 'You are my favorite notification, my favorite hello, my favorite everything',
      position: 'top-60 left-1/2'
    },
    { 
      emoji: '🎁', 
      locked: 'Surprise #5',
      unlocked: 'Thank you for being the most amazing person in my life',
      position: 'bottom-20 right-20'
    },
  ];

  const toggleNote = (index) => {
    if (revealedNotes.includes(index)) {
      setRevealedNotes(revealedNotes.filter(i => i !== index));
    } else {
      setRevealedNotes([...revealedNotes, index]);
    }
  };

  const allRevealed = revealedNotes.length === notes.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=\"min-h-screen px-4 py-16 relative\"
      data-testid=\"page-9\"
    >
      <motion.h1
        className=\"font-playfair text-5xl sm:text-6xl font-bold text-rose-900 text-center mb-4 relative z-10\"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🔐 Hidden Love Notes 💌
      </motion.h1>

      <motion.p
        className=\"text-center font-nunito text-rose-700 text-xl mb-12 relative z-10\"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Click on each treasure to reveal a secret message! 💕
      </motion.p>

      {/* Interactive treasure hunt area */}
      <div className=\"max-w-6xl mx-auto h-[500px] relative\">
        {notes.map((note, index) => {
          const isRevealed = revealedNotes.includes(index);

          return (
            <motion.div
              key={index}
              className={`absolute ${note.position} cursor-pointer`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, type: 'spring' }}
              onClick={() => toggleNote(index)}
              data-testid={`hidden-note-${index}`}
            >
              <motion.div
                className={`relative ${isRevealed ? 'w-80' : 'w-32'} transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={!isRevealed ? { 
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                } : {}}
                transition={{ duration: 2, repeat: !isRevealed ? Infinity : 0 }}
              >
                {!isRevealed ? (
                  <div className=\"bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl p-6 shadow-xl flex flex-col items-center border-4 border-rose-600\">
                    <motion.div
                      className=\"text-5xl mb-2\"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {note.emoji}
                    </motion.div>
                    <Lock className=\"text-white mb-2\" size={24} />
                    <p className=\"text-white font-nunito font-semibold text-sm text-center\">
                      {note.locked}
                    </p>
                  </div>
                ) : (
                  <motion.div
                    initial={{ rotateY: -90 }}
                    animate={{ rotateY: 0 }}
                    className=\"bg-white rounded-2xl p-6 shadow-2xl border-4 border-rose-300\"
                  >
                    <div className=\"flex items-center gap-2 mb-3\">
                      <motion.div
                        className=\"text-3xl\"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        {note.emoji}
                      </motion.div>
                      <Unlock className=\"text-green-500\" size={24} />
                    </div>
                    <p className=\"font-nunito text-rose-900 font-semibold\">
                      {note.unlocked}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress indicator */}
      <motion.div
        className=\"text-center mt-12 relative z-10\"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <p className=\"font-nunito text-rose-700 text-lg mb-4\">
          Discovered: {revealedNotes.length} / {notes.length} 🎯
        </p>

        {allRevealed && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className=\"max-w-2xl mx-auto bg-gradient-to-br from-rose-100 to-pink-200 rounded-3xl p-8 shadow-xl border-4 border-rose-300 mb-8\"
          >
            <motion.div
              className=\"text-6xl mb-4\"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎊
            </motion.div>
            <h3 className=\"font-playfair text-3xl font-bold text-rose-900 mb-3\">
              You Found Them All!
            </h3>
            <p className=\"font-nunito text-xl text-rose-800\">
              Just like how you've found your way into my heart 💖
            </p>
          </motion.div>
        )}

        <motion.button
          onClick={onNext}
          className=\"bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg shadow-xl\"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          data-testid=\"next-button\"
        >
          Grand Finale 🎆
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Page9_HiddenNotes;
"
Observation: Create successful: /app/frontend/src/pages/Page9_HiddenNotes.js
