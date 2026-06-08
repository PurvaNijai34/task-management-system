import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Terminal, LogOut, Shield, User as UserIcon } from "lucide-react";
import { toast } from "react-toastify";
import api from "../api/axios";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout");
      toast.info("Logged out securely. Goodbye!");
      
      navigate("/login");
      window.location.reload();
    } catch (error) {
      console.error("Logout system exception:", error);
      toast.error("Failed to terminate security session.");
    }
  };

  const userInitials = user?.name ? user.name.charAt(0).toUpperCase() : "O";

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#030712]/70 border-b border-slate-800/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        
        {/* Brand Identity Navigation Anchor */}
        <Link to="/dashboard" className="flex items-center gap-2.5 group transition-opacity hover:opacity-90">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/10">
            <Terminal className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            TaskFlow
          </span>
        </Link>

        <div className="flex items-center gap-5">
          
   
          <div className="hidden sm:flex items-center gap-3 border-r border-slate-800/80 pr-5">
            
            
            <div className="h-8 w-8 rounded-full bg-slate-800 border border-slate-700/60 flex items-center justify-center text-xs font-semibold text-indigo-400 font-mono shadow-inner">
              {userInitials}
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs font-medium text-slate-200 tracking-tight leading-none mb-1">
                {user?.name || "Anonymous Operator"}
              </span>
              
             
            </div>

          </div>

    
          <button
            onClick={handleLogout}
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl bg-slate-950 border border-slate-800 px-4 text-xs font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/5 hover:border-rose-500/20 transition-all active:scale-[0.98]"
            title="Terminate Terminal Session"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">Sign Out</span>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;