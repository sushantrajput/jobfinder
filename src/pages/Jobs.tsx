import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JobCard from '@/components/ui-custom/JobCard';
import SearchBar from '@/components/ui-custom/SearchBar';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Filter,
  SlidersHorizontal,
  Briefcase,
  MapPin,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { jobsData } from '@/data/jobs';

const Jobs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const [jobTypes, setJobTypes] = useState<string[]>([]);
  const [experienceLevels, setExperienceLevels] = useState<string[]>([]);
  const [salaryRange, setSalaryRange] = useState<number[]>([5, 35]); // In lakhs
  const [datePosted, setDatePosted] = useState<string>('');
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    location: ''
  });
  
  // Parse URL query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get('keyword') || '';
    const locationParam = params.get('location') || '';
    
    setSearchParams({
      keyword,
      location: locationParam
    });
  }, [location.search]);
  
  // Apply filters to jobs
  useEffect(() => {
    let result = jobsData;
    
    // Filter by keyword search
    if (searchParams.keyword) {
      result = result.filter(job => 
        job.title.toLowerCase().includes(searchParams.keyword.toLowerCase()) ||
        job.company.toLowerCase().includes(searchParams.keyword.toLowerCase())
      );
    }
    
    // Filter by location
    if (searchParams.location) {
      result = result.filter(job => 
        job.location.toLowerCase().includes(searchParams.location.toLowerCase())
      );
    }
    
    // Filter by job type
    if (jobTypes.length > 0) {
      result = result.filter(job => jobTypes.includes(job.jobType));
    }
    
    // Filter by experience level
    if (experienceLevels.length > 0) {
      result = result.filter(job => experienceLevels.includes(job.experienceLevel));
    }
    
    // Filter by salary range
    result = result.filter(job => {
      // Extract numbers from salary string (e.g., "₹18L - ₹24L" -> [18, 24])
      const salaryNumbers = job.salary.match(/\d+/g)?.map(Number) || [];
      if (salaryNumbers.length >= 2) {
        const [min, max] = salaryNumbers;
        return min >= salaryRange[0] && max <= salaryRange[1];
      }
      return true;
    });
    
    // Filter by date posted
    if (datePosted) {
      result = result.filter(job => {
        if (datePosted === 'today') {
          return job.postedAt.includes('today');
        } else if (datePosted === 'week') {
          return !job.postedAt.includes('week') && !job.postedAt.includes('month');
        } else if (datePosted === 'month') {
          return !job.postedAt.includes('month');
        }
        return true;
      });
    }
    
    setFilteredJobs(result);
  }, [searchParams, jobTypes, experienceLevels, salaryRange, datePosted]);
  
  const handleJobTypeChange = (type: string) => {
    if (jobTypes.includes(type)) {
      setJobTypes(jobTypes.filter(t => t !== type));
    } else {
      setJobTypes([...jobTypes, type]);
    }
  };
  
  const handleExperienceLevelChange = (level: string) => {
    if (experienceLevels.includes(level)) {
      setExperienceLevels(experienceLevels.filter(l => l !== level));
    } else {
      setExperienceLevels([...experienceLevels, level]);
    }
  };
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-center">
            <Button 
              variant="ghost" 
              onClick={handleGoBack}
              className="mr-2 flex items-center text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">Find Your Dream Job</h1>
          </div>
          
          <SearchBar className="mb-8" />
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </Button>
              
              <div className="hidden md:flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Job Type
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Location
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Date Posted
                </Button>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">
                {filteredJobs.length} jobs found
              </span>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Sort
              </Button>
            </div>
          </div>
          
          {showFilters && (
            <div className="bg-white p-4 rounded-md shadow mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-medium mb-2">Job Type</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded" 
                      checked={jobTypes.includes('Full-time')}
                      onChange={() => handleJobTypeChange('Full-time')}
                    />
                    <span>Full-time</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded" 
                      checked={jobTypes.includes('Part-time')}
                      onChange={() => handleJobTypeChange('Part-time')}
                    />
                    <span>Part-time</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded" 
                      checked={jobTypes.includes('Contract')}
                      onChange={() => handleJobTypeChange('Contract')}
                    />
                    <span>Contract</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded" 
                      checked={jobTypes.includes('Internship')}
                      onChange={() => handleJobTypeChange('Internship')}
                    />
                    <span>Internship</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Experience Level</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded" 
                      checked={experienceLevels.includes('Entry Level')}
                      onChange={() => handleExperienceLevelChange('Entry Level')}
                    />
                    <span>Entry Level</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded" 
                      checked={experienceLevels.includes('Mid Level')}
                      onChange={() => handleExperienceLevelChange('Mid Level')}
                    />
                    <span>Mid Level</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded" 
                      checked={experienceLevels.includes('Senior')}
                      onChange={() => handleExperienceLevelChange('Senior')}
                    />
                    <span>Senior Level</span>
                  </label>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Salary Range (₹ in Lakhs)</h3>
                <div className="px-2 py-4">
                  <Slider
                    defaultValue={[5, 35]} 
                    min={5} 
                    max={40} 
                    step={1} 
                    value={salaryRange}
                    onValueChange={(values) => setSalaryRange(values)}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>₹{salaryRange[0]}L</span>
                    <span>₹{salaryRange[1]}L</span>
                  </div>
                </div>
                
                <h3 className="font-medium mb-2 mt-4">Date Posted</h3>
                <RadioGroup value={datePosted} onValueChange={setDatePosted}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="today" id="today" />
                    <label htmlFor="today" className="cursor-pointer">Today</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="week" id="week" />
                    <label htmlFor="week" className="cursor-pointer">Last Week</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="month" id="month" />
                    <label htmlFor="month" className="cursor-pointer">Last Month</label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredJobs.map(job => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-2">No jobs found</h3>
              <p className="text-gray-500">Try adjusting your search filters or keywords</p>
            </div>
          )}
          
          {filteredJobs.length > 0 && (
            <div className="mt-8 flex justify-center">
              <Button variant="outline" className="mr-2">Previous</Button>
              <Button className="bg-linkedin hover:bg-linkedin-dark">Next</Button>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Jobs;
