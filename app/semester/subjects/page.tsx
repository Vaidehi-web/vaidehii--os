import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
import { subjects } from "@/lib/subjects";


export default function SubjectsPage() {

  return (

    <main className="
    min-h-screen
    bg-gradient-to-br
    from-pink-50 via-white to-purple-50
    p-10
    ">


    <div className="max-w-7xl mx-auto">


      <Link
        href="/semester"
        className="
        inline-flex items-center gap-2
        text-pink-500
        font-semibold
        hover:text-pink-600
        "
      >
        <ArrowLeft size={18}/>
        Semester Hub
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


        <div className="flex items-center gap-3">

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
            Semester V Subjects 📚
          </h1>

        </div>


        <p className="mt-4 text-gray-600 text-lg">
          Cyber Security Engineering workspace
        </p>


      </div>





      <div className="
      mt-10
      grid
      md:grid-cols-2
      xl:grid-cols-3
      gap-7
      ">


      {subjects.map((subject)=>(


        <Link
          key={subject.code}
          href={`/semester/subjects/${subject.code.toLowerCase()}`}
        >


        <div className="
        group
        relative
        overflow-hidden
        rounded-3xl
        bg-white/80
        backdrop-blur-xl
        p-7
        border
        border-pink-100
        shadow-lg
        transition
        hover:-translate-y-3
        hover:shadow-2xl
        ">


          <div
          className={`
          w-16 h-16
          rounded-2xl
          ${subject.color}
          flex
          items-center
          justify-center
          text-white
          font-black
          text-lg
          shadow-md
          group-hover:scale-110
          transition
          `}
          >

            {subject.code}

          </div>




          <h2 className="
          mt-6
          text-2xl
          font-bold
          text-gray-800
          ">

            {subject.name}

          </h2>



          <div className="
          mt-4
          flex
          items-center
          gap-2
          text-gray-500
          ">

            <BookOpen size={18}/>

            {subject.units.length} Modules

          </div>



          <div className="
          mt-6
          h-2
          bg-gray-100
          rounded-full
          ">

            <div
            className="
            h-2
            w-[35%]
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-purple-500
            "
            />


          </div>


          <p className="
          mt-2
          text-sm
          text-gray-400
          ">
            Learning progress
          </p>



        </div>


        </Link>


      ))}


      </div>


    </div>


    </main>

  );
}