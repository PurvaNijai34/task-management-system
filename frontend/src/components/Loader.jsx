import { Loader2, Terminal } from "lucide-react";

const Loader = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-16 px-4 animate-fade-in font-sans">
      <div className="relative flex items-center justify-center">
        
   
        <div className="absolute h-16 w-16 rounded-2xl bg-indigo-500/5 animate-ping opacity-75 duration-1000" />
        
  
        <div className="absolute h-12 w-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-slate-500">
          <Terminal className="w-4 h-4 animate-pulse text-indigo-400" />
        </div>

        {/* Master loading tracking arc ring wrapper */}
        <div className="h-16 w-16 rounded-2xl border-2 border-slate-800/40 border-t-indigo-500 border-r-purple-500 animate-spin duration-700" />
      </div>

      {/* Sub-text diagnostic log status */}
      <div className="mt-5 flex flex-col items-center gap-1">
        <p className="text-xs font-medium text-slate-400 tracking-tight flex items-center gap-1.5">
          <Loader2 className="w-3 h-3 animate-spin text-indigo-400" />
          <span>Synchronizing matrix data...</span>
        </p>
        <span className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">
          status_code: 202
        </span>
      </div>

    </div>
  );
};

export default Loader;