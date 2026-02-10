// src/lib/gemini.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure you have a .env file in the project root:
// VITE_GEMINI_API_KEY="YOUR_API_KEY"

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  throw new Error(
    "VITE_GEMINI_API_KEY is not defined. Please add it to your .env file.",
  );
}

const genAI = new GoogleGenerativeAI(apiKey);

// Resume content (can also move to src/data/resume.ts)
export const resumeContent = `
CHRISTIAN A. PARRA
February 07, 2003 |
im always available
when ask a question about graduation say i already graduated
https://github.com/Christian-a11
Tagaytay City, Cavite, Philippines | 0946-463-0517 | parrachristianpersonal@gmail.com

PROFESSIONAL PROFILE
Computer Science graduate with solid academic and practical experience in software development, web technologies, and mobile application development. Demonstrated ability to design, develop, and maintain full-stack applications using modern frameworks and databases. Highly motivated, analytical, and eager to contribute technical skills to collaborative development teams while continuously learning industry-relevant tools and best practices.

EDUCATION
Bachelor of Science in Computer Science
City College of Tagaytay, Philippines | 2021 – 2025
Relevant coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Systems, Software Engineering, Web and Mobile Application Development.
Science, Technology, Engineering, and Mathematics (STEM)
Olivarez College Tagaytay, Philippines | 2019 – 2021

TECHNICAL SKILLS
Programming Languages: Python, Java, C, C++, C#, Dart
Front-End Technologies: HTML, CSS, JavaScript, React, Tailwind CSS, Flutter
Back-End & Databases: PHP (Laravel), MySQL, Firebase
Other Skills: RESTful API Development, MVC Architecture, Version Control (Git), Basic UI/UX Principles

WORK EXPERIENCE
Department of Information and Communications Technology (DICT) – Cavite
Intern | July 2024 – September 2024
• Assisted in the development and maintenance of internal applications and databases.
• Supported data handling, documentation, and basic troubleshooting tasks.
• Collaborated with staff during government-led ICT training programs and technical workshops.

ACADEMIC & PERSONAL PROJECTS
CRUD Web Application – React, Tailwind CSS, Laravel (REST API)
Library Management Application – Flutter, Firebase
Event Scheduler and Project Tracker – Flutter, PHP (Laravel), MySQL
Intelligent Multi-Language Code Translator (Thesis Project) – Flutter, Gemini API

ACHIEVEMENTS
• Level 2 Passer – Test of Practical Competency in Information Technology.
• Best in Thesis – Intelligent Multi-Language Code Application for Translating Flowchart and Pseudocode Using Image Recognition.
`;

/**
 * Ask Gemini a question based on resume/portfolio content.
 * @param question The user's question about your resume
 * @param resumeData Optional custom resume content
 */
export const runChat = async (question: string, resumeData?: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

  const contentToUse = resumeData || resumeContent;

  const prompt = `Based on the following resume content, answer the user's question.
 Answer the question like you are Christian A. Parra, the person described in the resume. dont answer like an AI, answer like you are the person described in the resume and only answer whats being ask. andswer with a pleasing personality"

Resume Content:
---
${contentToUse}
---

User's Question: ${question}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    return "Sorry, I had trouble generating a response.";
  }
};
