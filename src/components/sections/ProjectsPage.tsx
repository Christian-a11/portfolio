import { useState } from "react";
import { Cpu, Smartphone, Calendar, Globe, ChevronRight, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    icon: Cpu,
    color: "from-[var(--word-blue)] to-[var(--word-blue-dark)]",
    badgeColor: "bg-[var(--word-blue-light)] text-[var(--word-blue)]",
    iconColor: "text-[var(--word-blue)]",
    title: "Intelligent Multi-Language Code Translator",
    subtitle: "Thesis Project | Best in Thesis Awardee",
    tags: ["Flutter", "Gemini API", "Image Recognition", "NLP"],
    description: "An AI-powered application that revolutionizes code learning by translating visual flowcharts and written pseudocode into executable code across multiple programming languages. The system leverages Google's Gemini API for natural language processing and implements advanced image recognition algorithms to interpret flowchart diagrams.",
    features: [
      "Multi-language code generation (C, C++, C#, Java, Python)",
      "Real-time image processing and OCR for flowchart interpretation",
      "Syntax validation and error detection",
      "User-friendly mobile interface for students and educators"
    ]
  },
  {
    icon: Smartphone,
    color: "from-green-500 to-green-600",
    badgeColor: "bg-green-100 text-green-700",
    iconColor: "text-green-600",
    title: "Library Management Application",
    subtitle: "Mobile Application Development",
    tags: ["Flutter", "Firebase"],
    description: "A comprehensive mobile solution for modern library management, designed to streamline book cataloging, user management, and borrowing transactions. The application features real-time synchronization across devices, ensuring data consistency and accessibility.",
    features: [
      "User authentication and role-based access control",
      "Real-time database synchronization with Firebase",
      "Book search, filtering, and categorization",
      "Borrowing history and due date notifications"
    ]
  },
  {
    icon: Calendar,
    color: "from-purple-500 to-purple-600",
    badgeColor: "bg-purple-100 text-purple-700",
    iconColor: "text-purple-600",
    title: "Event Scheduler and Project Tracker",
    subtitle: "Full-Stack Web Application",
    tags: ["Flutter", "PHP", "MySQL", "REST API"],
    description: "A robust system designed for organizations to efficiently schedule events and monitor project progress. The application combines a Flutter frontend with a Laravel backend, providing a seamless experience across platforms with structured data management.",
    features: [
      "Interactive calendar with event scheduling",
      "Project milestone tracking and progress visualization",
      "Team collaboration and task assignment",
      "RESTful API for seamless data exchange"
    ]
  },
  {
    icon: Globe,
    color: "from-orange-500 to-orange-600",
    badgeColor: "bg-orange-100 text-orange-700",
    iconColor: "text-orange-600",
    title: "CRUD Web Application",
    subtitle: "Full-Stack Development Project",
    tags: ["React", "Tailwind CSS", "Laravel API"],
    description: "A responsive web-based CRUD application demonstrating modern frontend development practices combined with a robust backend API. The project showcases clean architecture principles and efficient data management.",
    liveUrl: "https://react-crud-frontend-gold.vercel.app/",
    features: [
      "Responsive design with Tailwind CSS",
      "Sanctum authentication and authorization",
      "Complete CRUD operations with validation"
    ]
  }
];

interface ProjectsPageProps {
  isLoaded: boolean;
}

export default function ProjectsPage({ isLoaded }: ProjectsPageProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="flex-shrink-0 w-full flex items-start justify-center py-8">
      <div className={`w-full max-w-[850px] bg-white paper-shadow rounded-sm transition-all duration-700 delay-100 ${
        isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-[0.985]"
      }`}>
        <div className="p-6 md:p-14">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-[var(--word-text)]">
            <div>
              <h1 className="font-document text-2xl font-bold text-[var(--word-text)]">Project Portfolio</h1>
              <p className="font-document text-sm text-[var(--word-text-secondary)] mt-1">Christian A. Parra — Full-Stack Developer</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-[var(--word-text-secondary)]">Document: Projects.docx</p>
            </div>
          </div>

          {/* Projects */}
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const isExpanded = expandedId === idx;
            
            return (
              <div 
                key={idx} 
                className={`border border-[var(--word-border)] rounded-lg p-4 relative paper-lift bg-white transition-all duration-300 ${
                  idx < projects.length - 1 ? 'mb-8' : ''
                } ${isExpanded ? 'ring-1 ring-[var(--word-blue)] shadow-md' : ''}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-document text-[15px] font-bold text-[var(--word-text)]">{project.title}</h2>
                    <p className={`font-document text-sm ${idx === 0 ? 'text-[var(--word-blue)]' : 'text-[var(--word-text-secondary)]'} ${idx === 0 ? 'font-medium' : ''}`}>
                      {project.subtitle}
                    </p>
                  </div>
                  
                  {/* Actions Area */}
                  <div className="flex flex-col gap-2">
                    {project.liveUrl ? (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md border border-[var(--word-blue)] text-[var(--word-blue)] hover:bg-[var(--word-blue-light)] transition-all text-xs font-medium"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live View
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-300 text-gray-400 bg-gray-50 text-xs font-medium cursor-not-allowed opacity-60">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live View
                      </div>
                    )}
                    
                    <button 
                      onClick={() => toggleExpand(idx)}
                      className={`flex items-center justify-center gap-1 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                        isExpanded 
                        ? 'bg-[var(--word-blue)] text-white' 
                        : 'text-[var(--word-text-secondary)] hover:bg-gray-100 border border-transparent'
                      }`}
                    >
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      {isExpanded ? 'Less' : 'Details'}
                    </button>
                  </div>
                </div>

                <div className="ml-15 pl-15">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-1 ${project.badgeColor} text-xs font-medium rounded`}>{tag}</span>
                    ))}
                  </div>

                  <p className="font-document text-sm text-[var(--word-text)] leading-relaxed mb-3">{project.description}</p>

                  <div className={`expandable-content mt-3 ${isExpanded ? 'expanded' : ''}`}>
                    <div className="expand-inner">
                      <div className="bg-[var(--word-bg)] p-3 rounded mt-2">
                        <p className="font-document text-xs font-bold text-[var(--word-text)] mb-2 uppercase tracking-wider">Key Features:</p>
                        <ul className="space-y-1.5">
                          {project.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="font-document text-sm text-[var(--word-text-secondary)] flex items-start gap-2 group">
                              <ChevronRight className={`w-3 h-3 ${project.iconColor} mt-1 flex-shrink-0 transition-transform group-hover:translate-x-1`} />
                              <span className="group-hover:text-[var(--word-text)] transition-colors">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Page Footer */}
          <div className="mt-10 pt-4 border-t border-[var(--word-border)] text-center">
            <p className="font-mono text-xs text-[var(--word-text-secondary)]">Page 2 of 5</p>
          </div>
        </div>
      </div>
    </section>
  );
}
