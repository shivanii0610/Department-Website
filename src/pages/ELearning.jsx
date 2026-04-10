import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ELearning() {
  const { data } = useData();
  const [expandedYear, setExpandedYear] = useState(null);

  const yearCards = ['FY', 'SY', 'TY', 'MSC-I', 'MSC-II'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">E-Learning</h1>
        <p className="text-gray-500 mb-8">Access books and study materials for all programs and years.</p>
      </motion.div>

      <div className="space-y-4">
        {yearCards.map(year => {
          const isExpanded = expandedYear === year;
          const books = data.books[year] || [];

          return (
            <motion.div
              key={year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <button
                onClick={() => setExpandedYear(isExpanded ? null : year)}
                className={`w-full flex items-center justify-between p-5 rounded-xl border transition-all duration-200 ${
                  isExpanded
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                    : 'bg-white text-navy border-gray-100 hover:border-primary/30 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    isExpanded ? 'bg-white/20' : 'bg-primary/10'
                  }`}>
                    <BookOpen size={18} className={isExpanded ? 'text-white' : 'text-primary'} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold">{year}</h3>
                    <p className={`text-xs ${isExpanded ? 'text-white/70' : 'text-gray-500'}`}>
                      {books.length} books available
                    </p>
                  </div>
                </div>
                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>

              <AnimatePresence>
                {isExpanded && books.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 rounded-xl border border-gray-100 overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-section-bg">
                            <th className="text-left px-4 py-3 font-semibold text-navy">#</th>
                            <th className="text-left px-4 py-3 font-semibold text-navy">Subject</th>
                            <th className="text-left px-4 py-3 font-semibold text-navy">Publication</th>
                            <th className="text-left px-4 py-3 font-semibold text-navy">Download</th>
                          </tr>
                        </thead>
                        <tbody>
                          {books.map((book, idx) => (
                            <tr key={book.id} className="border-t border-gray-50 hover:bg-section-bg/50 transition-colors">
                              <td className="px-4 py-3 text-gray-500">{idx + 1}</td>
                              <td className="px-4 py-3 font-medium text-navy">{book.subject}</td>
                              <td className="px-4 py-3 text-gray-600">{book.publication}</td>
                              <td className="px-4 py-3">
                                <a
                                  href={book.pdfUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary-hover transition-colors"
                                >
                                  <Download size={12} /> PDF
                                </a>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
