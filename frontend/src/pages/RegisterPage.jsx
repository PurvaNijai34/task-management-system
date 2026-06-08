import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Terminal, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Loader2, 
  UserPlus, 
  Info 
} from "lucide-react";
import { toast } from "react-toastify";
import api from "../api/axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Frontend strict validation check for matching passwords
    if (formData.password !== formData.confirmPassword) {
      const mismatchError = "Passwords do not match!";
      setError(mismatchError);
      toast.error(mismatchError);
      return;
    }

    setLoading(true);

    try {
      // Backend structured payload (sending only needed backend data fields)
      const submitPayload = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };

      await api.post("/auth/register", submitPayload);
      
      toast.success("Account created successfully! Please sign in.");
      navigate("/login");
    } catch (err) {
      const errorMsg = err.response?.data?.message || "Registration Failed";
      setError(errorMsg);
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col justify-center items-center px-4 relative overflow-hidden font-sans selection:bg-indigo-500/30">
      
      {/* Background soft glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] pointer-events-none" />

      {/* Brand top segment logo */}
      <div className="flex items-center gap-2.5 mb-6 group cursor-pointer">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <Terminal className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          TaskFlow
        </span>
      </div>

      {/* Form wrapper layout glassmorphism */}
      <div className="w-full max-w-md bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl relative group">
        
        {/* Sleek dynamic top border alignment glow */}
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:via-purple-500/50 transition-all duration-500" />

        <h1 className="text-2xl text-white font-semibold tracking-tight text-center">
          Create an account
        </h1>

        <p className="text-slate-400 text-sm text-center mt-1.5 font-light">
          Get started with your collaborative secure workspace
        </p>

        {/* Form system warning inline container */}
        {error && (
          <div className="bg-rose-500/5 border border-rose-500/20 text-rose-400 text-xs p-3.5 rounded-xl mt-5 flex items-start gap-2.5 animate-fade-in">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          
          {/* Full Name input block */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200"
              />
            </div>
          </div>

          {/* Email Address block */}
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

          {/* Password Input Block */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* New Confirm Password Input Block */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-400">Confirm Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Lock className="w-4 h-4" />
              </div>
              <input
                type={showConfirmPass ? "text" : "password"}
                name="confirmPassword"
                required
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 transition-colors"
              >
                {showConfirmPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Form Action Controls */}
          <button
            disabled={loading}
            className="w-full mt-4 inline-flex h-11 items-center justify-center rounded-xl bg-indigo-600 px-4 text-sm font-medium text-white shadow-lg shadow-indigo-600/10 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none transition-all transform active:scale-[0.98]"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Registering Workspace...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <UserPlus className="w-4 h-4" /> Register Account
              </span>
            )}
          </button>
        </form>

        {/* Back navigation redirection link */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline underline-offset-4 transition-all"
          >
            Log in here
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;