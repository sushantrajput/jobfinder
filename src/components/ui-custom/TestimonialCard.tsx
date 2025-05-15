
import React from 'react';
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  name,
  role,
  company,
  avatar,
  rating
}) => {
  return (
    <Card className="p-6 card-shadow h-full flex flex-col">
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 mb-6 flex-grow">"{text}"</p>
      
      <div className="flex items-center">
        <div className="flex-shrink-0">
          {avatar ? (
            <img src={avatar} alt={name} className="w-12 h-12 rounded-full" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-linkedin-light text-linkedin flex items-center justify-center font-semibold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-xs text-gray-500">{role}, {company}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
