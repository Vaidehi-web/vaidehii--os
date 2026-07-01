import Link from "next/link";
import {
  BookOpen,
  Shield,
  GraduationCap,
  Briefcase,
  User,
  Calendar,
  Flame,
  Sparkles,
} from "lucide-react";

import DashboardCard from "@/components/DashboardCard";

export default function Home() {
  const cards = [
    {
      title: "Semester Hub",
      href: "/semester",
      icon: <BookOpen size={32} />,
      desc: "Subjects • CA • End Sem",
      badge: "Active",
    },
    {
      title: "Cyber HQ",
      href: "/cyber",
      icon: <Shield size={32} />,
      desc: "Linux • Docker • Security",
      badge: "Learning",
    },
    {
      title: "NPTEL",
      href: "/nptel",
      icon: <GraduationCap size={32} />,
      desc: "Courses • Assignments",
      badge: "2 Courses",
    },
    {
      title: "Career",
      href: "/career",
      icon: <Briefcase size={32} />,
      desc: "Resume • GitHub",
      badge: "Growing",
    },
    {
      title: "Personal",
      href: "/personal",
      icon: <User size={32} />,
      desc: "Habits • Journal",
      badge: "Daily",
    },
    {
      title: "Calendar",
      href: "/calendar",
      icon: <Calendar size={32} />,
      desc: "Timetable • Deadlines",
      badge: "Updated",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">

      <div className="mx-auto max-w-7xl px-8 py-12">


        {/* Hero */}

        <div className="relative overflow-hidden rounded-3xl bg-white/70 backdrop-blur-xl p-10 shadow-xl border border-pink-100">

          <div className="absolute right-10 top-10 text-pink-200">
            <Sparkles size={80}/>
          </div>


          <h1 className="
          text-6xl font-extrabold
          bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500
          bg-clip-text text-transparent
          ">
            VAIDEHI OS 🌸
          </h1>


          <p className="mt-3 text-lg text-gray-600">
            Student • Cyber Security • Productivity Dashboard
          </p>


          <p className="mt-5 text-xl text-pink-500">
            Good Morning, Vaidehi ☀️
          </p>

        </div>



        {/* Stats */}

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

          <DashboardCard
            title="CGPA"
            value="7.00"
            subtitle="Current Semester"
            icon={<GraduationCap />}
            color="from-pink-500 to-rose-500"
          />


          <DashboardCard
            title="Cyber Skills"
            value="Level 2"
            subtitle="Linux • Docker"
            icon={<Shield />}
            color="from-violet-500 to-indigo-500"
          />


          <DashboardCard
            title="Subjects"
            value="7"
            subtitle="Semester"
            icon={<BookOpen />}
            color="from-cyan-500 to-blue-500"
          />


          <DashboardCard
            title="Streak"
            value="12 Days"
            subtitle="Keep going 🔥"
            icon={<Flame />}
            color="from-orange-500 to-red-500"
          />

        </div>




        {/* Modules */}

        <h2 className="mt-16 text-3xl font-bold text-gray-800">
          Your Spaces ✨
        </h2>


        <div className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-3">


          {cards.map((card)=>(
            <Link href={card.href} key={card.title}>


              <div className="
              group relative overflow-hidden
              rounded-3xl
              bg-white/80
              backdrop-blur-xl
              p-7
              border border-pink-100
              shadow-lg
              transition
              hover:-translate-y-2
              hover:shadow-2xl
              ">


                <div className="
                w-fit rounded-2xl
                bg-gradient-to-br
                from-pink-400 to-purple-400
                p-4 text-white
                ">
                  {card.icon}
                </div>


                <h3 className="mt-5 text-2xl font-bold text-gray-800">
                  {card.title}
                </h3>


                <p className="mt-2 text-gray-500">
                  {card.desc}
                </p>


                <span className="
                mt-5 inline-block
                rounded-full
                bg-pink-100
                px-4 py-1
                text-sm
                text-pink-600
                ">
                  {card.badge}
                </span>


              </div>


            </Link>
          ))}

        </div>


      </div>

    </main>
  );
}