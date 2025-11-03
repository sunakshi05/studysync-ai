import { Link, useLocation } from "react-router-dom"
import { ThemeToggle } from "@/components/ThemeToggle";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "AI Assistant", href: "/ai-assistant", icon: Sparkles },
 
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-sidebar text-sidebar-foreground flex flex-col">
        <div className="p-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">StudySync</h1>
          <ThemeToggle />
        </div>
        <nav className="flex-1 px-3">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                        : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto p-6 max-w-7xl">{children}</div>
      </main>
    </div>
  );
}
