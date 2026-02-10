import { useState, useEffect } from 'react';
import { 
  Wifi, 
  Volume2, 
  Battery, 
  Search, 
  LayoutGrid, 
  FileText
} from 'lucide-react';

interface DesktopProps {
  onOpenApp: () => void;
  isAppOpen: boolean;
  isMinimized: boolean;
}

export default function Desktop({ onOpenApp, isAppOpen, isMinimized }: DesktopProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  const formattedDate = time.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div 
      className="fixed inset-0 z-0 bg-cover bg-center flex flex-col justify-between overflow-hidden select-none"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1477346611705-65d1883cee1e?q=80&w=2070&auto=format&fit=crop")',
        backgroundSize: 'cover'
      }}
    >
      {/* Desktop Icons Area */}
      <div className="flex-1 p-4 grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4 content-start items-start justify-items-center sm:justify-items-start">
        {/* Resume Shortcut */}
        <div 
          className="group flex flex-col items-center gap-1 w-20 cursor-pointer p-2 rounded hover:bg-white/10 transition-colors"
          onDoubleClick={onOpenApp}
          onClick={() => {
             // Support single click for mobile/touch
             if (window.innerWidth < 768) onOpenApp();
          }}
        >
          <div className="relative">
             <div className="w-12 h-12 bg-blue-500 rounded flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <FileText className="text-white w-7 h-7" />
             </div>
             <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
             </div>
          </div>
          <span className="text-white text-xs text-center font-medium drop-shadow-md px-1 rounded bg-black/20 group-hover:bg-blue-600/50">
            My Portfolio
          </span>
        </div>
        
        {/* Recycle Bin (Decoration) */}
        <div className="group flex flex-col items-center gap-1 w-20 cursor-default opacity-80 hover:opacity-100 p-2 rounded hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-gray-400/30 backdrop-blur-sm rounded flex items-center justify-center shadow-lg">
                <div className="text-2xl">🗑️</div>
            </div>
          <span className="text-white text-xs text-center font-medium drop-shadow-md px-1 rounded">
            Recycle Bin
          </span>
        </div>
      </div>

      {/* Taskbar */}
      <div className="h-12 bg-[#F3F3F3]/80 backdrop-blur-md border-t border-white/20 flex items-center justify-between px-2 sm:px-4 z-50">
        
        {/* Start & Widgets (Left-aligned on mobile, centered on desktop style usually but let's keep it simple) */}
        <div className="flex items-center gap-1 sm:gap-2">
           <div className="p-2 hover:bg-white/40 rounded transition-colors cursor-pointer" title="Start">
              <LayoutGrid className="w-5 h-5 text-blue-600 fill-blue-600" />
           </div>
           
           {/* Search Bar (Desktop) */}
           <div className="hidden sm:flex items-center bg-white/50 hover:bg-white/80 transition-colors rounded-full px-3 py-1.5 w-48 gap-2 cursor-text border border-gray-300/30">
              <Search className="w-4 h-4 text-gray-500" />
              <span className="text-xs text-gray-600">Search</span>
           </div>
           
           {/* Search Icon (Mobile) */}
           <div className="sm:hidden p-2 hover:bg-white/40 rounded transition-colors cursor-pointer">
              <Search className="w-5 h-5 text-gray-700" />
           </div>

           {/* Task View / Widgets */}
           <div className="p-2 hover:bg-white/40 rounded transition-colors cursor-pointer hidden sm:block">
              <div className="w-5 h-5 flex items-center justify-center">
                 <div className="w-4 h-4 border-2 border-gray-600 rounded-sm"></div>
                 <div className="w-4 h-4 border-2 border-gray-600 rounded-sm -ml-2 -mt-2 bg-transparent"></div>
              </div>
           </div>
        </div>

        {/* Center Taskbar Apps */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-2">
            {/* Word App Icon */}
            <div 
              className={`p-2 rounded transition-all cursor-pointer relative group ${
                isAppOpen ? 'bg-white/60 hover:bg-white/80' : 'hover:bg-white/40'
              }`}
              onClick={() => {
                // If app is open and minimized, restore it. If not open, open it.
                if (isAppOpen && isMinimized) {
                  onOpenApp(); // This will restore the window
                } else if (!isAppOpen) {
                  onOpenApp(); // This will open the window
                }
              }}
            >
               <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center shadow-sm">
                  <span className="text-white font-serif font-bold text-xs">W</span>
               </div>
               {isAppOpen && (
                   <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
               )}
               {/* Tooltip */}
               <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                   Word Portfolio
               </div>
            </div>
            
            {/* Edge Browser (Decoration) */}
            <div className="p-2 hover:bg-white/40 rounded transition-colors cursor-pointer group relative">
               <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white text-[10px] font-bold">e</div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                   Browser
               </div>
            </div>
            
             {/* File Explorer (Decoration) */}
            <div className="p-2 hover:bg-white/40 rounded transition-colors cursor-pointer group relative">
                <div className="w-6 h-6 bg-yellow-400 rounded-sm shadow-sm border-b-2 border-yellow-600"></div>
                 <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                   File Explorer
               </div>
            </div>
        </div>

        {/* System Tray (Right) */}
        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-800">
           <div className="hidden sm:flex items-center gap-1 hover:bg-white/40 p-1.5 rounded cursor-pointer">
              <span className="text-[10px]">ENG</span>
           </div>
           <div className="hidden md:flex items-center gap-2 hover:bg-white/40 p-1.5 rounded cursor-pointer">
              <Wifi className="w-4 h-4" />
              <Volume2 className="w-4 h-4" />
              <Battery className="w-4 h-4" />
           </div>
           <div className="text-right hover:bg-white/40 p-1.5 rounded cursor-pointer">
              <div className="font-medium text-xs sm:text-sm">{formattedTime}</div>
              <div className="text-[10px] sm:text-xs text-gray-600">{formattedDate}</div>
           </div>
           
           {/* Show Desktop Button */}
           <div className="w-1.5 h-full border-l border-gray-300/50 hover:bg-white/50 cursor-pointer ml-1"></div>
        </div>
      </div>
    </div>
  );
}
