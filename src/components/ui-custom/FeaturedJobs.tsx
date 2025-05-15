
import React from 'react';
import JobCard from './JobCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const featuredJobs = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'TCS',
    location: 'Bangalore, India',
    salary: '₹18L - ₹25L',
    jobType: 'Full-time',
    postedAt: '2 days ago',
    featured: true,
    companyRating: 4.8
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'Infosys',
    location: 'Hyderabad, India',
    salary: '₹15L - ₹20L',
    jobType: 'Full-time',
    postedAt: '3 days ago',
    companyRating: 4.5
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Wipro',
    location: 'Delhi NCR, India',
    salary: '₹12L - ₹18L',
    jobType: 'Full-time',
    postedAt: '1 week ago',
    featured: true
  },
  {
    id: '4',
    title: 'Marketing Specialist',
    company: 'Tech Mahindra',
    location: 'Mumbai, India',
    salary: '₹10L - ₹15L',
    jobType: 'Full-time',
    postedAt: '5 days ago'
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'Amazon',
    location: 'Pune, India',
    salary: '₹16L - ₹24L',
    jobType: 'Full-time',
    postedAt: '2 days ago',
    featured: true,
    companyRating: 4.2
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'Microsoft',
    location: 'Bangalore, India',
    salary: '₹18L - ₹28L',
    jobType: 'Full-time',
    postedAt: '1 week ago',
    companyRating: 4.6
  }
];

const FeaturedJobs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">Featured Jobs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover opportunities with top Indian companies and find your perfect career match
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/jobs">
            <Button variant="outline" className="btn-secondary">
              Browse All Jobs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
