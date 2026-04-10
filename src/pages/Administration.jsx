import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, GraduationCap, Phone, X, Award, User, Mail } from 'lucide-react';
import { useData } from '../context/DataContext';
import { FACULTY_IMAGES } from '../data/facultyImages';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// ── College Leadership ────────────────────────────────────────────────────────
// These objects share the same shape as faculty so the one modal works for all.
const LEADERSHIP = [
  {
    title: 'Principal',
    name: 'Dr. B. B. Sagade',
    photo: '/admin-photos/Dr. B. B. Sagade.jpeg',
    featured: true,
    designation: 'Principal',
    qualification: 'Ph.D.',
    experience: '25+ Years',
    contact: 'principal@newartscollege.ac.in',
  },
  {
    title: 'Vice Principal (Science)',
    name: 'Dr. A. E. Athare',
    featured: false,
    designation: 'Vice Principal (Science)',
    qualification: 'Ph.D.',
    experience: '20+ Years',
    contact: 'vp.science@newartscollege.ac.in',
  },
  {
    title: 'Vice Principal (Commerce)',
    name: 'Dr. S. B. Kalamkar',
    featured: false,
    designation: 'Vice Principal (Commerce)',
    qualification: 'Ph.D.',
    experience: '20+ Years',
    contact: 'vp.commerce@newartscollege.ac.in',
  },
];

// ── Non-Teaching Staff ────────────────────────────────────────────────────────
const NON_TEACHING_STAFF = [
  {
    id: 'nt-1',
    name: 'Bharat Deshmukh',
    designation: 'Lab Assistant',
    qualification: "M.A., DOEACC 'O' Level",
    experience: '18 Years',
    contact: '9552818117',
    email: 'bharatdeshmukh1982@gmail.com',
  },
  {
    id: 'nt-2',
    name: 'Deepak Athare',
    designation: 'Lab Attendant',
    qualification: 'B.A.',
    experience: '15 Years',
    contact: '9823778134',
    email: 'deepakathare34@gmail.com',
  }
];

// ── Initials helper ───────────────────────────────────────────────────────────
function getInitials(name) {
  return name
    .replace(/Prof\.|Dr\.|Mr\.|Ms\./, '')
    .trim()
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0])
    .join('');
}

// ── Initials fallback avatar ──────────────────────────────────────────────────
function InitialAvatar({ name }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy to-primary text-white font-bold select-none">
      <span className="text-2xl">{getInitials(name) || <User size={28} />}</span>
    </div>
  );
}

// ── Photo component: map lookup → url fallback → initials ────────────────────
// zoomFace: scales & repositions the image to focus on the face area
function FacultyPhoto({ name, fallbackUrl = '', zoomFace = false }) {
  const [error, setError] = useState(false);

  // 1. Try the imported image from FACULTY_IMAGES map
  const mappedSrc = FACULTY_IMAGES[name];

  // 2. Try fallbackUrl from initialData (legacy paths)
  const src = mappedSrc || (fallbackUrl && fallbackUrl.length > 4 ? fallbackUrl : null);

  if (src && !error) {
    return (
      <img
        src={src}
        alt={name}
        className="w-full h-full object-cover"
        style={{
          objectPosition: zoomFace ? 'center 15%' : 'center top',
          transform:      zoomFace ? 'scale(1.35)' : 'scale(1)',
          transformOrigin: 'center 20%',
          transition: 'transform 0.3s ease',
        }}
        onError={() => setError(true)}
      />
    );
  }

  // 3. Fallback: styled initials avatar
  return <InitialAvatar name={name} />;
}

