
import React from 'react';
import { Search, FileText, Briefcase, Building } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-10 w-10 text-linkedin" />,
      title: "Search Jobs",
      description: "Browse thousands of jobs from leading companies across all industries."
    },
    {
      icon: <FileText className="h-10 w-10 text-linkedin" />,
      title: "Create Profile",
      description: "Build your professional profile to showcase your skills and experience."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-linkedin" />,
      title: "Apply",
      description: "Apply to jobs with just a few clicks and track your application status."
    },
    {
      icon: <Building className="h-10 w-10 text-linkedin" />,
      title: "Get Hired",
      description: "Connect with employers and land your dream job."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            JobConnect makes it easy to find your next career opportunity or hire top talent
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-linkedin-light p-5">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
