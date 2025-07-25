import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import {
  Search,
  MapPin,
  Clock,
  IndianRupee,
  Filter,
  Briefcase,
  Star,
  Calendar,
  Users,
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
  Camera,
  Coffee,
  Package,
  Shirt,
  Flower,
  Baby,
  PaintBucket,
  Stethoscope,
  Music
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  category: string;
  description: string;
  requirements: string[];
  postedDate: string;
  applicants: number;
  rating: number;
  urgent: boolean;
  verified: boolean;
}

export default function FindJobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [salaryRange, setSalaryRange] = useState([5000, 50000]);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(6);

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Construction Worker',
      company: 'BuildTech Constructions',
      location: 'Delhi, India',
      salary: '₹15,000 - ₹25,000/month',
      type: 'Full-time',
      category: 'construction',
      description: 'Experienced construction worker needed for residential building project. Must have knowledge of basic construction tools and safety protocols.',
      requirements: ['2+ years experience', 'Physical fitness', 'Basic tool knowledge'],
      postedDate: '2 days ago',
      applicants: 23,
      rating: 4.2,
      urgent: true,
      verified: true
    },
    {
      id: '2',
      title: 'Delivery Driver',
      company: 'QuickDeliver Services',
      location: 'Mumbai, India',
      salary: '₹20,000 - ₹30,000/month',
      type: 'Full-time',
      category: 'delivery',
      description: 'Reliable delivery driver needed for food and package delivery. Own vehicle preferred but not mandatory.',
      requirements: ['Valid driving license', 'Own vehicle (preferred)', 'Good navigation skills'],
      postedDate: '1 day ago',
      applicants: 45,
      rating: 4.5,
      urgent: false,
      verified: true
    },
    {
      id: '3',
      title: 'House Cleaning',
      company: 'CleanHome Services',
      location: 'Bangalore, India',
      salary: '₹12,000 - ₹18,000/month',
      type: 'Part-time',
      category: 'housekeeping',
      description: 'Experienced house cleaner needed for residential cleaning services. Flexible working hours.',
      requirements: ['Experience in cleaning', 'Trustworthy', 'Available on weekends'],
      postedDate: '3 days ago',
      applicants: 31,
      rating: 4.0,
      urgent: false,
      verified: true
    },
    {
      id: '4',
      title: 'Electrician',
      company: 'PowerTech Solutions',
      location: 'Chennai, India',
      salary: '₹25,000 - ₹40,000/month',
      type: 'Full-time',
      category: 'electrical',
      description: 'Skilled electrician for residential and commercial electrical work. ITI certification required.',
      requirements: ['ITI certification', '3+ years experience', 'Electrical safety knowledge'],
      postedDate: '1 week ago',
      applicants: 18,
      rating: 4.7,
      urgent: true,
      verified: true
    },
    {
      id: '5',
      title: 'Math Tutor',
      company: 'EduSupport Tutoring',
      location: 'Pune, India',
      salary: '₹500 - ₹1,000/hour',
      type: 'Part-time',
      category: 'education',
      description: 'Math tutor needed for high school students. Evening hours, flexible schedule.',
      requirements: ['Graduate in Mathematics', 'Teaching experience', 'Good communication'],
      postedDate: '5 days ago',
      applicants: 12,
      rating: 4.3,
      urgent: false,
      verified: true
    },
    {
      id: '6',
      title: 'Web Developer',
      company: 'TechSolutions Pvt Ltd',
      location: 'Hyderabad, India',
      salary: '₹35,000 - ₹60,000/month',
      type: 'Full-time',
      category: 'digital',
      description: 'Frontend web developer for e-commerce projects. React experience required.',
      requirements: ['React.js expertise', 'Portfolio required', '2+ years experience'],
      postedDate: '4 days ago',
      applicants: 67,
      rating: 4.6,
      urgent: false,
      verified: true
    },
    {
      id: '7',
      title: 'Cook for Home',
      company: 'Family Kitchen Services',
      location: 'Mumbai, India',
      salary: '₹800 - ₹1,200/day',
      type: 'Part-time',
      category: 'cooking',
      description: 'Experienced cook needed for daily meal preparation. North Indian cuisine preferred.',
      requirements: ['Cooking experience', 'Food hygiene knowledge', 'Available daily'],
      postedDate: '1 day ago',
      applicants: 28,
      rating: 4.3,
      urgent: true,
      verified: true
    },
    {
      id: '8',
      title: 'Security Guard',
      company: 'SecureZone Services',
      location: 'Delhi, India',
      salary: '₹18,000 - ₹25,000/month',
      type: 'Full-time',
      category: 'security',
      description: 'Night shift security guard for residential complex. Must be alert and reliable.',
      requirements: ['Security experience', 'Night shift availability', 'Good physical fitness'],
      postedDate: '2 days ago',
      applicants: 19,
      rating: 4.1,
      urgent: false,
      verified: true
    },
    {
      id: '9',
      title: 'Nursing Assistant',
      company: 'CareFirst Medical',
      location: 'Bangalore, India',
      salary: '₹22,000 - ₹32,000/month',
      type: 'Full-time',
      category: 'healthcare',
      description: 'Patient care assistant for elderly care facility. Compassionate and skilled.',
      requirements: ['Nursing certificate', 'Patient care experience', 'Good communication'],
      postedDate: '3 days ago',
      applicants: 15,
      rating: 4.5,
      urgent: true,
      verified: true
    },
    {
      id: '10',
      title: 'Sales Executive',
      company: 'MegaMart Retail',
      location: 'Chennai, India',
      salary: '₹15,000 - ₹28,000/month',
      type: 'Full-time',
      category: 'retail',
      description: 'Customer service and sales in electronics showroom. Target-based incentives.',
      requirements: ['Sales experience', 'Customer handling', 'Local language fluency'],
      postedDate: '1 day ago',
      applicants: 42,
      rating: 4.0,
      urgent: false,
      verified: true
    },
    {
      id: '11',
      title: 'AC Repair Technician',
      company: 'CoolFix Services',
      location: 'Pune, India',
      salary: '₹25,000 - ₹40,000/month',
      type: 'Full-time',
      category: 'repair',
      description: 'AC installation and repair technician. Summer season high demand work.',
      requirements: ['AC repair experience', 'Technical knowledge', 'Own tools preferred'],
      postedDate: '2 hours ago',
      applicants: 8,
      rating: 4.4,
      urgent: true,
      verified: true
    },
    {
      id: '12',
      title: 'Hair Stylist',
      company: 'Glamour Beauty Salon',
      location: 'Mumbai, India',
      salary: '₹20,000 - ₹35,000/month',
      type: 'Full-time',
      category: 'beauty',
      description: 'Experienced hair stylist for premium salon. Modern styling techniques required.',
      requirements: ['Hair styling experience', 'Modern techniques', 'Creative skills'],
      postedDate: '1 day ago',
      applicants: 22,
      rating: 4.2,
      urgent: false,
      verified: true
    },
    {
      id: '13',
      title: 'Warehouse Worker',
      company: 'LogiFlow Warehousing',
      location: 'Gurgaon, India',
      salary: '₹600 - ₹900/day',
      type: 'Contract',
      category: 'warehouse',
      description: 'Daily loading and unloading work in warehouse. Physical work with good pay.',
      requirements: ['Physical fitness', 'Lifting capability', 'Punctuality'],
      postedDate: '3 hours ago',
      applicants: 35,
      rating: 4.0,
      urgent: true,
      verified: true
    },
    {
      id: '14',
      title: 'Gardener',
      company: 'Green Spaces Landscaping',
      location: 'Bangalore, India',
      salary: '₹500 - ₹800/day',
      type: 'Part-time',
      category: 'gardening',
      description: 'Garden maintenance for residential societies. Plant care and landscaping.',
      requirements: ['Gardening knowledge', 'Plant care skills', 'Available mornings'],
      postedDate: '1 day ago',
      applicants: 12,
      rating: 4.3,
      urgent: false,
      verified: true
    },
    {
      id: '15',
      title: 'Babysitter',
      company: 'Little Angels Childcare',
      location: 'Delhi, India',
      salary: '₹400 - ₹700/hour',
      type: 'Part-time',
      category: 'childcare',
      description: 'Evening babysitting for working parents. Experience with toddlers preferred.',
      requirements: ['Childcare experience', 'Patient nature', 'Available evenings'],
      postedDate: '5 hours ago',
      applicants: 18,
      rating: 4.7,
      urgent: true,
      verified: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories', icon: Briefcase },
    { value: 'construction', label: 'Construction', icon: Hammer },
    { value: 'delivery', label: 'Delivery', icon: Truck },
    { value: 'housekeeping', label: 'Housekeeping', icon: Home },
    { value: 'electrical', label: 'Electrical', icon: Zap },
    { value: 'education', label: 'Education', icon: GraduationCap },
    { value: 'digital', label: 'Digital Services', icon: Laptop },
    { value: 'driving', label: 'Driving', icon: Car },
    { value: 'cooking', label: 'Cooking & Food', icon: ChefHat },
    { value: 'security', label: 'Security', icon: Shield },
    { value: 'healthcare', label: 'Healthcare', icon: Heart },
    { value: 'retail', label: 'Retail & Sales', icon: ShoppingBag },
    { value: 'repair', label: 'Repair & Maintenance', icon: Wrench },
    { value: 'beauty', label: 'Beauty & Salon', icon: Scissors },
    { value: 'photography', label: 'Photography', icon: Camera },
    { value: 'hospitality', label: 'Hotels & Restaurants', icon: Coffee },
    { value: 'warehouse', label: 'Warehouse', icon: Package },
    { value: 'textile', label: 'Textile & Garments', icon: Shirt },
    { value: 'gardening', label: 'Gardening', icon: Flower },
    { value: 'childcare', label: 'Childcare', icon: Baby },
    { value: 'painting', label: 'Painting', icon: PaintBucket },
    { value: 'nursing', label: 'Nursing', icon: Stethoscope },
    { value: 'entertainment', label: 'Entertainment', icon: Music }
  ];

  const locations = [
    'All Locations', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad', 'Kolkata', 'Ahmedabad', 'Jaipur'
  ];

  const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Freelance'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || job.location.includes(selectedLocation);
    const matchesType = selectedType === 'all' || job.type === selectedType;

    return matchesSearch && matchesCategory && matchesLocation && matchesType;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Reset pagination when filters change
  const resetPagination = () => {
    setCurrentPage(1);
  };

  // Reset pagination when search/filters change
  React.useEffect(() => {
    resetPagination();
  }, [searchTerm, selectedCategory, selectedLocation, selectedType]);

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat ? cat.icon : Briefcase;
  };

  return (
    <Layout>
      <div className="bg-gray-50 min-h-screen">
        {/* Header Section */}
        <section className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Next Opportunity</h1>
              <p className="text-lg text-gray-600 mb-6">
                Discover {jobs.length}+ job opportunities across India
              </p>
              
              {/* Search Bar */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search jobs, companies, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Button 
                  onClick={() => setShowFilters(!showFilters)}
                  variant="outline"
                  className="h-12 px-6"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
                <Button className="bg-brand-blue hover:bg-brand-blue/90 h-12 px-8">
                  Search Jobs
                </Button>
              </div>

              {/* Quick Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 6).map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.value
                        ? 'bg-brand-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <category.icon className="w-4 h-4 mr-2" />
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <div className="lg:w-1/4">
                <Card>
                  <CardHeader>
                    <CardTitle>Filters</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Location Filter */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Location</Label>
                      <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {locations.map((location) => (
                            <SelectItem key={location} value={location.toLowerCase().replace(' ', '')}>
                              {location}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Job Type Filter */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">Job Type</Label>
                      <Select value={selectedType} onValueChange={setSelectedType}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {jobTypes.map((type) => (
                            <SelectItem key={type} value={type.toLowerCase().replace(' ', '')}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Salary Range */}
                    <div>
                      <Label className="text-sm font-medium mb-2 block">
                        Salary Range: ₹{salaryRange[0].toLocaleString()} - ₹{salaryRange[1].toLocaleString()}
                      </Label>
                      <Slider
                        value={salaryRange}
                        onValueChange={setSalaryRange}
                        max={100000}
                        min={5000}
                        step={5000}
                        className="mt-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Job Listings */}
            <div className={showFilters ? 'lg:w-3/4' : 'w-full'}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {filteredJobs.length} Jobs Found
                  </h2>
                  <p className="text-gray-600">Showing relevant results for your search</p>
                </div>
                <Select defaultValue="recent">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Most Recent</SelectItem>
                    <SelectItem value="salary">Salary: High to Low</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="applicants">Least Applicants</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-6">
                {currentJobs.map((job) => {
                  const CategoryIcon = getCategoryIcon(job.category);
                  return (
                    <Card key={job.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CategoryIcon className="w-6 h-6 text-brand-blue" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                                  {job.urgent && (
                                    <Badge variant="destructive" className="text-xs">
                                      Urgent
                                    </Badge>
                                  )}
                                  {job.verified && (
                                    <Badge variant="secondary" className="text-xs">
                                      ✓ Verified
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-brand-blue font-medium mb-2">{job.company}</p>
                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                                  <div className="flex items-center gap-1">
                                    <MapPin className="w-4 h-4" />
                                    {job.location}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <IndianRupee className="w-4 h-4" />
                                    {job.salary}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {job.type}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    {job.rating}
                                  </div>
                                </div>
                                <p className="text-gray-700 mb-3 line-clamp-2">{job.description}</p>
                                <div className="flex flex-wrap gap-1 mb-3">
                                  {job.requirements.slice(0, 3).map((req, index) => (
                                    <Badge key={index} variant="outline" className="text-xs">
                                      {req}
                                    </Badge>
                                  ))}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    Posted {job.postedDate}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {job.applicants} applicants
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 md:min-w-[120px]">
                            <Button className="bg-brand-blue hover:bg-brand-blue/90">
                              Apply Now
                            </Button>
                            <Button variant="outline" size="sm">
                              Save Job
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex gap-2 items-center">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>

                    {/* Page numbers */}
                    {Array.from({ length: totalPages }, (_, index) => {
                      const pageNumber = index + 1;
                      const isActive = pageNumber === currentPage;

                      // Show first page, last page, current page and pages around current
                      const showPage = pageNumber === 1 ||
                                      pageNumber === totalPages ||
                                      Math.abs(pageNumber - currentPage) <= 1;

                      if (!showPage) {
                        // Show ellipsis for gaps
                        if (pageNumber === 2 && currentPage > 4) {
                          return <span key={pageNumber} className="px-2">...</span>;
                        }
                        if (pageNumber === totalPages - 1 && currentPage < totalPages - 3) {
                          return <span key={pageNumber} className="px-2">...</span>;
                        }
                        return null;
                      }

                      return (
                        <Button
                          key={pageNumber}
                          variant={isActive ? "default" : "outline"}
                          className={isActive ? "bg-brand-blue hover:bg-brand-blue/90" : ""}
                          onClick={() => handlePageChange(pageNumber)}
                        >
                          {pageNumber}
                        </Button>
                      );
                    })}

                    <Button
                      variant="outline"
                      onClick={handleNext}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>

                  {/* Page info */}
                  <div className="ml-4 flex items-center text-sm text-gray-600">
                    Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length} jobs
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
