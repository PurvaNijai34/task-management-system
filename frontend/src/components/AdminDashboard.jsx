import { useEffect, useState } from "react";
import { 
  ShieldCheck, 
  Activity, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Terminal,
  Grid
} from "lucide-react";
import { toast } from "react-toastify";

import api from "../api/axios";

import Navbar from "./Navbar";
import TaskCard from "./TaskCard";
import Loader from "./Loader";
import EmptyState from "./EmptyState";

import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {
  const { user } = useAuth();

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/tasks");
      setTasks(data.tasks);
    } catch (error) {
      console.error("Admin fetch operation failed:", error);
      toast.error(error.response?.data?.message || "Failed to sync system database logs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      toast.success("System override: Task record purged successfully.");
      fetchTasks();
    } catch (error) {
      console.error(error);
      toast.error("Failed to execute deletion protocol.");
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      await api.put(`/tasks/${id}`, updatedData);
      toast.success("Global database records synchronized.");
      fetchTasks();
    } catch (error) {
      console.error(error);
      toast.error("Failed to commit network updates.");
    }
  };


  const metrics = {
    total: tasks.length,
    completed: tasks.filter(t => t.status?.toLowerCase() === 'completed').length,
    inProgress: tasks.filter(t => t.status?.toLowerCase() === 'in progress').length,
    pending: tasks.filter(t => t.status?.toLowerCase() === 'pending').length
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500/30 overflow-y-auto">
      
      {/* Red ambient warning glow layer on background indicating root administration clearance */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-purple-600/[0.02] blur-[120px] pointer-events-none" />
      
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-8 relative z-10">
        
        {/* Admin Header Grid Row Layout */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-widest mb-1 font-mono">
              <ShieldCheck className="w-4 h-4 text-rose-500" />
              <span>Root Admin Monitoring Engine</span>
            </div>
            
            <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Welcome back, Master System Admin 👑
            </h1>
            
            <p className="text-slate-400 text-sm font-light mt-0.5">
              Overwatch platform metrics, tasks lifecycle execution nodes, and user instances.
            </p>
          </div>

          {/* Secure Node Indicator Box */}
          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-rose-500/10 bg-rose-500/[0.02] font-mono text-xs text-rose-400 shadow-md">
            <Terminal className="w-4 h-4 text-rose-400 animate-pulse" />
            <span>status_access: granted_all</span>
          </div>
        </div>

        {/* Executive Management Meta-Analytics Grid Widget Blocks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card Total Registry */}
          <div className="bg-slate-900/20 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-slate-600 group-hover:text-slate-400 transition-colors"><Activity className="w-4 h-4" /></div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Global Registry</p>
            <h3 className="text-3xl font-bold text-slate-100 tracking-tight mt-1.5">{metrics.total}</h3>
            <span className="text-[10px] text-slate-600 block mt-1 font-mono">live_tasks_count</span>
          </div>

          {/* Card In Progress Processing */}
          <div className="bg-slate-900/20 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-indigo-500/40 group-hover:text-indigo-400 transition-colors"><Clock className="w-4 h-4" /></div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Processing Stack</p>
            <h3 className="text-3xl font-bold text-indigo-400 tracking-tight mt-1.5">{metrics.inProgress}</h3>
            <span className="text-[10px] text-indigo-500/40 block mt-1 font-mono">active_threads</span>
          </div>

          {/* Card Completed Operations */}
          <div className="bg-slate-900/20 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-emerald-500/40 group-hover:text-emerald-400 transition-colors"><CheckCircle2 className="w-4 h-4" /></div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Resolved Deployments</p>
            <h3 className="text-3xl font-bold text-emerald-400 tracking-tight mt-1.5">{metrics.completed}</h3>
            <span className="text-[10px] text-emerald-500/40 block mt-1 font-mono">lifecycle_done</span>
          </div>

          {/* Card Pending Pipeline Queue */}
          <div className="bg-slate-900/20 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-amber-500/40 group-hover:text-amber-400 transition-colors"><AlertCircle className="w-4 h-4" /></div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Backlog Queue</p>
            <h3 className="text-3xl font-bold text-amber-400 tracking-tight mt-1.5">{metrics.pending}</h3>
            <span className="text-[10px] text-amber-500/40 block mt-1 font-mono">awaiting_action</span>
          </div>

        </div>

        {/* Main Database Control Board Listing Grid */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2 text-xs font-medium text-slate-400 font-mono">
            <Grid className="w-3.5 h-3.5 text-slate-500" />
            <span>Master Registry Directory Feed</span>
          </div>

          {loading ? (
            <div className="h-64 flex items-center justify-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/10"><Loader /></div>
          ) : tasks.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in">
              {tasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onDelete={deleteTask}
                  onUpdate={updateTask}
                />
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;