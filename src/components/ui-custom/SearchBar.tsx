
import React, { useState, useEffect } from 'react';
import { Search, MapPin, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate, useLocation } from 'react-router-dom';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Example job titles and locations for suggestions
const jobSuggestions = [
  "Software Engineer", "Product Manager", "Data Scientist", 
  "UI/UX Designer", "Full Stack Developer", "DevOps Engineer",
  "Marketing Specialist", "Sales Executive", "Content Writer"
];

const locationSuggestions = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
  "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Noida", "Gurgaon"
];

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [filteredJobSuggestions, setFilteredJobSuggestions] = useState<string[]>([]);
  const [filteredLocationSuggestions, setFilteredLocationSuggestions] = useState<string[]>([]);
  const [showJobSuggestions, setShowJobSuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  
  const navigate = useNavigate();
  const currentLocation = useLocation();

  // Filter job suggestions whenever keyword changes
  useEffect(() => {
    // Immediately filter suggestions without delay
    const filtered = keyword.length > 0 
      ? jobSuggestions.filter(job => job.toLowerCase().includes(keyword.toLowerCase()))
      : [];
    setFilteredJobSuggestions(filtered);
  }, [keyword]);

  // Filter location suggestions whenever location changes
  useEffect(() => {
    // Immediately filter suggestions without delay
    const filtered = location.length > 0 
      ? locationSuggestions.filter(loc => loc.toLowerCase().includes(location.toLowerCase()))
      : [];
    setFilteredLocationSuggestions(filtered);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { keyword, location });
    // Redirect to jobs page with search parameters
    navigate(`/jobs?keyword=${encodeURIComponent(keyword)}&location=${encodeURIComponent(location)}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleSelectJobSuggestion = (suggestion: string) => {
    setKeyword(suggestion);
    setShowJobSuggestions(false);
  };

  const handleSelectLocationSuggestion = (suggestion: string) => {
    setLocation(suggestion);
    setShowLocationSuggestions(false);
  };

  return (
    <div className={className}>
      {currentLocation.pathname !== '/' && (
        <Button 
          variant="ghost" 
          onClick={handleGoBack}
          className="mb-4 flex items-center text-gray-600 hover:text-gray-800"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
      )}
      
      <form onSubmit={handleSearch} className="w-full">
        <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
          <div className="flex-1 relative">
            <Popover 
              open={showJobSuggestions && filteredJobSuggestions.length > 0} 
              onOpenChange={setShowJobSuggestions}
            >
              <PopoverTrigger asChild>
                <div className="flex items-center bg-white border-r border-gray-200 px-4">
                  <Search className="h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Job title, keywords, or company"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onFocus={() => setShowJobSuggestions(true)}
                    className="flex-1 border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <div className="max-h-[200px] overflow-y-auto">
                  {filteredJobSuggestions.map((suggestion, index) => (
                    <div 
                      key={index} 
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => handleSelectJobSuggestion(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="flex-1 relative">
            <Popover 
              open={showLocationSuggestions && filteredLocationSuggestions.length > 0}
              onOpenChange={setShowLocationSuggestions}
            >
              <PopoverTrigger asChild>
                <div className="flex items-center bg-white px-4">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="City or state in India"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => setShowLocationSuggestions(true)}
                    className="flex-1 border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-[300px] p-0">
                <div className="max-h-[200px] overflow-y-auto">
                  {filteredLocationSuggestions.map((suggestion, index) => (
                    <div 
                      key={index} 
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => handleSelectLocationSuggestion(suggestion)}
                    >
                      {suggestion}
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          
          <Button 
            type="submit" 
            className="bg-linkedin hover:bg-linkedin-dark py-6 px-8"
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
