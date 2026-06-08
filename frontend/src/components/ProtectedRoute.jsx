import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Loader2, Terminal } from "lucide-react";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();


  if (loading) {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col justify-center items-center relative overflow-hidden font-sans">
        {/* Subtle ambient security layer backdrop glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/5 blur-[80px] pointer-events-none" />
        
        <div className="flex flex-col items-center gap-4 relative z-10">
          <div className="h-10 w-10 rounded-xl bg-[#090d16] border border-slate-800 flex items-center justify-center shadow-2xl">
            <Terminal className="w-4 h-4 text-indigo-400 animate-pulse" />
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 tracking-tight">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-500" />
            <span>Verifying workspace clearance...</span>
          </div>
        </div>
      </div>
    );
  }


  if (!user) {
    return <Navigate to="/login" replace />;
  }

  
  return children;
};

export default ProtectedRoute;  