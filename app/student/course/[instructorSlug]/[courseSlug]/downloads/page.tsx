// src/app/student/course/[instructorSlug]/[courseSlug]/downloads/page.tsx

import {
  Download,
  FileText,
  FileArchive,
  Video,
  Search,
  Eye,
  Clock,
} from "lucide-react";

const downloads = [
  {
    title: "Course Syllabus PDF",
    type: "PDF",
    size: "2.4 MB",
    date: "20 May 2026",
    icon: <FileText />,
  },
  {
    title: "Project Source Code",
    type: "ZIP",
    size: "18.6 MB",
    date: "18 May 2026",
    icon: <FileArchive />,
  },
  {
    title: "Lesson Slides",
    type: "PDF",
    size: "5.8 MB",
    date: "15 May 2026",
    icon: <FileText />,
  },
  {
    title: "Bonus Video Resource",
    type: "MP4",
    size: "120 MB",
    date: "12 May 2026",
    icon: <Video />,
  },
];

export default function DownloadsPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-[#2563eb] via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <Download size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Downloads
        </h1>

        <p className="mt-4 max-w-2xl text-blue-100">
          Access course files, resources, PDFs, source code, and learning materials.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard title="Total Files" value="24" />
        <StatCard title="PDF Notes" value="12" />
        <StatCard title="Code Files" value="08" />
      </div>

      <div className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3 rounded-[24px] bg-gray-50 px-5 py-4">
          <Search className="text-gray-400" size={22} />
          <input
            type="text"
            placeholder="Search downloads..."
            className="w-full bg-transparent text-sm font-semibold outline-none"
          />
        </div>

        <div className="mt-6 space-y-5">
          {downloads.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-5 rounded-[28px] border border-gray-100 bg-gray-50 p-5 transition hover:bg-blue-50 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-blue-100 text-[#2563eb]">
                  {item.icon}
                </div>

                <div>
                  <h2 className="text-xl font-black text-gray-900">
                    {item.title}
                  </h2>

                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm font-bold text-gray-500">
                    <span>{item.type}</span>
                    <span>{item.size}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={15} />
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-black text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Eye size={18} />
                  Preview
                </button>

                <button className="flex items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20">
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          ))}
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