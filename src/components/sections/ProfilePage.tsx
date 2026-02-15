import { personalInfo } from "@/data/portfolio";
import akoImage from "../../ako.jpg";

interface ProfilePageProps {
  isLoaded: boolean;
}

export default function ProfilePage({ isLoaded }: ProfilePageProps) {
  return (
    <section id="profile" className="flex-shrink-0 w-full flex items-start justify-center py-8">
      <div className={`w-full max-w-[850px] bg-white paper-shadow rounded-sm transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-6 scale-[0.985]"
      }`}>
        <div className="p-6 md:p-14 text-center" data-document-content>
          {/* Document Header (Small) */}
          <div className="flex justify-between items-center mb-8 border-b border-gray-200 pb-2">
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest">Formal Portrait // FY 2025</span>
            <span className="font-document text-xs italic text-[var(--word-text-secondary)]">Document No. 001-A</span>
          </div>

          <div className={`transition-all duration-800 delay-100 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
             <h1 className="font-document text-3xl font-bold text-[var(--word-text)] mb-2 uppercase tracking-tight">
               Official Graduation Portrait
             </h1>
             <div className="w-24 h-1 bg-[var(--word-blue)] mx-auto mb-8" />
          </div>

          {/* Image Container - Microsoft Word Image Style */}
          <div className={`relative inline-block mb-10 group transition-all duration-1000 delay-200 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            {/* The "Selection Handles" effect when "clicked" (simulated with hover or just static for aesthetic) */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-[var(--word-blue)] z-10 hidden group-hover:block" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-[var(--word-blue)] z-10 hidden group-hover:block" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-[var(--word-blue)] z-10 hidden group-hover:block" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-[var(--word-blue)] z-10 hidden group-hover:block" />
            
            {/* Main Image with Document Border */}
            <div className="p-2 bg-white border border-gray-300 shadow-md">
              <img 
                src={akoImage} 
                alt={personalInfo.name} 
                className="max-h-[500px] w-auto mx-auto object-cover border border-gray-100"
              />
            </div>
            
            {/* Caption */}
            <p className="font-document italic text-sm text-[var(--word-text-secondary)] mt-4">
              Figure 1.1: {personalInfo.name} — B.S. Case Study Subject (2025)
            </p>
          </div>

          <div className={`max-w-xl mx-auto transition-all duration-700 delay-400 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <p className="font-document text-lg leading-relaxed text-[var(--word-text)] mb-6">
              "Dedicated to pushing the boundaries of technology through innovation and rigorous development standards."
            </p>
            
            <div className="grid grid-cols-2 gap-8 text-left border-t border-gray-100 pt-8 mt-8">
              <div>
                <h4 className="font-document font-bold text-xs uppercase text-[var(--word-blue)] mb-2">Academic Status</h4>
                <p className="font-document text-sm text-[var(--word-text-secondary)]">Class of 2025 // Graduated with Honors</p>
              </div>
              <div>
                <h4 className="font-document font-bold text-xs uppercase text-[var(--word-blue)] mb-2">Primary Focus</h4>
                <p className="font-document text-sm text-[var(--word-text-secondary)]">Full-Stack Development & AI Integration</p>
              </div>
            </div>
          </div>

          {/* Page Footer */}
          <div className="mt-20 pt-4 border-t border-[var(--word-border)] flex justify-between items-center">
            <p className="font-mono text-[10px] text-[var(--word-text-secondary)]">USER_CONFIDENTIAL // ATTACHMENT_A</p>
            <p className="font-mono text-xs text-[var(--word-text-secondary)]">Frontispiece</p>
          </div>
        </div>
      </div>
    </section>
  );
}
