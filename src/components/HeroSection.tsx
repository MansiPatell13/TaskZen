
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Smart Productivity Assistant
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-md">
              Create categorized to-dos, sync with calendars, beat deadlines, and stay in control.
            </p>
            <div className="flex space-x-4 mb-8">
              <Button className="cta-button text-lg px-8 py-6" size="lg">
                Get Started
              </Button>
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free to start
              </div>
              <div className="flex items-center">
                <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right hidden md:block">
            <div className="w-full h-[450px] bg-gradient-to-br from-taskzen-purple/20 via-taskzen-blue/10 to-taskzen-orange/20 rounded-xl flex items-center justify-center relative">
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-white rounded-lg shadow-xl p-6 flex flex-col animate-bounce-subtle">
                <div className="flex justify-between items-center mb-4">
                  <Calendar className="h-6 w-6 text-taskzen-purple" />
                  <span className="text-xs text-gray-400">Today</span>
                </div>
                <h3 className="font-medium mb-2">Team Meeting</h3>
                <p className="text-xs text-gray-500">Discuss Q3 roadmap</p>
                <div className="mt-auto flex items-center text-xs text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>10:00 - 11:30</span>
                </div>
              </div>
              
              <div className="absolute top-1/2 transform -translate-y-1/2 right-12 w-52 h-40 bg-white rounded-lg shadow-xl p-4 flex flex-col">
                <FileText className="h-5 w-5 text-taskzen-blue mb-2" />
                <h3 className="font-medium text-sm">Project Notes</h3>
                <div className="mt-2 space-y-1">
                  <div className="h-2 bg-gray-100 rounded w-full"></div>
                  <div className="h-2 bg-gray-100 rounded w-3/4"></div>
                  <div className="h-2 bg-gray-100 rounded w-5/6"></div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-white rounded-lg shadow-xl p-4">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-taskzen-orange mr-2"></div>
                  <span className="text-sm font-medium">To-Do List</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2 flex-shrink-0"></div>
                    <span className="text-xs">Finish project proposal</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2 flex-shrink-0 bg-gray-100 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-xs line-through text-gray-400">Send email update</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2 flex-shrink-0"></div>
                    <span className="text-xs">Schedule client call</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
