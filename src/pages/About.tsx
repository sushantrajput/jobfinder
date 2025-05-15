
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Briefcase, 
  Building,
  Star,
  Shield,
  Zap,
  Globe
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About JobConnect</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connecting top talent with the best companies across India. 
            Our mission is to transform how people find jobs and how companies hire talent.
          </p>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            <p className="text-gray-600 mb-6">
              JobConnect was founded in 2022 with a simple goal: to make the job search and hiring process more 
              efficient, transparent, and rewarding for everyone involved. We recognized the challenges faced by 
              both job seekers and employers in the traditional recruitment process.
            </p>
            <p className="text-gray-600 mb-6">
              What began as a small startup has grown into one of India's leading professional networks, 
              connecting millions of professionals with thousands of companies. We're proud to have helped 
              countless individuals find their dream jobs and assisted businesses in building their teams 
              with the right talent.
            </p>
            <p className="text-gray-600">
              Today, JobConnect stands as a comprehensive platform that not only connects job seekers with 
              opportunities but also provides valuable resources, insights, and tools to help professionals 
              advance in their careers and companies thrive in a competitive marketplace.
            </p>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-linkedin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-linkedin" />
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Job Matching</h3>
              <p className="text-gray-600">
                Our AI-powered algorithm matches your skills and preferences with the perfect job opportunities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-linkedin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-linkedin" />
              </div>
              <h3 className="text-xl font-bold mb-2">Company Reviews</h3>
              <p className="text-gray-600">
                Transparent reviews from employees help you find companies with great culture and values.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-linkedin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-linkedin" />
              </div>
              <h3 className="text-xl font-bold mb-2">Top Indian Companies</h3>
              <p className="text-gray-600">
                Access opportunities from the best companies across various industries throughout India.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-linkedin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-linkedin" />
              </div>
              <h3 className="text-xl font-bold mb-2">Verified Profiles</h3>
              <p className="text-gray-600">
                Our verification process ensures authenticity for both job seekers and employers.
              </p>
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-linkedin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-linkedin" />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Network</h3>
              <p className="text-gray-600">
                Build your professional network and connect with industry experts across the country.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-linkedin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-linkedin" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Application</h3>
              <p className="text-gray-600">
                Apply to multiple jobs with just a few clicks using your saved profile and resume.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-linkedin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-linkedin" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pan-India Coverage</h3>
              <p className="text-gray-600">
                Find opportunities in all major cities and regions across India, from metros to tier-2 cities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-linkedin/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-linkedin" />
              </div>
              <h3 className="text-xl font-bold mb-2">Employer Branding</h3>
              <p className="text-gray-600">
                Companies can showcase their culture, benefits and attract the best talent in the market.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-linkedin mb-2">10k+</div>
              <p className="text-gray-600">Job Listings</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-linkedin mb-2">5k+</div>
              <p className="text-gray-600">Companies</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-linkedin mb-2">30k+</div>
              <p className="text-gray-600">Job Seekers</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-linkedin mb-2">8k+</div>
              <p className="text-gray-600">Jobs Filled</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-linkedin text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of professionals and companies on JobConnect today and take the next step in your career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-white text-linkedin hover:bg-gray-100">
                Create Account
              </Button>
            </Link>
            <Link to="/jobs">
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Browse Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
