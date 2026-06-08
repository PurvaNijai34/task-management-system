import { useState } from "react";
import { 
  Calendar, 
  User, 
  Edit3, 
  Trash2, 
  Check, 
  X, 
  FileText, 
  FolderKanban,
  Clock,
  Layers
} from "lucide-react";
import { toast } from "react-toastify";

const TaskCard = ({ task, onDelete, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    status: task.status,
  });

  const handleSave = () => {
    if (!formData.title.trim()) {
      toast.warn("Task title cannot be blank!");
      return;
    }
    
    onUpdate(task._id, formData);
    setEditing(false);
    toast.success("Task metrics updated successfully.");
  };

  // Helper utility mapping styles based on contextual lifecycle states
  const getStatusStyles = (statusText) => {
    switch (statusText?.toLowerCase()) {
      case "completed":
        return "bg-emerald-500/10 border-emerald-500/30 text-emerald-400";
      case "in progress":
        return "bg-indigo-500/10 border-indigo-500/30 text-indigo-400";
      default:
        return "bg-amber-500/10 border-amber-500/30 text-amber-400";
    }
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl relative group transition-all duration-300 hover:border-slate-700/60 hover:shadow-indigo-500/[0.02]">
      
      {/* Absolute top glowing line on component card hover */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent group-hover:via-indigo-500/30 transition-all duration-500" />

      {editing ? (
        <div className="space-y-4 animate-fade-in">
          {/* Edit Module Header */}
          <div className="flex items-center gap-2 pb-2 border-b border-slate-800/60 text-xs font-medium text-indigo-400">
            <Edit3 className="w-3.5 h-3.5" />
            <span>Modify Task Parameters</span>
          </div>

          {/* Edit Title Field */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Task Title</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-600">
                <FolderKanban className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 text-slate-200 text-sm outline-none transition-all"
                placeholder="Task Summary"
              />
            </div>
          </div>

          {/* Edit Description Field */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Description</label>
            <div className="relative">
              <div className="absolute top-3 left-3 pointer-events-none text-slate-600">
                <FileText className="w-4 h-4" />
              </div>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full pl-9 pr-4 py-2 h-24 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 text-slate-200 text-sm outline-none resize-none transition-all"
                placeholder="Provide detailed breakdown..."
              />
            </div>
          </div>

          {/* Edit Status Select Block */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Lifecycle State</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-600">
                <Clock className="w-4 h-4" />
              </div>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 text-slate-200 text-sm outline-none appearance-none cursor-pointer transition-all"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>

          {/* Editing Actions Panel */}
          <div className="flex gap-2.5 pt-2">
            <button
              onClick={handleSave}
              className="flex-1 inline-flex h-9 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 text-xs font-medium text-white shadow-lg shadow-emerald-600/10 hover:bg-emerald-500 transition-all active:scale-[0.98]"
            >
              <Check className="w-3.5 h-3.5" /> Save Changes
            </button>

            <button
              onClick={() => setEditing(false)}
              className="inline-flex h-9 items-center justify-center gap-1.5 rounded-xl bg-slate-800 border border-slate-700/60 px-4 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-all"
            >
              <X className="w-3.5 h-3.5" /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-full justify-between animate-fade-in">
          <div>
            {/* Top Row: Title + Adaptive Status Pill */}
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-slate-100 font-semibold text-base tracking-tight leading-snug group-hover:text-white transition-colors">
                {task.title}
              </h3>

              <span className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full border shrink-0 ${getStatusStyles(task.status)}`}>
                {task.status}
              </span>
            </div>

            {/* Middle Row: Description text block */}
            <p className="text-slate-400 text-sm font-light leading-relaxed mt-3 break-words line-clamp-4">
              {task.description || <span className="text-slate-600 italic">No description provided for this assignment container.</span>}
            </p>
          </div>

          {/* Bottom Row Footer Segment */}
          <div className="mt-6 pt-4 border-t border-slate-800/60 space-y-3">
            {/* Meta tags indicators */}
            {task.createdBy?.email && (
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <User className="w-3.5 h-3.5 text-slate-600" />
                <span className="truncate" title={task.createdBy.email}>
                  {task.createdBy.email.split('@')[0]}
                  <span className="text-slate-700">@{task.createdBy.email.split('@')[1]}</span>
                </span>
              </div>
            )}

            {/* Read-only interactive operational control panel */}
            <div className="flex gap-2">
              <button
                onClick={() => setEditing(true)}
                className="flex-1 inline-flex h-8 items-center justify-center gap-1.5 rounded-lg bg-slate-800/60 border border-slate-800 text-xs font-medium text-slate-300 hover:text-indigo-400 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" /> Modify
              </button>

              <button
                onClick={() => {
                  if(confirm("Are you certain you want to purge this task block?")) {
                    onDelete(task._id);
                    toast.info("Task deletion request processing.");
                  }
                }}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800/60 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-500/30 hover:bg-rose-500/5 transition-all"
                title="Purge Task"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskCard;