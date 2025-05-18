
import { Button } from "@/components/ui/button";
import { Github, Check, Clock, Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 md:pt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Master Your Tasks <span className="text-taskzen-coral">with Ease</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Organize, prioritize, and accomplish your goals with TodoZen's intuitive task management platform.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/auth/signup">
                <Button
                  size="lg"
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/auth/signin">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  <Github className="mr-2 h-5 w-5" />
                  Sign In with GitHub
                </Button>
              </Link>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Check className="mr-2 h-4 w-4 text-taskzen-coral" />
              <span>No credit card required</span>
              <span className="mx-3">•</span>
              <Check className="mr-2 h-4 w-4 text-taskzen-coral" />
              <span>Free starter plan</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-taskzen-coral/10 rounded-full"></div>
              
              {/* Task Cards inspired by the provided designs */}
              <div className="relative z-10 flex items-center justify-center">
                {/* Team Meeting Card */}
                <div className="absolute left-0 top-0 bg-white rounded-lg shadow-lg p-5 w-64 transform -rotate-3 hover:rotate-0 transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <div className="p-2 rounded-md bg-purple-100 mr-3">
                      <Calendar className="h-5 w-5 text-purple-500" />
                    </div>
                    <h3 className="font-semibold text-lg">Team Meeting</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">Discuss Q3 roadmap</p>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock className="h-4 w-4 mr-1" />
                    10:00 - 11:30
                  </div>
                </div>
                
                {/* Project Notes Card */}
                <div className="absolute right-0 top-20 bg-white rounded-lg shadow-lg p-5 w-56 transform rotate-2 hover:rotate-0 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-md bg-blue-100 mr-3">
                      <FileText className="h-5 w-5 text-blue-500" />
                    </div>
                    <h3 className="font-semibold">Project Notes</h3>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                  </div>
                </div>
                
                {/* Todo List Card */}
                <div className="absolute right-10 bottom-0 bg-white rounded-lg shadow-lg p-5 w-60 transform -rotate-1 hover:rotate-0 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="h-3 w-3 rounded-full bg-taskzen-coral mr-2"></div>
                    <h3 className="font-semibold">To-Do List</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
                      <span className="text-sm">Finish project proposal</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2 flex items-center justify-center bg-taskzen-coral/10">
                        <Check className="h-3 w-3 text-taskzen-coral" />
                      </div>
                      <span className="text-sm text-gray-400 line-through">Send email update</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
                      <span className="text-sm">Schedule client call</span>
                    </div>
                  </div>
                </div>
                
                {/* Background Elements */}
                <div className="w-96 h-96 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
