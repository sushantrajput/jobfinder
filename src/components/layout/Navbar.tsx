
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Briefcase } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if the current path matches
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-linkedin" />
              <span className="ml-2 text-xl font-bold text-gray-800">JobConnect</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <Link 
              to="/" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/') ? 'text-gray-900 border-b-2 border-linkedin' : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/jobs" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/jobs') ? 'text-gray-900 border-b-2 border-linkedin' : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'}`}
            >
              Jobs
            </Link>
            <Link 
              to="/companies" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/companies') ? 'text-gray-900 border-b-2 border-linkedin' : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'}`}
            >
              Companies
            </Link>
            <Link 
              to="/about" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/about') ? 'text-gray-900 border-b-2 border-linkedin' : 'text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'}`}
            >
              About
            </Link>
          </nav>
          
          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button variant="outline" size="sm">Log in</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-linkedin hover:bg-linkedin-dark text-white" size="sm">Sign up</Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-gray-400 hover:text-gray-500">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pb-3 px-4">
          <div className="space-y-1 pt-2 pb-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/') ? 'text-linkedin border-l-4 border-linkedin' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/jobs" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/jobs') ? 'text-linkedin border-l-4 border-linkedin' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-gray-300'}`}
            >
              Jobs
            </Link>
            <Link 
              to="/companies" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/companies') ? 'text-linkedin border-l-4 border-linkedin' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-gray-300'}`}
            >
              Companies
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 text-base font-medium ${isActive('/about') ? 'text-linkedin border-l-4 border-linkedin' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 border-l-4 border-transparent hover:border-gray-300'}`}
            >
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0 w-full">
                <Link to="/login" className="mb-2 block">
                  <Button variant="outline" className="w-full">Log in</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-linkedin hover:bg-linkedin-dark text-white w-full">Sign up</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
