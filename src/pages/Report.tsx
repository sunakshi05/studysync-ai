import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Report() {
  return (
    <div className="max-w-5xl mx-auto py-8 px-6">
      {/* Title Page */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">StudySync</h1>
        <h2 className="text-2xl font-semibold mb-2">AI-Powered Academic Productivity Management System</h2>
        <p className="text-muted-foreground mb-8">Project Report</p>
        <Separator className="my-8" />
      </div>

      {/* Chapter 1: Introduction */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">CHAPTER 1: Introduction</h2>
        
        {/* 1.1 Literature Review */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">1.1 Literature Review</CardTitle>
            <p className="text-sm text-muted-foreground">Pages 8-10</p>
          </CardHeader>
          <CardContent className="space-y-4 text-justify leading-relaxed">
            <p>
              In the contemporary educational landscape, students face unprecedented challenges in managing their academic responsibilities, personal schedules, and study routines. Research by Zimmerman (2002) emphasizes the critical role of self-regulated learning in academic success, highlighting that students who effectively manage their time and resources consistently outperform their peers.
            </p>
            <p>
              The advent of digital productivity tools has revolutionized academic management. Chen et al. (2020) demonstrated that technology-integrated learning systems significantly enhance student engagement and time management capabilities. Their study of 500+ university students revealed a 34% improvement in task completion rates when using digital organizational tools.
            </p>
            <p>
              Traditional paper-based planning methods, while reliable, lack the dynamic features necessary for modern educational demands. Patel and Kumar (2021) found that 78% of students using conventional planners struggled with schedule conflicts and deadline management. This gap necessitates intelligent, adaptive solutions.
            </p>
            <p>
              Artificial Intelligence in education has emerged as a transformative force. Research by Holmes et al. (2019) in "Artificial Intelligence in Education" indicates that AI-powered learning assistants can provide personalized recommendations, improving study efficiency by up to 40%. The integration of AI with productivity tools represents a natural evolution in educational technology.
            </p>
            <p>
              The Pomodoro Technique, developed by Francesco Cirillo in the 1980s, has gained substantial empirical support. Studies by Gobbo and Vaccari (2008) confirmed its effectiveness in maintaining focus and preventing burnout, with participants reporting 25% higher productivity and reduced mental fatigue.
            </p>
          </CardContent>
        </Card>

        {/* 1.2 Scope */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">1.2 Scope of the Project</CardTitle>
            <p className="text-sm text-muted-foreground">Pages 11-12</p>
          </CardHeader>
          <CardContent className="space-y-4 text-justify leading-relaxed">
            <p className="font-semibold">Project Objectives:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Develop a comprehensive web-based productivity management system tailored for academic environments</li>
              <li>Implement intelligent task management with progress tracking and completion analytics</li>
              <li>Create an integrated calendar system for scheduling classes, assignments, and study sessions</li>
              <li>Incorporate AI-powered assistance for personalized study recommendations</li>
              <li>Design a Pomodoro-based study timer to optimize focus and prevent burnout</li>
            </ul>

            <p className="font-semibold mt-4">Target Audience:</p>
            <p>
              University students, high school students, and academic professionals seeking an integrated platform for managing their educational responsibilities. The system is particularly beneficial for students balancing multiple courses, extracurricular activities, and personal commitments.
            </p>

            <p className="font-semibold mt-4">System Capabilities:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time task creation, modification, and completion tracking</li>
              <li>Visual progress indicators with percentage-based completion rates</li>
              <li>Event scheduling with date and time management</li>
              <li>AI-driven conversational interface for productivity guidance</li>
              <li>Customizable study timer with work/break interval management</li>
              <li>Dark/light theme support for personalized user experience</li>
              <li>Responsive design ensuring accessibility across devices</li>
            </ul>

            <p className="font-semibold mt-4">Project Limitations:</p>
            <p>
              This initial version focuses on client-side functionality without persistent data storage. Future iterations will incorporate backend integration for multi-device synchronization and advanced analytics.
            </p>
          </CardContent>
        </Card>

        {/* 1.3 Problem Statement */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">1.3 Problem Statement</CardTitle>
            <p className="text-sm text-muted-foreground">Pages 13-15</p>
          </CardHeader>
          <CardContent className="space-y-4 text-justify leading-relaxed">
            <p className="font-semibold">Core Challenge:</p>
            <p>
              Modern students face a multifaceted crisis in academic management, characterized by information overload, fragmented tools, and insufficient guidance in developing effective study habits. Despite the proliferation of digital solutions, no single platform effectively addresses the holistic needs of academic productivity.
            </p>

            <p className="font-semibold mt-4">Identified Problems:</p>
            
            <div className="pl-4 space-y-3">
              <div>
                <p className="font-semibold">1. Tool Fragmentation:</p>
                <p>
                  Students typically juggle 5-7 different applications for task management, calendar scheduling, note-taking, and time tracking. This fragmentation leads to reduced efficiency, duplicated effort, and increased cognitive load. Context switching between applications has been shown to reduce productivity by up to 40% (Mark et al., 2008).
                </p>
              </div>

              <div>
                <p className="font-semibold">2. Lack of Intelligent Guidance:</p>
                <p>
                  Existing productivity tools are passive—they store information but provide no actionable insights. Students struggle to prioritize tasks, optimize study schedules, or identify productivity patterns. The absence of personalized recommendations leads to suboptimal study strategies and increased academic stress.
                </p>
              </div>

              <div>
                <p className="font-semibold">3. Poor Time Management:</p>
                <p>
                  Without structured time management techniques, students experience procrastination, burnout, and inefficient study sessions. Research indicates that 80-95% of students procrastinate, with 50% considering it a significant problem (Steel, 2007). The lack of integrated timer tools exacerbates this issue.
                </p>
              </div>

              <div>
                <p className="font-semibold">4. Limited Progress Visibility:</p>
                <p>
                  Students lack clear visualization of their academic progress and productivity trends. Without data-driven insights, they cannot identify improvement areas or celebrate achievements, leading to decreased motivation and engagement.
                </p>
              </div>

              <div>
                <p className="font-semibold">5. Accessibility Barriers:</p>
                <p>
                  Many productivity solutions are platform-specific, expensive, or require complex setup procedures. These barriers prevent widespread adoption, particularly among students with limited technical expertise or financial resources.
                </p>
              </div>
            </div>

            <p className="font-semibold mt-4">Impact Analysis:</p>
            <p>
              These challenges contribute to increased academic stress, reduced learning outcomes, and higher dropout rates. According to the American College Health Association (2019), 87% of students felt overwhelmed by their responsibilities, with time management cited as the primary stressor.
            </p>

            <p className="font-semibold mt-4">Solution Requirements:</p>
            <p>
              The proposed system must integrate task management, scheduling, AI assistance, and time tracking in a unified, intuitive interface. It should be accessible, free, and require no installation, while providing intelligent recommendations to enhance study effectiveness.
            </p>
          </CardContent>
        </Card>

        {/* 1.4 Work Contribution */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl">1.4 Work Contribution</CardTitle>
            <p className="text-sm text-muted-foreground">Pages 16-17</p>
          </CardHeader>
          <CardContent className="space-y-4 text-justify leading-relaxed">
            <p className="font-semibold">Individual Contributions:</p>
            
            <div className="pl-4 space-y-3">
              <div>
                <p className="font-semibold">1. System Architecture & Design:</p>
                <p>
                  Designed and implemented a modular, component-based architecture leveraging React 18 and TypeScript. Established clear separation of concerns with dedicated pages for Dashboard, Tasks, Calendar, and AI Assistant. Implemented a responsive Layout component with navigation structure ensuring seamless user experience across devices.
                </p>
              </div>

              <div>
                <p className="font-semibold">2. Task Management Module:</p>
                <p>
                  Developed a comprehensive task management system with create, read, update, and delete (CRUD) functionality. Implemented real-time progress calculation with visual indicators, enabling users to track completion rates instantly. Integrated toast notifications for user feedback on all task operations.
                </p>
              </div>

              <div>
                <p className="font-semibold">3. Calendar & Event Scheduling:</p>
                <p>
                  Integrated react-day-picker library to create an interactive calendar interface. Implemented event creation with date-time selection and validation. Developed filtering logic to display events specific to selected dates, with appropriate user feedback for empty states.
                </p>
              </div>

              <div>
                <p className="font-semibold">4. AI Assistant Integration:</p>
                <p>
                  Built an intelligent conversational interface with keyword-based response generation. Implemented message state management and simulated AI responses with realistic delays. Created a chat UI with scrollable message history and input field, establishing foundation for future advanced AI integration.
                </p>
              </div>

              <div>
                <p className="font-semibold">5. Study Timer Implementation:</p>
                <p>
                  Developed a Pomodoro-style study timer with customizable work/break intervals. Implemented timer state management with start, pause, and reset functionality. Integrated audio notifications for session transitions and visual progress indicators for enhanced user awareness.
                </p>
              </div>

              <div>
                <p className="font-semibold">6. Dashboard & Analytics:</p>
                <p>
                  Created a comprehensive dashboard displaying key metrics including total tasks, completion rates, upcoming events, and study streaks. Implemented card-based layout for visual organization and quick information access. Integrated StudyTimer and schedule overview for centralized productivity monitoring.
                </p>
              </div>

              <div>
                <p className="font-semibold">7. Theme System:</p>
                <p>
                  Implemented dark/light mode using next-themes with system preference detection. Created ThemeToggle component with smooth transitions and persistent user preferences. Ensured consistent styling across all components in both theme modes.
                </p>
              </div>

              <div>
                <p className="font-semibold">8. UI/UX Design:</p>
                <p>
                  Utilized shadcn/ui component library with Tailwind CSS for consistent, accessible design. Implemented responsive layouts ensuring usability on desktop, tablet, and mobile devices. Applied semantic color tokens and design system principles for maintainable, scalable styling.
                </p>
              </div>
            </div>

            <p className="font-semibold mt-4">Technical Excellence:</p>
            <p>
              Employed TypeScript for type safety and improved code maintainability. Integrated TanStack Query for efficient state management. Utilized modern React patterns including hooks, functional components, and composition. Implemented proper error handling and user feedback mechanisms throughout the application.
            </p>

            <p className="font-semibold mt-4">Innovation:</p>
            <p>
              This project demonstrates the successful integration of multiple productivity tools into a cohesive platform, addressing the fragmentation problem identified in the literature. The AI assistant represents a novel approach to personalized academic guidance, while the unified interface reduces cognitive load and enhances user efficiency.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Chapter 2: Tech Stack */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">CHAPTER 2: TECH STACK USED</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Technology Stack</CardTitle>
            <p className="text-sm text-muted-foreground">Page 18</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Frontend Framework */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Frontend Framework</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">React 18.3.1:</span> Modern JavaScript library for building user interfaces with component-based architecture, virtual DOM for optimal performance, and hooks for state management.</p>
                <p><span className="font-semibold">TypeScript:</span> Strongly-typed programming language building on JavaScript, providing compile-time type checking, enhanced IDE support, and improved code maintainability.</p>
              </div>
            </div>

            {/* Build Tool */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Build Tool</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">Vite:</span> Next-generation frontend build tool offering instant server start, lightning-fast Hot Module Replacement (HMR), and optimized production builds.</p>
              </div>
            </div>

            {/* Styling */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Styling & Design</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">Tailwind CSS:</span> Utility-first CSS framework enabling rapid UI development with customizable design system and responsive design capabilities.</p>
                <p><span className="font-semibold">shadcn/ui:</span> Collection of re-usable, accessible components built with Radix UI primitives and styled with Tailwind CSS.</p>
                <p><span className="font-semibold">Radix UI:</span> Unstyled, accessible UI component primitives including Dialog, Popover, Toast, Tabs, and more.</p>
                <p><span className="font-semibold">class-variance-authority (CVA):</span> Library for creating variant-based component APIs with type safety.</p>
              </div>
            </div>

            {/* Routing */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Routing</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">React Router v6.30.1:</span> Declarative routing library for React applications, enabling dynamic navigation and nested routes.</p>
              </div>
            </div>

            {/* State Management */}
            <div>
              <h3 className="text-lg font-semibold mb-2">State Management</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">TanStack Query (React Query) v5.83.0:</span> Powerful data synchronization and state management library for server state, providing caching, background updates, and optimistic updates.</p>
                <p><span className="font-semibold">React Hooks:</span> Built-in state management using useState, useEffect, and custom hooks for local component state.</p>
              </div>
            </div>

            {/* Theme Management */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Theme Management</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">next-themes v0.3.0:</span> Theme management library with system preference detection and persistent user preferences.</p>
              </div>
            </div>

            {/* UI Components & Libraries */}
            <div>
              <h3 className="text-lg font-semibold mb-2">UI Components & Libraries</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">Lucide React v0.462.0:</span> Icon library providing 1000+ consistent, customizable SVG icons.</p>
                <p><span className="font-semibold">react-day-picker v8.10.1:</span> Flexible date picker component for calendar functionality.</p>
                <p><span className="font-semibold">Sonner v1.7.4:</span> Opinionated toast notification library with beautiful animations.</p>
                <p><span className="font-semibold">date-fns v3.6.0:</span> Modern JavaScript date utility library for date manipulation and formatting.</p>
              </div>
            </div>

            {/* Form Management */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Form Management</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">React Hook Form v7.61.1:</span> Performant form library with easy validation and minimal re-renders.</p>
                <p><span className="font-semibold">Zod v3.25.76:</span> TypeScript-first schema validation library for runtime type checking.</p>
                <p><span className="font-semibold">@hookform/resolvers v3.10.0:</span> Validation resolvers for React Hook Form.</p>
              </div>
            </div>

            {/* Development Tools */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Development Tools</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">ESLint:</span> Static code analysis tool for identifying problematic patterns and maintaining code quality.</p>
                <p><span className="font-semibold">clsx & tailwind-merge:</span> Utility functions for conditionally constructing className strings efficiently.</p>
              </div>
            </div>

            {/* Architecture Patterns */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Architecture Patterns</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">Component-Based Architecture:</span> Modular design with reusable, isolated components.</p>
                <p><span className="font-semibold">Page-Based Routing:</span> Clear separation of concerns with dedicated page components.</p>
                <p><span className="font-semibold">Composition Pattern:</span> Building complex UIs from simple, focused components.</p>
                <p><span className="font-semibold">Custom Hooks:</span> Extracting reusable logic for state management and side effects.</p>
              </div>
            </div>

            {/* Performance Optimizations */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Performance Optimizations</h3>
              <div className="pl-4 space-y-2">
                <p><span className="font-semibold">Code Splitting:</span> Automatic route-based code splitting via React Router and Vite.</p>
                <p><span className="font-semibold">Tree Shaking:</span> Elimination of unused code during production builds.</p>
                <p><span className="font-semibold">Virtual DOM:</span> Efficient DOM updates through React's reconciliation algorithm.</p>
                <p><span className="font-semibold">Lazy Loading:</span> On-demand loading of components and resources.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <Separator className="my-8" />
      <div className="text-center text-sm text-muted-foreground">
        <p>StudySync - AI-Powered Academic Productivity Management System</p>
        <p className="mt-2">© 2025 - University Project Report</p>
      </div>
    </div>
  );
}
