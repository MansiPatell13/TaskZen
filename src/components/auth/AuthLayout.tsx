
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="auth-container">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">
          {/* Left side: Form */}
          <div className="w-full max-w-md fade-in">
            <div className="auth-card">
              <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                {subtitle && <p className="text-gray-500">{subtitle}</p>}
              </div>
              {children}
            </div>
          </div>
          
          {/* Right side: Decorative element */}
          <div className="hidden lg:block w-full max-w-md fade-in">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-taskzen-coral/10 rounded-full"></div>
              <div className="absolute top-20 -right-5 w-16 h-16 bg-taskzen-coral/20 rounded-full"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold mb-4">Welcome to TaskZen</h2>
                <p className="text-gray-600 mb-4">
                  Your smart productivity assistant to help you focus on what matters most.
                </p>
                <div className="flex gap-2 mb-6">
                  <div className="h-1 rounded-full bg-taskzen-coral w-10"></div>
                  <div className="h-1 rounded-full bg-taskzen-purple w-6"></div>
                  <div className="h-1 rounded-full bg-taskzen-blue w-4"></div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-taskzen-coral"></div>
                    <span className="text-sm text-gray-600">Create categorized to-dos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-taskzen-purple"></div>
                    <span className="text-sm text-gray-600">Sync with calendars</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-taskzen-blue"></div>
                    <span className="text-sm text-gray-600">Beat deadlines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="fixed -z-10 top-0 left-0 right-0 bottom-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-taskzen-coral/5 rounded-full animate-pulse" style={{ animationDuration: '7s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-taskzen-purple/5 rounded-full animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
