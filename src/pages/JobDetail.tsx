
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building, MapPin, Clock, IndianRupee, Briefcase, Share2, Bookmark } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { jobsData } from '@/data/jobs';

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [job, setJob] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the job in our data
    const foundJob = jobsData.find(job => job.id === id);
    
    if (foundJob) {
      setJob(foundJob);
    }
    
    setLoading(false);
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleApply = () => {
    // Navigate to application form or show application modal
    navigate('/create-profile', { state: { jobId: id } });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-pulse">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto px-4 py-12">
          <Button 
            variant="ghost" 
            onClick={handleGoBack}
            className="mb-4 flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Button>
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Job Not Found</h2>
            <p className="mb-6">Sorry, the job you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/jobs')}>View All Jobs</Button>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-12 flex-1">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={handleGoBack}
            className="mb-6 flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="p-6 mb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center">
                        {job.companyLogo ? (
                          <img src={job.companyLogo} alt={job.company} className="w-12 h-12 object-contain" />
                        ) : (
                          <Building className="w-8 h-8 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
                        <div className="flex items-center text-gray-600">
                          <span>{job.company}</span>
                          {job.companyRating && (
                            <span className="flex items-center ml-2">
                              <span className="text-yellow-500 mr-1">★</span>
                              <span>{job.companyRating}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-y-2 gap-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      
                      <div className="flex items-center">
                        <IndianRupee className="h-4 w-4 mr-1" />
                        {job.salary}
                      </div>
                      
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.jobType}
                      </div>
                      
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Posted {job.postedAt}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="h-9 w-9"
                    >
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="h-9 w-9"
                    >
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.jobType && <Badge variant="outline">{job.jobType}</Badge>}
                  {job.experienceLevel && <Badge variant="outline">{job.experienceLevel}</Badge>}
                  {job.featured && <Badge className="bg-linkedin-light text-linkedin hover:bg-linkedin-light">Featured</Badge>}
                </div>

                <Separator className="my-6" />
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Job Description</h2>
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      We are seeking a talented {job.title} to join our team at {job.company}. This is an exciting opportunity to work with cutting-edge technologies and contribute to innovative projects.
                    </p>
                    
                    <h3 className="text-lg font-medium mt-6 mb-2">Responsibilities:</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>Design and implement new features and functionality</li>
                      <li>Work with cross-functional teams to define product requirements</li>
                      <li>Write clean, efficient, and well-documented code</li>
                      <li>Participate in code reviews and provide constructive feedback</li>
                      <li>Troubleshoot and debug issues in existing applications</li>
                    </ul>
                    
                    <h3 className="text-lg font-medium mt-6 mb-2">Requirements:</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>{job.experienceLevel === "Entry Level" ? "0-2" : job.experienceLevel === "Mid Level" ? "3-5" : "5+"} years of experience in {job.title} role</li>
                      <li>Proficient in relevant technologies and programming languages</li>
                      <li>Strong problem-solving skills and attention to detail</li>
                      <li>Excellent communication and teamwork abilities</li>
                      <li>Bachelor's degree in Computer Science or related field</li>
                    </ul>
                    
                    <h3 className="text-lg font-medium mt-6 mb-2">Benefits:</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                      <li>Competitive salary: {job.salary}</li>
                      <li>Health insurance and retirement benefits</li>
                      <li>Flexible work arrangements</li>
                      <li>Professional development opportunities</li>
                      <li>Modern office with collaborative workspace</li>
                    </ul>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Company Overview</h2>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center">
                    {job.companyLogo ? (
                      <img src={job.companyLogo} alt={job.company} className="w-12 h-12 object-contain" />
                    ) : (
                      <Building className="w-8 h-8 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold">{job.company}</h3>
                    <p className="text-sm text-gray-600">Technology · {job.location}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {job.company} is a leading technology company focused on innovation and customer satisfaction. 
                  With offices across India, we're committed to creating products that make a difference 
                  in people's lives.
                </p>
                
                <Button variant="outline" className="w-full">
                  View Company Profile
                </Button>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-6">
                <h2 className="text-xl font-semibold mb-4">Apply for this job</h2>
                <p className="text-gray-700 mb-6">
                  Take the next step in your career and apply for this {job.title} position at {job.company}.
                </p>
                
                <Button onClick={handleApply} className="w-full bg-linkedin hover:bg-linkedin-dark mb-4">
                  Apply Now
                </Button>
                
                <div className="text-sm text-gray-500 text-center">
                  Application takes only a few minutes
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default JobDetail;
