import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from './ui/button';
import { Avatar, AvatarFallback } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Menu, X, User, Briefcase, MapPin, MessageCircle, Settings, LogOut } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, userProfile, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9aee0458e8664a409d6c4021d51597c9%2F36e1014bdc0b44aeba6bde132a10f067?format=webp&width=800"
                alt="IndiaGo Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-gray-900">IndiaGo</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/jobs" className="text-gray-600 hover:text-brand-blue transition-colors">
                Find Jobs
              </Link>
              <Link to="/post-job" className="text-gray-600 hover:text-brand-blue transition-colors">
                Post Job
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-brand-blue transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-brand-blue transition-colors">
                Contact
              </Link>
            </nav>

            {/* Right Side - Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-brand-blue text-white">
                          {userProfile ? `${userProfile.firstName[0]}${userProfile.lastName[0]}` : 'U'}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <div className="flex items-center justify-start gap-2 p-2">
                      <div className="flex flex-col space-y-1 leading-none">
                        <p className="font-medium">{userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : 'User'}</p>
                        <p className="w-[200px] truncate text-sm text-gray-600">
                          {currentUser.email}
                        </p>
                      </div>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard">
                        <User className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button size="sm" className="bg-brand-blue hover:bg-brand-blue/90" asChild>
                    <Link to="/register">Register</Link>
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <Link
                to="/jobs"
                className="block px-3 py-2 text-gray-600 hover:text-brand-blue transition-colors"
                onClick={toggleMenu}
              >
                Find Jobs
              </Link>
              <Link
                to="/post-job"
                className="block px-3 py-2 text-gray-600 hover:text-brand-blue transition-colors"
                onClick={toggleMenu}
              >
                Post Job
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-brand-blue transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-brand-blue transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                {currentUser ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-brand-blue text-white">
                          {userProfile ? `${userProfile.firstName[0]}${userProfile.lastName[0]}` : 'U'}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : 'User'}</p>
                        <p className="text-xs text-gray-600 truncate">{currentUser.email}</p>
                      </div>
                    </div>
                    <Link
                      to="/dashboard"
                      className="block px-3 py-2 text-gray-600 hover:text-brand-blue transition-colors"
                      onClick={toggleMenu}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-3 py-2 text-gray-600 hover:text-brand-blue transition-colors"
                      onClick={toggleMenu}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        toggleMenu();
                      }}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-brand-blue transition-colors"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link to="/login" onClick={toggleMenu}>Login</Link>
                    </Button>
                    <Button size="sm" className="flex-1 bg-brand-blue hover:bg-brand-blue/90" asChild>
                      <Link to="/register" onClick={toggleMenu}>Register</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9aee0458e8664a409d6c4021d51597c9%2F36e1014bdc0b44aeba6bde132a10f067?format=webp&width=800"
                  alt="IndiaGo Logo"
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold">IndiaGo</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Hope begins with a job — Connecting opportunities across every city and village in India.
                Your trusted platform for finding work and hiring talent.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-white border-gray-600 hover:bg-gray-800 hover:border-gray-500 transition-all duration-200"
                >
                  Download App
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/jobs" className="hover:text-white transition-colors">Find Jobs</Link></li>
                <li><Link to="/post-job" className="hover:text-white transition-colors">Post Job</Link></li>
                <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
                <li><Link to="/help" className="hover:text-white transition-colors">Help & Support</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IndiaGo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
