import { BookOpen, Monitor, LayoutTemplate, SlidersHorizontal, Minus, Plus } from 'lucide-react';

interface StatusBarProps {
  currentPage: number;
  totalPages: number;
  wordCount: number;
  zoom: number;
  onZoomChange: (zoom: number) => void;
}

export default function StatusBar({ currentPage, totalPages, wordCount, zoom, onZoomChange }: StatusBarProps) {
  const handleZoomIn = () => {
    if (zoom < 200) {
      onZoomChange(Math.min(zoom + 1, 200));
    }
  };

  const handleZoomOut = () => {
    if (zoom > 50) {
      onZoomChange(Math.max(zoom - 1, 50));
    }
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#2B7CD3] text-white flex items-center justify-between px-2 sm:px-4 text-[11px] z-50 select-none border-t border-[#1e5c9e] font-sans shadow-md">
      <div className="flex items-center gap-2 sm:gap-6">
        <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded cursor-pointer transition-colors duration-200">
          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded cursor-pointer transition-colors duration-200">
          <BookOpen className="w-3.5 h-3.5" />
          <span className="font-semibold">{wordCount} words</span>
        </div>
        <div className="hidden md:flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded cursor-pointer transition-colors duration-200">
          <BookOpen className="w-3.5 h-3.5" />
          <span className="font-semibold">English (Philippines)</span>
        </div>
        <div className="hidden lg:flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded cursor-pointer transition-colors duration-200">
           <span className="font-semibold">Accessibility: Good to go</span>
        </div>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-6">
        <div className="hidden sm:flex items-center gap-1 mr-2">
          <div className="hover:bg-white/10 p-1.5 rounded cursor-pointer transition-colors duration-200" title="Focus Mode">
            <LayoutTemplate className="w-3.5 h-3.5" />
          </div>
          <div className="hover:bg-white/10 p-1.5 rounded cursor-pointer transition-colors duration-200" title="Read Mode">
            <BookOpen className="w-3.5 h-3.5" />
          </div>
          <div className="p-1.5 rounded cursor-pointer bg-white/20 shadow-inner" title="Print Layout">
            <Monitor className="w-3.5 h-3.5" />
          </div>
          <div className="hover:bg-white/10 p-1.5 rounded cursor-pointer transition-colors duration-200" title="Web Layout">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </div>
        </div>
        
        <div className="flex items-center gap-2 sm:gap-3 select-none">
          <div 
             className="cursor-pointer hover:bg-white/10 p-1 rounded transition-colors duration-200"
             onClick={handleZoomOut}
          >
            <Minus className="w-3 h-3" />
          </div>
          
          <div className="w-16 sm:w-28 h-1 bg-[#1A5FB4] rounded-full relative cursor-pointer group flex items-center">
             <input 
                type="range" 
                min="50" 
                max="200" 
                value={zoom} 
                onChange={(e) => onZoomChange(parseInt(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
            <div 
               className="absolute top-1/2 -translate-y-1/2 h-1 bg-white/30 rounded-full pointer-events-none"
               style={{ width: `${((zoom - 50) / 150) * 100}%` }}
            ></div>
            <div 
               className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-0.5 h-2.5 bg-white/50 pointer-events-none" 
               style={{ left: '50%' }}
            />
             <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md hover:scale-110 transition-transform pointer-events-none"
                style={{ left: `${((zoom - 50) / 150) * 100}%` }}
             />
          </div>
          
          <div 
             className="cursor-pointer hover:bg-white/10 p-1 rounded transition-colors duration-200"
             onClick={handleZoomIn}
          >
            <Plus className="w-3 h-3" />
          </div>
          <span className="w-8 sm:w-10 text-center text-xs font-semibold">{zoom}%</span>
        </div>
      </div>
    </div>
  );
}
