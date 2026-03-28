import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, GraduationCap, Briefcase, Phone, Mail, X, Award } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Administration() {
  const { data } = useData();
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Administration</h1>
        <p className="text-gray-500 mb-8">Meet the team that drives our academic and administrative excellence.</p>
      </motion.div>

      {/* College Leadership */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
        <h2 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
          <Shield size={20} className="text-primary" /> College Leadership
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { title: 'Principal', name: 'Dr. B. B. Sagade' },
            { title: 'Vice Principal (Science)', name: 'Dr. A. E. Athare' },
            { title: 'Vice Principal (Commerce)', name: 'Dr. S. B. Kalamkar' },
          ].map(person => (
            <div key={person.title} className="flex items-center gap-4 bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
              <PlaceholderImage label={person.title} height="100px" className="w-24 shrink-0 !rounded-lg" />
              <div>
                <span className="text-xs font-semibold text-primary uppercase">{person.title}</span>
                <h3 className="text-lg font-bold text-navy">{person.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Department Faculty */}
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
              <PlaceholderImage src={f.imageUrl} aspect="passport" label="Faculty Photo" />
              <h3 className="font-bold text-navy group-hover:text-primary transition-colors">{f.name}</h3>
              <p className="text-sm text-primary">{f.designation}</p>
              <p className="text-xs text-gray-500 mt-1">{f.qualification}</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest border border-primary/20 px-3 py-1 rounded-full">View Profile</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Faculty Modal */}
      <AnimatePresence>
        {selectedFaculty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedFaculty(null)}>
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
                <div className="md:w-1/2 bg-section-bg flex items-center justify-center p-6 border-r border-gray-100">
                   <PlaceholderImage src={selectedFaculty.imageUrl} aspect="passport" label="Faculty Photo" height="320px" className="!border-none !bg-transparent !py-0 shadow-xl" />
                </div>
                <div className="md:w-1/2 p-8">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">{selectedFaculty.designation}</span>
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
