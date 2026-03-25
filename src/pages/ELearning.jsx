import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Download, ChevronDown, ChevronUp, Search, X } from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const getYoutubeEmbedUrl = (url) => {
  if (!url) return null;
  let videoId = '';
  if (url.includes('v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  } else if (url.includes('embed/')) {
    videoId = url.split('embed/')[1].split('?')[0];
  }
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};

export default function ELearning() {
  const { data } = useData();
  const [expandedYear, setExpandedYear] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const yearCards = ['FY', 'SY', 'TY', 'MSC-I', 'MSC-II'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-navy mb-2">E-Learning</h1>
            <p className="text-gray-500">Access books and study materials for all programs and years.</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-10 py-3 border border-gray-200 rounded-2xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              placeholder="Search subjects or books..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
              </button>
            )}
          </div>
        </div>
      </motion.div>

      <div className="space-y-4">
        {yearCards.map(year => {
          const allBooks = data.books[year] || [];
          const filteredBooks = allBooks.filter(book => 
            book.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (book.regularBook && book.regularBook.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (book.referenceBook && book.referenceBook.toLowerCase().includes(searchQuery.toLowerCase()))
          );

          if (searchQuery && filteredBooks.length === 0) return null;

          const isExpanded = expandedYear === year || (searchQuery.length > 0 && filteredBooks.length > 0);

          return (
            <motion.div
              key={year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <button
                onClick={() => setExpandedYear(isExpanded && !searchQuery ? null : year)}
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
                      {filteredBooks.length} {searchQuery ? 'matches' : 'books available'}
                    </p>
                  </div>
                </div>
                {!searchQuery && (isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />)}
              </button>

              <AnimatePresence>
                {isExpanded && filteredBooks.length > 0 && (
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
                            <th className="text-left px-4 py-3 font-semibold text-navy">Subject</th>
                            <th className="text-left px-4 py-3 font-semibold text-navy">Regular Book</th>
                            <th className="text-left px-4 py-3 font-semibold text-navy">Reference Book</th>
                            <th className="text-left px-4 py-3 font-semibold text-navy">Workbook/Lab Book</th>
                            <th className="text-left px-4 py-3 font-semibold text-navy">Download</th>
                            <th className="text-left px-4 py-3 font-semibold text-navy">Videos</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredBooks.map((book) => {
                            const regularBook = book.regularBook || "Not Available";
                            const referenceBook = book.referenceBook || book.publication || "N/A";
                            const workbook = book.workbook || "Not Available";
                            const pdfUrl = book.pdfUrl || "#";
                            const videoUrl = book.videoUrl || null;
                            const embedUrl = getYoutubeEmbedUrl(videoUrl);
                            
                            return (
                              <tr key={book.id} className="border-t border-gray-50 hover:bg-section-bg/50 transition-colors">
                                <td className="px-4 py-3 font-medium text-navy min-w-[150px]">{book.subject}</td>
                                <td className="px-4 py-3 text-gray-600 min-w-[180px]">{regularBook}</td>
                                <td className="px-4 py-3 text-gray-600 min-w-[180px]">{referenceBook}</td>
                                <td className="px-4 py-3 text-gray-600 min-w-[180px]">{workbook}</td>
                                <td className="px-4 py-3 min-w-[120px]">
                                  {pdfUrl && pdfUrl !== "#" ? (
                                    <a
                                      href={pdfUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-sm cursor-pointer"
                                    >
                                      <Download size={14} /> PDF
                                    </a>
                                  ) : (
                                    <span className="text-gray-400 text-xs italic">N/A</span>
                                  )}
                                </td>
                                <td className="px-4 py-3 min-w-[200px]">
                                  {videoUrl ? (
                                    <div className="flex flex-col gap-2">
                                      {embedUrl ? (
                                        <div className="w-56 aspect-video rounded-lg overflow-hidden border border-gray-200 shadow-sm transition-transform hover:scale-[1.02]">
                                          <iframe
                                            className="w-full h-full"
                                            src={embedUrl}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                          ></iframe>
                                        </div>
                                      ) : (
                                        <div className="w-56 aspect-video rounded-lg overflow-hidden border border-gray-200 shadow-sm transition-transform hover:scale-[1.02]">
                                          <video 
                                            src={videoUrl} 
                                            controls 
                                            className="w-full h-full object-cover"
                                            preload="metadata"
                                          >
                                            Your browser does not support the video tag.
                                          </video>
                                        </div>
                                      )}
                                      <a 
                                        href={videoUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-[10px] text-primary hover:underline flex items-center gap-1"
                                      >
                                        Unable to see? Watch on YouTube →
                                      </a>
                                    </div>
                                  ) : (
                                    <span className="text-gray-400 text-xs italic">No Video</span>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        {searchQuery && yearCards.every(year => {
          const books = data.books[year] || [];
          return !books.some(book => 
            book.subject.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }) && (
          <div className="text-center py-12">
            <p className="text-gray-500">No matching subjects or books found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
