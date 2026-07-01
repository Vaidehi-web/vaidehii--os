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
    icon: <BookOpen size={32}/>,
    href:"/semester/subjects",
    color:"from-pink-500 to-rose-500",
  },
  {
    title:"Assignments",
    description:"Track pending work",
    icon:<ClipboardList size={32}/>,
    href:"/semester/assignments",
    color:"from-purple-500 to-indigo-500",
  },
  {
    title:"Notes",
    description:"PDFs & Study Material",
    icon:<FileText size={32}/>,
    href:"/semester/notes",
    color:"from-cyan-500 to-blue-500",
  },
  {
    title:"Timetable",
    description:"Weekly Schedule",
    icon:<Calendar size={32}/>,
    href:"/semester/timetable",
    color:"from-orange-500 to-red-500",
  },
  {
    title:"CGPA Tracker",
    description:"Marks & Performance",
    icon:<Calculator size={32}/>,
    href:"/semester/cgpa",
    color:"from-green-500 to-emerald-500",
  },
  {
    title:"Study Timer",
    description:"Pomodoro Focus",
    icon:<Clock size={32}/>,
    href:"/semester/timer",
    color:"from-violet-500 to-fuchsia-500",
  },
];


export default function Semester(){

return (

<main className="
min-h-screen
bg-gradient-to-br
from-pink-50 via-white to-purple-50
p-10
">


<div className="max-w-7xl mx-auto">


<Link
href="/"
className="flex items-center gap-2 text-pink-500 font-semibold"
>
<ArrowLeft size={18}/>
Dashboard
</Link>



<div className="
mt-8
rounded-3xl
bg-white/80
backdrop-blur-xl
border border-pink-100
p-10
shadow-xl
">


<h1 className="
text-6xl
font-black
bg-gradient-to-r
from-pink-500
to-purple-600
bg-clip-text
text-transparent
">

Semester V 📚

</h1>


<p className="mt-3 text-gray-600 text-lg">
Cyber Security Engineering Hub
</p>



<div className="
mt-8
flex gap-3
items-center
text-pink-600
font-semibold
">

<Sparkles/>
Today's Focus

</div>


<div className="
mt-5
grid
md:grid-cols-3
gap-4
">

<div className="rounded-2xl bg-pink-50 p-5">
🐧 Linux Practice
</div>

<div className="rounded-2xl bg-purple-50 p-5">
📖 Revision
</div>

<div className="rounded-2xl bg-blue-50 p-5">
🎯 Assignments
</div>


</div>


</div>





<div className="
mt-10
grid
grid-cols-2
lg:grid-cols-4
gap-6
">


{[
["Subjects",subjects.length,<BookOpen/>],
["Attendance","0%",<TrendingUp/>],
["Assignments","0",<ClipboardList/>],
["CGPA","7.00",<Target/>]

].map((item:any)=>(


<div
key={item[0]}
className="
rounded-3xl
bg-white/80
p-6
shadow-lg
border
border-pink-100
hover:-translate-y-2
transition
"
>


<p className="text-gray-500">
{item[0]}
</p>


<h2 className="text-4xl font-black text-pink-500 mt-2">
{item[1]}
</h2>


<div className="mt-3 text-purple-500">
{item[2]}
</div>


</div>


))}


</div>





<h2 className="mt-16 text-3xl font-bold">
Quick Access ✨
</h2>


<div className="
mt-7
grid
md:grid-cols-2
xl:grid-cols-3
gap-7
">


{features.map((f)=>(


<Link
key={f.title}
href={f.href}
>


<div className="
group
rounded-3xl
bg-white/80
p-7
shadow-xl
border border-pink-100
hover:-translate-y-3
transition
">


<div className={`
w-16 h-16
rounded-2xl
bg-gradient-to-br
${f.color}
text-white
flex
items-center
justify-center
group-hover:scale-110
transition
`}>

{f.icon}

</div>


<h2 className="mt-5 text-2xl font-bold">
{f.title}
</h2>


<p className="text-gray-500 mt-2">
{f.description}
</p>


</div>


</Link>


))}


</div>





<div className="
mt-12
rounded-3xl
bg-gradient-to-r
from-pink-500
to-purple-600
p-8
text-white
shadow-xl
">


<h2 className="text-3xl font-bold">
Semester Progress 📈
</h2>


<div className="
mt-5
h-3
bg-white/30
rounded-full
">

<div className="
h-3
w-[40%]
bg-white
rounded-full
"/>

</div>


<p className="mt-3">
40% Completed 🚀
</p>


</div>



</div>

</main>

);

}