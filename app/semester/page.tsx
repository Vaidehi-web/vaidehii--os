import Link from "next/link";
import {
  BookOpen,
  FileText,
  Calendar,
  ClipboardList,
  Calculator,
  Clock,
  ArrowLeft,
  Target,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import { subjects } from "@/lib/subjects";


const features = [
  {
    title: "Subjects",
    description: `${subjects.length} Cyber Security Subjects`,
    icon: <BookOpen size={32} />,
    href: "/semester/subjects",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Assignments",
    description: "Track Pending Work",
    icon: <ClipboardList size={32} />,
    href: "/semester/assignments",
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Notes",
    description: "Study Material & PDFs",
    icon: <FileText size={32} />,
    href: "/semester/notes",
    color: "from-sky-500 to-cyan-500",
  },
  {
    title: "Timetable",
    description: "Weekly Schedule",
    icon: <Calendar size={32} />,
    href: "/semester/timetable",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "CGPA Tracker",
    description: "Marks & Performance",
    icon: <Calculator size={32} />,
    href: "/semester/cgpa",
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Study Timer",
    description: "Pomodoro Focus Session",
    icon: <Clock size={32} />,
    href: "/semester/timer",
    color: "from-purple-500 to-fuchsia-500",
  },
];


export default function Semester() {

return (

<main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white">


<div className="max-w-7xl mx-auto px-8 py-10">


<Link
href="/"
className="flex items-center gap-2 text-pink-500 font-medium"
>
<ArrowLeft size={18}/>
Back to Dashboard
</Link>



<div className="mt-8 flex flex-col lg:flex-row justify-between gap-8">


<div>

<h1 className="text-6xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-violet-500 bg-clip-text text-transparent">
Semester V 📚
</h1>


<p className="mt-4 text-lg text-gray-600">
Cyber Security Engineering Dashboard
</p>


</div>



<div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-pink-100">


<div className="flex gap-2 items-center">

<Sparkles className="text-pink-500"/>

<h2 className="font-bold text-xl">
Today's Focus
</h2>

</div>


<div className="mt-4 text-gray-600 space-y-2">

<p>💻 Linux Practice</p>
<p>📖 Revise Notes</p>
<p>🎯 Complete Assignment</p>

</div>


</div>


</div>





{/* Stats */}

<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">


{[
{
name:"Subjects",
value:subjects.length,
icon:<BookOpen/>,
color:"text-pink-500"
},
{
name:"Attendance",
value:"0%",
icon:<TrendingUp/>,
color:"text-blue-500"
},
{
name:"Assignments",
value:"0",
icon:<ClipboardList/>,
color:"text-purple-500"
},
{
name:"CGPA",
value:"7.00",
icon:<Target/>,
color:"text-green-500"
}

].map((stat)=>(


<div
key={stat.name}
className="rounded-3xl bg-white/80 p-6 shadow-xl border border-pink-100 hover:scale-105 transition"
>


<div className="flex justify-between">

<div>

<p className="text-gray-500">
{stat.name}
</p>


<h2 className={`text-4xl font-black mt-2 ${stat.color}`}>
{stat.value}
</h2>


</div>


<div className="text-pink-400">
{stat.icon}
</div>


</div>


</div>


))}


</div>





<h2 className="text-3xl font-bold mt-16">
Quick Access ✨
</h2>



<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-8">


{features.map((feature)=>(


<Link
key={feature.title}
href={feature.href}
>


<div className="group rounded-3xl bg-white/80 backdrop-blur-xl border border-pink-100 p-7 shadow-xl hover:-translate-y-3 hover:shadow-pink-200 transition">


<div
className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white group-hover:scale-110 transition`}
>

{feature.icon}

</div>



<h2 className="mt-6 text-2xl font-bold text-gray-800">
{feature.title}
</h2>


<p className="mt-2 text-gray-500">
{feature.description}
</p>


</div>


</Link>


))}


</div>





<div className="grid lg:grid-cols-2 gap-8 mt-14">


<div className="rounded-3xl bg-white p-8 shadow-xl border border-pink-100">

<h2 className="text-2xl font-bold">
Upcoming Deadlines 📅
</h2>


<div className="mt-5 space-y-4 text-gray-600">

<p className="flex justify-between">
Cryptography Assignment
<span className="text-pink-500">3 Days</span>
</p>


<p className="flex justify-between">
Mini Project
<span className="text-orange-500">7 Days</span>
</p>


</div>


</div>



<div className="rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 text-white p-8 shadow-xl">


<h2 className="text-2xl font-bold">
Study Progress 📈
</h2>


<div className="mt-6 bg-white/30 rounded-full h-3">

<div className="bg-white h-3 rounded-full w-[40%]"/>

</div>


<p className="mt-3">
Semester Completion 40%
</p>


</div>


</div>



</div>


</main>

);

}