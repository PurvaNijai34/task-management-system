import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Users, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Terminal 
} from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden relative">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-[600px] right-[-10%] w-[400px] h-[400px] bg-emerald-500/5 blur-3xl pointer-events-none" />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/70 border-b border-slate-800/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5 group cursor-pointer">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              TaskFlow
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-1.5"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl transition-all group-hover:opacity-90" />
              <span className="inline-flex h-9 items-center justify-center rounded-[11px] bg-[#030712] px-4 text-sm font-medium text-white backdrop-blur-3xl transition-all group-hover:bg-transparent">
                Get Started
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-6 pt-24 pb-20 text-center z-10">
        {/* Banner Announcement */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-xs text-indigo-300 font-medium mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Introducing TaskFlow Enterprise UI v2.0</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.15] bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-500">
          Manage Tasks. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            Streamline Execution.
          </span>
        </h1>

        <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
          A secure, high-performance task workspace architecture built with the 
          MERN stack. Experience fine-grained Role-Based Access Control and strict cookie-based auth privacy.
        </p>

        {/* Hero Actions */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/register"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 h-12 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5"
          >
            Create Free Account
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/login"
            className="w-full sm:w-auto flex items-center justify-center px-6 h-12 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 font-medium hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all backdrop-blur-sm"
          >
            Explore Live Demo
          </Link>
        </div>

        {/* Dashboard Preview Component Mockup */}
        <div className="mt-20 relative p-2 rounded-2xl border border-slate-800/80 bg-slate-900/20 backdrop-blur-xl shadow-2xl shadow-indigo-500/5 group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="rounded-xl border border-slate-800 bg-[#0b0f19] h-64 md:h-96 w-full overflow-hidden flex flex-col">
            {/* Window Controls */}
            <div className="h-10 border-b border-slate-800/80 bg-slate-950/60 px-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/40" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                <div className="w-3 h-3 rounded-full bg-green-500/40" />
              </div>
              <div className="text-xs text-slate-500 font-mono">dashboard_preview.exe</div>
              <div className="w-12" />
            </div>
            {/* Inside Window Graphic Representation */}
            <div className="p-6 flex-1 grid grid-cols-3 gap-4 opacity-40 selection:bg-transparent pointer-events-none">
              <div className="col-span-1 border border-dashed border-slate-800 rounded-lg p-4 space-y-3">
                <div className="h-4 bg-slate-800 rounded w-3/4" />
                <div className="h-3 bg-slate-900 rounded" />
                <div className="h-3 bg-slate-900 rounded w-5/6" />
              </div>
              <div className="col-span-2 border border-dashed border-slate-800 rounded-lg p-4 space-y-4">
                <div className="h-8 bg-slate-800 rounded-lg w-1/3" />
                <div className="space-y-2">
                  <div className="h-10 bg-slate-900/60 border border-slate-800 rounded-lg" />
                  <div className="h-10 bg-slate-900/60 border border-slate-800 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">Architecture Features</h2>
          <p className="text-3xl font-bold mt-2 text-white">Engineered for security & speed</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/20 p-6 hover:border-slate-700/80 transition-all duration-300">
            <div className="h-10 w-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:bg-indigo-500 group-hover:text-white transition-all">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-200 group-hover:text-white transition-colors">
              HttpOnly Cookie Cryptography
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              JWT payload storage configured with strict HttpOnly constraints preventing XSS script tokens hijacking.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/20 p-6 hover:border-slate-700/80 transition-all duration-300">
            <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:bg-purple-500 group-hover:text-white transition-all">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-200 group-hover:text-white transition-colors">
              Role-Based Gatekeeping
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Isolated middleware routing segments rendering specialized layouts for Standard Users vs Control Admins.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/20 p-6 hover:border-slate-700/80 transition-all duration-300">
            <div className="h-10 w-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 mb-5 group-hover:bg-pink-500 group-hover:text-white transition-all">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-slate-200 group-hover:text-white transition-colors">
              Atomic CRUD Operations
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Instantly track dynamic mutation states. Create, read, patch, or purge operational pipelines with feedback.
            </p>
          </div>
        </div>
      </section>

    

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/40 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            Built by <span className="text-slate-400 font-medium">Purva Nijai</span>
          </div>
          <div className="flex gap-6">
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;