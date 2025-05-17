
import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-taskzen-purple/10 rounded-full"></div>
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-taskzen-orange/10 rounded-full"></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-xs text-gray-500">TaskZen Analytics</span>
                    <h3 className="font-semibold text-lg">Weekly Summary</h3>
                  </div>
                  <FileText className="h-6 w-6 text-taskzen-blue" />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Tasks Completed</span>
                      <span className="font-semibold">32/40</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-taskzen-blue h-full rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Focus Time</span>
                      <span className="font-semibold">18.5 hours</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-taskzen-purple h-full rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">Efficiency Score</span>
                      <span className="font-semibold">92%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="bg-taskzen-orange h-full rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-3 bg-gray-50 rounded-lg text-xs text-center text-gray-500">
                  Your productivity increased by 18% compared to last week
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About TaskZen
            </h2>
            <p className="text-gray-700 mb-6">
              TaskZen was created with a simple mission: to help people focus on what matters most. In today's chaotic world, staying organized shouldn't be another source of stress.
            </p>
            <p className="text-gray-700 mb-6">
              Our app combines powerful task management features with an intuitive, distraction-free interface. Whether you're a student juggling assignments, a professional managing projects, or someone trying to organize personal goals, TaskZen adapts to your unique workflow.
            </p>
            <p className="text-gray-700">
              With TaskZen, you don't just manage tasks—you cultivate a mindful approach to productivity that helps you achieve more while stressing less.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
