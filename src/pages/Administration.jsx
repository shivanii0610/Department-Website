import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, User } from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

// College Leadership with their photos
const LEADERSHIP = [
  { title: 'Principal', name: 'Dr. B. B. Sagade', photo: '/admin-photos/Principal Dr. B. B. Sagade.jpeg' },
  { title: 'Vice Principal (Science)', name: 'Dr. A. E. Athare', photo: '/admin-photos/Dr. A. E. Athare.jpeg' },
  { title: 'Vice Principal (Commerce)', name: 'Dr. S. B. Kalamkar', photo: '' },
];

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

function AvatarFallback({ name, className = '' }) {
  return (
    <div className={`bg-gradient-to-br from-navy to-primary flex items-center justify-center text-white font-bold text-xl ${className}`}>
      {getInitials(name) || <User size={28} />}
    </div>
  );
}

function PhotoCard({ src, name, className = '' }) {
  const [imgError, setImgError] = useState(false);

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={name}
        className={`object-cover object-top bg-gray-100 ${className}`}
        onError={() => setImgError(true)}
      />
    );
  }
  return <AvatarFallback name={name} className={className} />;
}

export default function Administration() {
  const { data } = useData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Administration</h1>
        <p className="text-gray-500 mb-8">Meet the team that drives our academic and administrative excellence.</p>
      </motion.div>

      {/* College Leadership */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-12">
        <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
          <Shield size={20} className="text-primary" /> College Leadership
        </h2>
        <div className="grid md:grid-cols-3 gap-5">
          {LEADERSHIP.map(person => (
            <motion.div
              key={person.title}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="h-56 w-full overflow-hidden">
                <PhotoCard
                  src={person.photo}
                  name={person.name}
                  className="w-full h-full"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">{person.title}</span>
                <h3 className="text-lg font-bold text-navy mt-1">{person.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Department Faculty */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
          <Shield size={20} className="text-primary" /> Department Faculty
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {data.faculty.map(f => (
            <motion.div
              key={f.id}
              variants={fadeUp}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden text-center group"
            >
              <div className="h-48 w-full overflow-hidden">
                <PhotoCard
                  src={f.imageUrl}
                  name={f.name}
                  className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-navy text-sm">{f.name}</h3>
                <p className="text-xs text-primary font-medium mt-0.5">{f.designation}</p>
                <p className="text-xs text-gray-500 mt-0.5">{f.qualification}</p>
                {f.specialization && (
                  <span className="inline-block mt-2 px-2 py-0.5 bg-blue-50 text-primary text-[11px] rounded-full font-medium">
                    {f.specialization}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
