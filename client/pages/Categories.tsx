import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  Search,
  Hammer,
  Car,
  Home,
  Zap,
  Truck,
  GraduationCap,
  Laptop,
  ChefHat,
  Shield,
  Heart,
  ShoppingBag,
  Wrench,
  Scissors,
  Music,
  Camera,
  Briefcase,
  ArrowRight,
  TrendingUp,
  MapPin,
  Users
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  icon: any;
  jobCount: number;
  avgSalary: string;
  trending: boolean;
  subcategories: string[];
  locations: string[];
}

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');

  const categories: Category[] = [
    {
      id: 'construction',
      name: 'Construction & Building',
      description: 'Skilled and unskilled construction work including masonry, carpentry, and general labor',
      icon: Hammer,
      jobCount: 2450,
      avgSalary: '₹15,000 - ₹35,000',
      trending: true,
      subcategories: ['Mason', 'Carpenter', 'Painter', 'Electrician', 'Plumber', 'General Labor'],
      locations: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Pune']
    },
    {
      id: 'driving',
      name: 'Driving & Transportation',
      description: 'Professional driving services for personal, commercial, and delivery purposes',
      icon: Car,
      jobCount: 1890,
      avgSalary: '₹18,000 - ₹45,000',
      trending: true,
      subcategories: ['Personal Driver', 'Taxi Driver', 'Truck Driver', 'Delivery Driver', 'Chauffeur'],
      locations: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune']
    },
    {
      id: 'housekeeping',
      name: 'Housekeeping & Cleaning',
      description: 'Residential and commercial cleaning services including deep cleaning and maintenance',
      icon: Home,
      jobCount: 3200,
      avgSalary: '₹12,000 - ₹25,000',
      trending: false,
      subcategories: ['House Cleaning', 'Office Cleaning', 'Deep Cleaning', 'Maintenance', 'Laundry'],
      locations: ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Pune']
    },
    {
      id: 'electrical',
      name: 'Electrical & Plumbing',
      description: 'Skilled electrical and plumbing services for residential and commercial properties',
      icon: Zap,
      jobCount: 1560,
      avgSalary: '₹20,000 - ₹50,000',
      trending: true,
      subcategories: ['Electrician', 'Plumber', 'AC Repair', 'Appliance Repair', 'Wiring'],
      locations: ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai']
    },
    {
      id: 'delivery',
      name: 'Delivery & Courier',
      description: 'Package delivery, food delivery, and courier services across cities',
      icon: Truck,
      jobCount: 2890,
      avgSalary: '₹15,000 - ₹35,000',
      trending: true,
      subcategories: ['Food Delivery', 'Package Delivery', 'E-commerce Delivery', 'Express Courier'],
      locations: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Pune']
    },
    {
      id: 'education',
      name: 'Teaching & Tutoring',
      description: 'Educational services including home tutoring, coaching, and skill training',
      icon: GraduationCap,
      jobCount: 1240,
      avgSalary: '₹500 - ₹2,000/hour',
      trending: false,
      subcategories: ['Home Tutor', 'Online Tutor', 'Language Teacher', 'Music Teacher', 'Skill Trainer'],
      locations: ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Pune']
    },
    {
      id: 'digital',
      name: 'Digital & IT Services',
      description: 'Technology services including web development, digital marketing, and IT support',
      icon: Laptop,
      jobCount: 980,
      avgSalary: '₹25,000 - ₹80,000',
      trending: true,
      subcategories: ['Web Development', 'Digital Marketing', 'Data Entry', 'Content Writing', 'IT Support'],
      locations: ['Bangalore', 'Hyderabad', 'Mumbai', 'Delhi', 'Pune']
    },
    {
      id: 'food',
      name: 'Cooking & Food Service',
      description: 'Professional cooking services for homes, events, and restaurants',
      icon: ChefHat,
      jobCount: 1650,
      avgSalary: '₹18,000 - ₹40,000',
      trending: false,
      subcategories: ['Home Cook', 'Catering', 'Restaurant Cook', 'Baker', 'Food Preparation'],
      locations: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune']
    },
    {
      id: 'security',
      name: 'Security & Safety',
      description: 'Security services for residential complexes, offices, and events',
      icon: Shield,
      jobCount: 890,
      avgSalary: '₹15,000 - ₹30,000',
      trending: false,
      subcategories: ['Security Guard', 'Watchman', 'Event Security', 'Personal Security'],
      locations: ['Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai']
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Nursing',
      description: 'Healthcare support services including nursing care and elderly care',
      icon: Heart,
      jobCount: 760,
      avgSalary: '₹20,000 - ₹45,000',
      trending: true,
      subcategories: ['Nurse', 'Caregiver', 'Physiotherapist', 'Medical Assistant', 'Elderly Care'],
      locations: ['Bangalore', 'Mumbai', 'Delhi', 'Chennai', 'Hyderabad']
    },
    {
      id: 'retail',
      name: 'Retail & Sales',
      description: 'Sales and customer service roles in retail stores and showrooms',
      icon: ShoppingBag,
      jobCount: 1340,
      avgSalary: '₹12,000 - ₹35,000',
      trending: false,
      subcategories: ['Sales Executive', 'Store Assistant', 'Cashier', 'Customer Service', 'Promoter'],
      locations: ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune']
    },
    {
      id: 'repair',
      name: 'Repair & Maintenance',
      description: 'Repair services for electronics, appliances, and general maintenance',
      icon: Wrench,
      jobCount: 680,
      avgSalary: '₹18,000 - ₹40,000',
      trending: false,
      subcategories: ['Electronics Repair', 'Appliance Repair', 'Mobile Repair', 'Computer Repair'],
      locations: ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad']
    }
  ];

  const trendingCategories = categories.filter(cat => cat.trending);
  
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.subcategories.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Job Categories
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Explore opportunities across {categories.length}+ different sectors
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-white text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Trending Categories */}
        {searchTerm === '' && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-brand-orange" />
              <h2 className="text-2xl font-bold text-gray-900">Trending Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-shadow group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-brand-orange" />
                      </div>
                      <Badge className="bg-brand-orange text-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Jobs Available:</span>
                        <span className="font-medium">{category.jobCount.toLocaleString()}+</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Avg Salary:</span>
                        <span className="font-medium">{category.avgSalary}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full mt-4 bg-brand-blue hover:bg-brand-blue/90">
                      <Link to={`/jobs?category=${category.id}`}>
                        View Jobs
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Categories */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {searchTerm ? `Search Results (${filteredCategories.length})` : 'All Categories'}
            </h2>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Briefcase className="w-4 h-4" />
              {categories.reduce((sum, cat) => sum + cat.jobCount, 0).toLocaleString()}+ total jobs
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
                      <category.icon className="w-6 h-6 text-brand-blue" />
                    </div>
                    {category.trending && (
                      <Badge variant="secondary">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Hot
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-brand-blue transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                  
                  {/* Stats */}
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Jobs Available:</span>
                      <span className="font-medium">{category.jobCount.toLocaleString()}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Avg Salary:</span>
                      <span className="font-medium">{category.avgSalary}</span>
                    </div>
                  </div>

                  {/* Subcategories */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">Popular roles:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.subcategories.slice(0, 3).map((sub) => (
                        <Badge key={sub} variant="outline" className="text-xs">
                          {sub}
                        </Badge>
                      ))}
                      {category.subcategories.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{category.subcategories.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Top Locations */}
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-700 mb-2">Top locations:</h4>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <MapPin className="w-3 h-3" />
                      {category.locations.slice(0, 3).join(', ')}
                      {category.locations.length > 3 && ` +${category.locations.length - 3}`}
                    </div>
                  </div>

                  <Button asChild className="w-full bg-brand-blue hover:bg-brand-blue/90">
                    <Link to={`/jobs?category=${category.id}`}>
                      View Jobs
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCategories.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No categories found</h3>
              <p className="text-gray-600 mb-4">
                Try searching with different keywords or browse all categories
              </p>
              <Button onClick={() => setSearchTerm('')} variant="outline">
                View All Categories
              </Button>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-gradient-to-r from-brand-blue to-brand-orange rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Don't See Your Category?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            We're constantly adding new job categories. Post your requirement and we'll help you find the right workers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100" asChild>
              <Link to="/post-job">
                Post Your Job
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/contact">
                Request New Category
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
}
