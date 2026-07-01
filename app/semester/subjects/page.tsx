import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { subjects } from "@/lib/subjects";

export default function SubjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <Link
          href="/semester"
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <h1 className="mt-6 text-5xl font-bold text-gray-800">
          📚 Semester V Subjects
        </h1>

        <p className="mt-3 text-gray-500">
          Select a subject to open its workspace.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-10">

          {subjects.map((subject) => (

            <Link
              key={subject.code}
              href={`/semester/subjects/${subject.code.toLowerCase()}`}
            >

              <div className="rounded-3xl bg-white p-7 shadow-lg border border-pink-100 hover:-translate-y-2 hover:shadow-2xl transition-all">

                <div
                  className={`w-14 h-14 rounded-2xl ${subject.color} flex items-center justify-center text-white font-bold text-xl`}
                >
                  {subject.code}
                </div>

                <h2 className="mt-5 text-2xl font-semibold">
                  {subject.name}
                </h2>

                <p className="mt-4 text-gray-500">
                  {subject.units.length} Modules
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </main>
  );
}