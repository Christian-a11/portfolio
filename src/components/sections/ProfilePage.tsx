import { personalInfo } from "@/data/portfolio";
import akoImage from "../../ako.jpg";
import { Quote, Sparkles, UserCircle } from "lucide-react";

interface ProfilePageProps {
  isLoaded: boolean;
}

export default function ProfilePage({ isLoaded }: ProfilePageProps) {
  return (
    <section id="profile" className="flex-shrink-0 w-full flex items-start justify-center py-8">
      <div className={`w-full max-w-[850px] bg-white paper-shadow rounded-sm transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-6 scale-[0.985]"
      }`}>
        <div className="p-6 md:p-14" data-document-content>
          {/* Document Header */}
          <div className="flex justify-between items-center mb-10 border-b-2 border-[var(--word-text)] pb-2">
            <div className="flex items-center gap-2">
              <UserCircle className="w-5 h-5 text-[var(--word-blue)]" />
              <span className="font-document font-bold text-sm uppercase tracking-wider text-[var(--word-text)]">Professional Introduction</span>
            </div>
            <span className="font-mono text-[10px] text-gray-400">DOC_REF: INTRO-2025-V1</span>
          </div>

          <div className="grid md:grid-cols-12 gap-10 items-start">
            {/* Left Column: Personal Statement & Bio */}
            <div className={`md:col-span-7 transition-all duration-800 delay-100 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
              <h1 className="font-document text-4xl font-bold text-[var(--word-text)] mb-6 leading-tight">
                Hello, I'm <span className="text-[var(--word-blue)]">Christian</span>.
              </h1>
              
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-blue-100 -z-10" />
                <p className="font-document text-lg italic text-[var(--word-text-secondary)] leading-relaxed">
                  "I believe that great software isn't just about clean code—it's about creating meaningful experiences that solve real-world problems."
                </p>
              </div>

              <div className="space-y-4 font-document text-[15px] leading-relaxed text-[var(--word-text)] text-justify">
                <p>
                  I am a Full-Stack Developer with a deep-rooted passion for building robust and scalable applications. My journey in technology started with a simple curiosity about how things work under the hood, which evolved into a career dedicated to excellence in software craftsmanship.
                </p>
                <p>
                  With a background in Computer Science, I bridge the gap between complex technical requirements and intuitive user interfaces. I specialize in modern web and mobile ecosystems, always striving to stay at the forefront of the ever-evolving tech landscape.
                </p>
                <p>
                  Beyond the editor, I am a continuous learner and a problem solver at heart. Whether it's architecting a backend API or fine-tuning a responsive UI, I bring a senior developer mindset of maintainability, scalability, and performance to every project I touch.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--word-blue-light)] text-[var(--word-blue)] rounded-full text-xs font-semibold">
                  <Sparkles className="w-3 h-3" /> Creative Problem Solver
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--word-green-light)] text-[var(--word-green)] rounded-full text-xs font-semibold">
                  <Sparkles className="w-3 h-3" /> Full-Stack Enthusiast
                </div>
              </div>
            </div>

            {/* Right Column: Image & Quick Stats */}
            <div className={`md:col-span-5 transition-all duration-800 delay-300 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
              <div className="relative group p-2 bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                {/* Selection handles for Word aesthetic */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-[var(--word-blue)] z-10" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-[var(--word-blue)] z-10" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-[var(--word-blue)] z-10" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-[var(--word-blue)] z-10" />
                
                <img 
                  src={akoImage} 
                  alt={personalInfo.name} 
                  className="w-full h-auto grayscale-[20%] hover:grayscale-0 transition-all duration-500 rounded-sm"
                />
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="bg-gray-50 p-4 border-l-4 border-[var(--word-blue)]">
                  <h4 className="font-ui font-bold text-xs uppercase tracking-widest text-gray-500 mb-2">Core Philosophy</h4>
                  <p className="font-document text-sm text-[var(--word-text)] italic">
                    "Simplicity is the ultimate sophistication." — Leonardo da Vinci
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-ui font-bold text-[10px] uppercase text-gray-400">Location</h5>
                    <p className="font-document text-sm text-[var(--word-text)]">Tagaytay, Cavite</p>
                  </div>
                  <div>
                    <h5 className="font-ui font-bold text-[10px] uppercase text-gray-400">Focus</h5>
                    <p className="font-document text-sm text-[var(--word-text)]">Full-Stack Development & AI Integration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page Footer */}
          <div className="mt-16 pt-4 border-t border-gray-100 flex justify-between items-center">
            <p className="font-mono text-[10px] text-gray-400">CHRISTIAN PARRA // 2025 OFFICIAL BIOGRAPHY</p>
            <div className="flex gap-2 text-[10px] text-[var(--word-blue)] font-bold uppercase tracking-tighter cursor-default underline-offset-4 hover:underline">
              [ LEARN MORE ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
