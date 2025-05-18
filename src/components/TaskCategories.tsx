
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Plus } from "lucide-react";

const taskCategories = [
  { id: 1, name: "Personal", color: "bg-taskzen-coral", tasks: 5, icon: "🏠" },
  { id: 2, name: "Work", color: "bg-taskzen-purple", tasks: 8, icon: "💼" },
  { id: 3, name: "School", color: "bg-taskzen-blue", tasks: 3, icon: "📚" },
  { id: 4, name: "Health", color: "bg-green-500", tasks: 2, icon: "🏋️" },
  { id: 5, name: "Social", color: "bg-yellow-500", tasks: 4, icon: "👥" },
  { id: 6, name: "Projects", color: "bg-pink-500", tasks: 6, icon: "🚀" },
];

const TaskCategories = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Organize with Categories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create custom categories and organize your tasks efficiently based on your needs and priorities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {taskCategories.map((category) => (
            <Card 
              key={category.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 border-t-4 border-t-taskzen-coral group"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{category.icon}</span>
                  <span className={`${category.color} text-white text-xs px-2 py-1 rounded-full`}>
                    {category.tasks} tasks
                  </span>
                </div>
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <CardDescription className="text-gray-500">
                  Manage your {category.name.toLowerCase()} tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2 flex items-center justify-center bg-gray-100">
                      <Check className="h-3 w-3 text-gray-400" />
                    </div>
                    <span className="line-through text-gray-400">Completed task</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
                    <span>Ongoing task example</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-4 h-4 border border-gray-300 rounded-sm mr-2"></div>
                    <span>Another task here</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="w-full justify-start group-hover:text-taskzen-coral">
                  <Plus className="h-4 w-4 mr-2" />
                  Add new task
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskCategories;
