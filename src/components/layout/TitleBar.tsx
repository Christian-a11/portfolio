import { User } from "lucide-react";

interface TitleBarProps {
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  isMaximized: boolean;
  searchQuery: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function TitleBar({
  onMinimize,
  onMaximize,
  onClose,
  isMaximized,
  searchQuery,
  onSearchChange,
  onSearchKeyDown
}: TitleBarProps) {
  return (
    <div className="select-none bg-[#2B7CD3] border-b border-[#1A5FB4] shadow-sm shrink-0" onDoubleClick={onMaximize}>
      <div className="flex items-center justify-between h-9 px-3">
        <div className="flex items-center gap-2">
          <div className="grid place-items-center w-6 h-6 rounded hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-white font-bold text-sm tracking-tight">W</span>
          </div>

          <div className="flex items-center gap-2 ml-2">
            <span className="text-sm font-medium text-white truncate max-w-[150px] md:max-w-[200px]">
              Christian Parra — Portfolio
            </span>
            <span className="hidden md:inline text-xs text-white/70 bg-white/10 px-1.5 rounded ml-1">Document</span>
          </div>
        </div>

        <div className="flex-1 max-w-[400px] mx-4 hidden sm:block">
          <div className="flex items-center bg-white/20 rounded px-2 py-1 gap-2 border border-white/10 focus-within:bg-white focus-within:text-black transition-colors">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-xs text-white placeholder-white/70 w-full focus:text-black focus:placeholder-gray-500"
              value={searchQuery}
              onChange={onSearchChange}
              onKeyDown={onSearchKeyDown}
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <div className="hidden md:flex items-center gap-2 mr-4">
            <span className="text-xs text-white font-medium">CP</span>
            <User className="w-4 h-4 text-white" />
          </div>
          <button onClick={onMinimize} className="w-10 h-9 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
            <span className="text-lg leading-none mb-1">−</span>
          </button>
          <button onClick={onMaximize} className="w-10 h-9 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
            <span className="text-sm">{isMaximized ? '❐' : '□'}</span>
          </button>
          <button onClick={onClose} className="w-10 h-9 flex items-center justify-center hover:bg-[#E81123] transition-colors text-white">
            <span className="text-lg leading-none">×</span>
          </button>
        </div>
      </div>
    </div>
  );
}
