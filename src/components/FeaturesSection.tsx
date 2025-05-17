
import { Calendar, Clock, School, Folder } from "lucide-react";

const features = [
  {
    icon: <Calendar className="h-8 w-8 text-taskzen-purple" />,
    title: "Calendar Sync",
    emoji: "📅",
    description: "Seamlessly integrate with your favorite calendar apps to keep all your schedules in one place."
  },
  {
    icon: <Clock className="h-8 w-8 text-taskzen-orange" />,
    title: "Panic Mode",
    emoji: "⚡",
    description: "Activate Pomodoro timer when deadlines approach to boost your productivity when it matters most."
  },
  {
    icon: <School className="h-8 w-8 text-taskzen-blue" />,
    title: "Classroom Integration",
    emoji: "🏫",
    description: "Perfect for students and teachers with special templates for assignments and class schedules."
  },
  {
    icon: <Folder className="h-8 w-8 text-taskzen-red" />,
    title: "Custom Sections",
    emoji: "🗂️",
    description: "Organize your tasks with custom categories and sections tailored to your workflow."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            TaskZen comes packed with everything you need to stay productive and organized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex justify-between items-center">
                {feature.icon}
                <span className="text-2xl">{feature.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-taskzen-purple font-medium animated-underline">
            View all features
            <svg 
              className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