export default function Administration() {
  const { data } = useData();
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Administration</h1>
        <p className="text-gray-500 mb-8">Meet the team that drives our academic and administrative excellence.</p>
      </motion.div>

      {/* ── College Leadership ──────────────────────────────────────────────── */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
        <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
          <Shield size={20} className="text-primary" /> College Leadership
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {LEADERSHIP.map(person => (
            <div
              key={person.title}
              onClick={() => setSelectedFaculty(person)}
              className={`flex items-center gap-4 rounded-xl p-5 border transition-all cursor-pointer group hover:shadow-lg ${
                person.featured
                  ? 'bg-gradient-to-r from-navy/5 to-primary/5 border-primary/20 shadow-md md:col-span-2'
                  : 'bg-white border-gray-100 hover:shadow-md'
              }`}
            >
              {/* Photo */}
              <div
                className={`shrink-0 overflow-hidden rounded-xl border-2 border-white shadow-md ${
                  person.featured ? 'w-40 h-48' : 'w-20 h-24'
                }`}
              >
                <FacultyPhoto name={person.name} zoomFace={person.featured} />
              </div>

              {/* Info */}
              <div className="flex-1">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {person.title}
                </span>
                <h3 className={`font-bold text-navy group-hover:text-primary transition-colors ${person.featured ? 'text-2xl mt-1' : 'text-lg'}`}>
                  {person.name}
                </h3>
                {person.featured && (
                  <p className="text-sm text-gray-500 mt-1">
                    AJMVPS New Arts, Commerce &amp; Science College, Ahmednagar
                  </p>
                )}
                <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20 px-3 py-1 rounded-full">
                    View Profile
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Department Faculty ──────────────────────────────────────────────── */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
          <Shield size={20} className="text-primary" /> Department Faculty
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.faculty.map(f => (
            <div
              key={f.id}
              onClick={() => setSelectedFaculty(f)}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all text-center cursor-pointer group hover:-translate-y-1"
            >
              {/* Uniform 120 × 160 passport-style photo */}
              <div className="flex justify-center mb-4">
                <div
                  className="overflow-hidden rounded-lg border-2 border-gray-100 shadow-sm"
                  style={{ width: '120px', height: '160px' }}
                >
                  <FacultyPhoto name={f.name} fallbackUrl={f.imageUrl} />
                </div>
              </div>

              <h3 className="font-bold text-navy group-hover:text-primary transition-colors">{f.name}</h3>
              <p className="text-sm text-primary">{f.designation}</p>
              <p className="text-xs text-gray-500 mt-1">{f.qualification}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20 px-3 py-1 rounded-full">
                  View Profile
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Non-Teaching Staff ──────────────────────────────────────────────── */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
        <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2 mt-8">
          <User size={20} className="text-primary" /> Non-Teaching Staff
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NON_TEACHING_STAFF.map(f => (
            <div
              key={f.id}
              onClick={() => setSelectedFaculty(f)}
              className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-all text-center cursor-pointer group hover:-translate-y-1"
            >
              <div className="flex justify-center mb-4">
                <div
                  className="overflow-hidden rounded-lg border-2 border-gray-100 shadow-sm"
                  style={{ width: '120px', height: '160px' }}
                >
                  <FacultyPhoto name={f.name} />
                </div>
              </div>
              <h3 className="font-bold text-navy group-hover:text-primary transition-colors">{f.name}</h3>
              <p className="text-sm text-primary">{f.designation}</p>
              <p className="text-xs text-gray-500 mt-1">{f.qualification}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20 px-3 py-1 rounded-full">
                  View Profile
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ── Faculty Detail Modal ────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedFaculty && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedFaculty(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedFaculty(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X size={20} className="text-gray-600" />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Modal photo */}
                <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6 border-r border-gray-100">
                  <div
                    className="overflow-hidden rounded-xl border-2 border-white shadow-xl"
                    style={{ width: '180px', height: '240px' }}
                  >
                    <FacultyPhoto name={selectedFaculty.name} fallbackUrl={selectedFaculty.imageUrl} />
                  </div>
                </div>

                {/* Modal info */}
                <div className="md:w-1/2 p-8">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                    {selectedFaculty.designation}
                  </span>
                  <h2 className="text-2xl font-bold text-navy mb-4">{selectedFaculty.name}</h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="text-primary shrink-0" size={18} />
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Qualification</p>
                        <p className="text-sm font-semibold text-gray-700">{selectedFaculty.qualification}</p>
                      </div>
                    </div>

                    {selectedFaculty.experience && (
                      <div className="flex items-start gap-3">
                        <Award className="text-primary shrink-0" size={18} />
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase">Experience</p>
                          <p className="text-sm font-semibold text-gray-700">{selectedFaculty.experience}</p>
                        </div>
                      </div>
                    )}

                    {selectedFaculty.eligibility && (
                      <div className="flex items-start gap-3">
                        <Shield className="text-primary shrink-0" size={18} />
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase">Eligibility</p>
                          <p className="text-sm font-semibold text-gray-700">{selectedFaculty.eligibility}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <Phone className="text-primary shrink-0" size={18} />
                      <div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Contact</p>
                        <p className="text-sm font-semibold text-gray-700">{selectedFaculty.contact}</p>
                      </div>
                    </div>

                    {selectedFaculty.email && (
                      <div className="flex items-start gap-3">
                        <Mail className="text-primary shrink-0" size={18} />
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase">Email</p>
                          <p className="text-sm font-semibold text-gray-700 break-all">
                            {selectedFaculty.email.includes(' / ') 
                               ? selectedFaculty.email.split(' / ').map((e, idx) => <span key={idx} className="block">{e}</span>) 
                               : <a href={`mailto:${selectedFaculty.email}`} className="hover:text-primary hover:underline">{selectedFaculty.email}</a>}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-xs text-gray-500 italic leading-relaxed">
                      {selectedFaculty.name} is a highly experienced {selectedFaculty.designation} with over {selectedFaculty.experience} of dedicated service in the field of Computer Science.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
