import { MapPin, Mail, Phone, Award, CheckCircle2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

interface ResumePageProps {
  isLoaded: boolean;
}

export default function ResumePage({ isLoaded }: ResumePageProps) {
  return (
    <section id="home" className="flex-shrink-0 w-full flex items-start justify-center py-8">
      <div className={`w-full max-w-[850px] bg-white paper-shadow rounded-sm transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-6 scale-[0.985]"
      }`}>
        <div className="p-6 md:p-14" data-document-content>
          {/* Header */}
          <div className={`transition-all duration-600 delay-100 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
            <h1 className="font-document text-3xl md:text-4xl font-bold text-[var(--word-text)] text-center tracking-wide">
              {personalInfo.name}
            </h1>
            <p className="font-document text-base text-[var(--word-text)] mt-2 text-center">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-sm text-[var(--word-text-secondary)]">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{personalInfo.location}</span>
              <span>|</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5" />{personalInfo.phone}</span>
              <span>|</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" />{personalInfo.email}</span>
            </div>
          </div>

          <div className={`w-full h-0.5 bg-[var(--word-text)] my-5 transition-all duration-500 delay-200 ${
            isLoaded ? "scale-x-100" : "scale-x-0"
          }`} style={{ transformOrigin: "center" }} />

          {/* Professional Profile */}
          <div className={`mb-6 transition-all duration-600 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="section-heading mb-3">Professional Profile</h2>
            <p className="font-document text-[15px] leading-relaxed text-[var(--word-text)] text-justify">
              Computer Science graduate with solid academic and practical experience in software development, web technologies, and
              mobile application development. Demonstrated ability to design, develop, and maintain full-stack applications using
              modern frameworks and databases. Highly motivated, analytical, and eager to contribute technical skills to collaborative
              development teams while continuously learning industry-relevant tools and best practices. Proven track record of delivering
              high-quality projects including award-winning thesis work and practical internship experience.
            </p>
          </div>

          {/* Education */}
          <div className={`mb-6 transition-all duration-600 delay-400 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="section-heading mb-3">Education</h2>
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-document text-sm font-bold text-[var(--word-text)]">Bachelor of Science in Computer Science</h3>
                  <p className="font-document text-sm text-[var(--word-text)]">City College of Tagaytay, Philippines</p>
                </div>
                <span className="font-document text-sm text-[var(--word-text-secondary)] whitespace-nowrap">2021 – 2025</span>
              </div>
              <p className="font-document text-sm text-[var(--word-text-secondary)] mt-2">
                <span className="font-semibold">Relevant Coursework:</span> Data Structures and Algorithms, Object-Oriented Programming,
                Database Systems, Software Engineering, Web and Mobile Application Development, Computer Networks, Operating Systems,
                Human-Computer Interaction, Capstone Project Development
              </p>
              <p className="font-document text-sm text-[var(--word-text-secondary)] mt-1">
                <span className="font-semibold">Academic Performance:</span> Consistent academic excellence with strong foundation in
                theoretical and practical computer science concepts.
              </p>
            </div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-document text-sm font-bold text-[var(--word-text)]">Science, Technology, Engineering, and Mathematics (STEM)</h3>
                  <p className="font-document text-sm text-[var(--word-text)]">Olivarez College Tagaytay, Philippines</p>
                </div>
                <span className="font-document text-sm text-[var(--word-text-secondary)] whitespace-nowrap">2019 – 2021</span>
              </div>
              <p className="font-document text-sm text-[var(--word-text-secondary)] mt-2">
                <span className="font-semibold">Focus:</span> Advanced programming fundamentals from computer science degree.
              </p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className={`mb-6 transition-all duration-600 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="section-heading mb-3">Technical Skills</h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              <div>
                <p className="font-document text-sm font-bold text-[var(--word-text)] mb-1">Programming Languages:</p>
                <p className="font-document text-sm text-[var(--word-text-secondary)]">
                  <span className="highlighter-effect">Python</span>, <span className="highlighter-effect">Java</span>, <span className="highlighter-effect">C</span>, <span className="highlighter-effect">C++</span>, <span className="highlighter-effect">C#</span>, <span className="highlighter-effect">Dart</span>, <span className="highlighter-effect">PHP</span>, <span className="highlighter-effect">JavaScript</span>
                </p>
              </div>
              <div>
                <p className="font-document text-sm font-bold text-[var(--word-text)] mb-1">Front-End Technologies:</p>
                <p className="font-document text-sm text-[var(--word-text-secondary)]">
                  <span className="highlighter-effect highlighter-blue">HTML5</span>, <span className="highlighter-effect highlighter-blue">CSS3</span>, <span className="highlighter-effect highlighter-blue">JavaScript (ES6+)</span>, <span className="highlighter-effect highlighter-blue">React</span>, <span className="highlighter-effect highlighter-blue">Tailwind CSS</span>, <span className="highlighter-effect highlighter-blue">Flutter</span>
                </p>
              </div>
              <div>
                <p className="font-document text-sm font-bold text-[var(--word-text)] mb-1">Back-End & Databases:</p>
                <p className="font-document text-sm text-[var(--word-text-secondary)]">
                  <span className="highlighter-effect">PHP (Laravel Framework)</span>, <span className="highlighter-effect">MySQL</span>, <span className="highlighter-effect">Firebase</span>, <span className="highlighter-effect">RESTful API Development</span>
                </p>
              </div>
              <div>
                <p className="font-document text-sm font-bold text-[var(--word-text)] mb-1">Other Skills:</p>
                <p className="font-document text-sm text-[var(--word-text-secondary)]">MVC Architecture, Version Control (Git/GitHub), Basic UI/UX Principles, Agile Methodology</p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div className={`mb-6 transition-all duration-600 delay-600 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="section-heading mb-3">Work Experience</h2>
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-document text-sm font-bold text-[var(--word-text)]">Intern — Department of Information and Communications Technology (DICT)</h3>
                  <p className="font-document text-sm text-[var(--word-text)]">Cavite Field Office</p>
                </div>
                <span className="font-document text-sm text-[var(--word-text-secondary)] whitespace-nowrap">July 2024 – September 2024</span>
              </div>
              <ul className="mt-2 space-y-1">
                <li className="font-document text-sm text-[var(--word-text-secondary)] flex items-start gap-2">
                  <span className="text-[var(--word-blue)] mt-1">•</span>
                  Assisted in the development and maintenance of internal applications and databases, contributing to improved workflow efficiency
                </li>
                <li className="font-document text-sm text-[var(--word-text-secondary)] flex items-start gap-2">
                  <span className="text-[var(--word-blue)] mt-1">•</span>
                  Supported data handling, documentation, and basic troubleshooting tasks for various ICT projects
                </li>
                <li className="font-document text-sm text-[var(--word-text-secondary)] flex items-start gap-2">
                  <span className="text-[var(--word-blue)] mt-1">•</span>
                  Collaborated with staff during government-led ICT training programs and technical workshops, gaining exposure to public sector technology initiatives
                </li>
              </ul>
            </div>
          </div>

          {/* Academic & Personal Projects */}
          <div className={`mb-6 transition-all duration-600 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="section-heading mb-3">Academic & Personal Projects</h2>
            <div className="space-y-3">
              {[
                { title: "Intelligent Multi-Language Code Translator (Thesis Project)", tech: "Flutter, Gemini API, Image Recognition, Natural Language Processing", desc: "Created an AI-powered application capable of translating flowcharts and pseudocode into C, C++, C#, Java, and Python using advanced image recognition and natural language processing techniques." },
                { title: "Library Management Application", tech: "Flutter, Firebase", desc: "Designed and implemented a mobile application for managing books, users, and borrowing transactions, including authentication and real-time database synchronization." },
                { title: "Event Scheduler and Project Tracker", tech: "Flutter, PHP, MySQL", desc: "Developed a comprehensive system for scheduling events and monitoring project progress using RESTful APIs and a structured relational database." },
                { title: "CRUD Web Application", tech: "React, Tailwind CSS, Laravel (REST API)", desc: "Developed a responsive web-based CRUD application with React and Tailwind CSS, integrated with a Laravel backend API for data management and authentication." }
              ].map((project, idx) => (
                <div key={idx}>
                  <p className="font-document text-sm font-bold text-[var(--word-text)]">{project.title}</p>
                  <p className="font-document text-sm text-[var(--word-text-secondary)]"><span className="italic">Technologies:</span> {project.tech}</p>
                  <p className="font-document text-sm text-[var(--word-text-secondary)] mt-1">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className={`transition-all duration-600 delay-800 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h2 className="section-heading mb-3">Achievements</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <Award className="w-4 h-4 text-[var(--word-green)] mt-0.5 flex-shrink-0" />
                <span className="font-document text-sm text-[var(--word-text)]">
                  <span className="font-bold">Best in Thesis</span> — Intelligent Multi-Language Code Application for Translating Flowchart and Pseudocode Using Image Recognition
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[var(--word-green)] mt-0.5 flex-shrink-0" />
                <span className="font-document text-sm text-[var(--word-text)]">
                  <span className="font-bold">Level 2 Passer</span> — Test of Practical Competency in Information Technology
                </span>
              </li>
            </ul>
          </div>

          {/* Page Footer */}
          <div className="mt-10 pt-4 border-t border-[var(--word-border)] text-center">
            <p className="font-mono text-xs text-[var(--word-text-secondary)]">Page 1 of 5</p>
          </div>
        </div>
      </div>
    </section>
  );
}
