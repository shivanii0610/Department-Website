import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Building2 } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function TrainingPlacement() {
  const { data } = useData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Training & Placement</h1>
        <p className="text-gray-500 mb-8">Explore our students' achievements and training opportunities.</p>
      </motion.div>

      {/* Top Placements */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14">
        <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
          <Briefcase size={20} className="text-primary" /> Top Placements
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.placements.map(p => (
            <div
              key={p.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <PlaceholderImage label="Student Photo" height="180px" className="!rounded-none" />
              <div className="p-4">
                <h3 className="font-bold text-navy group-hover:text-primary transition-colors">{p.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Building2 size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-600">{p.company}</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp size={14} className="text-green-500" />
                  <span className="text-sm font-semibold text-green-600">{p.package}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Training */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-xl font-bold text-navy mb-6 flex items-center gap-2">
          <TrendingUp size={20} className="text-primary" /> Training Programs
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.trainings.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <PlaceholderImage label="Training Photo" height="160px" className="!rounded-none" />
              <div className="p-5">
                <h3 className="font-bold text-navy mb-2">{t.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.overview}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
