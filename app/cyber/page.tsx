import Link from "next/link";
import {
  Shield,
  Terminal,
  Bug,
  Trophy,
  BookOpen,
  Code2,
  ArrowLeft,
  Flame,
  Target,
} from "lucide-react";


export default function Cyber() {


  const sections = [
    {
      title:"Linux Lab 🐧",
      desc:"Commands • Parrot OS • System Setup",
      icon:<Terminal size={30}/>,
      color:"from-green-500 to-emerald-500",
    },
    {
      title:"Security Tools ⚡",
      desc:"Nmap • Wireshark • Burp Suite",
      icon:<Shield size={30}/>,
      color:"from-violet-500 to-purple-500",
    },
    {
      title:"CTF Arena 🚩",
      desc:"Challenges • Practice • Skills",
      icon:<Trophy size={30}/>,
      color:"from-orange-500 to-red-500",
    },
    {
      title:"Projects 🛠️",
      desc:"Security Projects & Portfolio",
      icon:<Code2 size={30}/>,
      color:"from-blue-500 to-cyan-500",
    },
    {
      title:"Learning Path 📚",
      desc:"Networks • Python • Pentesting",
      icon:<BookOpen size={30}/>,
      color:"from-pink-500 to-rose-500",
    },
    {
      title:"Bug Hunting 🐞",
      desc:"Web Security • Vulnerabilities",
      icon:<Bug size={30}/>,
      color:"from-red-500 to-pink-500",
    },
  ];


  const stats = [
    {
      title:"Level",
      value:"2",
      icon:<Flame size={25}/>
    },
    {
      title:"Projects",
      value:"5+",
      icon:<Code2 size={25}/>
    },
    {
      title:"Skills",
      value:"Growing",
      icon:<Target size={25}/>
    }
  ];



  return (

    <main className="
    min-h-screen
    bg-gradient-to-br
    from-purple-50
    via-white
    to-pink-50
    p-10
    ">


    <div className="max-w-7xl mx-auto">


    <Link
    href="/"
    className="flex gap-2 items-center text-purple-600 font-semibold"
    >

      <ArrowLeft size={18}/>
      Dashboard

    </Link>



    <div className="
    mt-8
    rounded-3xl
    bg-white/80
    backdrop-blur-xl
    border border-purple-100
    p-10
    shadow-xl
    ">

      <h1 className="
      text-5xl
      font-black
      bg-gradient-to-r
      from-purple-600
      to-pink-500
      bg-clip-text
      text-transparent
      ">

      Cyber Security HQ 🔐

      </h1>


      <p className="mt-3 text-gray-600 text-lg">
        Learn • Build • Secure 🚀
      </p>


    </div>





    <div className="grid md:grid-cols-3 gap-6 mt-10">


    {stats.map((item)=>(

      <div
      key={item.title}
      className="
      rounded-3xl
      bg-white/80
      p-6
      shadow-lg
      border border-purple-100
      "
      >

      <div className="text-purple-500">
        {item.icon}
      </div>


      <p className="mt-3 text-gray-500">
        {item.title}
      </p>


      <h2 className="text-3xl font-bold">
        {item.value}
      </h2>


      </div>

    ))}


    </div>






    <div className="
    mt-10
    grid
    md:grid-cols-2
    lg:grid-cols-3
    gap-7
    ">


    {sections.map((item)=>(


      <div
      key={item.title}
      className="
      group
      rounded-3xl
      bg-white/80
      backdrop-blur-xl
      p-7
      border border-purple-100
      shadow-lg
      hover:-translate-y-2
      hover:shadow-2xl
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



      <h2 className="mt-5 text-2xl font-bold">

        {item.title}

      </h2>


      <p className="mt-2 text-gray-500">
        {item.desc}
      </p>



      <div className="mt-5 h-2 bg-gray-100 rounded-full">

        <div className="
        h-2
        w-2/3
        rounded-full
        bg-gradient-to-r
        from-purple-500
        to-pink-500
        "/>

      </div>


      </div>


    ))}


    </div>


    </div>


    </main>
  );
}