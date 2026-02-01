
Action: file_editor create /app/frontend/src/components/PageIndicator.js --file-text "import { motion } from 'framer-motion';

const PageIndicator = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className=\"fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3\" data-testid=\"page-indicator\">
      {Array.from({ length: totalPages }, (_, i) => (
        <motion.button
          key={i}
          onClick={() => onPageChange(i)}
          className={`w-3 h-3 rounded-full transition-all ${
            currentPage === i ? 'bg-rose-600 scale-125' : 'bg-rose-300 hover:bg-rose-400'
          }`}
          whileHover={{ scale: 1.5 }}
          whileTap={{ scale: 0.9 }}
          data-testid={`page-dot-${i}`}
        />
      ))}
    </div>
  );
};

export default PageIndicator;
"
Observation: Create successful: /app/frontend/src/components/PageIndicator.js
