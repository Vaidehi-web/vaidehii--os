import Link from "next/link";
import {
  Briefcase,
  FileText,
  Award,
  Code2,
  Target,
  ArrowLeft,
} from "lucide-react";


export default function Career() {


const sections = [
  {
    title:"Resume Builder 📄",
    desc:"Create professional resume & portfolio",
    icon:<FileText size={32}/>,
    color:"from-pink-500 to-rose-500"
  },
  {
    title:"Skills Tracker 🚀",
    desc:"Cyber Security • Coding • Tools",
    icon:<Code2 size={32}/>,
    color:"from-purple-500 to-indigo-500"
  },
  {
    title:"Certificates 🏆",
    desc:"Track achievements & courses",
    icon:<Award size={32}/>,
    color:"from-green-500 to-emerald-500"
  },
  {
    title:"Roadmap 🎯",
    desc:"Career goals & milestones",
    icon:<Target size={32}/>,
    color:"from-blue-500 to-cyan-500"
  },
];


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
p-10
shadow-xl
border border-pink-100
">


<h1 className="
text-5xl
font-black
bg-gradient-to-r
from-pink-500
to-purple-600
bg-clip-text
text-transparent
">

Career Hub 💼

</h1>


<p className="mt-3 text-gray-600 text-lg">
Build • Learn • Grow ✨
</p>


</div>





<div className="
grid
md:grid-cols-2
gap-7
mt-10
">


{sections.map((item)=>(


<div
key={item.title}
className="
rounded-3xl
bg-white/80
p-7
shadow-lg
border border-pink-100
hover:-translate-y-2
transition
"
>


<div className={`
w-fit
rounded-2xl
bg-gradient-to-br
${item.color}
p-4
text-white
`}>

{item.icon}

</div>



<h2 className="mt-5 text-2xl font-bold text-gray-800">
{item.title}
</h2>


<p className="mt-2 text-gray-500">
{item.desc}
</p>



<div className="
mt-5
h-2
bg-gray-100
rounded-full
">

<div className="
h-2
w-2/3
rounded-full
bg-gradient-to-r
from-pink-500
to-purple-500
"/>

</div>



</div>


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


<div className="flex items-center gap-3">

<Briefcase/>

<h2 className="text-2xl font-bold">
Career Progress
</h2>

</div>


<p className="mt-3">
Keep building projects and improving skills 🚀
</p>


</div>


</div>


</main>

)

}