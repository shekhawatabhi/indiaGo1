import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Users,
  Heart,
  Target,
  Award,
  Shield,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Building,
  Calendar,
  MapPin
} from 'lucide-react';

export default function About() {
  const stats = [
    { number: '50,000+', label: 'Active Users', icon: Users },
    { number: '25,000+', label: 'Jobs Posted', icon: Award },
    { number: '15,000+', label: 'Successful Matches', icon: CheckCircle },
    { number: '100+', label: 'Cities Covered', icon: MapPin }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Empowering Communities',
      description: 'We believe in bridging the gap between job seekers and employers across every corner of India, especially in underserved communities.'
    },
    {
      icon: Shield,
      title: 'Trust & Safety',
      description: 'Every user is verified through Aadhaar and document checks to ensure safe and reliable connections for everyone.'
    },
    {
      icon: Globe,
      title: 'Inclusive Growth',
      description: 'From skilled professionals to daily wage workers, we provide opportunities for people from all backgrounds and skill levels.'
    },
    {
      icon: TrendingUp,
      title: 'Technology for Good',
      description: 'We leverage AI and modern technology to create meaningful employment opportunities and drive economic growth.'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      experience: '15+ years in HR Tech',
      description: 'Former executive at leading recruitment companies, passionate about solving India\'s employment challenges.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Priya Sharma',
      role: 'CTO',
      experience: '12+ years in Technology',
      description: 'Tech leader with expertise in AI/ML and scalable platforms, committed to building inclusive technology.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'Arjun Singh',
      role: 'Head of Operations',
      experience: '10+ years in Operations',
      description: 'Operations expert focused on creating seamless experiences for both job seekers and employers.',
      image: '/api/placeholder/150/150'
    }
  ];

  const milestones = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'Started with a vision to democratize job opportunities across India'
    },
    {
      year: '2023',
      title: 'First 10,000 Users',
      description: 'Reached our first major milestone with users across 20 cities'
    },
    {
      year: '2023',
      title: 'AI Matching Launch',
      description: 'Introduced AI-powered job matching to improve success rates'
    },
    {
      year: '2024',
      title: '50,000+ Active Users',
      description: 'Expanded to 100+ cities with over 25,000 successful job placements'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About IndiaGo
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Bridging the employment gap across India with technology, trust, and transparency
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm opacity-90">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Founded in 2022</span>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 mr-2" />
                <span>Bangalore, India</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2" />
                <span>4.5+ Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-brand-blue" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              To create a world where every person, regardless of their background or location, 
              has access to meaningful employment opportunities that can transform their lives and communities.
            </p>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Challenge We're Solving</h3>
                  <p className="text-gray-600 mb-4">
                    India has a massive workforce, but connecting job seekers with employers remains a challenge, 
                    especially for blue-collar and skilled workers. Traditional job platforms often overlook 
                    the needs of daily wage workers, artisans, and small business owners.
                  </p>
                  <p className="text-gray-600">
                    WorkIndia360 bridges this gap by providing a platform that's accessible, trustworthy, 
                    and designed specifically for the Indian workforce.
                  </p>
                </div>
                <div className="bg-brand-blue/10 rounded-xl p-6">
                  <h4 className="font-semibold text-brand-blue mb-3">Our Impact</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      15,000+ successful job placements
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Average income increase of 40%
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      99.5% safe transaction rate
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Available in 100+ cities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at WorkIndia360
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate individuals working to transform India's employment landscape
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center p-6">
                <CardContent className="p-0">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-brand-blue font-medium mb-2">{member.role}</p>
                  <Badge variant="secondary" className="mb-3">{member.experience}</Badge>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our mission to transform employment in India
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-orange text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're looking for work or looking to hire, be part of India's employment revolution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-4 text-lg"
              asChild
            >
              <Link to="/register">
                Start Your Journey
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              asChild
            >
              <Link to="/contact">
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
