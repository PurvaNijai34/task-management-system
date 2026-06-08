
import { Inbox, KanbanSquare, Sparkles } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-14 px-6 border border-dashed border-slate-800/80 rounded-2xl bg-slate-900/10 backdrop-blur-sm relative overflow-hidden animate-fade-in group font-sans">
      

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/20 to-transparent pointer-events-none" />

      <div className="relative mb-5 flex items-center justify-center">

        <div className="absolute h-12 w-12 rounded-xl bg-slate-800/40 border border-slate-700/30 scale-110 blur-[2px] group-hover:border-indigo-500/20 transition-all duration-300" />
        
        <div className="relative h-11 w-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-500 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all duration-300 shadow-xl">
          <KanbanSquare className="w-5 h-5 stroke-[1.5]" />
        </div>
        
        {/* Decorative corner star element indicator */}
        <div className="absolute -top-1 -right-1 text-slate-600 group-hover:text-amber-400 group-hover:animate-pulse transition-colors">
          <Sparkles className="w-3 h-3" />
        </div>
      </div>

      {/* Primary Context Messaging Segment */}
      <div className="text-center max-w-xs relative z-10 space-y-1.5">
        <h3 className="text-sm font-semibold text-slate-200 tracking-tight group-hover:text-white transition-colors">
          No active tasks found
        </h3>
        <p className="text-xs text-slate-500 font-light leading-relaxed">
          Your project pipeline is completely clear. Use the creation console to initialize your first operational assignment.
        </p>
      </div>

      {/* Terminal metadata status tracker label */}
      <div className="mt-5 font-mono text-[9px] text-slate-600 bg-slate-950/40 border border-slate-900 px-2 py-0.5 rounded-md uppercase tracking-widest">
        pipeline_state: empty
      </div>

    </div>
  );
};

export default EmptyState;