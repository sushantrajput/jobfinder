
import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-12 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-linkedin" />
              <span className="ml-2 text-xl font-bold text-gray-800">JobConnect</span>
            </Link>
            <p className="mt-4 text-gray-500 text-sm">
              Connect with the best opportunities and talents around the globe.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-linkedin">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-linkedin">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-linkedin">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-linkedin">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* For Job Seekers */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">For Job Seekers</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/jobs" className="text-gray-500 hover:text-linkedin text-sm">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-500 hover:text-linkedin text-sm">
                  Browse Companies
                </Link>
              </li>
              <li>
                <Link to="/salary" className="text-gray-500 hover:text-linkedin text-sm">
                  Salary Estimator
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-500 hover:text-linkedin text-sm">
                  Career Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* For Employers */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">For Employers</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/post-job" className="text-gray-500 hover:text-linkedin text-sm">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-500 hover:text-linkedin text-sm">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/talent-search" className="text-gray-500 hover:text-linkedin text-sm">
                  Talent Search
                </Link>
              </li>
              <li>
                <Link to="/employer-resources" className="text-gray-500 hover:text-linkedin text-sm">
                  Employer Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/about" className="text-gray-500 hover:text-linkedin text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-linkedin text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-linkedin text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-500 hover:text-linkedin text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} JobConnect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
