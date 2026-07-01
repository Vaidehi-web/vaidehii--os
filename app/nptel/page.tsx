import Link from "next/link";
import {
  GraduationCap,
  PlayCircle,
  Award,
  BookOpen,
  ArrowLeft,
} from "lucide-react";

export default function Nptel() {

  const courses = [
    {
      title: "Cyber Security",
      desc: "Security concepts, attacks & defense",
      progress: "60%",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Python",
      desc: "Programming & automation skills",
      progress: "40%",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Computer Networks",
      desc: "Networking fundamentals",
      progress: "30%",
      color: "from-green-500 to-emerald-500",
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
            NPTEL Hub 🎓
          </h1>


          <p className="mt-3 text-gray-600 text-lg">
            Courses • Learning • Certificates ✨
          </p>

        </div>




        <div className="
          grid
          md:grid-cols-3
          gap-7
          mt-10
        ">


          <div className="bg-white rounded-3xl p-7 shadow border border-pink-100">
            <BookOpen className="text-pink-500"/>
            <h2 className="mt-4 text-2xl font-bold">
              Courses
            </h2>
            <p className="text-gray-500">
              Active Learning
            </p>
          </div>


          <div className="bg-white rounded-3xl p-7 shadow border border-pink-100">
            <PlayCircle className="text-purple-500"/>
            <h2 className="mt-4 text-2xl font-bold">
              Progress
            </h2>
            <p className="text-gray-500">
              Track Videos
            </p>
          </div>



          <div className="bg-white rounded-3xl p-7 shadow border border-pink-100">
            <Award className="text-green-500"/>
            <h2 className="mt-4 text-2xl font-bold">
              Certificates
            </h2>
            <p className="text-gray-500">
              Achievements
            </p>
          </div>


        </div>





        <h2 className="
          mt-14
          text-3xl
          font-bold
        ">
          My Courses 📚
        </h2>



        <div className="
          grid
          md:grid-cols-3
          gap-7
          mt-7
        ">


        {courses.map((course)=>(


          <div
            key={course.title}
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
              h-16 w-16
              rounded-2xl
              bg-gradient-to-br
              ${course.color}
            `}/>


            <h2 className="mt-5 text-2xl font-bold">
              {course.title}
            </h2>


            <p className="mt-2 text-gray-500">
              {course.desc}
            </p>



            <div className="mt-5 h-3 bg-gray-100 rounded-full">

              <div
                className="
                h-3
                rounded-full
                bg-gradient-to-r
                from-pink-500
                to-purple-500
                "
                style={{
                  width: course.progress
                }}
              />

            </div>


            <p className="mt-2 text-sm text-gray-500">
              {course.progress} completed
            </p>


          </div>


        ))}


        </div>


      </div>


    </main>
  );
}