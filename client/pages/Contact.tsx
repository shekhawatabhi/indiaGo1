import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Headphones,
  FileQuestion,
  Building,
  Users
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    userType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: '',
      userType: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Support',
      content: '+91 9571300665',
      description: 'Mon-Sun, 9 AM - 7 PM IST',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      content: 'shekhawatabhi632@gmail.com',
      description: 'We respond within 24 hours',
      color: 'text-blue-600'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      content: 'Jhunjhunu, Rajasthan, India',
      description: 'Visit us anytime',
      color: 'text-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Monday - Sunday',
      description: '9:00 AM - 7:00 PM IST',
      color: 'text-orange-600'
    }
  ];

  const supportOptions = [
    {
      icon: Headphones,
      title: 'General Support',
      description: 'Get help with your account, jobs, or platform features',
      category: 'general'
    },
    {
      icon: FileQuestion,
      title: 'Technical Issues',
      description: 'Report bugs, login problems, or technical difficulties',
      category: 'technical'
    },
    {
      icon: Building,
      title: 'Business Partnerships',
      description: 'Collaborate with us or discuss enterprise solutions',
      category: 'business'
    },
    {
      icon: Users,
      title: 'User Safety',
      description: 'Report inappropriate behavior or safety concerns',
      category: 'safety'
    }
  ];

  const faqs = [
    {
      question: 'How do I post a job?',
      answer: 'Click on "Post Job" in the navigation, fill out the job details form, and submit. Your job will be reviewed and published within 2-4 hours.'
    },
    {
      question: 'How do I apply for jobs?',
      answer: 'Browse jobs on the "Find Jobs" page, click "Apply Now" on jobs that interest you, and follow the application process.'
    },
    {
      question: 'Is IndiaGo free to use?',
      answer: 'Yes! Creating an account, posting jobs, and applying for jobs is completely free. We only charge a small service fee on successful job completions.'
    },
    {
      question: 'How do you verify users?',
      answer: 'We verify users through Aadhaar authentication, phone number verification, and document uploads to ensure safety and trust.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We support UPI, digital wallets, bank transfers, and cash payments. All transactions are secure and protected.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-blue to-brand-blue/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              We're here to help you succeed. Reach out with any questions or feedback.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* User Type */}
                  <div className="space-y-2">
                    <Label htmlFor="userType">I am a:</Label>
                    <Select onValueChange={(value) => handleSelectChange('userType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="job-seeker">Job Seeker</SelectItem>
                        <SelectItem value="employer">Employer/Job Provider</SelectItem>
                        <SelectItem value="partner">Business Partner</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Subject and Category */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Support Category</Label>
                      <Select onValueChange={(value) => handleSelectChange('category', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Support</SelectItem>
                          <SelectItem value="technical">Technical Issues</SelectItem>
                          <SelectItem value="business">Business Partnerships</SelectItem>
                          <SelectItem value="safety">Safety & Security</SelectItem>
                          <SelectItem value="billing">Billing & Payments</SelectItem>
                          <SelectItem value="feature">Feature Request</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Brief subject of your message"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your question or concern in detail..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information & Support Options */}
          <div className="space-y-8">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Multiple ways to reach our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{info.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{info.content}</p>
                      <p className="text-xs text-gray-500">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Support Options */}
            <Card>
              <CardHeader>
                <CardTitle>Support Categories</CardTitle>
                <CardDescription>
                  Choose the right category for faster assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportOptions.map((option) => (
                  <div key={option.category} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                      <option.icon className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{option.title}</h4>
                      <p className="text-xs text-gray-600">{option.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find quick answers to common questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                    <p className="text-sm text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for?
                </p>
                <Button variant="outline" asChild>
                  <a href="mailto:support@indiagojobs.com">
                    Email Our Support Team
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Business Hours Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center gap-2 text-blue-900 mb-2">
            <Clock className="w-5 h-5" />
            <h3 className="font-medium">Support Hours</h3>
          </div>
          <p className="text-blue-700 text-sm">
            Our support team is available Monday through Saturday, 9:00 AM to 7:00 PM IST. 
            We typically respond to emails within 24 hours, and phone support is available during business hours.
          </p>
        </div>
      </div>
    </Layout>
  );
}
