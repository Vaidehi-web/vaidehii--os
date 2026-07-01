export default function Calendar() {
  return (
    <main className="p-10">
      <h1 className="4xl font-bold">
        Calendar Hub 📅✨
      </h1>

      <div className="mt-6 grid gap-4">
        <div className="p-6 rounded-2xl bg-white shadow">
          Classes & Timetable 🗓️
        </div>

        <div className="p-6 rounded-2xl bg-white shadow">
          Exam Dates 📚
        </div>

        <div className="p-6 rounded-2xl bg-white shadow">
          Deadlines ⏰
        </div>

        <div className="p-6 rounded-2xl bg-white shadow">
          Events & Reminders 🌸
        </div>
      </div>
    </main>
  );
}