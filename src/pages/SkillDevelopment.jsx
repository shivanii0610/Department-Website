import { motion } from 'framer-motion';
import { Cpu, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const programs = [
  { id: 1, title: 'Full Stack Web Development', duration: '6 Months', description: 'Comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and MongoDB.', status: 'Ongoing' },
  { id: 2, title: 'Data Science with Python', duration: '4 Months', description: 'Learn data analysis, visualization, and machine learning using Python libraries.', status: 'Upcoming' },
  { id: 3, title: 'Cybersecurity Fundamentals', duration: '3 Months', description: 'Introduction to network security, ethical hacking, and information security practices.', status: 'Upcoming' },
  { id: 4, title: 'Mobile App Development', duration: '5 Months', description: 'Build cross-platform mobile applications using React Native and Flutter.', status: 'Completed' },
  { id: 5, title: 'Cloud Computing with AWS', duration: '3 Months', description: 'Hands-on training with AWS services including EC2, S3, Lambda, and more.', status: 'Upcoming' },
  { id: 6, title: 'UI/UX Design Masterclass', duration: '2 Months', description: 'Learn design thinking, wireframing, prototyping using Figma and Adobe XD.', status: 'Ongoing' },
];

const statusColors = {
  Ongoing: 'bg-green-50 text-green-700 border-green-200',
  Upcoming: 'bg-blue-50 text-blue-700 border-blue-200',
  Completed: 'bg-gray-100 text-gray-600 border-gray-200',
};

export default function SkillDevelopment() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-3xl font-bold text-navy mb-2">Skill Development</h1>
        <p className="text-gray-500 mb-8">Industry-oriented programs to enhance your technical expertise.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.map(program => (
          <motion.div
            key={program.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300 group flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Cpu size={20} className="text-primary" />
              </div>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusColors[program.status]}`}>
                {program.status}
              </span>
            </div>
            <h3 className="font-bold text-navy mb-2 group-hover:text-primary transition-colors">{program.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-1">{program.description}</p>
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-50">
              <div className="flex items-center gap-1 text-xs text-gray-500">
                <Clock size={12} /> {program.duration}
              </div>
              <button className="text-xs text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
