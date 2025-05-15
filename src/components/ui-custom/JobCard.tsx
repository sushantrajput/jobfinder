
import React from 'react';
import { Link } from 'react-router-dom';
import { Building, MapPin, Clock, IndianRupee, Bookmark, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface JobCardProps {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  salary?: string;
  jobType?: string;
  postedAt: string;
  featured?: boolean;
  companyRating?: number;
  experienceLevel?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  company,
  companyLogo,
  location,
  salary,
  jobType,
  postedAt,
  featured,
  companyRating,
  experienceLevel
}) => {
  return (
    <Card className={`p-5 card-shadow ${featured ? 'border-l-4 border-linkedin' : ''}`}>
      <div className="flex flex-col md:flex-row">
        {/* Company Logo */}
        <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center mr-4 mb-4 md:mb-0">
          {companyLogo ? (
            <img src={companyLogo} alt={company} className="w-12 h-12 object-contain" />
          ) : (
            <Building className="w-8 h-8 text-gray-400" />
          )}
        </div>
        
        {/* Job Details */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between mb-2">
            <Link to={`/job/${id}`} className="hover:text-linkedin">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </Link>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-linkedin">
                <Bookmark className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="flex items-center mb-2">
            <Link to={`/companies/${company.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-linkedin flex items-center">
              {company}
            </Link>
            {companyRating && (
              <div className="ml-2 flex items-center">
                <span className="mx-1 text-gray-300">•</span>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600 ml-1">{companyRating}</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3 gap-y-1">
            <div className="flex items-center mr-4">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
            
            {salary && (
              <div className="flex items-center mr-4">
                <IndianRupee className="h-4 w-4 mr-1" />
                {salary}
              </div>
            )}
            
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {postedAt}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {jobType && <Badge variant="outline">{jobType}</Badge>}
            {experienceLevel && <Badge variant="outline">{experienceLevel}</Badge>}
            {featured && <Badge className="bg-linkedin-light text-linkedin hover:bg-linkedin-light">Featured</Badge>}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
