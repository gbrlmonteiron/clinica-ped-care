import { Link, Outlet, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  TrendingUp,
  Syringe,
  FileEdit,
  BarChart3,
  Bell,
  Activity,
} from "lucide-react";
import { cn } from "../ui/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Pacientes", href: "/pacientes", icon: Users },
  { name: "Agendamentos", href: "/agendamentos", icon: Calendar },
  { name: "Prescrições", href: "/prescricoes", icon: FileEdit },
  { name: "Relatórios", href: "/relatorios", icon: BarChart3 },
  { name: "Alertas", href: "/alertas", icon: Bell },
];

export function MainLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-[#F5F7FA]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1C4E80] text-white flex flex-col">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F2994A] rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">PediCare</h1>
              <p className="text-xs text-white/70">Sistema de Gestão Pediátrica</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                  isActive
                    ? "bg-[#2F80ED] text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-9 h-9 bg-[#2F80ED] rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">AD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Admin</p>
              <p className="text-xs text-white/70">admin@pedicare.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
