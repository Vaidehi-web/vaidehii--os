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
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Semester",
    href: "/semester",
    icon: BookOpen,
  },
  {
    title: "Cyber HQ",
    href: "/cyber",
    icon: Shield,
  },
  {
    title: "NPTEL",
    href: "/nptel",
    icon: GraduationCap,
  },
  {
    title: "Career",
    href: "/career",
    icon: Briefcase,
  },
  {
    title: "Personal",
    href: "/personal",
    icon: User,
  },
  {
    title: "Calendar",
    href: "/calendar",
    icon: Calendar,
  },
];

export default function Sidebar() {
  return (
    <aside
      className="
      fixed left-0 top-0
      flex h-screen w-72 flex-col
      border-r border-pink-100
      bg-white/80
      p-6
      shadow-xl
      backdrop-blur-xl
      "
    >

      <div>
        <h1 className="
          text-3xl font-extrabold
          bg-gradient-to-r from-pink-500 to-purple-500
          bg-clip-text text-transparent
        ">
          🌸 VAIDEHI OS
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Student Productivity Hub
        </p>
      </div>


      <nav className="mt-10 flex-1 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="
              group flex items-center gap-4
              rounded-2xl p-3
              text-gray-700
              transition-all duration-300
              hover:bg-pink-100
              hover:text-pink-600
              "
            >

              <Icon
                size={22}
                className="transition group-hover:scale-110"
              />

              <span className="font-medium">
                {item.title}
              </span>

            </Link>
          );
        })}

      </nav>


      <div className="
        rounded-2xl
        bg-gradient-to-r from-pink-500 to-rose-500
        p-4
        text-white
      ">
        <p className="text-sm opacity-90">
          Current CGPA
        </p>

        <h2 className="mt-1 text-3xl font-bold">
          7.00
        </h2>

      </div>


    </aside>
  );
}