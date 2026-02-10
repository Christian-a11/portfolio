import { useState, useEffect } from 'react';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Phone, 
  MessageCircle, 
  Chrome, 
  Camera, 
  FileText,
  Triangle,
  Circle,
  Square
} from 'lucide-react';
import { cn } from "@/lib/utils";

interface MobileProps {
  onOpenApp: () => void;
  isAppOpen: boolean;
  isMinimized: boolean;
}

export default function Mobile({ onOpenApp, isAppOpen, isMinimized }: MobileProps) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  const formattedDate = time.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });

  return (
    <div 
      className="fixed inset-0 z-0 flex flex-col justify-between overflow-hidden select-none bg-black text-white"
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Android Status Bar */}
      <div className="h-8 flex items-center justify-between px-4 pt-1 text-xs font-medium tracking-wide">
        <div className="flex items-center gap-2">
             <span>{formattedTime}</span>
             {/* Notification icons placeholder */}
             <div className="flex gap-1">
                <MessageCircle className="w-3 h-3 text-white/70" />
             </div>
        </div>
        <div className="flex items-center gap-1.5">
          <Signal className="w-3.5 h-3.5 fill-current" />
          <Wifi className="w-3.5 h-3.5" />
          <div className="flex items-center gap-1">
             <span className="text-[10px]">100%</span>
             <Battery className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </div>

      {/* Home Screen Content */}
      <div className="flex-1 flex flex-col p-4">
        {/* Date/Time Widget */}
        <div className="mt-8 mb-auto text-center drop-shadow-md">
            <h1 className="text-6xl font-light tracking-tighter text-white/90">
                {formattedTime}
            </h1>
            <p className="text-lg text-white/80 mt-1">{formattedDate}</p>
        </div>

        {/* App Grid */}
        <div className="grid grid-cols-4 gap-y-6 gap-x-2 mb-6">
            {/* Word App (Resume) */}
            <div 
                className="flex flex-col items-center gap-1 cursor-pointer group active:scale-95 transition-transform"
                onClick={onOpenApp}
            >
                <div className="w-14 h-14 bg-white rounded-[18px] flex items-center justify-center shadow-lg relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600 flex items-center justify-center">
                         <span className="text-white font-serif font-bold text-2xl">W</span>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-xs text-white/90 drop-shadow-md">My Portfolio </span>
                    {isAppOpen && (
                        <div className={cn(
                            "w-1.5 h-1.5 rounded-full mt-0.5 transition-all",
                            isMinimized ? "bg-white/40" : "bg-white"
                        )} />
                    )}
                </div>
            </div>

             {/* Dummy Apps */}
            {[
                { name: 'Chrome', icon: <Chrome className="w-8 h-8 text-white" />, color: 'bg-gradient-to-br from-red-500 via-yellow-500 to-green-500' },
                { name: 'Photos', icon: <div className="w-full h-full bg-white relative"><div className="absolute inset-2 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full opacity-80"></div></div>, color: 'overflow-hidden' },
                { name: 'Camera', icon: <Camera className="w-8 h-8 text-white" />, color: 'bg-gray-800' },
                { name: 'Docs', icon: <FileText className="w-8 h-8 text-white" />, color: 'bg-blue-400' },
            ].map((app, i) => (
                <div key={i} className="flex flex-col items-center gap-1 opacity-90 cursor-default">
                    <div className={`w-14 h-14 rounded-[18px] flex items-center justify-center shadow-lg ${app.color}`}>
                        {app.icon}
                    </div>
                    <span className="text-xs text-white/90 drop-shadow-md">{app.name}</span>
                </div>
            ))}
        </div>

        {/* Dock / Bottom Row */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-3 grid grid-cols-4 gap-4 mb-2">
             <div className="flex flex-col items-center justify-center active:scale-90 transition-transform">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white fill-current" />
                </div>
             </div>
             <div className="flex flex-col items-center justify-center active:scale-90 transition-transform">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white fill-current" />
                </div>
             </div>
             <div className="flex flex-col items-center justify-center active:scale-90 transition-transform">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden p-2">
                    <Chrome className="w-full h-full text-blue-600" />
                </div>
             </div>
             <div className="flex flex-col items-center justify-center active:scale-90 transition-transform">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
                   <Camera className="w-6 h-6 text-white" />
                </div>
             </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="h-12 flex items-center justify-around px-8 pb-2">
         <div className="p-4 active:bg-white/10 rounded-full transition-colors">
            <Triangle className="w-5 h-5 fill-white/80 text-white/80 -rotate-90" />
         </div>
         <div className="p-4 active:bg-white/10 rounded-full transition-colors">
            <Circle className="w-4 h-4 fill-white/80 text-white/80" />
         </div>
         <div className="p-4 active:bg-white/10 rounded-full transition-colors">
            <Square className="w-4 h-4 fill-white/80 text-white/80" />
         </div>
      </div>
    </div>
  );
}
