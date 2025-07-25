import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Link } from 'react-router-dom';
import {
  User,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  TrendingUp,
  Star,
  CheckCircle,
  XCircle,
  Eye,
  MessageCircle,
  IndianRupee,
  Users,
  Settings,
  Edit,
  Plus,
  Filter,
  MoreHorizontal,
  Award,
  Shield
} from 'lucide-react';

export default function Dashboard() {
  const [userType] = useState<'seeker' | 'provider'>('seeker'); // This would come from auth context in real app

  // Mock user data
  const userData = {
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    location: 'Delhi, India',
    profileCompleteness: 85,
    joinDate: '2024-01-15',
    verified: true,
    avatar: 'RK'
  };

  // Mock job seeker specific data
  const jobSeekerData = {
    skills: ['Construction', 'Masonry', 'Carpentry'],
    experience: '5+ years',
    applications: [
      {
        id: '1',
        jobTitle: 'Construction Worker',
        company: 'BuildTech Constructions',
        location: 'Delhi',
        appliedDate: '2024-01-20',
        status: 'pending',
        salary: '₹25,000/month'
      },
      {
        id: '2',
        jobTitle: 'Mason',
        company: 'Delhi Housing Project',
        location: 'Delhi',
        appliedDate: '2024-01-18',
        status: 'interview',
        salary: '₹22,000/month'
      },
      {
        id: '3',
        jobTitle: 'Carpenter',
        company: 'Wood Works Ltd',
        location: 'Gurgaon',
        appliedDate: '2024-01-15',
        status: 'accepted',
        salary: '₹28,000/month'
      },
      {
        id: '4',
        jobTitle: 'Site Supervisor',
        company: 'Metro Construction',
        location: 'Delhi',
        appliedDate: '2024-01-12',
        status: 'rejected',
        salary: '₹35,000/month'
      }
    ],
    savedJobs: 8,
    profileViews: 45,
    totalApplications: 12
  };

  // Mock job provider specific data
  const jobProviderData = {
    jobsPosted: [
      {
        id: '1',
        title: 'Electrician Needed',
        location: 'Mumbai',
        postedDate: '2024-01-22',
        status: 'active',
        applicants: 23,
        views: 156,
        salary: '₹30,000/month'
      },
      {
        id: '2',
        title: 'House Cleaning Service',
        location: 'Mumbai',
        postedDate: '2024-01-20',
        status: 'active',
        applicants: 45,
        views: 234,
        salary: '₹18,000/month'
      },
      {
        id: '3',
        title: 'Delivery Driver',
        location: 'Mumbai',
        postedDate: '2024-01-18',
        status: 'closed',
        applicants: 67,
        views: 289,
        salary: '₹25,000/month'
      }
    ],
    totalHires: 8,
    activeJobs: 2,
    totalSpent: '₹1,45,000'
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'interview': return 'bg-blue-100 text-blue-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'active': return 'bg-green-100 text-green-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'interview': return <MessageCircle className="w-4 h-4" />;
      case 'accepted': return <CheckCircle className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      case 'active': return <CheckCircle className="w-4 h-4" />;
      case 'closed': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarFallback className="bg-brand-blue text-white text-lg font-semibold">
                    {userData.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
                    {userData.verified && (
                      <Badge className="bg-green-100 text-green-800">
                        <Shield className="w-3 h-3 mr-1" />
                        Verified
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {userData.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Joined {new Date(userData.joinDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" asChild>
                  <Link to="/profile">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Link>
                </Button>
                <Button className="bg-brand-blue hover:bg-brand-blue/90" asChild>
                  <Link to={userType === 'seeker' ? '/jobs' : '/post-job'}>
                    <Plus className="w-4 h-4 mr-2" />
                    {userType === 'seeker' ? 'Find Jobs' : 'Post Job'}
                  </Link>
                </Button>
              </div>
            </div>

            {/* Profile Completion */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-blue-900">Profile Completion</h3>
                <span className="text-sm font-medium text-blue-900">{userData.profileCompleteness}%</span>
              </div>
              <Progress value={userData.profileCompleteness} className="mb-2" />
              <p className="text-sm text-blue-700">
                Complete your profile to get 3x more job opportunities and better matches.
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {userType === 'seeker' ? (
            // Job Seeker Dashboard
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Total Applications</p>
                        <p className="text-2xl font-bold text-gray-900">{jobSeekerData.totalApplications}</p>
                      </div>
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-brand-blue" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Profile Views</p>
                        <p className="text-2xl font-bold text-gray-900">{jobSeekerData.profileViews}</p>
                      </div>
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Eye className="w-6 h-6 text-green-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Saved Jobs</p>
                        <p className="text-2xl font-bold text-gray-900">{jobSeekerData.savedJobs}</p>
                      </div>
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-yellow-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">Success Rate</p>
                        <p className="text-2xl font-bold text-gray-900">25%</p>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <Tabs defaultValue="applications" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="applications">My Applications</TabsTrigger>
                  <TabsTrigger value="saved">Saved Jobs</TabsTrigger>
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                </TabsList>

                <TabsContent value="applications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Applications</CardTitle>
                      <CardDescription>
                        Track the status of your job applications
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {jobSeekerData.applications.map((application) => (
                          <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900">{application.jobTitle}</h3>
                              <p className="text-brand-blue font-medium">{application.company}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {application.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <IndianRupee className="w-4 h-4" />
                                  {application.salary}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  Applied {new Date(application.appliedDate).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Badge className={getStatusColor(application.status)}>
                                {getStatusIcon(application.status)}
                                <span className="ml-1 capitalize">{application.status}</span>
                              </Badge>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="saved">
                  <Card>
                    <CardHeader>
                      <CardTitle>Saved Jobs</CardTitle>
                      <CardDescription>
                        Jobs you've saved for later application
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">No saved jobs yet</h3>
                        <p className="text-gray-600 mb-4">
                          Browse jobs and save the ones you're interested in
                        </p>
                        <Button asChild>
                          <Link to="/jobs">Browse Jobs</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="profile">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                          <User className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-600">Full Name</p>
                            <p className="font-medium">{userData.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="font-medium">{userData.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-600">Phone</p>
                            <p className="font-medium">{userData.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-600">Location</p>
                            <p className="font-medium">{userData.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Professional Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-600 mb-2">Skills</p>
                          <div className="flex flex-wrap gap-2">
                            {jobSeekerData.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Experience</p>
                          <p className="font-medium">{jobSeekerData.experience}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-brand-blue" />
                          <span className="text-sm font-medium text-brand-blue">Verified Profile</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </>
          ) : (
            // Job Provider Dashboard would go here
            <div>Job Provider Dashboard - Similar structure with different data</div>
          )}
        </div>
      </div>
    </Layout>
  );
}
