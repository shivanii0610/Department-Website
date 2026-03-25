import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Phone, Mail, User, AlertCircle, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const tabs = ['UG Courses', 'PG Courses', 'Contact Details', 'Vacancy Details'];

function AccordionStep({ step, title, content, isOpen, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden mb-2">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium transition-colors ${
          isOpen ? 'bg-primary text-white' : 'bg-section-bg text-navy hover:bg-gray-100'
        }`}
      >
        <span>Step {step}: {title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <div className="px-4 py-3 text-sm text-gray-600 leading-relaxed bg-white">
          {content}
        </div>
      )}
    </div>
  );
}

export default function Admission() {
  const [activeTab, setActiveTab] = useState(0);
  const [openStep, setOpenStep] = useState(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Admission</h1>
        <p className="text-gray-500 mb-8">Get all the information you need for the admission process.</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200 pb-3">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              activeTab === idx
                ? 'bg-primary text-white shadow-md shadow-primary/20'
                : 'bg-section-bg text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* UG Courses */}
      {activeTab === 0 && (
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
            <GraduationCap size={20} className="text-primary" /> Undergraduate Courses Admission
          </h2>
          <div className="max-w-2xl">
            <AccordionStep
              step={1}
              title="Online Registration"
              content="Visit the university admission portal and complete the online registration form. Upload all required documents including 12th marksheet, photograph, and identity proof. Pay the registration fee online."
              isOpen={openStep === 1}
              onToggle={() => setOpenStep(openStep === 1 ? null : 1)}
            />
            <AccordionStep
              step={2}
              title="Document Verification & Seat Confirmation"
              content="After successful registration, visit the college with original documents for verification. Once documents are verified, complete the fee payment to confirm your seat in the B.Sc. Computer Science program."
              isOpen={openStep === 2}
              onToggle={() => setOpenStep(openStep === 2 ? null : 2)}
            />
          </div>
        </motion.div>
      )}

      {/* PG Courses */}
      {activeTab === 1 && (
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
            <GraduationCap size={20} className="text-primary" /> Postgraduate Courses Admission
          </h2>
          <div className="max-w-2xl">
            <AccordionStep
              step={1}
              title="Eligibility Check & Application"
              content="Candidates must have completed B.Sc. Computer Science or equivalent with minimum 50% aggregate. Fill the online application form on the university portal with all academic details."
              isOpen={openStep === 1}
              onToggle={() => setOpenStep(openStep === 1 ? null : 1)}
            />
            <AccordionStep
              step={2}
              title="Merit List & Admission"
              content="Admission is based on the merit list published by the university. Selected candidates must report to the college with original documents and complete the admission formalities including fee payment."
              isOpen={openStep === 2}
              onToggle={() => setOpenStep(openStep === 2 ? null : 2)}
            />
          </div>
        </motion.div>
      )}

      {/* Contact Details */}
      {activeTab === 2 && (
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h2 className="text-xl font-bold text-navy mb-5">Contact Details of Admission Cell</h2>
          <div className="max-w-lg bg-white rounded-xl border border-gray-100 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <User size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Admission Incharge</p>
                <p className="font-medium text-navy">Prof. Admission Coordinator</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Mobile / Reception</p>
                <p className="font-medium text-navy">8149490282 / 0241-2324024</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium text-navy">cs@newartscollege.ac.in</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200 flex items-start gap-2">
              <AlertCircle size={16} className="text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-xs text-yellow-700">
                For any incorrect information, please contact the admission cell directly.
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Vacancy Details */}
      {activeTab === 3 && (
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <h2 className="text-xl font-bold text-navy mb-5 flex items-center gap-2">
            <FileText size={20} className="text-primary" /> Vacancy Details
          </h2>
          <div className="max-w-lg bg-section-bg rounded-xl border border-gray-100 p-6">
            <p className="text-gray-600 leading-relaxed mb-4">
              Current vacancies and seat availability information for the Computer Science programs will be updated during the admission season.
            </p>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-white">
                    <th className="text-left px-4 py-2.5 font-semibold text-navy">Program</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-navy">Total Seats</th>
                    <th className="text-left px-4 py-2.5 font-semibold text-navy">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { program: 'B.Sc. Computer Science', seats: '120', status: 'Open' },
                    { program: 'M.Sc. Computer Science', seats: '40', status: 'Open' },
                  ].map(row => (
                    <tr key={row.program} className="border-t border-gray-100">
                      <td className="px-4 py-2.5 font-medium text-navy">{row.program}</td>
                      <td className="px-4 py-2.5 text-gray-600">{row.seats}</td>
                      <td className="px-4 py-2.5">
                        <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
