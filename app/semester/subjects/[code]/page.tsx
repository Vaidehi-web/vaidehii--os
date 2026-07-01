import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  ClipboardList,
  FileText,
  PlayCircle,
  Sparkles,
  Target,
} from "lucide-react";

import { subjects } from "@/lib/subjects";


type Props = {
  params: Promise<{
    code: string;
  }>;
};


export default async function SubjectPage({ params }: Props) {

  const { code } = await params;


  const subject = subjects.find(
    (s) => s.code.toLowerCase() === code.toLowerCase()
  );


  if (!subject) {
    notFound();
  }


  const Icon = subject.icon;


  const quickCards = [
    {
      title:"Notes",
      icon:<BookOpen />,
      desc:"PDFs & Lecture Notes",
    },
    {
      title:"Assignments",
      icon:<ClipboardList />,
      desc:"Pending Tasks",
    },
    {
      title:"PYQs",
      icon:<FileText />,
      desc:"Previous Papers",
    },
    {
      title:"Resources",
      icon:<PlayCircle />,
      desc:"Videos & References",
    },
  ];



  return (

    <main className="
    min-h-screen
    bg-gradient-to-br
    from-pink-50
    via-white
    to-purple-50
    p-10
    ">


    <div className="max-w-7xl mx-auto">



      <Link
      href="/semester/subjects"
      className="
      inline-flex
      items-center
      gap-2
      text-pink-500
      font-semibold
      "
      >

        <ArrowLeft size={18}/>
        Back to Subjects

      </Link>





      <div className="
      mt-8
      rounded-3xl
      bg-white/80
      backdrop-blur-xl
      border border-pink-100
      shadow-xl
      p-10
      flex
      gap-7
      items-center
      ">


        <div className={`
        w-24
        h-24
        rounded-3xl
        bg-gradient-to-br
        ${subject.color}
        flex
        items-center
        justify-center
        text-white
        shadow-lg
        `}>

          <Icon size={45}/>

        </div>



        <div>


          <div className="flex gap-2 items-center">

            <Sparkles className="text-pink-500"/>

            <h1 className="
            text-5xl
            font-black
            bg-gradient-to-r
            from-pink-500
            to-purple-600
            bg-clip-text
            text-transparent
            ">

              {subject.name}

            </h1>


          </div>



          <p className="mt-3 text-gray-600">

          Attendance: {subject.attendance}% 
          • Progress: {subject.progress}%

          </p>


          <div className="
          mt-5
          h-3
          rounded-full
          bg-gray-100
          w-full
          ">

            <div
            className="
            h-3
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-purple-500
            "
            style={{
              width:`${subject.progress}%`
            }}
            />

          </div>



        </div>


      </div>






      <div className="
      mt-10
      grid
      md:grid-cols-2
      xl:grid-cols-4
      gap-6
      ">


      {quickCards.map((card)=>(


        <div
        key={card.title}
        className="
        rounded-3xl
        bg-white/80
        p-7
        border border-pink-100
        shadow-lg
        hover:-translate-y-2
        transition
        "
        >


          <div className="text-pink-500">
            {card.icon}
          </div>


          <h2 className="mt-4 text-xl font-bold">
            {card.title}
          </h2>


          <p className="mt-2 text-gray-500">
            {card.desc}
          </p>


        </div>


      ))}


      </div>







      <h2 className="
      mt-14
      text-3xl
      font-bold
      text-gray-800
      ">

        📚 Modules

      </h2>




      <div className="mt-6 space-y-4">


      {subject.units.map((unit,index)=>(


        <div
        key={unit}
        className="
        flex
        items-center
        gap-4
        bg-white/80
        rounded-2xl
        p-5
        border
        border-pink-100
        shadow
        "
        >


          <div className="
          bg-pink-100
          rounded-full
          p-2
          text-pink-600
          ">

            <Target size={20}/>

          </div>


          <span className="font-semibold text-gray-700">

            Module {index+1}: {unit}

          </span>


        </div>


      ))}


      </div>



    </div>


    </main>

  );
}