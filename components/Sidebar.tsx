import Link from "next/link";
import {
  LayoutDashboard,
  BookOpen,
  Shield,
  GraduationCap,
  Briefcase,
  User,
  Calendar,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Semester", href: "/semester", icon: BookOpen },
  { title: "Cyber HQ", href: "/cyber", icon: Shield },
  { title: "NPTEL", href: "/nptel", icon: GraduationCap },
  { title: "Career", href: "/career", icon: Briefcase },
  { title: "Personal", href: "/personal", icon: User },
  { title: "Calendar", href: "/calendar", icon: Calendar },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white/80 p-6 shadow-xl backdrop-blur-xl">

      <h1 className="text-3xl font-bold text-pink-600">
        🌸 VAIDEHI OS
      </h1>

      <nav className="mt-10 space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="flex items-center gap-3 rounded-xl p-3 hover:bg-pink-100"
            >
              <Icon size={22} />
              {item.title}
            </Link>
          );
        })}
      </nav>

    </aside>
  );
}