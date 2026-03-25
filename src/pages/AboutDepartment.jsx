import { motion } from 'framer-motion';
import { History, User, Users } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function AboutDepartment() {
  const { data } = useData();
  const hod = data.faculty.find(f => f.designation.toLowerCase().includes('head'));
  const otherFaculty = data.faculty.filter(f => !f.designation.toLowerCase().includes('head'));

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-8">About Department</h1>
      </motion.div>

      {/* History */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="bg-section-bg rounded-xl p-6 border border-gray-100 mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <History size={20} className="text-primary" />
          </div>
          <h2 className="text-xl font-bold text-navy">Department History</h2>
        </div>
        <p className="text-gray-600 leading-relaxed mb-3">
          The Department of Computer Science was <strong>established in 1986</strong> under the aegis of AJMVPS New Arts, Commerce and Science College, Ahmednagar. Starting with the B.Sc. Computer Science program, the department introduced the <strong>M.Sc. Computer Science</strong> program in <strong>2011</strong>. The department is affiliated to <strong>Savitribai Phule Pune University</strong>, Pune.
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          The department offers <strong>B.Sc. Computer Science</strong> with an annual intake of 160 students each year and <strong>M.Sc. Computer Science</strong> with an annual intake of 60 students each year. The department aims to develop core competence in Computer Science and empower students to carry out development work and take challenges in research and technologies.
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          The department has a state-of-the-art infrastructure of <strong>4 computer labs with 140 computers and computing equipments</strong> supported by a high-speed Ethernet and wireless network.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Many of our students are placed in well-known IT companies like <strong>TCS, Wipro, Retailware, Aloha Technology, and Medly Software</strong> through campus interviews.
        </p>
      </motion.div>

      {/* HOD */}
      {hod && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
            <User size={24} className="text-primary" />
            Head of Department
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <PlaceholderImage label="HOD Photo" height="180px" className="w-48 shrink-0 !rounded-lg" />
            <div>
              <h3 className="text-xl font-bold text-navy">{hod.name}</h3>
              <p className="text-primary font-medium mt-1">{hod.designation}</p>
              <p className="text-sm text-gray-500 mt-1">{hod.qualification}</p>
              {hod.specialization && (
                <p className="text-sm text-gray-500">Specialization: {hod.specialization}</p>
              )}
              <p className="text-gray-600 mt-3 leading-relaxed">
                Leading the department with a vision to integrate modern technology practices into the academic curriculum and foster a culture of research and innovation.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Faculty Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
          <Users size={24} className="text-primary" />
          Our Faculty
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {otherFaculty.map(faculty => (
            <div
              key={faculty.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
            >
              <PlaceholderImage label="Faculty Photo" height="200px" className="!rounded-none" />
              <div className="p-4">
                <h3 className="font-bold text-navy group-hover:text-primary transition-colors">{faculty.name}</h3>
                <p className="text-sm text-primary mt-0.5">{faculty.designation}</p>
                <p className="text-xs text-gray-500 mt-1">{faculty.qualification}</p>
                {faculty.specialization && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-section-bg text-xs text-gray-600 rounded-full">
                    {faculty.specialization}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
