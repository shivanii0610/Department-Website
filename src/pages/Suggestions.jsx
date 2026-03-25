import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Suggestions() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setName('');
    setSuggestion('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Suggestions</h1>
        <p className="text-gray-500 mb-8">Share your ideas and suggestions to help us grow better.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-xl mx-auto"
      >
        {submitted ? (
          <div className="bg-green-50 rounded-2xl border border-green-200 p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <MessageCircle size={24} className="text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-green-700">Thank You!</h3>
            <p className="text-sm text-green-600 mt-2">Your suggestion has been received. We appreciate your input!</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 text-sm text-primary hover:underline"
            >
              Submit another suggestion
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Name (Optional)</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Your Suggestion *</label>
              <textarea
                required
                value={suggestion}
                onChange={e => setSuggestion(e.target.value)}
                rows={6}
                placeholder="Write your suggestion here..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-hover transition-colors w-full justify-center"
            >
              <Send size={16} /> Submit Suggestion
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
