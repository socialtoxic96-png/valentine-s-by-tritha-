
Action: file_editor create /app/frontend/src/pages/Page1_Envelope.js --file-text "import { motion } from 'framer-motion';
import Envelope from '@/components/Envelope';

const Page1_Envelope = ({ onNext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      className=\"flex items-center justify-center min-h-screen\"
      data-testid=\"page-1\"
    >
      <div className=\"text-center space-y-8\">
        <motion.h1
          className=\"font-playfair text-5xl sm:text-6xl font-bold text-rose-900 mb-12\"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          💌 You've Got Mail 💌
        </motion.h1>
        <Envelope onOpen={onNext} />
      </div>
    </motion.div>
  );
};

export default Page1_Envelope;
"
Observation: Create successful: /app/frontend/src/pages/Page1_Envelope.js
