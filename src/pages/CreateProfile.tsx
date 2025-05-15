
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, X } from 'lucide-react';

const CreateProfile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile created!",
      description: "Your profile has been created successfully."
    });
    navigate('/');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-8 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Create Your Profile</CardTitle>
                <CardDescription>
                  Complete your profile to help employers find you and increase your chances of getting hired.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile}>
                  {/* Profile Picture */}
                  <div className="mb-6">
                    <Label>Profile Picture</Label>
                    <div className="flex items-center mt-2">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                        <Upload className="h-8 w-8 text-gray-400" />
                      </div>
                      <div className="ml-4">
                        <Button type="button" variant="outline" size="sm" className="mb-2">
                          Upload Photo
                        </Button>
                        <p className="text-xs text-gray-500">
                          JPG or PNG. Max size 1MB. A professional headshot is recommended.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Personal Information */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-medium">Personal Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="headline">Professional Headline</Label>
                      <Input 
                        id="headline" 
                        placeholder="e.g., Senior Software Engineer at TCS" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="about">About</Label>
                      <Textarea 
                        id="about" 
                        placeholder="Write a brief summary about yourself"
                        className="min-h-32" 
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input 
                          id="location" 
                          placeholder="e.g., Mumbai, India" 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="e.g., +91 98765 43210" 
                          required 
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Professional Information */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-medium">Professional Information</h3>
                    
                    <div className="space-y-2">
                      <Label>Experience Level</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                          <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                          <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                          <SelectItem value="expert">Expert (10+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label>Skills</Label>
                        <Button type="button" variant="ghost" size="sm" className="h-7 text-xs">
                          Add Skill
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {["JavaScript", "React", "Node.js", "CSS"].map((skill) => (
                          <div 
                            key={skill} 
                            className="bg-gray-100 rounded-full px-3 py-1 text-sm flex items-center"
                          >
                            <span>{skill}</span>
                            <button type="button" className="ml-1 text-gray-500 hover:text-gray-700">
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label>Work Experience</Label>
                        <Button type="button" variant="ghost" size="sm" className="h-7 text-xs">
                          Add Experience
                        </Button>
                      </div>
                      <Card className="bg-gray-50">
                        <CardContent className="p-4">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="font-medium">Senior Developer</h4>
                              <p className="text-sm text-gray-500">ABC Technologies</p>
                              <p className="text-xs text-gray-400">Jan 2020 - Present • 3 yrs 5 mos</p>
                              <p className="text-sm mt-2">
                                Led a team of developers to build scalable web applications.
                              </p>
                            </div>
                            <Button type="button" variant="ghost" size="sm" className="h-7">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <Label>Education</Label>
                        <Button type="button" variant="ghost" size="sm" className="h-7 text-xs">
                          Add Education
                        </Button>
                      </div>
                      <Card className="bg-gray-50">
                        <CardContent className="p-4">
                          <div className="flex justify-between">
                            <div>
                              <h4 className="font-medium">Bachelor of Technology in Computer Science</h4>
                              <p className="text-sm text-gray-500">Indian Institute of Technology</p>
                              <p className="text-xs text-gray-400">2015 - 2019</p>
                            </div>
                            <Button type="button" variant="ghost" size="sm" className="h-7">
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  {/* Preferences */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-medium">Job Preferences</h3>
                    
                    <div className="space-y-2">
                      <Label>Job Types</Label>
                      <div className="flex flex-wrap gap-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 rounded" />
                          Full-time
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 rounded" />
                          Part-time
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 rounded" />
                          Contract
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2 rounded" />
                          Remote
                        </label>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Expected Salary Range (₹)</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="Minimum" />
                        <Input placeholder="Maximum" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Preferred Locations</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="pune">Pune</SelectItem>
                          <SelectItem value="remote">Remote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  {/* Resume Upload */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-lg font-medium">Resume</h3>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="h-10 w-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-sm mb-2">Drag and drop your resume or</p>
                      <Button type="button" variant="outline" size="sm">
                        Browse Files
                      </Button>
                      <p className="text-xs text-gray-500 mt-2">
                        PDF, DOC, DOCX files up to 5MB
                      </p>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button type="button" variant="outline">Cancel</Button>
                <Button 
                  type="submit" 
                  className="bg-linkedin hover:bg-linkedin-dark" 
                  onClick={handleSaveProfile}
                >
                  Save Profile
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CreateProfile;
