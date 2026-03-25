import { useLocation, Link } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';

const searchablePages = [
  { title: 'Home', path: '/', description: 'Main landing page of the college.' },
  { title: 'About College', path: '/about/college', description: 'Information about the college history and vision.' },
  { title: 'About Department', path: '/about/department', description: 'Information about the Computer Science department.' },
  { title: 'Administration', path: '/administration', description: 'Administrative staff and policies.' },
  { title: 'Academic Schedules', path: '/student-corner/schedules', description: 'Timetables and academic calendar.' },
  { title: 'Curriculum', path: '/student-corner/curriculum', description: 'Course layout and syllabus.' },
  { title: 'Results', path: '/student-corner/results', description: 'Examination results.' },
  { title: 'Student Corner', path: '/student-corner', description: 'Student portal including schedules, results, topics, feedback.' },
  { title: 'Merit List / Toppers', path: '/student-corner/toppers', description: 'List of academic top performers.' },
  { title: 'Student Feedback', path: '/student-corner/feedback', description: 'Submit feedback regarding courses and faculty.' },
  { title: 'Suggestions', path: '/student-corner/suggestions', description: 'Submit suggestions for department improvement.' },
  { title: 'E-Learning', path: '/e-learning', description: 'Online study materials and resources.' },
  { title: 'Training & Placement', path: '/training-placement', description: 'Placement cell and internship opportunities.' },
  { title: 'Admission', path: '/admission', description: 'Admission procedure and criteria.' },
  { title: 'Events', path: '/events', description: 'Upcoming and past college events.' },
  { title: 'Skill Development', path: '/skill-development', description: 'Skill enhancement programs.' },
];

export default function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || '';

  const results = query.trim() === '' ? [] : searchablePages.filter(page => 
    page.title.toLowerCase().includes(query.toLowerCase()) || 
    page.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 min-h-[50vh]">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-50 rounded-full text-blue-800">
            <SearchIcon className="w-6 h-6" />
        </div>
        <h1 className="text-3xl font-bold text-navy">Search Results</h1>
      </div>

      <div className="mb-6 border-b border-gray-200 pb-4">
        <p className="text-gray-600 text-lg">
          Showing results for: <span className="font-semibold text-blue-800">"{query}"</span>
        </p>
      </div>

      {query.trim() === '' ? (
        <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-xl text-gray-500">Please enter a search term.</p>
        </div>
      ) : results.length > 0 ? (
        <div className="space-y-4">
          {results.map((result, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all">
              <Link to={result.path} className="text-xl font-bold text-blue-800 hover:text-blue-600 mb-2 block">
                {result.title}
              </Link>
              <p className="text-gray-600 mb-3">{result.description}</p>
              <Link to={result.path} className="text-sm font-medium text-green-700 hover:underline inline-flex items-center gap-1">
                {window.location.origin}{result.path}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
          <SearchIcon className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-xl text-gray-600 font-medium">No results found for "{query}".</p>
          <p className="text-gray-500 mt-2">Try searching for different keywords like 'Admission', 'Results', or 'Events'.</p>
        </div>
      )}
    </div>
  );
}
