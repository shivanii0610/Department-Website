import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ExternalLink, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-navy via-primary to-navy-light" />

      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Col 1: Brand ── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                <GraduationCap size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight text-white">Dept. of Computer Science</h3>
                <p className="text-xs text-primary/80">AJMVPS College, Ahilyanagar</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Empowering students with cutting-edge CS education since 1918. NAAC A++ Accredited (CGPA 3.79).
            </p>
            <a
              href="https://newartscollege.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-white transition-colors font-medium"
            >
              newartscollege.ac.in <ExternalLink size={11} />
            </a>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'About College',        path: '/about/college' },
                { label: 'About Department',     path: '/about/department' },
                { label: 'Admission',            path: '/admission' },
                { label: 'Curriculum / Syllabus',path: '/student-corner/curriculum' },
                { label: 'Academic Schedules',   path: '/student-corner/schedules' },
                { label: 'E-Learning',           path: '/e-learning' },
                { label: 'Training & Placement', path: '/training-placement' },
                { label: 'Events',               path: '/events' },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white hover:pl-1.5 transition-all duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Contact ── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={13} className="text-primary" />
                </div>
                <span className="text-sm text-gray-400 leading-relaxed">
                  Lal Taki Road, Tarakpur,<br />Ahmednagar – 414001, Maharashtra
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Phone size={13} className="text-primary" />
                </div>
                <span className="text-sm text-gray-400">0241-2324024 / 0241-2324715</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail size={13} className="text-primary" />
                </div>
                <a href="mailto:cs@newartscollege.ac.in" className="text-sm text-gray-400 hover:text-white transition-colors">
                  cs@newartscollege.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Clock size={13} className="text-primary" />
                </div>
                <span className="text-sm text-gray-400">Mon – Sat: 9:00 AM – 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* ── Col 4: Map ── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">Find Us</h3>
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg">
              <iframe
                title="College Location"
                src="https://maps.google.com/maps?q=AJMVPS+New+Arts+Commerce+Science+College+Ahmednagar&output=embed"
                width="100%"
                height="170"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=AJMVPS+New+Arts+Commerce+Science+College+Ahmednagar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-white transition-colors mt-3 font-medium"
            >
              Open in Google Maps <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 Department of Computer Science, AJMVPS New Arts, Commerce & Science College. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link to="/admin" className="text-xs text-gray-500 hover:text-white transition-colors">Admin Panel</Link>
            <Link to="/sitemap" className="text-xs text-gray-500 hover:text-white transition-colors">Sitemap</Link>
            <a
              href="https://nacsc-alumni.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-500 hover:text-white transition-colors"
            >
              Alumni Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
