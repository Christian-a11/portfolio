import { Save, Undo2, Redo2, FileText, Layout, Code, Database, Briefcase, Mail } from "lucide-react";

type Section = "home" | "projects" | "skills" | "experience" | "contact";

interface Tab {
  id: Section;
  label: string;
}

interface ToolbarProps {
  tabs: Tab[];
  activeTab: Section;
  scrollToSection: (section: Section) => void;
}

export default function Toolbar({ tabs, activeTab, scrollToSection }: ToolbarProps) {
  const toolIcons = {
    home: FileText,
    projects: Code,
    skills: Database,
    experience: Briefcase,
    contact: Mail
  };

  return (
    <div className="bg-white border-b border-[var(--word-border)] shadow-sm shrink-0">
      {/* Tabs */}
      <div className="flex items-center px-2 overflow-x-auto no-scrollbar bg-white pt-1">
        {tabs.map((tab, index) => (
          <button
            key={`${tab.label}-${index}`}
            onClick={() => scrollToSection(tab.id)}
            className={`ribbon-tab ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-1 px-3 py-2 h-16 overflow-x-auto no-scrollbar bg-[#f3f3f3] border-t border-[var(--word-border)]">
        {/* Clipboard Group */}
        <div className="flex items-center gap-1 pr-3 border-r border-[#d1d5db] min-w-max">
          {[
            { icon: Save, label: 'Save' },
            { icon: Undo2, label: 'Undo' },
            { icon: Redo2, label: 'Redo' }
          ].map(({ icon: Icon, label }) => (
            <button key={label} className="tool-button">
              <Icon className="w-4 h-4 text-[var(--word-text-secondary)]" />
              <span className="text-[10px] text-[var(--word-text-secondary)] mt-0.5">{label}</span>
            </button>
          ))}
        </div>

        {/* Navigation Group */}
        <div className="flex items-center gap-1 px-3 border-r border-[#d1d5db] min-w-max">
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

        {/* View Group */}
        <div className="flex items-center gap-1 pl-3 min-w-max">
          <button className="tool-button">
            <Layout className="w-4 h-4 text-[var(--word-text-secondary)]" />
            <span className="text-[10px] text-[var(--word-text-secondary)] mt-0.5">Layout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
