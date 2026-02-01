
Action: file_editor create /app/frontend/src/pages/Page7_Quiz.js --file-text "import { motion } from 'framer-motion';
import { useState } from 'react';

const Page7_Quiz = ({ onNext }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const questions = [
    {
      question: \"What's my favorite thing about you?\",
      options: ['Your smile 😊', 'Your kindness 💖', 'Your humor 😄', 'Everything! ✨'],
      correct: 3,
      emoji: '💭'
    },
    {
      question: \"What do I love doing with you the most?\",
      options: ['Talking for hours 💬', 'Adventures together 🗺️', 'Just being close 🤗', 'All of the above 💕'],
      correct: 3,
      emoji: '💫'
    },
    {
      question: \"How much do I love you?\",
      options: ['A lot 💖', 'So much 💕', 'More than words 💗', 'To infinity! 🌌'],
      correct: 3,
      emoji: '❤️'
    },
  ];

  const handleAnswer = (index) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    }
  };

  const isQuizComplete = answered && currentQuestion === questions.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=\"min-h-screen px-4 py-16 flex flex-col items-center justify-center\"
      data-testid=\"page-7\"
    >
      <motion.h1
        className=\"font-playfair text-5xl sm:text-6xl font-bold text-rose-900 text-center mb-12\"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        💖 Love Quiz 💖
      </motion.h1>

      <div className=\"max-w-2xl w-full\">
        {!isQuizComplete ? (
          <motion.div
            key={currentQuestion}
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            className=\"bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-rose-200\"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className=\"text-center mb-8\">
              <motion.div
                className=\"text-7xl mb-4\"
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {questions[currentQuestion].emoji}
              </motion.div>
              
              <p className=\"font-nunito text-rose-600 mb-2\">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              
              <h2 className=\"font-playfair text-2xl font-bold text-rose-900\">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <div className=\"space-y-4\">
              {questions[currentQuestion].options.map((option, index) => {
                const isCorrect = index === questions[currentQuestion].correct;
                const isSelected = selectedAnswer === index;
                
                let bgColor = 'bg-rose-50 hover:bg-rose-100';
                if (answered) {
                  if (isSelected && isCorrect) bgColor = 'bg-green-200';
                  else if (isSelected && !isCorrect) bgColor = 'bg-red-200';
                  else if (isCorrect) bgColor = 'bg-green-100';
                }

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full p-4 rounded-2xl font-nunito text-lg font-semibold text-rose-900 border-2 border-rose-300 ${bgColor} transition-colors`}
                    whileHover={!answered ? { scale: 1.05, x: 10 } : {}}
                    whileTap={!answered ? { scale: 0.95 } : {}}
                    disabled={answered}
                    data-testid={`quiz-option-${index}`}
                  >
                    {option}
                  </motion.button>
                );
              })}
            </div>

            {answered && currentQuestion < questions.length - 1 && (
              <motion.button
                onClick={nextQuestion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className=\"mt-6 w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-3 rounded-full font-nunito font-semibold text-lg\"
                whileHover={{ scale: 1.05 }}
                data-testid=\"next-question\"
              >
                Next Question 💕
              </motion.button>
            )}
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className=\"bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border-4 border-rose-200 text-center\"
          >
            <motion.div
              className=\"text-8xl mb-6\"
              animate={{ rotate: 360, scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉
            </motion.div>

            <h2 className=\"font-playfair text-4xl font-bold text-rose-900 mb-4\">
              Quiz Complete!
            </h2>

            <p className=\"font-nunito text-2xl text-rose-700 mb-6\">
              You scored {score} out of {questions.length}
            </p>

            <p className=\"font-nunito text-xl text-rose-800 mb-8\">
              But honestly? You always get 100% in the test of my heart! 💖
            </p>

            <motion.button
              onClick={onNext}
              className=\"bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-nunito font-semibold text-lg\"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              data-testid=\"next-button\"
            >
              Continue 💫
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Page7_Quiz;
"
Observation: Create successful: /app/frontend/src/pages/Page7_Quiz.js
