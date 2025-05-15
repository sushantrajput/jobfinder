
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  MapPin, 
  Users, 
  Star, 
  Search,
  Briefcase
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Sample companies data
const companiesData = [
  {
    id: 1,
    name: 'Tata Consultancy Services',
    shortName: 'TCS',
    logo: '/placeholder.svg',
    description: 'Leading IT services and consulting company',
    industry: 'Information Technology',
    location: 'Mumbai, India',
    employees: '500,000+',
    founded: '1968',
    rating: 4.2,
    reviewCount: 15243,
    openPositions: 256
  },
  {
    id: 2,
    name: 'Infosys',
    shortName: 'Infosys',
    logo: '/placeholder.svg',
    description: 'Global leader in next-generation digital services',
    industry: 'Information Technology',
    location: 'Bangalore, India',
    employees: '335,000+',
    founded: '1981',
    rating: 4.1,
    reviewCount: 9827,
    openPositions: 189
  },
  {
    id: 3,
    name: 'Wipro Limited',
    shortName: 'Wipro',
    logo: '/placeholder.svg',
    description: 'Leading global IT consulting and business process services company',
    industry: 'Information Technology',
    location: 'Bangalore, India',
    employees: '250,000+',
    founded: '1945',
    rating: 4.0,
    reviewCount: 7531,
    openPositions: 142
  },
  {
    id: 4,
    name: 'Tech Mahindra',
    shortName: 'Tech Mahindra',
    logo: '/placeholder.svg',
    description: 'Provider of digital transformation, consulting and business reengineering services',
    industry: 'Information Technology',
    location: 'Pune, India',
    employees: '125,000+',
    founded: '1986',
    rating: 3.9,
    reviewCount: 4872,
    openPositions: 93
  },
  {
    id: 5,
    name: 'Amazon India',
    shortName: 'Amazon',
    logo: '/placeholder.svg',
    description: 'Multinational tech company focusing on e-commerce and cloud computing',
    industry: 'E-Commerce, Technology',
    location: 'Hyderabad, India',
    employees: '75,000+ (in India)',
    founded: '2013 (India operations)',
    rating: 4.3,
    reviewCount: 12564,
    openPositions: 178
  },
  {
    id: 6,
    name: 'Microsoft India',
    shortName: 'Microsoft',
    logo: '/placeholder.svg',
    description: 'Leading technology company developing computer software and services',
    industry: 'Software',
    location: 'Bangalore, India',
    employees: '20,000+ (in India)',
    founded: '1990 (India operations)',
    rating: 4.5,
    reviewCount: 8754,
    openPositions: 112
  },
  {
    id: 7,
    name: 'Flipkart',
    shortName: 'Flipkart',
    logo: '/placeholder.svg',
    description: 'Indian e-commerce company headquartered in Bangalore',
    industry: 'E-Commerce',
    location: 'Bangalore, India',
    employees: '35,000+',
    founded: '2007',
    rating: 4.2,
    reviewCount: 6482,
    openPositions: 87
  },
  {
    id: 8,
    name: 'One97 Communications (PayTM)',
    shortName: 'PayTM',
    logo: '/placeholder.svg',
    description: 'Indian multinational financial technology company',
    industry: 'Financial Technology',
    location: 'Noida, India',
    employees: '20,000+',
    founded: '2010',
    rating: 4.0,
    reviewCount: 3845,
    openPositions: 64
  }
];

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCompanies = companiesData.filter(company => 
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Discover Top Companies</h1>
          
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="flex gap-2 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search by company name, industry, or location"
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="bg-linkedin hover:bg-linkedin-dark">Search</Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCompanies.map((company) => (
              <Link to={`/companies/${company.id}`} key={company.id}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="h-32 bg-gray-100 flex items-center justify-center">
                      <Building className="h-16 w-16 text-gray-400" />
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg">{company.shortName}</h3>
                        <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm">{company.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-gray-500 mb-3 line-clamp-2">{company.description}</p>
                      
                      <div className="space-y-2 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{company.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{company.employees}</span>
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-2" />
                          <span>{company.openPositions} open positions</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Companies;
