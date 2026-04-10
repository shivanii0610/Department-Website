import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { DataProvider } from './context/DataContext';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NoticeTicker from './components/NoticeTicker';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutCollege from './pages/AboutCollege';
import AboutDepartment from './pages/AboutDepartment';
import Administration from './pages/Administration';
import AcademicSchedules from './pages/AcademicSchedules';
import Curriculum from './pages/Curriculum';
import Results from './pages/Results';
import Toppers from './pages/Toppers';
import Feedback from './pages/Feedback';
import Suggestions from './pages/Suggestions';
import ELearning from './pages/ELearning';
import TrainingPlacement from './pages/TrainingPlacement';
import Admission from './pages/Admission';
import Events from './pages/Events';
import SkillDevelopment from './pages/SkillDevelopment';
import SearchPage from './pages/Search';

// Admin
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <NoticeTicker />
      <main className="min-h-[60vh]">{children}</main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthProvider>
        <DataProvider>
          <ScrollToTop />
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
            <Route path="/about" element={<Navigate to="/about/college" replace />} />
            <Route path="/about/college" element={<PublicLayout><AboutCollege /></PublicLayout>} />
            <Route path="/about/department" element={<PublicLayout><AboutDepartment /></PublicLayout>} />
            <Route path="/administration" element={<PublicLayout><Administration /></PublicLayout>} />

            {/* Student Corner */}
            <Route path="/student-corner" element={<Navigate to="/student-corner/schedules" replace />} />
            <Route path="/student-corner/schedules" element={<PublicLayout><AcademicSchedules /></PublicLayout>} />
            <Route path="/student-corner/curriculum" element={<PublicLayout><Curriculum /></PublicLayout>} />
            <Route path="/student-corner/results" element={<PublicLayout><Results /></PublicLayout>} />
            <Route path="/student-corner/toppers" element={<PublicLayout><Toppers /></PublicLayout>} />
            <Route path="/student-corner/feedback" element={<PublicLayout><Feedback /></PublicLayout>} />
            <Route path="/student-corner/suggestions" element={<PublicLayout><Suggestions /></PublicLayout>} />

            {/* Other pages */}
            <Route path="/e-learning" element={<PublicLayout><ELearning /></PublicLayout>} />
            <Route path="/training-placement" element={<PublicLayout><TrainingPlacement /></PublicLayout>} />
            <Route path="/admission" element={<PublicLayout><Admission /></PublicLayout>} />
            <Route path="/events" element={<PublicLayout><Events /></PublicLayout>} />
            <Route path="/skill-development" element={<PublicLayout><SkillDevelopment /></PublicLayout>} />

            {/* Admin */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* Sitemap & Search */}
            <Route path="/sitemap" element={<PublicLayout><SitemapPage /></PublicLayout>} />
            <Route path="/search" element={<PublicLayout><SearchPage /></PublicLayout>} />

            {/* 404 */}
            <Route path="*" element={<PublicLayout><NotFound /></PublicLayout>} />
          </Routes>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

function SitemapPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-navy mb-8">Sitemap</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-navy mb-3">Main</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="text-primary hover:underline">Home</a></li>
            <li><a href="/about/college" className="text-primary hover:underline">About College</a></li>
            <li><a href="/about/department" className="text-primary hover:underline">About Department</a></li>
            <li><a href="/administration" className="text-primary hover:underline">Administration</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-navy mb-3">Student Corner</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/student-corner/schedules" className="text-primary hover:underline">Academic Schedules</a></li>
            <li><a href="/student-corner/curriculum" className="text-primary hover:underline">Curriculum</a></li>
            <li><a href="/student-corner/results" className="text-primary hover:underline">Results</a></li>
            <li><a href="/student-corner/toppers" className="text-primary hover:underline">Merit List / Toppers</a></li>
            <li><a href="/student-corner/feedback" className="text-primary hover:underline">Student Feedback</a></li>
            <li><a href="/student-corner/suggestions" className="text-primary hover:underline">Suggestions</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-navy mb-3">More</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/e-learning" className="text-primary hover:underline">E-Learning</a></li>
            <li><a href="/training-placement" className="text-primary hover:underline">Training & Placement</a></li>
            <li><a href="/admission" className="text-primary hover:underline">Admission</a></li>
            <li><a href="/events" className="text-primary hover:underline">Events</a></li>
            <li><a href="/skill-development" className="text-primary hover:underline">Skill Development</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-navy mb-4">404</h1>
      <p className="text-gray-500 text-lg mb-6">Page not found</p>
      <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-hover transition-colors">
        Go Home
      </a>
    </div>
  );
}

export default App;
