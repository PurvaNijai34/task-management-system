import { useAuth } from "../context/AuthContext";
import { Loader2, Terminal } from "lucide-react";

import AdminDashboard from "../components/AdminDashboard";
import UserDashboard from "../components/UserDashboard";

const DashboardPage = () => {
  const { user, loading } = useAuth(); 


  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col justify-center items-center relative overflow-hidden">
        {/* Background ambient pulse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 blur-[80px] pointer-events-none" />
        
        <div className="flex flex-col items-center gap-4 relative z-10">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 animate-pulse">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium tracking-tight">
            <Loader2 className="w-4 h-4 animate-spin text-indigo-500" />
            <span>Initializing secure session...</span>
          </div>
        </div>
      </div>
    );
  }


  if (user?.role === "admin") {
    return <AdminDashboard />;
  }

  return <UserDashboard />;
};

export default DashboardPage;