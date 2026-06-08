import { useState } from "react";
import { PlusCircle, FileText, Heading, Sparkles } from "lucide-react";
import { toast } from "react-toastify";

const TaskForm = ({ onCreateTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent submission if title is empty
    if (!title.trim()) {
      toast.warn("Please provide a task title before submission.");
      return;
    }

    onCreateTask({
      title: title.trim(),
      description: description.trim(),
    });

    toast.success("New task instance created successfully!");
    setTitle("");
    setDescription("");
  };

  return (
    <div className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-2xl relative group">
      
      {/* Subtle top edge border gradient glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-slate-700/40 to-transparent group-hover:via-indigo-500/30 transition-all duration-500" />

      {/* Form Header */}
      <div className="flex items-center gap-2 mb-6">
        <div className="h-7 w-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
          <Sparkles className="w-4 h-4" />
        </div>
        <h2 className="text-lg font-semibold text-slate-100 tracking-tight">
          Create New Task
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Title Input Block */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-400">Task Title</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
              <Heading className="w-4 h-4" />
            </div>
            <input
              type="text"
              required
              placeholder="Deploy production build..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-slate-200 placeholder-slate-600 outline-none text-sm transition-all duration-200"
            />
          </div>
        </div>

        {/* Description Textarea Block */}
        <div className="space-y-1.5">
          <label className="text-xs font-medium text-slate-400">Description</label>
          <div className="relative">
            <div className="absolute top-3 left-3.5 pointer-events-none text-slate-500">
              <FileText className="w-4 h-4" />
            </div>
            <textarea
              placeholder="Detail out the scope of work, dependencies, and objectives..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 h-28 rounded-xl bg-slate-950/60 border border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 text-slate-200 placeholder-slate-600 outline-none text-sm resize-none transition-all duration-200"
            />
          </div>
        </div>

        {/* Action Button Container */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 text-sm font-medium text-white shadow-lg shadow-indigo-600/10 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all transform active:scale-[0.98]"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Initialize Task</span>
          </button>
        </div>

      </form>
    </div>
  );
};

export default TaskForm;