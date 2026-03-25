import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube, GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold leading-tight">Department of Computer Science</h3>
                <p className="text-xs text-gray-300">AJMVPS College, Ahilyanagar</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering students with cutting-edge computer science education and practical skills for the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about/college' },
                { label: 'Admission', path: '/admission' },
                { label: 'Student Corner', path: '/student-corner/schedules' },
                { label: 'E-Learning', path: '/e-learning' },
                { label: 'Events', path: '/events' },
              ].map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-300 hover:text-white hover:pl-1 transition-all duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5 text-gray-400" />
                <span className="text-sm text-gray-300">Lal Taki Road, Tarakpur, Ahmednagar - 414001, Maharashtra</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-gray-400" />
                <span className="text-sm text-gray-300">0241-2324024 / 0241-2324715</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-gray-400" />
                <span className="text-sm text-gray-300">cs@newartscollege.ac.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-gray-400" />
                <span className="text-sm text-gray-300">Mon - Sat: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Social + Map */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider">Follow Us</h3>
            <div className="flex items-center gap-2 mb-6">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <p className="text-xs text-gray-400 text-center">Campus Map Placeholder</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400">
            © 2026 Department of Computer Science, AJMVPS College. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/admin" className="text-xs text-gray-400 hover:text-white transition-colors">
              Admin
            </Link>
            <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
