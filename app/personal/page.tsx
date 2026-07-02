import Link from "next/link";
import {
  Heart,
  Target,
  BookOpen,
  Sparkles,
  ArrowLeft,
  CalendarDays,
} from "lucide-react";

export default function Personal() {
  const sections = [
    {
      title: "Mood Tracker 💗",
      desc: "Track your daily emotions",
      icon: <Heart size={32} />,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Habits & Routine 🌱",
      desc: "Build healthy daily habits",
      icon: <CalendarDays size={32} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Goals & Vision ✨",
      desc: "Stay focused on your dreams",
      icon: <Target size={32} />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Journal 📖",
      desc: "Reflect and grow every day",
      icon: <BookOpen size={32} />,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 p-10">
      <div className="max-w-7xl mx-auto">

        <Link
          href="/"
          className="flex items-center gap-2 text-pink-500 font-semibold"
        >
          <ArrowLeft size={18} />
          Dashboard
        </Link>

        <div className="mt-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-pink-100 p-10 shadow-xl">

          <h1 className="text-5xl font-black bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
            Personal Space 🌸
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Wellness • Habits • Growth • Balance
          </p>

        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2">

          {sections.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white/80 border border-pink-100 p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >

              <div
                className={`w-fit rounded-2xl bg-gradient-to-br ${item.color} p-4 text-white`}
              >
                {item.icon}
              </div>

              <h2 className="mt-5 text-2xl font-bold text-gray-800">
                {item.title}
              </h2>

              <p className="mt-2 text-gray-500">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-pink-500 to-rose-500 p-8 text-white shadow-xl">

          <div className="flex items-center gap-3">
            <Sparkles />
            <h2 className="text-2xl font-bold">
              Daily Reminder
            </h2>
          </div>

          <p className="mt-4 text-lg">
            Small consistent steps every day create big results. 🌷
          </p>

        </div>

      </div>
    </main>
  );
}