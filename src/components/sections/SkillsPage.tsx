import { Terminal, Monitor, Server, Settings, User, GitBranch, Code, FileCode, Bot, Brain, Check, Star } from "lucide-react";

const programmingLanguages = [
  { name: "Python", level: "Basic", icon: "🐍" },
  { name: "Java", level: "Basic", icon: "☕" },
  { name: "C / C++", level: "Basic", icon: "⚡" },
  { name: "C#", level: "Basic", icon: "🔷" },
  { name: "Dart", level: "Inermediate", icon: "🎯" },
  { name: "PHP", level: "Advanced", icon: "🐘" },
  { name: "JavaScript", level: "Advanced", icon: "📜" },
  { name: "SQL", level: "Intermediate", icon: "🗄️" },
];

const tools = [
  { name: "Git", icon: <GitBranch className="w-4 h-4" /> },
  { name: "GitHub", icon: <Code className="w-4 h-4" /> },
  { name: "VS Code", icon: <FileCode className="w-4 h-4" /> },
  { name: "Git Bash", icon: <Terminal className="w-4 h-4" /> },
  { name: "Gemini Ai", icon: <Bot className="w-4 h-4" /> },
  { name: "Chatgpt", icon: <Brain className="w-4 h-4" /> },
];

const professionalSkills = [
  "Problem Solving & Analytical Thinking",
  "Team Collaboration",
  "Technical Documentation",
  "Project Management",
  "Continuous Learning",
  "Adaptability",
];

interface SkillsPageProps {
  isLoaded: boolean;
}

export default function SkillsPage({ isLoaded }: SkillsPageProps) {
  return (
    <section id="skills" className="flex-shrink-0 w-full flex items-start justify-center py-8">
      <div className={`w-full max-w-[850px] min-h-[1100px] bg-white paper-shadow rounded-sm transition-all duration-700 delay-200 ${
        isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.985]"
      }`}>
        <div className="p-6 md:p-14">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-[var(--word-text)]">
            <div>
              <h1 className="font-document text-2xl font-bold text-[var(--word-text)]">Skills & Technologies</h1>
              <p className="font-document text-sm text-[var(--word-text-secondary)] mt-1">Technical Competency Overview</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-[var(--word-text-secondary)]">Document: Skills.docx</p>
            </div>
          </div>

          {/* Programming Languages Section */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-[var(--word-blue)]" />
              <h2 className="section-heading flex-1">Programming Languages</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {programmingLanguages.map((skill) => (
                <div key={skill.name} className="bg-[var(--word-bg)] p-3 rounded border border-[var(--word-border)] paper-lift hover:border-[var(--word-blue)] group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-document text-sm font-bold text-[var(--word-text)] group-hover:text-[var(--word-blue)] transition-colors">{skill.name}</span>
                  </div>
                  <span className={`font-document text-xs ${skill.level === "Advanced" ? "text-[var(--word-green)]" : "text-[var(--word-text-secondary)]"}`}>
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Development */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="w-5 h-5 text-[var(--word-blue)]" />
              <h2 className="section-heading flex-1">Frontend Development</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[var(--word-bg)] p-4 rounded">
                <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-2">Core Technologies</h3>
                <ul className="space-y-1">
                  {["HTML5", "CSS3", "JavaScript (ES6+)", "Php"].map((item) => (
                    <li key={item} className="font-document text-sm text-[var(--word-text-secondary)] flex items-center gap-2">
                      <Check className="w-3 h-3 text-[var(--word-green)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--word-bg)] p-4 rounded">
                <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-2">Frameworks & Libraries</h3>
                <ul className="space-y-1">
                  {["React", "Tailwind CSS", "Flutter", "Laravel"].map((item) => (
                    <li key={item} className="font-document text-sm text-[var(--word-text-secondary)] flex items-center gap-2">
                      <Check className="w-3 h-3 text-[var(--word-green)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--word-bg)] p-4 rounded">
                <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-2">Concepts</h3>
                <ul className="space-y-1">
                  {["Responsive Design", "Component Architecture", "State Management", "REST API Integration"].map((item) => (
                    <li key={item} className="font-document text-sm text-[var(--word-text-secondary)] flex items-center gap-2">
                      <Check className="w-3 h-3 text-[var(--word-green)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Backend & Database */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Server className="w-5 h-5 text-[var(--word-blue)]" />
              <h2 className="section-heading flex-1">Backend & Database</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[var(--word-bg)] p-4 rounded">
                <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-3">Backend Technologies</h3>
                <div className="space-y-3">
                  {[
                    { name: "PHP (Laravel)", level: "Intermediate", width: "w-3/4" },
                    { name: "RESTful API Design", level: "Advanced", width: "w-4/5" },
                    { name: "MVC Architecture", level: "Advanced", width: "w-4/5" }
                  ].map((tech) => (
                    <div key={tech.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-document text-sm text-[var(--word-text)]">{tech.name}</span>
                        <span className="font-document text-xs text-[var(--word-text-secondary)]">{tech.level}</span>
                      </div>
                      <div className="w-full h-2 bg-[var(--word-border)] rounded-full overflow-hidden">
                        <div className={`h-full ${tech.width} bg-[var(--word-blue)] rounded-full transition-all duration-1000 ease-out`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[var(--word-bg)] p-4 rounded">
                <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-3">Database Systems</h3>
                <div className="space-y-3">
                  {[
                    { name: "MySQL", level: "Advanced", width: "w-4/5" },
                    { name: "Firebase", level: "Intermediate", width: "w-3/4" },
                    { name: "Database Design", level: "Intermediate", width: "w-3/4" }
                  ].map((tech) => (
                    <div key={tech.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-document text-sm text-[var(--word-text)]">{tech.name}</span>
                        <span className="font-document text-xs text-[var(--word-text-secondary)]">{tech.level}</span>
                      </div>
                      <div className="w-full h-2 bg-[var(--word-border)] rounded-full overflow-hidden">
                        <div className={`h-full ${tech.width} bg-[var(--word-green)] rounded-full transition-all duration-1000 ease-out`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Settings className="w-5 h-5 text-[var(--word-blue)]" />
              <h2 className="section-heading flex-1">Tools & Workflow</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2 px-3 py-2 bg-[var(--word-bg)] rounded border border-[var(--word-border)] paper-lift highlighter-effect highlighter-blue cursor-default">
                  <span className="text-[var(--word-blue)]">{tool.icon}</span>
                  <span className="font-document text-sm text-[var(--word-text)]">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <User className="w-5 h-5 text-[var(--word-blue)]" />
              <h2 className="section-heading flex-1">Professional Skills</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {professionalSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[var(--word-blue)]" />
                  <span className="font-document text-sm text-[var(--word-text)]">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Page Footer */}
          <div className="mt-10 pt-4 border-t border-[var(--word-border)] text-center">
            <p className="font-mono text-xs text-[var(--word-text-secondary)]">Page 3 of 5</p>
          </div>
        </div>
      </div>
    </section>
  );
}
