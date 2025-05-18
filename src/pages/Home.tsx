
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Github, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TaskCategories from "@/components/TaskCategories";
import CalendarPreview from "@/components/CalendarPreview";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";

const Home = () => {
  const { user } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Features Section - Added from provided images */}
      <FeaturesSection />
      
      {/* Task Categories Section */}
      <TaskCategories />
      
      {/* Calendar Preview Section */}
      <CalendarPreview />
      
      {/* About Section - Added from provided images */}
      <AboutSection />
      
      <Footer />
    </div>
  );
};

export default Home;
