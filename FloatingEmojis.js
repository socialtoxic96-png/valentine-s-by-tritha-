
Action: file_editor create /app/frontend/src/components/FloatingEmojis.js --file-text "import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingEmojis = ({ emojis = ['❤️', '💕', '💖', '💗', '💝', '💞', '🌹', '✨', '⭐', '💫'] }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 12,
      size: 20 + Math.random() * 30,
      opacity: 0.2 + Math.random() * 0.4,
    }));
    setParticles(particleArray);
  }, [emojis]);

  return (
    <div className=\"fixed inset-0 pointer-events-none overflow-hidden z-0\">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className=\"absolute text-2xl\"
          style={{
            left: `${particle.left}%`,
            bottom: '-10%',
            fontSize: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, (Math.random() - 0.5) * 150],
            rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {particle.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingEmojis;
"
Observation: Create successful: /app/frontend/src/components/FloatingEmojis.js
