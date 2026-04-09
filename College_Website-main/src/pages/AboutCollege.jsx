import { motion } from 'framer-motion';
import { Eye, Target, Award, Star } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { FACULTY_IMAGES } from '../data/facultyImages';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutCollege() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">About College</h1>
        <p className="text-gray-500 mb-8">
          Affiliated to Savitribai Phule Pune University | NAAC Accredited with <strong>'A++' Grade (CGPA 3.79)</strong>
        </p>
      </motion.div>

      {/* About */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-section-bg rounded-xl p-6 border border-gray-100 mb-10"
      >
        <p className="text-gray-600 leading-relaxed mb-3">
          <strong>AJMVPS New Arts, Commerce and Science College, Ahmednagar</strong> is operated under the <strong>Ahmednagar Jilha Maratha Vidya Prasarak Samaj (AJMVPS)</strong>, a prestigious educational body established in <strong>1918</strong>. AJMVPS runs numerous educational institutions across the Ahmednagar district, including senior colleges, junior colleges, and specialized institutes.
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          The college is located at <strong>Lal Taki Road, Tarakpur, Ahmednagar – 414001, Maharashtra</strong>. It is recognized as one of the leading educational institutions in the region, offering a wide range of undergraduate and postgraduate programs in Arts, Commerce, and Science streams.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The college is an <strong>Autonomous</strong> institution affiliated to <strong>Savitribai Phule Pune University</strong> and has achieved the prestigious <strong>NAAC 'A++' accreditation</strong> with a CGPA of <strong>3.79</strong>, reflecting its commitment to academic excellence and quality education. The college has also submitted <strong>NIRF 2025</strong> ranking data.
        </p>
      </motion.div>

      {/* Vision & Mission */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-section-bg rounded-xl p-6 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Eye size={20} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold text-navy">Our Vision</h2>
          </div>
          <p className="text-gray-600 leading-relaxed italic text-lg mb-3">
            "तेजो से तेजो मे देही !"
          </p>
          <p className="text-gray-600 leading-relaxed">
            To be a centre of academic excellence that illuminates knowledge and transforms lives, preparing students to contribute meaningfully to society and the nation through education, innovation, and moral values.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-section-bg rounded-xl p-6 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target size={20} className="text-primary" />
            </div>
            <h2 className="text-xl font-bold text-navy">Our Mission</h2>
          </div>
          <ul className="text-gray-600 leading-relaxed space-y-2">
            <li>• To provide educational opportunities especially for the socially underprivileged and economically weaker sections of society.</li>
            <li>• To foster the holistic personality development of students.</li>
            <li>• To impart fundamental knowledge and develop essential skills, aptitudes and competencies to prepare students for future challenges.</li>
            <li>• To cultivate a research culture and promote a positive attitude for national progress and development.</li>
            <li>• To inculcate strong moral values among students, fostering social commitment and national integration.</li>
          </ul>
        </motion.div>
      </div>

      {/* NAAC Badge */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 mb-12 flex items-center gap-4"
      >
        <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center shrink-0">
          <Star size={24} className="text-yellow-600" />
        </div>
        <div>
          <h3 className="font-bold text-navy text-lg">NAAC Accredited — A++ Grade</h3>
          <p className="text-sm text-gray-600">CGPA: 3.79 | Recognized for excellence in teaching, research, infrastructure, and student support.</p>
        </div>
      </motion.div>

      {/* Principal & Vice Principal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
          <Award size={24} className="text-primary" />
          Leadership
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Principal', name: 'Dr. B. B. Sagade', qualification: 'Ph.D.' },
          { title: 'Vice Principal (Science)', name: 'Dr. A. E. Athare', qualification: 'Ph.D.', phone: '9763263275' },
          { title: 'Vice Principal (Commerce)', name: 'Dr. S. B. Kalamkar', qualification: 'Ph.D.', phone: '9403375734' },
        ].map(person => (
          <motion.div
            key={person.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-5 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            {FACULTY_IMAGES[person.name] ? (
              <img
                src={FACULTY_IMAGES[person.name]}
                alt={person.name}
                className="w-28 h-[120px] shrink-0 rounded-lg object-cover border border-gray-100 shadow-sm"
              />
            ) : (
              <PlaceholderImage label={person.title} height="120px" className="w-28 shrink-0 !rounded-lg" />
            )}
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{person.title}</span>
              <h3 className="text-lg font-bold text-navy mt-1">{person.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{person.qualification}</p>
              {person.phone && (
                <p className="text-xs text-gray-400 mt-1">📞 {person.phone}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Administrative Info */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-8 bg-section-bg rounded-xl p-6 border border-gray-100"
      >
        <h3 className="font-bold text-navy mb-3">Administrative Office</h3>
        <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
          <div><strong>Registrar:</strong> Shri. B. K. Sabale — 9881622170</div>
          <div><strong>Office Phone:</strong> 0241-2324024 / 0241-2324715</div>
          <div><strong>Admission Cell:</strong> 8149490282</div>
          <div><strong>Address:</strong> Lal Taki Road, Tarakpur, Ahmednagar – 414001</div>
        </div>
      </motion.div>
    </div>
  );
}
