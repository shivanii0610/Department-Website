import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, BookOpen, GraduationCap, Users, Award, Trophy,
  FileText, Clock, BarChart2, Lightbulb, MonitorSmartphone,
  MessageSquare, FlaskConical, ExternalLink, Calendar
} from 'lucide-react';
import { useData } from '../context/DataContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } }
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

/* ── Animated counter hook ── */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

/* ── Single animated stat ── */
function StatCard({ icon: Icon, value, label, suffix = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCounter(parseInt(value), 1600, visible);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="text-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon size={22} className="text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-extrabold text-navy">
        {visible ? count : 0}{suffix}
      </div>
      <div className="text-sm text-gray-500 mt-1 font-medium">{label}</div>
    </motion.div>
  );
}

export default function Home() {
  const { data } = useData();
  const recentEvents = (data?.events?.cultural || []).slice(0, 3);

  return (
    <div>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative bg-gradient-to-br from-[#FDF9F5] via-[#FBF4EE] to-[#FDF9F5] overflow-hidden border-b border-gray-200">
        {/* decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-navy/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial="hidden" animate="visible" variants={stagger}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: text */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/15 text-navy text-xs font-semibold rounded-full mb-5 border border-primary/30">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                NAAC A++ Accredited · CGPA 3.79
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-5 leading-tight">
                Department of<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-primary">
                  Computer Science
                </span>
              </h1>
              <p className="text-gray-600 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
                Shaping future technology leaders through quality education, hands-on training, and industry-aligned programs at <strong className="text-navy">AJMVPS College, Ahilyanagar</strong>.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/admission"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/30"
                >
                  Apply Now <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about/department"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-navy/10 text-navy font-semibold rounded-xl hover:bg-navy/20 border border-navy/20 transition-all duration-200"
                >
                  Know More
                </Link>
              </div>

              {/* quick badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['B.Sc. Computer Science', 'M.Sc. Computer Science', 'Est. 1918'].map(b => (
                  <span key={b} className="px-3 py-1 bg-navy/8 border border-navy/15 text-xs text-gray-600 rounded-full">{b}</span>
                ))}
              </div>
            </motion.div>

            {/* Right: image collage */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              <div className="col-span-2 rounded-2xl overflow-hidden border border-white/10 relative" style={{ height: '220px' }}>
                <img
                  src="/Information/Dept Event Photh/DSC_5037.JPG"
                  alt="Computer Lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <span className="absolute bottom-3 left-4 text-white text-sm font-semibold">Computer Laboratory</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 relative" style={{ height: '160px' }}>
                <img
                  src="/Information/Dept Event Photh/DSC_3790.JPG"
                  alt="Department"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-medium">Department Office</span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 relative" style={{ height: '160px' }}>
                <img
                  src="/Information/Dept Event Photh/DSC_7997.JPG"
                  alt="Events"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-white text-xs font-medium">Prize Distribution</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ QUICK LINKS ══════════════════════ */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-3 md:grid-cols-6 divide-x divide-gray-100"
          >
            {[
              { icon: BookOpen,        label: 'Syllabus',     path: '/student-corner/curriculum' },
              { icon: Clock,           label: 'Timetable',    path: '/student-corner/schedules' },
              { icon: BarChart2,       label: 'Results',      path: '/student-corner/results' },
              { icon: GraduationCap,   label: 'Admission',    path: '/admission' },
              { icon: MonitorSmartphone, label: 'E-Learning', path: '/e-learning' },
              { icon: MessageSquare,   label: 'Feedback',     path: '/student-corner/feedback' },
            ].map(({ icon: Icon, label, path }) => (
              <motion.div key={label} variants={fadeUp}>
                <Link
                  to={path}
                  className="flex flex-col items-center gap-2 py-5 px-2 hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-200">
                    <Icon size={18} className="text-primary group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-primary transition-colors text-center">{label}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ HOD MESSAGE ══════════════════════ */}
      <section className="bg-section-bg py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-3 gap-10 items-center"
          >
            {/* Photo */}
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-navy to-primary flex items-center justify-center mb-4 shadow-xl shadow-navy/20 overflow-hidden border-4 border-white">
                <img src="/admin-photos/Prof. Arun D. Gangarde.jpeg" alt="Prof. A.D. Gangarde" className="w-full h-full object-cover object-[center_top]" />
              </div>
              <h3 className="font-bold text-navy text-lg">Prof. A.D. Gangarde</h3>
              <p className="text-primary text-sm font-medium">Head of Department</p>
              <p className="text-gray-500 text-sm mt-1">M.Sc. Computer Science</p>
              <p className="text-gray-400 text-xs mt-1">Contact: 9422224440</p>
            </motion.div>

            {/* Message */}
            <motion.div variants={fadeUp} className="md:col-span-2">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">
                Message from HOD
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-5">
                Welcome to the Department of Computer Science
              </h2>
              <div className="relative">
                <span className="absolute -top-4 -left-2 text-7xl text-primary/10 font-serif leading-none select-none">"</span>
                <p className="text-gray-600 leading-relaxed mb-4 relative z-10">
                  It gives me immense pleasure to welcome you to the Department of Computer Science at AJMVPS New Arts, Commerce and Science College, Ahilyanagar. Our department has been at the forefront of providing quality education in computing since its inception.
                </p>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  We are committed to nurturing students with both theoretical knowledge and practical skills, preparing them to meet the challenges of the rapidly evolving technology landscape. With NAAC A++ accreditation and a dedicated team of faculty, we ensure every student receives the best education possible.
                </p>
              </div>
              <Link
                to="/about/department"
                className="inline-flex items-center gap-1.5 text-primary font-semibold mt-5 hover:gap-3 transition-all duration-200"
              >
                Know More About Department <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ ANIMATED STATS ══════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-5"
          >
            <StatCard icon={Users}          value="220"  suffix="+"  label="Student Intake" />
            <StatCard icon={GraduationCap}  value="12"              label="Expert Faculty" />
            <StatCard icon={FlaskConical}   value="4"               label="Modern Labs" />
            <StatCard icon={Trophy}         value="100"  suffix="%"  label="Pass Rate (UG)" />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ PROGRAMS OFFERED ══════════════════════ */}
      <section className="bg-section-bg py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Academics</span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy">Programs Offered</h2>
            </motion.div>

            <motion.div variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'FY B.Sc. CS', full: 'First Year Bachelor of Science (Computer Science)', seats: 60, duration: '1 Year', level: 'UG', color: 'from-navy to-navy-light' },
                { title: 'SY B.Sc. CS', full: 'Second Year Bachelor of Science (Computer Science)', seats: 60, duration: '1 Year', level: 'UG', color: 'from-[#9B2B34] to-[#C04050]' },
                { title: 'TY B.Sc. CS', full: 'Third Year Bachelor of Science (Computer Science)', seats: 60, duration: '1 Year', level: 'UG', color: 'from-[#A87A28] to-[#C9973A]' },
                { title: 'M.Sc. CS', full: 'Master of Science (Computer Science)', seats: 40, duration: '2 Years', level: 'PG', color: 'from-[#5C1219] to-[#7B1D24]' },
              ].map((prog) => (
                <motion.div
                  key={prog.title}
                  variants={fadeUp}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`bg-gradient-to-br ${prog.color} p-6 text-white`}>
                    <span className="text-xs font-bold bg-white/20 px-2 py-0.5 rounded-full">{prog.level}</span>
                    <h3 className="text-xl font-bold mt-3">{prog.title}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{prog.full}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <span className="flex items-center gap-1"><Users size={12} /> {prog.seats} Seats</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {prog.duration}</span>
                    </div>
                    <Link
                      to="/student-corner/curriculum"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all"
                    >
                      View Curriculum <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ ABOUT COLLEGE ══════════════════════ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Est. 1918</span>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">About Our College</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                AJMVPS New Arts, Commerce & Science College, Ahilyanagar, is a premier institution committed to academic excellence for over a century. With a prestigious <strong>NAAC 'A++' accreditation (CGPA 3.79)</strong>, we stand among the leading colleges in Maharashtra.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated faculty, modern infrastructure, and industry partnerships ensure students receive a holistic education that prepares them for global opportunities.
              </p>
              <Link to="/about/college" className="inline-flex items-center gap-1.5 text-primary font-semibold mt-5 hover:gap-3 transition-all duration-200">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 relative" style={{ height: '340px' }}>
              <img src="/Information/Dept Event Photh/DSC_5077.JPG" alt="College Campus" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ LATEST EVENTS ══════════════════════ */}
      {recentEvents.length > 0 && (
        <section className="bg-section-bg py-16">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-end justify-between mb-10">
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Latest</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy">Recent Events</h2>
                </div>
                <Link to="/events" className="hidden md:inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all text-sm">
                  View All Events <ArrowRight size={14} />
                </Link>
              </motion.div>

              <motion.div variants={stagger} className="grid md:grid-cols-3 gap-5">
                {recentEvents.map(event => (
                  <motion.div
                    key={event.id}
                    variants={fadeUp}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="relative overflow-hidden" style={{ height: '200px' }}>
                      {event.imageUrl ? (
                        <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-navy/20 flex items-center justify-center">
                          <Calendar size={40} className="text-white/40" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 left-4 text-white text-xs font-medium flex items-center gap-1">
                        <Calendar size={12} /> {event.date}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-navy group-hover:text-primary transition-colors mb-2">{event.title}</h3>
                      {event.description && <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{event.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} className="text-center mt-8 md:hidden">
                <Link to="/events" className="inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all text-sm">
                  View All Events <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ══════════════════════ GALLERY ══════════════════════ */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-end justify-between mb-10">
              <div>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full uppercase tracking-wider mb-3">Campus Life</span>
                <h2 className="text-2xl md:text-3xl font-bold text-navy">Gallery</h2>
              </div>
              <Link to="/events" className="hidden md:inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all text-sm">
                View All <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { label: 'Programming Contest', src: '/Information/Dept Event Photh/DSC_3731.JPG' },
                { label: 'Student Presentation', src: '/Information/Dept Event Photh/IMG_0644.JPG' },
                { label: 'Lab Session',          src: '/Information/Dept Event Photh/20220502114007_IMG_0728.JPG' },
                { label: 'Campus Placement',     src: '/Information/Dept Event Photh/DSC_5039.JPG' },
                { label: 'Prize Distribution',   src: '/Information/Dept Event Photh/DSC_7997.JPG' },
                { label: 'Cultural Activity',    src: '/Information/Dept Event Photh/DSC_8011.JPG' },
                { label: 'Group Photo',          src: '/Information/Dept Event Photh/DSC_8014.JPG' },
                { label: 'Awards Ceremony',      src: '/Information/Dept Event Photh/DSC_8012.JPG' },
              ].map(img => (
                <div key={img.label} className="group overflow-hidden rounded-2xl bg-gray-100 relative" style={{ paddingTop: '75%' }}>
                  <img
                    src={img.src}
                    alt={img.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-semibold">{img.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="text-center mt-8 md:hidden">
              <Link to="/events" className="inline-flex items-center gap-1.5 text-primary font-semibold hover:gap-3 transition-all text-sm">
                View All <ArrowRight size={14} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════ CTA BANNER ══════════════════════ */}
      <section className="bg-gradient-to-r from-navy to-primary py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Join Our Department?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 mb-8">
              Applications are open for the 2026–27 academic year. Limited seats available.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link
                to="/admission"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-navy font-bold rounded-xl hover:bg-gray-100 transition-all shadow-lg"
              >
                Apply for Admission <ArrowRight size={16} />
              </Link>
              <Link
                to="/student-corner/curriculum"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 border border-white/20 transition-all"
              >
                <FileText size={16} /> View Curriculum
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
