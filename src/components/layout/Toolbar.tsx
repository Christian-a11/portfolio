import { FileText, Code, Database, Briefcase, Mail, ChevronLeft, ChevronRight, User } from "lucide-react";

type Section = "profile" | "home" | "projects" | "skills" | "experience" | "contact";

interface ToolbarProps {
  activeTab: Section;
  scrollToSection: (section: Section) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Toolbar({ activeTab, scrollToSection, onNext, onPrevious }: ToolbarProps) {
  const toolIcons = {
    profile: User,
    home: FileText,
    projects: Code,
    skills: Database,
    experience: Briefcase,
    contact: Mail
  };

  return (
    <div className="bg-white border-b border-[var(--word-border)] shadow-sm shrink-0">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-3 py-2 h-16 overflow-x-auto no-scrollbar bg-[#f3f3f3]">
        {/* Navigation Control Group */}
        <div className="flex items-center gap-1 pr-3 border-r border-[#d1d5db] min-w-max">
          <button onClick={onPrevious} className="tool-button">
            <ChevronLeft className="w-4 h-4 text-[var(--word-text-secondary)]" />
            <span className="text-[10px] text-[var(--word-text-secondary)] mt-0.5">Previous</span>
          </button>
          <button onClick={onNext} className="tool-button">
            <ChevronRight className="w-4 h-4 text-[var(--word-text-secondary)]" />
            <span className="text-[10px] text-[var(--word-text-secondary)] mt-0.5">Next</span>
          </button>
        </div>

        {/* Section Quick Access Group */}
        <div className="flex items-center gap-1 px-3 min-w-max">
          {(Object.keys(toolIcons) as Section[]).map((section) => {
            const Icon = toolIcons[section];
            const label = section.charAt(0).toUpperCase() + section.slice(1);
            const displayLabel = section === 'home' ? 'Resume' : label;
            
            return (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`tool-button ${
                  activeTab === section
                    ? "bg-[var(--word-blue-light)] border border-[var(--word-blue-light)]"
                    : "hover:bg-white hover:border hover:border-[var(--word-blue-light)]"
                }`}
              >
                <Icon className="w-4 h-4 text-[var(--word-text-secondary)]" />
                <span className="text-[10px] text-[var(--word-text-secondary)] mt-0.5">{displayLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
