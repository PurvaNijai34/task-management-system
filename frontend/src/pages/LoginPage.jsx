import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Terminal, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Loader2, 
  ChevronRight, 
  Info 
} from "lucide-react";
import { toast } from "react-toastify";

import api from "../api/axios";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { fetchCurrentUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.warn("Please fill in all required fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await api.post("/auth/login", formData);
      await fetchCurrentUser();

      toast.success("Welcome back! Loading your workspace...");
      navigate("/dashboard");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Login Failed";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col justify-center items-center px-4 relative overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] pointer-events-none" />

      {/* Brand logo header */}
      <div className="flex items-center gap-2.5 mb-8 group cursor-pointer">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <Terminal className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          TaskFlow
        </span>
      </div>

      {/* Main card wrapper */}
      <div className="w-full max-w-md bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl relative group">
        
        {/* Subtle decorative edge gradient */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:via-indigo-500/50 transition-all duration-500" />

        <h1 className="text-2xl text-white font-semibold tracking-tight text-center">
          Welcome back
        </h1>

        <p className="text-slate-400 text-sm text-center mt-1.5 font-light">
          Enter your credentials to access your terminal workspace
        </p>

        {/* Custom Fallback inline banner block */}
        {error && (
          <div className="bg-rose-500/5 border border-rose-500/20 text-rose-400 text-xs p-3.5 rounded-xl mt-5 flex items-start gap-2.5">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          {/* Email input field block */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Email Address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* Password input field block */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-slate-400">Password</label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Form submit processing action */}
          <button
            disabled={loading}
            className="w-full mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-4 text-sm font-medium text-white shadow-lg shadow-indigo-600/10 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none transition-all transform active:scale-[0.98]"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Authenticating...
              </span>
            ) : (
              <span className="flex items-center gap-1">
                Sign In <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </button>
        </form>

        {/* Demo profiles dynamic access panel */}
        <div className="mt-6 border border-slate-800/80 bg-slate-950/40 rounded-xl p-4 relative overflow-hidden">
          <div className="flex items-center gap-2 mb-2 text-xs font-medium text-indigo-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>Sandbox Admin Environment</span>
          </div>
          <div className="font-mono text-[11px] text-slate-400 space-y-1">
            <p><span className="text-slate-600">login_user:</span> admin@gmail.com</p>
            <p><span className="text-slate-600">login_pass:</span> Admin@123</p>
          </div>
        </div>

        {/* Auxiliary system access link */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline underline-offset-4 transition-all"
          >
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;