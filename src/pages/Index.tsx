
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SearchBar from '@/components/ui-custom/SearchBar';
import FeaturedJobs from '@/components/ui-custom/FeaturedJobs';
import HowItWorks from '@/components/ui-custom/HowItWorks';
import TestimonialCard from '@/components/ui-custom/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, Star, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    text: "JobConnect helped me find my dream job within weeks! The platform is intuitive and has quality job listings.",
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    rating: 5
  },
  {
    text: "As an employer, I've found exceptional talent through JobConnect. The candidate quality is outstanding.",
    name: "Michael Chen",
    role: "HR Director",
    company: "InnovateTech",
    rating: 4
  },
  {
    text: "The review system helped me find a company with a great culture. I love my new role!",
    name: "Emily Williams",
    role: "Marketing Manager",
    company: "GrowthMedia",
    rating: 5
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Find Your Dream Job & Top Talent
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Connect with thousands of employers and job seekers on the leading professional network
            </p>
            
            <SearchBar className="mb-8" />
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
              <span>Popular searches:</span>
              <Link to="/jobs?q=software+engineer" className="hover:text-white hover:underline">Software Engineer</Link>
              <Link to="/jobs?q=product+manager" className="hover:text-white hover:underline">Product Manager</Link>
              <Link to="/jobs?q=data+scientist" className="hover:text-white hover:underline">Data Scientist</Link>
              <Link to="/jobs?q=ux+designer" className="hover:text-white hover:underline">UX Designer</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-linkedin mb-2">10k+</div>
              <p className="text-gray-600">Job Listings</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-linkedin mb-2">5k+</div>
              <p className="text-gray-600">Companies</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-linkedin mb-2">30k+</div>
              <p className="text-gray-600">Job Seekers</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-linkedin mb-2">8k+</div>
              <p className="text-gray-600">Jobs Filled</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Jobs Section */}
      <FeaturedJobs />
      
      {/* How It Works Section */}
      <HowItWorks />
      
      {/* For Employers Section */}
      <section className="py-16 bg-linkedin-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">For Employers</h2>
              <p className="text-lg text-gray-600 mb-6">
                Find, attract and recruit the best talent for your organization with our comprehensive hiring platform.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-linkedin text-white flex items-center justify-center mt-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Post unlimited job listings</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-linkedin text-white flex items-center justify-center mt-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Access our talent database</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-linkedin text-white flex items-center justify-center mt-1">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Branded company profile</span>
                </li>
              </ul>
              <Link to="/employers">
                <Button className="bg-linkedin hover:bg-linkedin-dark text-white">
                  Start Hiring Today
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <Briefcase className="h-12 w-12 text-linkedin mb-4" />
                  <h3 className="text-gray-800 font-semibold mb-2">Post Jobs</h3>
                  <p className="text-gray-600 text-sm">Reach thousands of qualified candidates</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <User className="h-12 w-12 text-linkedin mb-4" />
                  <h3 className="text-gray-800 font-semibold mb-2">Find Talent</h3>
                  <p className="text-gray-600 text-sm">Search our database of vetted professionals</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <Building className="h-12 w-12 text-linkedin mb-4" />
                  <h3 className="text-gray-800 font-semibold mb-2">Company Profile</h3>
                  <p className="text-gray-600 text-sm">Showcase your brand and culture</p>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center text-center">
                  <Star className="h-12 w-12 text-linkedin mb-4" />
                  <h3 className="text-gray-800 font-semibold mb-2">Reviews</h3>
                  <p className="text-gray-600 text-sm">Build your employer reputation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">What Our Users Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what job seekers and employers are saying about their experience with JobConnect
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-linkedin to-linkedin-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Connect with Opportunities?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join thousands of professionals and businesses on JobConnect today
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button className="bg-white text-linkedin hover:bg-gray-100">
                  Sign Up Now
                </Button>
              </Link>
              <Link to="/post-job">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Post a Job
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
