import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout } from '@/components/Layout';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Users,
  User,
  CheckCircle,
  Hammer,
  Car,
  Home,
  Zap,
  Truck,
  GraduationCap,
  Laptop,
  Star,
  ArrowRight,
  UserCheck,
  FileText,
  MessageCircle,
  CreditCard,
  Shield,
  Clock,
  Award,
} from 'lucide-react';

export default function Index() {
  const workCategories = [
    { name: 'Construction', icon: Hammer, jobs: '2,450+', color: 'bg-orange-100 text-orange-600' },
    { name: 'Driving', icon: Car, jobs: '1,890+', color: 'bg-blue-100 text-blue-600' },
    { name: 'Housekeeping', icon: Home, jobs: '3,200+', color: 'bg-green-100 text-green-600' },
    { name: 'Electricians', icon: Zap, jobs: '1,560+', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Delivery', icon: Truck, jobs: '2,890+', color: 'bg-purple-100 text-purple-600' },
    { name: 'Home Tutors', icon: GraduationCap, jobs: '1,240+', color: 'bg-pink-100 text-pink-600' },
    { name: 'Digital Services', icon: Laptop, jobs: '980+', color: 'bg-indigo-100 text-indigo-600' },
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: 'Create Profile',
      description: 'Sign up and create your professional profile with skills and experience',
      icon: UserCheck,
    },
    {
      step: 2,
      title: 'Choose Role',
      description: 'Select if you\'re looking for work or hiring workers',
      icon: FileText,
    },
    {
      step: 3,
      title: 'Post or Browse',
      description: 'Post job requirements or browse available opportunities',
      icon: Search,
    },
    {
      step: 4,
      title: 'Connect Securely',
      description: 'Chat, verify, and complete work with secure payments',
      icon: Shield,
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Construction Worker',
      location: 'Delhi',
      review: 'Found 3 construction jobs in my area within a week. Payment was secure and on time.',
      rating: 5,
      avatar: '/api/placeholder/64/64',
    },
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      location: 'Mumbai',
      review: 'Hired a great electrician for my home. The verification process made me feel safe.',
      rating: 5,
      avatar: '/api/placeholder/64/64',
    },
    {
      name: 'Mohammad Ali',
      role: 'Driver',
      location: 'Bangalore',
      review: 'WorkIndia360 helped me find regular driving gigs. Easy to use, even for someone like me.',
      rating: 5,
      avatar: '/api/placeholder/64/64',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Verified Users',
      description: 'All users are verified with Aadhaar and document checks',
    },
    {
      icon: Clock,
      title: 'Real-time Matching',
      description: 'AI-powered job matching based on skills and location',
    },
    {
      icon: MessageCircle,
      title: 'Secure Chat',
      description: 'Built-in messaging with phone number protection',
    },
    {
      icon: CreditCard,
      title: 'Safe Payments',
      description: 'UPI, QR code payments with dispute protection',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-blue to-brand-blue/80 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Hope begins with a{' '}
              <span className="text-brand-orange">Job</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 opacity-90">
              Connecting opportunities across India
            </p>
            <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
              Your trusted platform for daily job opportunities across India.
              From construction to digital services, find work or hire talent with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-4 text-lg"
                asChild
              >
                <Link to="/post-job">
                  Post a Job
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg transition-all duration-200"
                asChild
              >
                <Link to="/jobs" className="flex items-center">
                  Find Work
                  <Search className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-8 text-sm opacity-90">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Free to Use</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>Verified Users</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>Secure Payments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in 4 simple steps and connect with opportunities across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Work Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore thousands of opportunities across different sectors
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {workCategories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <Badge variant="secondary" className="text-sm">
                    {category.jobs} jobs
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/categories">
                View All Categories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose WorkIndia360?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built specifically for the Indian workforce with safety and trust in mind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real people, real results from across India
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <User className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700">"{testimonial.review}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of job seekers and employers who trust IndiaGo for their daily work needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg"
              asChild
            >
              <Link to="/register">
                Register Now - It's Free
                <UserCheck className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-4 text-lg transition-all duration-200"
              asChild
            >
              <Link to="/contact" className="flex items-center">
                Need Help? Contact Us
                <MessageCircle className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
