import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, ArrowRight, BookOpen, GraduationCap, Users, Award } from 'lucide-react';
import PlaceholderImage from '../components/PlaceholderImage';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy via-navy-light to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid lg:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-3 py-1 bg-white/10 text-blue-200 text-xs font-medium rounded-full mb-4">
                Welcome to
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Department of<br />
                <span className="text-blue-300">Computer Science</span>
              </h1>
              <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg">
                Shaping future tech leaders through quality education, practical training, and industry-oriented programs at AJMVPS College, Ahilyanagar.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/admission"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-all duration-200 shadow-lg shadow-primary/25"
                >
                  Apply for UG <ArrowRight size={16} />
                </Link>
                <Link
                  to="/admission"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
                >
                  Apply for PG <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              <div className="col-span-2 bg-white/5 backdrop-blur rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="aspect-video w-full">
                  <iframe 
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/zOjov-2OZ0E?autoplay=0&mute=1" 
                    title="Department Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 overflow-hidden relative aspect-video">
                <img src="/Information/Dept Event Photh/DSC_3790.JPG" alt="Department Office" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-xs font-medium">Department Office</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 overflow-hidden relative aspect-video">
                <img src="/Information/Dept Event Photh/DSC_5037.JPG" alt="Computer Lab" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                  <p className="text-white text-xs font-medium">Computer Lab</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={stagger}
        className="max-w-7xl mx-auto px-4 py-12"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Users, label: 'Programs', value: '3' },
            { icon: GraduationCap, label: 'Faculty', value: '12' },
            { icon: BookOpen, label: 'Labs', value: '4' },
            { icon: Award, label: 'Intake Capacity', value: '220' },
          ].map(stat => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
            >
              <stat.icon size={28} className="mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-2xl md:text-3xl font-bold text-navy">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About College */}
      <section className="bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">About Our College</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AJMVPS New Arts, Commerce & Science College, Ahmednagar, is a premier educational institution established in 1918. Committed to academic excellence, the college has grown to become one of the leading institutions in the region.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a prestigious <strong>NAAC 'A++' accreditation (CGPA 3.79)</strong> and a dedicated faculty, we prepare students for the challenges of the modern world through comprehensive curriculum and hands-on learning experiences.
              </p>
              <Link
                to="/about/college"
                className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 relative pt-[75%]">
              <img src="/Information/Dept Event Photh/DSC_5077.JPG" alt="College Campus" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Department */}
      <section>
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <motion.div variants={fadeUp} className="order-2 md:order-1">
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 relative pt-[75%]">
                <img src="/Information/Dept Event Photh/DSC_5086.JPG" alt="Department Lab" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">About Our Department</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The Department of Computer Science offers undergraduate (B.Sc. Computer Science) and postgraduate (M.Sc. Computer Science) programs designed to meet the evolving demands of the IT industry.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our curriculum blends theoretical foundations with practical applications, ensuring students are industry-ready upon graduation. We focus on emerging technologies including AI, ML, Cloud Computing, and Cybersecurity.
              </p>
              <Link
                to="/about/department"
                className="inline-flex items-center gap-1 text-primary font-medium mt-4 hover:gap-2 transition-all"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">
              Gallery
            </motion.h2>
            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { label: 'Programming Contest', src: '/Information/Dept Event Photh/DSC_3731.JPG' },
                { label: 'Student Presentation', src: '/Information/Dept Event Photh/IMG_0644.JPG' },
                { label: 'Lab Session', src: '/Information/Dept Event Photh/20220502114007_IMG_0728.JPG' },
                { label: 'Campus Placement', src: '/Information/Dept Event Photh/DSC_5039.JPG' },
                { label: 'Prize Distribution', src: '/Information/Dept Event Photh/DSC_7997.JPG' },
                { label: 'Cultural Activity', src: '/Information/Dept Event Photh/DSC_8011.JPG' },
                { label: 'Group Photo', src: '/Information/Dept Event Photh/DSC_8014.JPG' },
                { label: 'Awards Ceremony', src: '/Information/Dept Event Photh/DSC_8012.JPG' }
              ].map(img => (
                <div key={img.label} className="group overflow-hidden rounded-xl bg-white border border-gray-100 relative pt-[75%]">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium">{img.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
