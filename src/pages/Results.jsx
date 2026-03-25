import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Results() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Results</h1>
        <p className="text-gray-500 mb-8">Check your semester examination results.</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-lg mx-auto text-center bg-section-bg rounded-2xl p-10 border border-gray-100"
      >
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <ExternalLink size={28} className="text-primary" />
        </div>
        <h2 className="text-xl font-bold text-navy mb-3">University Results Portal</h2>
        <p className="text-gray-500 mb-6">
          Click the button below to be redirected to the official university results portal.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20"
        >
          <ExternalLink size={16} /> View Results
        </a>
      </motion.div>
    </div>
  );
}
