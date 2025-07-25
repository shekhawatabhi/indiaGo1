import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import PlaceholderPage from './pages/PlaceholderPage';
import Login from './pages/Login';
import Register from './pages/Register';
import FindJobs from './pages/FindJobs';
import PostJob from './pages/PostJob';
import About from './pages/About';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Job Routes */}
        <Route path="/jobs" element={<FindJobs />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/categories" element={<Categories />} />
        
        {/* User Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<PlaceholderPage title="Profile" description="Edit user profile and settings" />} />
        
        {/* Information Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<PlaceholderPage title="Help & Support" description="FAQ and support resources" />} />
        <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="Our privacy and data protection policy" />} />
        <Route path="/terms" element={<PlaceholderPage title="Terms of Service" description="Terms and conditions of use" />} />
        <Route path="/faq" element={<PlaceholderPage title="FAQ" description="Frequently asked questions" />} />
        
        {/* Catch-all route - should be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
