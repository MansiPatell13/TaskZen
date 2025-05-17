
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { user, signOut } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-taskzen-coral">TaskZen</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user?.user_metadata?.full_name || user?.email}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={signOut}
                className="text-sm"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to TaskZen</h1>
          <p className="text-gray-600 mb-6">
            You're now logged in to your TaskZen account. This is a placeholder for your dashboard.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-taskzen-coral/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-taskzen-coral mb-2">Tasks</h2>
              <p className="text-gray-600">Create and manage your tasks efficiently.</p>
            </div>
            <div className="bg-taskzen-purple/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-taskzen-purple mb-2">Calendar</h2>
              <p className="text-gray-600">View your schedule and upcoming deadlines.</p>
            </div>
            <div className="bg-taskzen-blue/10 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-taskzen-blue mb-2">Notes</h2>
              <p className="text-gray-600">Keep track of your important notes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
