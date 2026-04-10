import { motion } from 'framer-motion';
import { BookOpen, FileText } from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Curriculum() {
  const { data } = useData();
  const ugSyllabus = data.syllabus.filter(s => s.level === 'UG');
  const pgSyllabus = data.syllabus.filter(s => s.level === 'PG');

  const SyllabusCard = ({ item }) => (
    <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <BookOpen size={18} className="text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-navy">{item.year}</h3>
          <p className="text-xs text-gray-500">Semester: {item.semester}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <a
          href={item.syllabusUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors"
        >
          <FileText size={14} /> Syllabus
        </a>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Curriculum</h1>
        <p className="text-gray-500 mb-8">Access syllabus for all programs.</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* UG */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-xl font-bold text-navy mb-5 pb-2 border-b-2 border-primary">
            Undergraduate (B.Sc. CS)
          </h2>
          <div className="space-y-4">
            {ugSyllabus.map(s => <SyllabusCard key={s.id} item={s} />)}
          </div>
        </motion.div>

        {/* PG */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="text-xl font-bold text-navy mb-5 pb-2 border-b-2 border-navy">
            Postgraduate (M.Sc. CS)
          </h2>
          <div className="space-y-4">
            {pgSyllabus.map(s => <SyllabusCard key={s.id} item={s} />)}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
