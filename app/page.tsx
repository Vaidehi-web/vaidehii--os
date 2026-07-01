import Link from "next/link";
import {
  BookOpen,
  Shield,
  GraduationCap,
  Briefcase,
  User,
  Calendar,
  Flame,
} from "lucide-react";

import DashboardCard from "@/components/DashboardCard";

export default function Home() {
  const cards = [
    {
      title: "Semester Hub",
      href: "/semester",
      icon: <BookOpen className="text-pink-500" size={32} />,
      desc: "7 Subjects • CA • End Sem",
      badge: "Active",
    },
    {
      title: "Cyber HQ",
      href: "/cyber",
      icon: <Shield className="text-violet-500" size={32} />,
      desc: "Linux • Docker • Python",
      badge: "Learning",
    },
    {
      title: "NPTEL",
      href: "/nptel",
      icon: <GraduationCap className="text-emerald-500" size={32} />,
      desc: "Courses • Assignments",
      badge: "2 Courses",
    },
    {
      title: "Career",
      href: "/career",
      icon: <Briefcase className="text-blue-500" size={32} />,
      desc: "Resume • GitHub",
      badge: "Growing",
    },
    {
      title: "Personal",
      href: "/personal",
      icon: <User className="text-rose-500" size={32} />,
      desc: "Habits • Journal",
      badge: "Daily",
    },
    {
      title: "Calendar",
      href: "/calendar",
      icon: <Calendar className="text-orange-500" size={32} />,
      desc: "Timetable • Deadlines",
      badge: "Updated",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-12">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
          VAIDEHI OS
        </h1>

        <p className="mt-2 text-lg text-pink-500">
          Student • Cyber Security • Productivity Dashboard
        </p>

        <p className="mt-3 text-gray-600 text-lg">
          Good Morning, Vaidehi ☀️
        </p>

        {/* Dashboard Stats */}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

          <DashboardCard
            title="CGPA"
            value="7.00"
            subtitle="Current Semester"
            icon={<GraduationCap size={26} />}
            color="from-pink-500 to-rose-500"
          />

          <DashboardCard
            title="Cyber Skills"
            value="Level 2"
            subtitle="Linux • Docker"
            icon={<Shield size={26} />}
            color="from-violet-500 to-indigo-500"
          />

          <DashboardCard
            title="Subjects"
            value="7"
            subtitle="Semester V"
            icon={<BookOpen size={26} />}
            color="from-sky-500 to-cyan-500"
          />

          <DashboardCard
            title="Study Streak"
            value="12 Days"
            subtitle="Keep Going!"
            icon={<Flame size={26} />}
            color="from-orange-500 to-red-500"
          />

        </div>

        {/* Main Cards */}<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

  {cards.map((card) => (
    <Link href={card.href} key={card.title}>

      <div
        className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/80
        backdrop-blur-xl
        p-7
        border border-pink-100
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        cursor-pointer
        "
      >

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-transparent to-rose-100 opacity-0 group-hover:opacity-100 transition duration-300" />

        <div className="relative z-10">

          {/* Icon */}
          <div className="w-fit rounded-2xl bg-pink-50 p-3 shadow-sm">
            {card.icon}
          </div>

          {/* Title */}
          <h2 className="mt-5 text-2xl font-semibold text-gray-800">
            {card.title}
          </h2>

          {/* Description */}
          <p className="mt-2 text-gray-500">
            {card.desc}
          </p>

          {/* Badge */}
          <div className="mt-5 inline-flex rounded-full bg-pink-100 px-3 py-1 text-xs font-semibold text-pink-600">
            {card.badge}
          </div>

        </div>

      </div>

    </Link>
  ))}

</div>

{/* Quick Actions */}

<section className="mt-16">

  <h2 className="text-3xl font-bold text-gray-800">
    ⚡ Quick Actions
  </h2>

  <div className="grid gap-5 mt-6 md:grid-cols-3">

    <Link href="/semester">
      <button className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 p-5 text-white font-semibold shadow-lg transition hover:scale-105">
        📚 Continue Studying
      </button>
    </Link>

    <Link href="/cyber">
      <button className="w-full rounded-2xl bg-gradient-to-r from-violet-500 to-indigo-500 p-5 text-white font-semibold shadow-lg transition hover:scale-105">
        🔐 Open Cyber HQ
      </button>
    </Link>

    <Link href="/nptel">
      <button className="w-full rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 p-5 text-white font-semibold shadow-lg transition hover:scale-105">
        🎓 Resume NPTEL
      </button>
    </Link>

  </div>

</section>

      </div>
    </main>
  );
}