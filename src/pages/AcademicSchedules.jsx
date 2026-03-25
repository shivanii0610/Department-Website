import { motion } from 'framer-motion';
import { Calendar, Clock, FileText } from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AcademicSchedules() {
  const { data } = useData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Academic Schedules</h1>
        <p className="text-gray-500 mb-8">View time tables and academic calendar for all programs.</p>
      </motion.div>

      {/* Time Tables */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-12">
        <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
          <Calendar size={20} className="text-primary" /> Time Tables
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.timetables.map(tt => (
            <div
              key={tt.id}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-navy">{tt.year}</h3>
                  <p className="text-xs text-gray-500">{tt.semester}</p>
                </div>
              </div>
              <a
                href={tt.pdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors w-full justify-center"
              >
                <FileText size={14} /> {tt.pdfUrl.endsWith('.pdf') ? 'View PDF' : 'Download DOCX'}
              </a>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Academic Calendar */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
          <Calendar size={20} className="text-primary" /> Academic Calendar
        </h2>
        <div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-section-bg flex items-center justify-center">
              <Calendar size={24} className="text-navy" />
            </div>
            <div>
              <h3 className="font-bold text-navy">Instruction (Semester)</h3>
              <p className="text-xs text-gray-500">Academic Year 2025-26</p>
            </div>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-hover transition-colors"
          >
            <FileText size={14} /> Download PDF
          </a>
        </div>
      </motion.div>
    </div>
  );
}
