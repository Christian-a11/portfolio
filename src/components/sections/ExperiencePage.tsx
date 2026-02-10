import { Calendar, MapPin, Award } from "lucide-react";

const responsibilities = [
  {
    title: "Application Development",
    desc: "Assisted in the development and maintenance of internal applications and databases, contributing to improved workflow efficiency and data management systems.",
  },
  {
    title: "Technical Support",
    desc: "Provided support for data handling, documentation, and basic troubleshooting tasks, ensuring smooth operations of ICT infrastructure.",
  },
  {
    title: "Training Programs",
    desc: "Collaborated with staff during government-led ICT training programs and technical workshops, assisting in logistics and participant coordination.",
  },
  {
    title: "Documentation",
    desc: "Maintained comprehensive documentation of processes, procedures, and technical specifications for various projects and initiatives.",
  },
];

const skillsDeveloped = [
  "Government ICT Operations",
  "Database Management",
  "Technical Documentation",
  "Team Collaboration",
  "Public Sector Technology",
  "Training Coordination",
];

const academicProjects = [
  {
    title: "Thesis Project Leadership",
    desc: "Led the development of the award-winning AI Code Translator thesis project, managing the entire development lifecycle from research to implementation.",
    award: "Best in Thesis",
  },
  {
    title: "Capstone Projects",
    desc: "Completed various capstone projects demonstrating full-stack development capabilities, database design, and mobile application development.",
    award: "Academic Excellence",
  },
];

export default function ExperiencePage() {
  return (
    <section id="experience" className="flex-shrink-0 w-full flex items-start justify-center py-8">
      <div className="w-full max-w-[850px] min-h-[1100px] bg-white paper-shadow rounded-sm">
        <div className="p-6 md:p-14">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-[var(--word-text)]">
            <div>
              <h1 className="font-document text-2xl font-bold text-[var(--word-text)]">Professional Experience</h1>
              <p className="font-document text-sm text-[var(--word-text-secondary)] mt-1">Work History & Internship Details</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-xs text-[var(--word-text-secondary)]">Document: Experience.docx</p>
            </div>
          </div>

          {/* DICT Internship */}
          <div className="mb-10">
            <div className="bg-[var(--word-bg)] p-5 rounded-lg border-l-4 border-[var(--word-blue)]">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="font-document text-xl font-bold text-[var(--word-text)]">Intern</h2>
                  <p className="font-document text-base text-[var(--word-blue)] font-medium">
                    Department of Information and Communications Technology (DICT)
                  </p>
                  <p className="font-document text-sm text-[var(--word-text-secondary)]">Cavite Field Office</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-[var(--word-text-secondary)]">
                    <Calendar className="w-4 h-4" />
                    <span className="font-document text-sm">July 2024 – September 2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--word-text-secondary)] mt-1">
                    <MapPin className="w-4 h-4" />
                    <span className="font-document text-sm">Cavite, Philippines</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-2 uppercase tracking-wide">Overview</h3>
                <p className="font-document text-sm text-[var(--word-text-secondary)] leading-relaxed">
                  Completed a comprehensive internship program at the Department of Information and Communications Technology,
                  gaining hands-on experience in government ICT operations, application development, and technical support services.
                  Collaborated with professional teams on various technology initiatives and training programs.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-3 uppercase tracking-wide">Key Responsibilities</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {responsibilities.map((item, idx) => (
                    <div key={idx} className="bg-white p-3 rounded border border-[var(--word-border)]">
                      <h4 className="font-document text-sm font-bold text-[var(--word-text)] mb-1">{item.title}</h4>
                      <p className="font-document text-xs text-[var(--word-text-secondary)]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-2 uppercase tracking-wide">Skills Developed</h3>
                <div className="flex flex-wrap gap-2">
                  {skillsDeveloped.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-[var(--word-blue-light)] text-[var(--word-blue)] text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Academic Projects as Experience */}
          <div>
            <div className="bg-[var(--word-bg)] p-5 rounded-lg border-l-4 border-purple-500">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h2 className="font-document text-xl font-bold text-[var(--word-text)]">Academic Project Lead</h2>
                  <p className="font-document text-base text-purple-600 font-medium">City College of Tagaytay</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-2 text-[var(--word-text-secondary)]">
                    <Calendar className="w-4 h-4" />
                    <span className="font-document text-sm">2024 – 2025</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-2 uppercase tracking-wide">Overview</h3>
                <p className="font-document text-sm text-[var(--word-text-secondary)] leading-relaxed">
                  Led multiple academic projects throughout the Computer Science program, demonstrating leadership, technical
                  expertise, and the ability to deliver complex software solutions under academic constraints and deadlines.
                </p>
              </div>

              <div>
                <h3 className="font-document text-sm font-bold text-[var(--word-text)] mb-3 uppercase tracking-wide">Notable Projects</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {academicProjects.map((item, idx) => (
                    <div key={idx} className="bg-white p-3 rounded border border-[var(--word-border)]">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-4 h-4 text-purple-500" />
                        <span className="font-document text-xs text-purple-600 font-medium">{item.award}</span>
                      </div>
                      <h4 className="font-document text-sm font-bold text-[var(--word-text)] mb-1">{item.title}</h4>
                      <p className="font-document text-xs text-[var(--word-text-secondary)]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Page Footer */}
          <div className="mt-10 pt-4 border-t border-[var(--word-border)] text-center">
            <p className="font-mono text-xs text-[var(--word-text-secondary)]">Page 4 of 5</p>
          </div>
        </div>
      </div>
    </section>
  );
}
