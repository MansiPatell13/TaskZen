
import { Calendar, Check } from "lucide-react";

const CalendarPreview = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-4">
              Never Miss a <span className="text-taskzen-coral">Deadline</span>
            </h2>
            <p className="text-gray-600 mb-6">
              TodoZen's calendar view helps you visualize your schedule and keep track of upcoming tasks and deadlines.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-3 bg-taskzen-coral/20 p-1 rounded-full">
                  <Calendar className="h-5 w-5 text-taskzen-coral" />
                </div>
                <div>
                  <h3 className="font-medium">Sync with your favorite calendar</h3>
                  <p className="text-sm text-gray-500">Integrate with Google Calendar, Outlook, and more</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 bg-taskzen-coral/20 p-1 rounded-full">
                  <Check className="h-5 w-5 text-taskzen-coral" />
                </div>
                <div>
                  <h3 className="font-medium">Smart reminders</h3>
                  <p className="text-sm text-gray-500">Get notifications before tasks are due</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium text-lg">Upcoming Tasks</h3>
                <span className="text-taskzen-coral">May 2023</span>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-4 text-center">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                  <div key={i} className="text-gray-500 text-sm">{day}</div>
                ))}
                {[...Array(31)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`aspect-square flex items-center justify-center rounded-full text-sm
                      ${i === 15 ? 'bg-taskzen-coral text-white' : 'hover:bg-gray-100 cursor-pointer'}`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className="border-t pt-4 mt-2">
                <div className="flex items-start space-x-3 mb-3 p-2 rounded hover:bg-gray-50">
                  <div className="w-2 self-stretch bg-taskzen-coral rounded-full"></div>
                  <div>
                    <p className="font-medium">Project Presentation</p>
                    <p className="text-sm text-gray-500">May 16, 10:30 AM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded hover:bg-gray-50">
                  <div className="w-2 self-stretch bg-taskzen-purple rounded-full"></div>
                  <div>
                    <p className="font-medium">Team Meeting</p>
                    <p className="text-sm text-gray-500">May 18, 2:00 PM</p>
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

export default CalendarPreview;
