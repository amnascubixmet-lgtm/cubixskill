// src/app/student/course/[instructorSlug]/[courseSlug]/notes/page.tsx

import {
  FileText,
  Search,
  Plus,
  Edit,
  Trash2,
  Clock,
  Save,
} from "lucide-react";

const notes = [
  {
    title: "App Router Basics",
    lesson: "Next.js Routing Fundamentals",
    date: "20 May 2026",
    content:
      "App Router uses folders for routing. layout.tsx is used to share UI between pages.",
  },
  {
    title: "Nested Layout Notes",
    lesson: "Advanced Layout System",
    date: "18 May 2026",
    content:
      "Nested layouts help create course-level sidebar, topbar, and page-specific content.",
  },
  {
    title: "Dynamic Slug Routing",
    lesson: "Course Architecture",
    date: "15 May 2026",
    content:
      "Use [instructorSlug] and [courseSlug] to create instructor-specific course URLs.",
  },
];

export default function NotesPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-[#2563eb] via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <FileText size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Course Notes
        </h1>

        <p className="mt-4 max-w-2xl text-blue-100">
          Save important points, lesson summaries, and your personal learning notes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard title="Total Notes" value="18" />
        <StatCard title="This Week" value="06" />
        <StatCard title="Saved Lessons" value="12" />
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-2">
          <div className="flex items-center gap-3 rounded-[28px] border border-gray-100 bg-white p-4 shadow-sm">
            <Search className="text-gray-400" size={22} />
            <input
              type="text"
              placeholder="Search notes..."
              className="w-full bg-transparent text-sm font-semibold outline-none"
            />
          </div>

          {notes.map((note) => (
            <div
              key={note.title}
              className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h2 className="text-2xl font-black text-gray-900">
                    {note.title}
                  </h2>

                  <p className="mt-2 text-sm font-semibold text-[#2563eb]">
                    {note.lesson}
                  </p>

                  <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-gray-600">
                    {note.content}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-gray-500">
                    <Clock size={17} />
                    {note.date}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 text-gray-600 hover:border-[#2563eb] hover:text-[#2563eb]">
                    <Edit size={18} />
                  </button>

                  <button className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
            <Plus />
          </div>

          <h2 className="mt-5 text-2xl font-black text-gray-900">
            Add New Note
          </h2>

          <p className="mt-2 text-sm font-semibold text-gray-500">
            Write and save your lesson notes.
          </p>

          <input
            type="text"
            placeholder="Note title"
            className="mt-6 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-semibold outline-none focus:border-[#2563eb]"
          />

          <input
            type="text"
            placeholder="Lesson name"
            className="mt-4 w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-sm font-semibold outline-none focus:border-[#2563eb]"
          />

          <textarea
            placeholder="Write note..."
            className="mt-4 min-h-40 w-full rounded-3xl border border-gray-200 bg-gray-50 p-5 text-sm font-semibold outline-none focus:border-[#2563eb]"
          />

          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-4 text-sm font-black text-white">
            <Save size={18} />
            Save Note
          </button>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
      <p className="text-sm font-bold text-gray-500">{title}</p>
      <h2 className="mt-3 text-4xl font-black text-gray-900">{value}</h2>
    </div>
  );
}