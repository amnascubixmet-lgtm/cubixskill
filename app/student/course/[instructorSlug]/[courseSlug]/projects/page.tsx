// src/app/student/course/[instructorSlug]/[courseSlug]/projects/page.tsx

import Link from "next/link";
import {
  FolderKanban,
  CheckCircle,
  Clock,
  Star,
  Upload,
  Eye,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Build a Responsive Portfolio Website",
    status: "Completed",
    score: "92%",
    deadline: "Submitted",
    difficulty: "Beginner",
  },
  {
    title: "Create a Modern LMS Dashboard",
    status: "In Progress",
    score: "Pending",
    deadline: "25 May 2026",
    difficulty: "Intermediate",
  },
  {
    title: "Full Stack Course Platform UI",
    status: "Not Started",
    score: "Pending",
    deadline: "02 June 2026",
    difficulty: "Advanced",
  },
];

export default function CourseProjectsPage() {
  return (
    <section className="space-y-8">
      <div className="rounded-[40px] bg-gradient-to-br from-[#2563eb] via-indigo-600 to-violet-700 p-8 text-white shadow-2xl shadow-blue-500/20">
        <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-xl">
          <FolderKanban size={34} />
        </div>

        <h1 className="mt-6 text-4xl font-black md:text-5xl">
          Course Projects
        </h1>

        <p className="mt-4 max-w-2xl text-blue-100">
          Complete practical projects, upload your work, and improve your real-world skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <StatCard icon={<FolderKanban />} title="Total Projects" value="03" />
        <StatCard icon={<CheckCircle />} title="Completed" value="01" />
        <StatCard icon={<Clock />} title="In Progress" value="01" />
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-[32px] border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-black text-[#2563eb]">
                    {project.difficulty}
                  </span>

                  <span
                    className={`rounded-full px-4 py-2 text-xs font-black ${
                      project.status === "Completed"
                        ? "bg-green-50 text-green-600"
                        : project.status === "In Progress"
                        ? "bg-yellow-50 text-yellow-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-black text-gray-900">
                  {project.title}
                </h2>

                <p className="mt-2 text-sm font-semibold text-gray-500">
                  Deadline: {project.deadline}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-black text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Eye size={18} />
                  View
                </button>

                <button className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 px-5 py-3 text-sm font-black text-gray-700 hover:border-[#2563eb] hover:text-[#2563eb]">
                  <Upload size={18} />
                  Upload
                </button>

                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-500/20"
                >
                  Open
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <MiniInfo label="Score" value={project.score} />
              <MiniInfo label="Status" value={project.status} />
              <MiniInfo label="Deadline" value={project.deadline} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[30px] border border-gray-100 bg-white p-6 shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-[#2563eb]">
        {icon}
      </div>

      <p className="mt-5 text-sm font-bold text-gray-500">{title}</p>

      <h2 className="mt-2 text-4xl font-black text-gray-900">{value}</h2>
    </div>
  );
}

function MiniInfo({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-gray-50 p-4">
      <p className="text-xs font-black uppercase tracking-wider text-gray-400">
        {label}
      </p>

      <p className="mt-2 text-sm font-black text-gray-900">{value}</p>
    </div>
  );
}