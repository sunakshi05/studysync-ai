import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare, Calendar, TrendingUp, Target } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's your productivity overview.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About StudySync</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Overview</h3>
            <p className="text-sm text-muted-foreground">
              StudySync is a comprehensive study companion application designed to help students and learners manage their academic routines efficiently. It combines task management, scheduling, and AI assistance in one unified platform.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Key Features</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Task Management: Create, track, and complete study tasks with progress monitoring</li>
              <li>Smart Calendar: Schedule classes, study sessions, and meetings with time management</li>
              <li>Dashboard: View productivity metrics including completion rates and study streaks</li>
              <li>AI Assistant: Get intelligent suggestions for task prioritization and study planning</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Tech Stack</h3>
            <p className="text-sm text-muted-foreground">
              React 18, TypeScript, Vite, Tailwind CSS, shadcn/ui, React Router, TanStack Query, Lucide React, React Hook Form, Zod, Sonner
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Benefits</h3>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Centralized study organization in one place</li>
              <li>Visual progress tracking to stay motivated</li>
              <li>Time management with integrated calendar</li>
              <li>AI-powered productivity suggestions</li>
              <li>Clean, responsive interface that works on all devices</li>
              <li>No setup required - start organizing immediately</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 completed today</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-success">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-chart-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 meetings today</p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-chart-4">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Study Streak</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { title: "Complete React assignment", status: "In Progress", progress: 60 },
                { title: "Study for Math exam", status: "Not Started", progress: 0 },
                { title: "Group project meeting", status: "Completed", progress: 100 },
              ].map((task, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{task.title}</span>
                    <span className="text-xs text-muted-foreground">{task.progress}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { time: "10:00 AM", title: "Team Meeting", color: "bg-chart-1" },
                { time: "2:00 PM", title: "Study Session", color: "bg-chart-2" },
                { time: "4:30 PM", title: "Project Review", color: "bg-chart-3" },
              ].map((event, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${event.color}`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
