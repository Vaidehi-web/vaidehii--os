import {
  Shield,
  Terminal,
  Bug,
  Trophy,
  BookOpen,
  Code2,
} from "lucide-react";

export default function Cyber() {

  const sections = [
    {
      title: "Linux Lab 🐧",
      desc: "Commands • Parrot OS • System Setup",
      icon: <Terminal size={30}/>,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Security Tools ⚡",
      desc: "Nmap • Wireshark • Burp Suite",
      icon: <Shield size={30}/>,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "CTF Arena 🚩",
      desc: "Challenges • Practice • Skills",
      icon: <Trophy size={30}/>,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Projects 🛠️",
      desc: "Security Projects & Portfolio",
      icon: <Code2 size={30}/>,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Learning Path 📚",
      desc: "Networks • Python • Pentesting",
      icon: <BookOpen size={30}/>,
      color: "from-pink-500 to-rose-500",
    },
    {
      title: "Bug Hunting 🐞",
      desc: "Web Security • Vulnerabilities",
      icon: <Bug size={30}/>,
      color: "from-red-500 to-pink-500",
    },
  ];


  return (
    <main className="
      min-h-screen
      bg-gradient-to-br
      from-purple-50 via-white to-pink-50
      p-10
    ">


      <div className="
        rounded-3xl
        bg-white/80
        backdrop-blur-xl
        border border-purple-100
        p-10
        shadow-xl
      ">

        <h1 className="
          text-5xl font-extrabold
          bg-gradient-to-r
          from-purple-600 to-pink-500
          bg-clip-text text-transparent
        ">
          Cyber Security HQ 🔐
        </h1>


        <p className="mt-3 text-gray-600 text-lg">
          Learn • Build • Secure 🚀
        </p>


      </div>



      <div className="
        mt-10 grid
        gap-7
        md:grid-cols-2
        lg:grid-cols-3
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
              border
              border-purple-100
              shadow-lg
              transition
              hover:-translate-y-2
              hover:shadow-2xl
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


            <h2 className="
              mt-5
              text-2xl
              font-bold
              text-gray-800
            ">
              {item.title}
            </h2>


            <p className="mt-2 text-gray-500">
              {item.desc}
            </p>


            <div className="
              mt-5
              h-2
              rounded-full
              bg-gray-100
            ">
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


    </main>
  );
}