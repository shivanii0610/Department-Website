import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us', path: '/about',
    children: [
      { label: 'About College', path: '/about/college' },
      { label: 'About Department', path: '/about/department' },
    ]
  },
  { label: 'Administration', path: '/administration' },
  {
    label: 'Student Corner', path: '/student-corner',
    children: [
      { label: 'Academic Schedules', path: '/student-corner/schedules' },
      { label: 'Curriculum', path: '/student-corner/curriculum' },
      { label: 'Results', path: '/student-corner/results' },
      { label: 'Merit List / Toppers', path: '/student-corner/toppers' },
      { label: 'Suggestions', path: '/student-corner/suggestions' },
    ]
  },
  { label: 'E-Learning', path: '/e-learning' },
  { label: 'Training & Placement', path: '/training-placement' },
  { label: 'Admission', path: '/admission' },
  { label: 'Alumni', path: 'https://nacsc-alumni.co.in/', external: true },
  { label: 'Events', path: '/events' },
  { label: 'Online Feedback', path: '/student-corner/feedback' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (label) => {
    setOpenDropdown(prev => prev === label ? null : label);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-navy text-white sticky top-[73px] z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-wrap items-center">
          {navItems.map(item => (
            <div key={item.label} className="relative group">
              {item.children ? (
                <button
                  className={`flex items-center gap-1 px-3 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors ${
                    location.pathname.startsWith(item.path) ? 'bg-white/20 font-semibold' : ''
                  }`}
                >
                  {item.label}
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
              ) : item.external ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block px-3 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors ${
                    location.pathname === item.path ? 'bg-white/20 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/20 font-semibold border-b-2 border-primary' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              )}

              {/* Desktop dropdown */}
              {item.children && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-b-lg shadow-xl border border-gray-100 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-1 z-50">
                  {item.children.map(child => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm transition-colors ${isActive ? 'text-navy font-semibold bg-primary/10' : 'text-gray-700 hover:bg-primary/8 hover:text-navy'}`
                      }
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden flex items-center justify-between py-3 text-white">
          <span className="text-sm font-semibold">Navigation</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-dark border-t border-white/10 max-h-[70vh] overflow-y-auto">
          {navItems.map(item => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className={`flex items-center justify-between w-full px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors ${
                      location.pathname.startsWith(item.path) ? 'bg-white/20 font-semibold' : ''
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="bg-navy-dark/80">
                      {item.children.map(child => (
                        <NavLink
                          key={child.path}
                          to={child.path}
                          onClick={closeMobile}
                          className={({ isActive }) =>
                            `block pl-8 pr-5 py-2.5 text-sm hover:bg-white/10 transition-colors ${isActive ? 'text-primary font-semibold' : 'text-white/80'}`
                          }
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : item.external ? (
                <a
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className={`block px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors ${
                    location.pathname === item.path ? 'bg-white/20 font-semibold' : ''
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  to={item.path}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `block px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors ${isActive ? 'bg-white/20 font-semibold' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
