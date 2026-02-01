Now let me update the main App.js to incorporate all 10 pages with navigation:
Action: file_editor create /app/frontend/src/App.js --file-text "import { useState } from \"react\";
import \"@/App.css\";
import FloatingEmojis from \"@/components/FloatingEmojis\";
import PageIndicator from \"@/components/PageIndicator\";
import { motion, AnimatePresence } from \"framer-motion\";

// Import all pages
import Page1_Envelope from \"@/pages/Page1_Envelope\";
import Page2_LoveLetter from \"@/pages/Page2_LoveLetter\";
import Page3_Timeline from \"@/pages/Page3_Timeline\";
import Page4_Reasons from \"@/pages/Page4_Reasons\";
import Page5_PhotoGallery from \"@/pages/Page5_PhotoGallery\";
import Page6_Moments from \"@/pages/Page6_Moments\";
import Page7_Quiz from \"@/pages/Page7_Quiz\";
import Page8_Dreams from \"@/pages/Page8_Dreams\";
import Page9_HiddenNotes from \"@/pages/Page9_HiddenNotes\";
import Page10_Finale from \"@/pages/Page10_Finale\";

// Different emoji themes for each page
const pageEmojis = [
  ['❤️', '💕', '💖', '💗', '💝'], // Page 1 - Hearts
  ['💌', '💖', '✉️', '💝', '💕'], // Page 2 - Love letters
  ['📅', '⏰', '🕐', '⭐', '✨'], // Page 3 - Timeline
  ['😊', '💫', '🌟', '🎁', '💖'], // Page 4 - Reasons
  ['📸', '🖼️', '🌹', '💐', '🦋'], // Page 5 - Photos
  ['☕', '🌅', '🎬', '🍕', '🎵'], // Page 6 - Moments
  ['💭', '💫', '❤️', '🎯', '✨'], // Page 7 - Quiz
  ['🏠', '✈️', '🌈', '🌟', '💫'], // Page 8 - Dreams
  ['🔐', '💌', '🎁', '✨', '💝'], // Page 9 - Hidden notes
  ['🎆', '🎊', '💖', '🌟', '✨'], // Page 10 - Finale
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    Page1_Envelope,
    Page2_LoveLetter,
    Page3_Timeline,
    Page4_Reasons,
    Page5_PhotoGallery,
    Page6_Moments,
    Page7_Quiz,
    Page8_Dreams,
    Page9_HiddenNotes,
    Page10_Finale,
  ];

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const CurrentPageComponent = pages[currentPage];

  return (
    <div className=\"App min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100\">
      {/* Background texture overlay */}
      <div
        className=\"absolute inset-0 opacity-30 z-0\"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1695131021220-2f3514baaf9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHw0fHxyb21hbnRpYyUyMHBpbmslMjBwYXBlciUyMHRleHR1cmUlMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc2OTkzOTIyNHww&ixlib=rb-4.1.0&q=85)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating Emojis Background - changes per page */}
      <FloatingEmojis emojis={pageEmojis[currentPage]} key={currentPage} />

      {/* Page Indicator - only show after first page */}
      {currentPage > 0 && (
        <PageIndicator
          currentPage={currentPage}
          totalPages={pages.length}
          onPageChange={goToPage}
        />
      )}

      {/* Main Content with page transitions */}
      <div className=\"relative z-10\">
        <AnimatePresence mode=\"wait\">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, type: \"spring\" }}
          >
            <CurrentPageComponent onNext={goToNextPage} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
"
Observation: Overwrite successful: /app/frontend/src/App.js
