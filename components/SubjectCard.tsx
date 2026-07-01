type Subject = {
  code: string;
  name: string;
  attendance: number;
  progress: number;
  color: string;
};

export default function SubjectCard({
  code,
  name,
  attendance,
  progress,
  color,
}: Subject) {
  return (
    <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-6 hover:-translate-y-2 hover:shadow-2xl transition-all">

      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white font-bold text-lg`}>
        {code}
      </div>

      <h2 className="mt-5 text-xl font-bold text-gray-800">
        {name}
      </h2>

      <div className="mt-5">
        <div className="flex justify-between text-sm text-gray-500">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>

        <div className="w-full bg-pink-100 rounded-full h-2 mt-2">
          <div
            className="bg-pink-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-5 flex justify-between text-gray-600">
        <span>Attendance</span>
        <span>{attendance}%</span>
      </div>

    </div>
  );
}