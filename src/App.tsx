import { useEffect, useState, useRef } from "react";
import { Toaster } from "@/components/ui/sonner";
import "./App.css";

// Components
import Chatbot from "./components/chatbot/Chatbot";
import StatusBar from "./components/layout/StatusBar";
import Mobile from "./components/layout/Mobile";
import Desktop from "./components/layout/Desktop";
import TitleBar from "./components/layout/TitleBar";
import Toolbar from "./components/layout/Toolbar";
import ResumePage from "./components/sections/ResumePage";
import ProjectsPage from "./components/sections/ProjectsPage";
import SkillsPage from "./components/sections/SkillsPage";
import ExperiencePage from "./components/sections/ExperiencePage";
import ContactPage from "./components/sections/ContactPage";

// Data
import { portfolioContent } from "./data/portfolio";

type Section = "home" | "projects" | "skills" | "experience" | "contact";

interface Tab {
  id: Section;
  label: string;
}

const tabs: Tab[] = [
  { id: "home", label: "File" },
  { id: "home", label: "Home" },
  { id: "projects", label: "Insert" },
  { id: "skills", label: "Layout" },
  { id: "experience", label: "Review" },
  { id: "contact", label: "View" },
];

function App() {
  const [activeTab, setActiveTab] = useState<Section>("home");
  const [zoom, setZoom] = useState(100);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lastHighlightedRef = useRef<{ element: HTMLElement; originalBg: string } | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const checkPoint = container.scrollTop + container.clientHeight / 3;
      const sections = document.querySelectorAll("section");
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (checkPoint >= sectionTop && checkPoint < sectionTop + sectionHeight) {
          setActiveTab(section.id as Section);
        }
      });
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [isAppOpen, isMinimized]);

  const scrollToSection = (section: Section) => {
    setActiveTab(section);
    const element = document.getElementById(section);
    if (element && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const elementTop = element.offsetTop;
      container.scrollTo({ top: elementTop - 20, behavior: "smooth" });
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (lastHighlightedRef.current) {
      lastHighlightedRef.current.element.style.backgroundColor = lastHighlightedRef.current.originalBg || "";
      lastHighlightedRef.current = null;
    }

    if (query.length > 2) {
      const sections = document.querySelectorAll("section");
      for (const section of sections) {
        const elements = section.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, li, td, th");
        for (const el of elements) {
          const htmlEl = el as HTMLElement;
          if (htmlEl.textContent && htmlEl.textContent.toLowerCase().includes(query)) {
            htmlEl.scrollIntoView({ behavior: "smooth", block: "center" });
            lastHighlightedRef.current = { element: htmlEl, originalBg: htmlEl.style.backgroundColor };
            htmlEl.style.backgroundColor = "rgba(255, 255, 0, 0.4)";
            htmlEl.style.transition = "background-color 0.3s";
            return;
          }
        }
      }
    }
  };

  const executeSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && (window as any).find) {
      (window as any).find(searchQuery);
    }
  };

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <Toaster position="top-right" />

      {isMobile ? (
        <Mobile 
          onOpenApp={() => {
            setIsAppOpen(true);
            setIsMinimized(false);
          }} 
          isAppOpen={isAppOpen}
          isMinimized={isMinimized}
        />
      ) : (
        <Desktop 
          onOpenApp={() => {
            setIsAppOpen(true);
            setIsMinimized(false);
          }} 
          isAppOpen={isAppOpen} 
          isMinimized={isMinimized} 
        />
      )}

      {isAppOpen && !isMinimized && (
        <div
          className={`absolute transition-all duration-300 ease-in-out bg-[var(--word-bg)] shadow-2xl flex flex-col overflow-hidden ${
            isMobile || isMaximized
              ? "inset-0 rounded-none z-50"
              : "top-[5%] left-[5%] right-[5%] bottom-[10%] rounded-lg border border-gray-400"
          }`}
        >
          <TitleBar
            onMinimize={() => setIsMinimized(true)}
            onMaximize={() => setIsMaximized(!isMaximized)}
            onClose={() => setIsAppOpen(false)}
            isMaximized={isMaximized}
            searchQuery={searchQuery}
            onSearchChange={handleSearch}
            onSearchKeyDown={executeSearch}
          />

          <Toolbar tabs={tabs} activeTab={activeTab} scrollToSection={scrollToSection} />

          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col items-center bg-[#E3E3E3] relative">
            <div
              className="pt-8 pb-32 px-4 flex flex-col items-center bg-[#E3E3E3] min-h-full transition-transform duration-200 ease-out origin-top w-full gap-6"
              style={{ transform: `scale(${zoom / 100})` }}
            >
              <ResumePage isLoaded={isLoaded} />
              <ProjectsPage />
              <SkillsPage />
              <ExperiencePage />
              <ContactPage />
            </div>
          </div>

          <div className="absolute bottom-24 right-6 z-50">
            <Chatbot portfolioContent={portfolioContent} />
          </div>

          <StatusBar
            currentPage={tabs.findIndex((t) => t.id === activeTab) > 0 ? tabs.findIndex((t) => t.id === activeTab) : 1}
            totalPages={5}
            wordCount={portfolioContent.split(/\s+/).length}
            zoom={zoom}
            onZoomChange={setZoom}
          />
        </div>
      )}
    </div>
  );
}

export default App;
