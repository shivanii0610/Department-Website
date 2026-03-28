import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Search } from 'lucide-react';

const searchablePages = [
  { title: 'Home', path: '/', description: 'Main landing page' },
  { title: 'About College', path: '/about/college', description: 'College overview' },
  { title: 'About Department', path: '/about/department', description: 'Department info' },
  { title: 'Administration', path: '/administration', description: 'Administrative staff' },
  { title: 'Academic Schedules', path: '/student-corner/schedules', description: 'Timetables' },
  { title: 'Curriculum', path: '/student-corner/curriculum', description: 'Syllabus' },
  { title: 'Results', path: '/student-corner/results', description: 'Exam results' },
  { title: 'Student Corner', path: '/student-corner', description: 'Student portal' },
  { title: 'Merit List / Toppers', path: '/student-corner/toppers', description: 'Top performers' },
  { title: 'Student Feedback', path: '/student-corner/feedback', description: 'Submit feedback' },
  { title: 'Suggestions', path: '/student-corner/suggestions', description: 'Submit suggestions' },
  { title: 'E-Learning', path: '/e-learning', description: 'Study materials' },
  { title: 'Training & Placement', path: '/training-placement', description: 'Placement cell' },
  { title: 'Admission', path: '/admission', description: 'Admission details' },
  { title: 'Events', path: '/events', description: 'College events' },
  { title: 'Skill Development', path: '/skill-development', description: 'Skill programs' },
];

export default function Header() {
  const [query, setQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const results = query.trim() === '' ? [] : searchablePages.filter(page => 
    page.title.toLowerCase().includes(query.toLowerCase()) || 
    page.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      navigate(results[0].path);
      setShowDropdown(false);
      setQuery('');
    } else if (query.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setShowDropdown(false);
      setQuery('');
    }
  };

  const handleItemClick = (path) => {
    navigate(path);
    setShowDropdown(false);
    setQuery('');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        
        {/* Left side: College Logo, College Name Text & Dept Logo */}
        <div className="flex flex-1 items-center justify-start gap-4">
          <Link to="/" className="flex-shrink-0 transition-transform hover:scale-[1.01]">
            <img 
              src="/Information/Logo/College logo.png" 
              alt="College Logo" 
              className="w-20 h-20 md:w-28 md:h-28 object-contain" 
            />
          </Link>
          <div className="flex flex-col items-start text-left hidden sm:flex">
            <p className="text-xs md:text-sm text-gray-600 font-bold tracking-wide uppercase">
              Ahmednagar Jilha Maratha Vidya Prasarak Samaj
            </p>
            <h2 className="text-sm md:text-xl font-bold text-red-700 mt-1">
              New Arts, Commerce and Science College Ahmednagar
            </h2>
            <h1 className="text-base md:text-3xl font-extrabold text-navy mt-1 tracking-wide">
              Department of Computer Science
            </h1>
          </div>
          {/* Department Logo — right next to the name */}
          <img 
            src="/Information/Logo/Department logo.png" 
            alt="Department Logo" 
            className="hidden sm:block w-20 h-20 md:w-28 md:h-28 object-contain flex-shrink-0"
            onError={(e) => {
              e.target.src = "/Information/Logo/College logo.png";
            }}
          />
        </div>

        {/* Right side: Tools and Department Logo */}
        <div className="flex shrink-0 items-center justify-end gap-4 md:gap-6">
          {/* Socials & A-Z List (hidden on small screens) */}
          <div className="hidden lg:flex flex-col items-end gap-3 text-gray-500 mt-1">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors" title="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="Twitter">
                <Twitter size={18} />
              </a>
            </div>

            {/* All Items & A-Z Search Autocomplete */}
            <div className="relative mt-1" ref={dropdownRef}>
              <form onSubmit={handleSearch} className="relative z-10 w-full flex justify-end">
                <input 
                  type="text" 
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowDropdown(true);
                  }}
                  onFocus={() => setShowDropdown(true)}
                  placeholder="Search A-Z & All Items..." 
                  className="text-xs border border-primary/30 rounded-full pl-3 pr-8 py-1.5 bg-primary-light focus:bg-white focus:outline-none focus:ring-1 focus:ring-navy w-44 md:w-56 transition-all shadow-sm" 
                />
                <button type="submit" className="absolute right-2 top-1.5 text-navy hover:text-primary transition-colors">
                  <Search size={14} />
                </button>
              </form>

              {/* Dropdown */}
              {showDropdown && query.trim() !== '' && (
                <div className="absolute top-10 right-0 w-64 md:w-80 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden z-[100] max-h-80 overflow-y-auto">
                  {results.length > 0 ? (
                    <ul className="py-2 text-left">
                      {results.map((result, idx) => (
                        <li key={idx}>
                          <button 
                            type="button"
                            onClick={() => handleItemClick(result.path)}
                            className="w-full text-left px-4 py-2 hover:bg-primary-light focus:bg-primary-light focus:outline-none border-b border-gray-50 last:border-0 transition-colors"
                          >
                           <p className="text-sm font-semibold text-navy">{result.title}</p>
                           <p className="text-xs text-gray-500 truncate">{result.description}</p>
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-500 text-center">
                      Press Enter to search all items...
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Department Logo moved to left side next to name */}
        </div>

      </div>
      
      {/* Mobile Text (Visible only on very small screens where middle text hides) */}
      <div className="sm:hidden px-4 pb-2 text-center">
        <p className="text-[10px] text-gray-600 font-semibold uppercase">Ahmednagar Jilha Maratha Vidya Prasarak Samaj</p>
        <h2 className="text-xs font-bold text-red-700 mt-1">New Arts, Commerce and Science College</h2>
        <h1 className="text-sm font-extrabold text-navy mt-1">Department of Computer Science</h1>
      </div>
    </header>
  );
}
