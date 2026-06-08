import { useEffect, useState } from "react";
import { 
  FolderKanban, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  LayoutDashboard,
  Terminal,
  Plus,
  X
} from "lucide-react";
import { toast } from "react-toastify";

import api from "../api/axios";

import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";

import { useAuth } from "../context/AuthContext";

const UserDashboard = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal display toggle state

  const fetchTasks = async () => {
    try {
      const { data } = await api.get("/tasks");
      setTasks(data.tasks);
    } catch (error) {
      console.error("Fetch operational failed:", error);
      toast.error(error.response?.data?.message || "Failed to sync task telemetry.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (taskData) => {
    try {
      await api.post("/tasks", taskData);
      setIsModalOpen(false); // Form commit hone ke baad auto-close modal
      fetchTasks();
    } catch (error) {
      console.error(error);
      toast.error("Failed to commit network operation.");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      toast.success("Task record successfully deleted.");
      fetchTasks();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during record deletion.");
    }
  };

  const updateTask = async (id, updatedData) => {
    try {
      await api.put(`/tasks/${id}`, updatedData);
      fetchTasks();
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while deploying updates.");
    }
  };

  // Automated computational derivations for live SaaS numeric badges
  const metrics = {
    total: tasks.length,
    completed: tasks.filter(t => t.status?.toLowerCase() === 'completed').length,
    inProgress: tasks.filter(t => t.status?.toLowerCase() === 'in progress').length,
    pending: tasks.filter(t => t.status?.toLowerCase() === 'pending').length
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-indigo-500/30 overflow-y-auto relative">
      
      {/* Decorative localized accent background ambient glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/[0.02] blur-[150px] pointer-events-none" />
      
      {/* Universal navigation controller */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10 space-y-10 relative z-10">
        
        {/* Dynamic Header Frame Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-1">
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Workspace Console</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              Welcome back, {user?.name || "Operator"}
            </h1>
          </div>
          
          {/* Action Row: Role Badge + Premium Create Task Action Button */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-800/80 bg-slate-900/20 font-mono text-xs text-slate-400">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>role_tier: user</span>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-xs font-semibold text-white shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all transform active:scale-[0.98]"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>Create Task</span>
            </button>
          </div>
        </div>

        {/* Live Analytical Metric Dashboard Tiles Panel */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card Total */}
          <div className="bg-slate-900/20 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-slate-600 group-hover:text-slate-400 transition-colors"><FolderKanban className="w-5 h-5" /></div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Total Tasks</p>
            <h3 className="text-3xl font-bold text-slate-100 tracking-tight mt-2">{metrics.total}</h3>
          </div>

          {/* Card In Progress */}
          <div className="bg-slate-900/20 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-indigo-500/40 group-hover:text-indigo-400 transition-colors"><Clock className="w-5 h-5" /></div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">In Progress</p>
            <h3 className="text-3xl font-bold text-indigo-400 tracking-tight mt-2">{metrics.inProgress}</h3>
          </div>

          {/* Card Completed */}
          <div className="bg-slate-900/20 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-emerald-500/40 group-hover:text-emerald-400 transition-colors"><CheckCircle2 className="w-5 h-5" /></div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Completed</p>
            <h3 className="text-3xl font-bold text-emerald-400 tracking-tight mt-2">{metrics.completed}</h3>
          </div>

          {/* Card Pending */}
          <div className="bg-slate-900/20 border border-slate-800/80 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-amber-500/40 group-hover:text-amber-400 transition-colors"><AlertCircle className="w-5 h-5" /></div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Pending</p>
            <h3 className="text-3xl font-bold text-amber-400 tracking-tight mt-2">{metrics.pending}</h3>
          </div>
        </div>

        {/* Task Management Grid Area (Full Width List view for standard layout cleanliness) */}
        <div className="w-full">
          {loading ? (
            <div className="h-64 flex items-center justify-center border border-dashed border-slate-800 rounded-2xl bg-slate-900/10">
              <Loader />
            </div>
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

      {/* Dynamic Pop-up Modal View Panel Layer */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
          
          {/* Backdrop Blur shadow cover click-to-close handler */}
          <div 
            onClick={() => setIsModalOpen(false)}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity" 
          />

          {/* Modal Architecture Container */}
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 max-h-[90vh] overflow-y-auto transform scale-100 transition-all">
            
            {/* Corner Close Control Trigger */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 h-7 w-7 rounded-lg border border-slate-800 bg-slate-950 flex items-center justify-center text-slate-400 hover:text-white transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Embedded Task Form Component */}
            <TaskForm onCreateTask={createTask} />
          </div>
        </div>
      )}

    </div>
  );
};

export default UserDashboard;