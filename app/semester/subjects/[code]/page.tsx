import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  ClipboardList,
  FileText,
  PlayCircle,
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-8 py-10">

        <Link
          href="/semester/subjects"
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium"
        >
          <ArrowLeft size={18} />
          Back to Subjects
        </Link>

        {/* Header */}

        <div className="mt-8 flex items-center gap-6">

          <div
            className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${subject.color} flex items-center justify-center`}
          >
            <Icon size={38} className="text-white" />
          </div>

          <div>

            <h1 className="text-5xl font-bold text-gray-800">
              {subject.name}
            </h1>

            <p className="mt-2 text-gray-500">
              Attendance: {subject.attendance}% • Progress: {subject.progress}%
            </p>

          </div>

        </div>

        {/* Quick Access */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-12">

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition">
            <BookOpen className="text-pink-500" size={30} />
            <h3 className="mt-4 text-lg font-semibold">
              Notes
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              PDFs & Lecture Notes
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition">
            <ClipboardList className="text-violet-500" size={30} />
            <h3 className="mt-4 text-lg font-semibold">
              Assignments
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Pending Tasks
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition">
            <FileText className="text-sky-500" size={30} />
            <h3 className="mt-4 text-lg font-semibold">
              PYQs
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Previous Year Papers
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-pink-100 hover:shadow-xl transition">
            <PlayCircle className="text-red-500" size={30} />
            <h3 className="mt-4 text-lg font-semibold">
              Resources
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              YouTube & References
            </p>
          </div>

        </div>

        {/* Modules */}

        <h2 className="mt-14 text-3xl font-bold text-gray-800">
          📚 Modules
        </h2>

        <div className="mt-6 space-y-4">

          {subject.units.map((unit, index) => (

            <label
              key={index}
              className="flex items-center gap-4 bg-white rounded-2xl border border-pink-100 shadow-lg p-5 hover:shadow-xl transition cursor-pointer"
            >

              <input
                type="checkbox"
                className="w-5 h-5 accent-pink-500"
              />

              <span className="text-gray-700 font-medium">
                {unit}
              </span>

            </label>

          ))}

        </div>

      </div>
    </main>
  );
}